(function(window, undefined) {
	//获取dom元素与根元素的距离
	function getElementXY(dom, dir) {
		var actualTop = dom[dir],
			current = dom.offsetParent;
		while (current !== null) {
			actualTop += current[dir];
			current = current.offsetParent;
		}
		return actualTop;
	};

	var areaLinkage = {

		//城市数据
		areaData: window.JSON ? JSON.parse(areaData) : eval('' + areaData + ''),

		//存储是否生成省份,即只在初始化生成一次
		isCreateProvince: false,

		//切换class
		switchClass: 'on',

		areaLinkage: function(element, controlId) {
			//控件id
			var areaLinkage = document.getElementById(controlId),
				areaLinkageDiv = areaLinkage.getElementsByTagName('div'),
				areaLinkageMenu = areaLinkageDiv[0].getElementsByTagName('a'),
				areaLinkageCont = areaLinkageDiv[1].getElementsByTagName('div'),
				//控件当前焦点，即是在省还是市或者区
				curIndex = 0,
				//城市数据
				areaData = this.areaData,
				//用户当前省份数据
				curProvince = {},
				//存储用户当前选择省市区
				userSelection = [],
				//top
				t = getElementXY(element, 'offsetTop') + element.offsetHeight + 'px',
				//left
				l = getElementXY(element, 'offsetLeft') + 'px',
				//切换样式
				switchClass = this.switchClass,

				//显示控件相关dom
				displayDiv = function() {
					for (var i = areaLinkageMenu.length; i;) {
						areaLinkageMenu[--i].className = '';
						areaLinkageCont[i].className = '';
					}
					areaLinkageMenu[curIndex].className = switchClass;
					areaLinkageCont[curIndex].className = switchClass;
				},

				//文本框离开事件
				blurFn = function() {
					//隐藏控件
					areaLinkage.style.display = "none";
					//移除事件
					removeEvent();
				},

				//控件mouseover事件
				areaMouseovr = function() {
					//当用户移动到控件时，清除文本框离开事件
					//如果不清除在用户点击城市时，则会触发文本框离开事件从而关闭控件
					element.onblur = null;
				},

				//控件移出事件
				areaMouseout = function() {
					//当用户离开控件时，则重新绑定input离开事件
					//以便离开文本框时，隐藏控件
					element.onblur = blurFn;
				},

				//控件点击事件
				areaClick = function(event) {
					//聚集文本框，因为点击控件时会离开文本框
					element.focus();
					var ev = window.event || event,
						target = ev.target || ev.srcElement,
						//生成dom，主要用生成城市地区
						createDom = function(index, arr) {
							var str = "";
							for (var i = 0, len = arr.length; i < len; i++) {
								str += '<a href="javascript:;">' + arr[i] + '</a>'
							}
							areaLinkageCont[index].innerHTML = str;
						},

						//取索引
						getIndex = function(arr, element) {
							for (var i = arr.length; i;) {
								if (arr[--i] === element) {
									return i;
								}
							}
						};

					if (target.tagName.toUpperCase() === 'A') {

						var targetParent = target.parentNode;

						//menu切换，流程控制
						if (targetParent === areaLinkageMenu[0].parentNode) {
							var targetIndex = getIndex(areaLinkageMenu, target);
							if (curIndex < targetIndex) {
								return;
							};
							curIndex = targetIndex;
							displayDiv();
						}

						//省、市、区切换
						else if (targetParent === areaLinkageCont[curIndex]) {

							var targetIndex = getIndex(areaLinkageCont, target.parentNode);

							//存储用户选择
							userSelection[targetIndex] = target.innerHTML;

							//省
							if (curIndex === 0) {
								for (var i = areaData.length; i;) {
									if (areaData[--i].province === userSelection[0]) {
										//存储当前省份下所有数据
										curProvince = areaData[i];
										createDom(1, areaData[i].city);
									}
								}
							}

							//市
							else if (curIndex === 1) {
								//先取出存储的城市列表
								var city = curProvince.city;
								for (var i = city.length; i;) {
									if (city[--i] === userSelection[1]) {
										createDom(2, curProvince.area[i]);
										break;
									}
								}
							}

							//地区
							else if (curIndex === 2) {
								element.value = userSelection[0] + "-" + userSelection[1] + "-" + userSelection[2];
								//关闭控件显示
								areaLinkage.style.display = "none";
								//移除相关事件
								removeEvent();
								return;
							}

							//显示相关div
							displayDiv(++curIndex);
						}
					}
				},

				//初始化控件事件
				init = function() {
					//给控件绑定点击事件
					areaLinkage.onclick = areaClick;
					//控件mouseover事件
					areaLinkage.onmouseover = areaMouseovr;
					//控件离开事件
					areaLinkage.onmouseout = areaMouseout;
				},

				//控件移除事件
				removeEvent = function() {
					//移除控件事件 click mouseover mouseout
					areaLinkage.onclick = null;
					areaLinkage.onmouseover = null;
					areaLinkage.onmouseout = null;

					//移除input离开事件
					element.onblur = null;

					//还原数据
					curIndex = 0;
					userSelection = [];
					curProvince = {};
					displayDiv();
				},

				//生成省份
				createProvince = function() {
					var str = '',
						arr = [];
					//先取省份
					for (var i = areaData.length; i;) {
						arr.push(areaData[--i])
					}
					//排序
					arr.sort(function(a, b) {
							return a - b;
						})
						//生成
					for (var i = 0, len = arr.length; i < len; i++) {
						str += '<a href="javascript:;">' + areaData[i].province + '</a>';
					}
					areaLinkageCont[0].innerHTML = str;
				};

			//初始化省份
			if (!this.isCreateProvince) {
				createProvince();
				this.isCreateProvince = true;
			}

			//绑定触发控件
			element.onclick = function() {
				//定位城市控件的位置
				areaLinkage.style.cssText = "display:block;top:" + t + ";left:" + l + "";
				//离开事件，以便当用户焦点离开文本框，隐藏控件
				element.onblur = blurFn;
				//初始化控件相关事件
				init();
			};
		}
	};
	
	/**
 	 * @description 地区联动插件 (不依赖任何库，兼容主流浏览器，ie7及以上)
 	 * @example areaLinkage(document.getElementId('input'))
 	 * @param {Document} element 触发地区联动的input元素
 	 * @param {String} controlId 字符类型的控件id,默认为'j-areaLinkage'
 	*/
	window.areaLinkage = function(element, controlId) {
		element = element.nodeType ? element : document.getElementById(element);
		controlId = controlId || 'j-areaLinkage';
		areaLinkage.areaLinkage(element, controlId);
	};
})(window, undefined);