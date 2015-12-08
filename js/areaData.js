/*
 *城市数据
 * 格式为： [ {  "province" : "安徽", "city" : ["安庆","阜阳"], "area" : [["安庆地区1","安庆地区2"],["阜阳地区1"]]  } ]
 * 
 * */
	var areaData = '[{"province" : "安徽","city" : ["安庆市","蚌埠市","池州市","滁州市","当涂县","凤阳县","阜阳市","毫州市","合肥市","淮北市","淮南市","黄山市","六安市","马鞍山市","宿州市","铜陵市","芜湖市","宣城市"],"area" : [["市辖区","安庆市开发区","枞阳县","大观区","怀宁县","潜山县","宿松县","太湖县","桐城县","望江县","宜秀区","迎江区","岳西县"],["市辖区","固镇区","怀远县","淮上区","淮上区","龙子湖区","五河县","禹会区"],["市辖区","东至县","贵池区","青阳县","石台县"],["市辖区","定远县","凤阳县","来安县","琅琊区","明光市","南谯区","全椒县","天长市"],[],["市辖区","凤阳县"],["市辖区","阜南县","界首市","临泉县","太和县","颍泉区","颍上县","颍州区","颖东区"],["市辖区","利辛县","蒙城县","谯城区","涡阳县"],["市辖区","包河区","北城新区","滨湖新区","长丰县","巢湖市","肥东县","肥西县","庐江县","庐阳区","蜀山区","瑶海区","政治文化新区"],["市辖区","杜集区","烈山区","濉溪县","相山区"],["市辖区","八公山区","大通区","凤台县","潘集区","田家庵区","谢家集区"],["市辖区","黄山区","祁门县","屯溪区","微州区","歙县","休宁县","黟县"],["市辖区","霍邱县","霍山县","金安区","金寨县","寿县","舒城县","裕安区"],["市辖区","当涂县","含山县","和县","花山区","金家庄区","雨山区"],["市辖区","砀山县","灵璧县","泗县","萧县","埇桥县"],["市辖区","狮子山区","铜官山区","铜陵县","王益区","耀州区","宜君县","印台区"],["市辖区","繁昌县","镜湖区","鸠江区","马塘区","南陵县","无为县","芜湖县","新芜区","弋江区"],["市辖区","广德县","绩溪县","泾县","旌德县","郎溪县","宁国市","宣州区"]]},{"province" : "澳门","city" : ["澳门市"],"area" : [["市辖区","澳门市区"]]},{"province" : "北京","city" : ["北京市"],"area" : [["市辖区","昌平区","朝阳区","崇文区","大兴区","东城区","房山区","丰台区","海淀区","怀柔区","门头沟","密云区","平谷区","石景山区","顺义区","通州区","西城区","宣武区","延庆区"]]},{"province" : "福建","city" : ["福州市","龙岩市","南平市","宁德市","莆田市","泉州市","三明市","厦门市","漳州市"],"area" : [["市辖区","仓山区","长乐市","福清市","鼓楼区","晋安区","连江县","罗源县","马尾区","闽侯县","闽清县","平潭县","台江区","永泰县"],["市辖区","长汀县","连城县","上杭县","武平县","新罗区","永定县","漳平市"],["市辖区","光泽县","建瓯市","建阳市","蒲城县","邵武市","顺昌县","松溪县","武夷山市","延平区","政和县"],["市辖区","福安市","福鼎市","古田县","宁德市","屏南县","寿宁县","拓荣县","霞浦县","周宁县"],["市辖区","城厢区","涵江区","荔城区","仙游县","秀屿区"],["市辖区","安溪县","德化县","丰泽区","惠安县","金门县","晋江市","鲤城区","洛江区","南安市","泉港区","石狮市","永春县"],["市辖区","大田县","建宁县","将乐县","梅列区","明溪县","宁化县","清流县","三元区","沙县","泰宁县","永安市","尤溪县"],["市辖区","海沧区","湖里区","集美区","思明区","同安区","翔安区"],["市辖区","长泰县","东山县","华安县","龙海市","龙文区","南靖县","平和县","芗城区","云霄县","漳浦县","诏安县"]]},{"province" : "甘肃","city" : ["安西地区","白银市","定西市","甘南藏族自治州","嘉峪关市","金昌市","酒泉市","兰州市","临夏市","临夏州","陇南市","平凉市","庆阳市","天水市","武威市","张掖市"],"area" : [[],["市辖区","白银区","会宁县","景秦县","靖远县","平川区"],["市辖区","安定区","临洮县","陇西县","岷县","通渭县","渭源县","漳县"],["市辖区","迭部县","合作市","临潭县","碌曲县","玛曲县","夏河市","舟曲县","卓尼县"],["市辖区","嘉峪关市区"],["市辖区","金川区","永昌县"],["市辖区","阿克塞哈萨克在自治县","敦煌市","瓜州县","金塔县","酒泉市","肃北蒙古族自治县","肃州区","玉门市"],["市辖区","安宁区","城关区","皋兰县","红古区","七里河区","西固区","永登县","榆中县"],["市辖区","临夏市"],["市辖区","东乡族自治县","广河县","和政县","积石山保安族自治县","康乐县","临夏市","临夏县","永靖县"],["市辖区","成县","宕昌县","康县","礼县","两当县","微县","文县","武都区","西和县"],["市辖区","崇信县","华亭县","泾川县","静宁区","崆峒区","灵台县","镇原县","庄浪县"],["市辖区","合水县","华池县","环县","宁县","庆城县","庆阳县","西峰区","镇源县","正宁县"],["市辖区","甘谷区","麦积区","秦安县","秦州区","清水县","武山县","张家川回族自治县"],["市辖区","古浪县","凉州区","民勤县","天祝藏族自治县"],["市辖区","甘州区","高台县","临泽县","民乐县","山丹县","肃南裕固族自治县"]]},{"province" : "广东","city" : ["潮州市","东莞市","佛山市","广州市","河源市","惠州市","江门市","揭阳市","茂名市","梅州市","清远市","汕头市","汕尾市","韶关市","深圳市","阳江市","云浮市","湛江市","肇庆市","中山市","珠海市"],"area" : [["市辖区","潮安县","枫溪区","饶平县","湘桥区"],["市辖区","茶山镇","长安镇","常平镇","大朗镇","大岭山镇","道滘镇","东城区","东抗震","凤岗镇","高步镇","横沥镇","红梅镇","厚街镇","虎门镇","黄江镇","寮步镇","麻涌镇","南城区","企石镇","桥头镇","清溪镇","沙田镇","石碣镇","石龙镇","石排镇","松山湖","塘厦镇","莞城区","万江区","望牛墩镇","谢岗镇","樟木头镇","中堂镇"],["市辖区","禅城区市","高明区","南海区","三水区","顺德区"],["市辖区","白云区","从化市","番禹区","海珠区","花都区","黄浦区","荔湾区","萝岗区","南沙区","天河区","越秀区","增城市"],["市辖区","东源县","和平县","连平县","龙川县","源城区","紫金县"],["市辖区","博罗县","大亚湾区","惠城区","惠东县","惠阳区","龙门县"],["市辖区","恩平市","鹤山市","江海区","开平市","蓬江区","台山市","新会区"],["市辖区","大南山华侨管理区","东山区","惠来县","揭东县","揭西县","普宁华侨管理区","普宁市","榕城区"],["市辖区","电白县","高州市","化州市","茂港区","茂南区","信宜市"],["市辖区","大埔县","丰顺县","蕉岭县","梅江区","梅县","平原县","五华县","兴宁市"],["市辖区","佛冈县","连南瑶族自治区","连山壮族瑶族自治区","连州市","清城区","清新县","阳山县","英德市"],["市辖区","潮南区","潮阳区","澄海区","濠江区","金平区","龙湖区","南澳县","武江区","浈江区"],["市辖区","城区","海丰县","陆丰市","陆河县"],["市辖区","乐昌市","南雄市","曲江县","仁化县","乳源瑶族自治县","始兴县","翁源县","新丰县"],["市辖区","宝安区","福田区","龙岗区","罗湖区","南山区","盐田区"],["市辖区","江城区","阳春市","阳东县","阳西市"],["市辖区","罗定市","新兴县","郁南县","云安县","云城区"],["市辖区","赤坎区","雷州市","廉江市","麻章区","坡头区","遂溪县","吴川市","霞山区","徐闻县"],["市辖区","德庆县","鼎湖区","端州区","封开县","高要市","广宁县","怀集县","四会市"],["市辖区","板芙镇","大涌镇","东凤镇","东升镇","阜沙镇","港口镇","古镇","横栏镇","黄圃镇","民众镇","南朗镇","南头镇","三角镇","三乡镇","沙溪镇","神湾镇","坦洲镇","五桂山镇","小榄镇","中山市区"],["市辖区","斗门区","拱北区","吉大区","金唐区","金湾区","香洲区"]]},{"province" : "广西","city" : ["百色市","北海市","崇左市","防城港市","贵港市","桂林市","河池市","贺州市","来宾市","柳州地区","柳州市","南宁地区","南宁市","钦州市","梧州市","玉林市","宗左市"],"area" : [["市辖区","德保县","靖西县","乐业县","凌云县","隆林各族自治区","那坡县","平果县","田东县","田阳县","西林县","右江区"],["市辖区","海城区","合浦县","铁山港区","银海区"],[],["市辖区","东兴市","防城区","港口区","上思县"],["市辖区","港北区","港南区","桂平市","平南县","覃塘区"],["市辖区","叠彩区","恭城瑶族自治区","灌阳县","荔浦县","临桂县","灵川县","龙胜各族自治区","平乐县","平乐县","七星区","全州县","象山区","兴安县","秀峰区","雁山区","阳塑县","永福县","资源县"],["市辖区","巴马瑶族自治县","大化瑶族自治县","东兰县","都安瑶族自治县","凤山县","环江毛南族自治县","金城江区","罗城仫佬族自治县","南丹县","天峨县","宜州市"],["市辖区","八步区","富川瑶族自治区","昭平县","钟山县"],["市辖区","金秀族自治区","台山市","武宣县","象州县","忻城县","兴宾区"],["市辖区","合山市","金秀瑶族自治县","来宾县","鹿寨县","融水苗族自治县","融水县","三江侗族自治县","武宣县","象州县","沂城县"],["市辖区","城中区","城中区","柳北区","柳北区","柳城县","柳江县","柳南区","柳南区","鹿寨县","融安县","融水苗族自治县","三江侗族自治县","鱼峰区","鱼峰区"],["市辖区","宾阳县","崇左市","崇左县","大新县","扶绥县","横县","龙州县","隆安县","马山市","宁明县","凭祥市","上林县","天等县"],["市辖区","宾阳县","横县","江南区","良庆区","隆安县","马山县","青秀区","上林县","武鸣县","西乡塘区","兴宁区","邕宁区"],["市辖区","灵山县","浦北县","钦北区","钦南区"],["市辖区","苍梧县","岑溪去","长洲区","蝶山区","蒙山县","藤县","万秀区"],["市辖区","北流市","博白县","陆川县","容县","兴业县","玉州区"],["市辖区","大新县","扶绥县","江州区","龙州县","宁明县","凭祥市","天等县"]]},{"province" : "贵州","city" : ["安顺市","毕节地区","贵阳市","六盘水市","黔东南苗族侗族自治州","黔南布依族苗族自治县","黔西南布依族苗族","铜仁地区","遵义市"],"area" : [["市辖区","关岭布衣族苗族自治区","平坝县","普定县","西秀区","镇宁布衣族苗族自治区","紫云布衣族苗族自治区"],["市辖区","毕节市","大方县","赫章县","金沙县","纳雍县","黔西县","威宁彝族回族苗族自治县","织金县"],["市辖区","白云区","花溪区","金阳新区","开阳县","南明区","清镇市","乌当区","息峰县","小河区","修文县","云岩区"],["市辖区","六枝特区","盘县","水城县","钟山区"],["市辖区","岑巩县","从江县","丹寨县","黄平县","剑河县","锦屏县","凯里市","雷山县","黎平县","麻江县","榕江县","三穗县","施秉市","台江县","天柱县","镇远县"],["市辖区","长顺县","都匀市","独山县","福泉市","贵定市","惠水县","荔波县","龙里县","罗甸县","平塘县","三都水族自治县","瓮安县"],["市辖区","安龙县","册亨县","普安县","晴隆县","望谟县","兴仁县","兴义市","贞丰县"],["市辖区","德江县","江口县","石阡县","思南县","松桃苗族自治县","铜仁市","万山特区","沿河土家族自治县","印江土家族苗族自治县","玉屏铜族自治县"],["市辖区","赤水市","道镇仡佬族苗族","凤冈县","红花岗区","汇川区","湄潭县","仁怀市","绥阳县","桐梓县","务川仡佬族苗族","习水县","余庆县","正安县","遵义县"]]},{"province" : "海南","city" : ["白沙黎族自治县","保亭黎族苗族自治县","昌江黎族自治县","澄迈县","儋州市","定安县","东方市","海口市","乐东黎族自治县","临高县","陵水黎族自治县","琼海市","琼中黎族苗族自治县","三亚市","屯昌县","万宁市","文昌市","五指山市","西南中沙群岛办事处"],"area" : [["市辖区","帮溪镇","打安镇","阜龙乡","金波乡","南开乡","七坊镇","青松乡","荣邦乡","细水乡","牙叉镇","元门乡"],["市辖区","保城镇","加茂镇","六弓乡","毛感乡","南林乡","三道镇","什玲镇","响水镇","新政镇"],["市辖区","叉河镇","昌化镇","海尾镇","十月田镇","石碌镇","五烈镇"],["市辖区","福山镇","加乐镇","金江镇","老城镇","桥头镇","仁兴镇","瑞溪镇","永发镇","中兴镇"],["市辖区","白马井镇","大城镇","东城镇","峨蔓镇","富克镇","光村镇","海头镇","和庆镇","兰洋镇","木棠镇","那大镇","南丰镇","排浦镇","三都镇","王五镇","新洲镇","雅星镇","中和镇"],["市辖区","定城镇","富文镇","翰林镇","黄竹镇","雷鸣镇","岭口镇","龙河镇","龙湖镇","龙门镇","新竹镇"],["市辖区","八所镇","板桥镇","大田镇","东河镇","感城镇","江边乡","三家镇","四更镇","天安乡","新龙镇"],["市辖区","龙华区","美兰区","琼山区","秀英区"],["市辖区","抱由镇","大安镇","佛罗镇","黄流镇","尖峰镇","九所镇","利国镇","千家镇","万冲镇","莺歌海镇","志仲镇"],["市辖区","波莲镇","博厚镇","调楼镇","东英镇","多文镇","和舍镇","皇桐镇","加来镇","临城镇","南宝镇","新盈镇"],["市辖区","本号镇","光坡镇","黎安镇","隆广镇","群英乡","三才镇","提蒙乡","文罗镇","新村镇","椰林镇","英州镇"],["市辖区","博鳌镇","长坡镇","大路镇","会山镇","嘉积镇","龙江镇","石壁镇","塔洋镇","潭门镇","万泉镇","阳江镇","中原镇"],["市辖区","长征镇","和平镇","红毛镇","黎母山镇","上安乡","什运乡","湾岭镇","营根镇","中平镇"],["市辖区","海棠湾镇","河东区","河西区","天涯镇","田独镇","崖城镇","育才镇"],["市辖区","枫木镇","南坤镇","南吕镇","坡心镇","屯城镇","乌坡镇","西昌镇","新兴镇"],["市辖区","北大镇","长丰镇","大茂镇","东澳镇","和乐镇","后安镇","礼记镇","龙滚镇","南桥镇","三更罗镇","山根镇","万城镇"],["市辖区","抱罗镇","昌洒镇","东阁镇","东郊镇","东路镇","会文镇","锦山镇","龙楼镇","蓬莱镇","铺前镇","潭牛镇","文城镇","文教镇","翁田镇","重兴镇"],["市辖区","畅好乡","冲山镇","番阳镇","毛道乡","毛阳镇","南圣镇","水满乡"],[]]},{"province" : "河北","city" : ["保定市","沧州市","承德市","邯郸市","衡水市","廊坊市","秦皇岛市","石家庄市","唐山市","邢台市","张家口市"],"area" : [["市辖区","安国市","安新县","北市区","博野县","定兴县","定州市","阜平县","高碑店市","高阳县","涞水县","涞源县","蠡县","满城县","南市区","清苑县","曲阳县","容城县","顺平县","唐县","望都县","新市区","雄县","徐水县","易县","涿州市"],["市辖区","泊头市","沧县","东光县","海兴县","河间市","黄骅市","孟村回族自治县","南皮县","青县","任丘市","肃宁县","吴桥县","献县","盐山县","运河区"],["市辖区","承德县","丰宁满族自治县","宽城满族自治县","隆化县","滦平县","平泉县","双滦区","围场满族蒙古族自治县","兴隆县","鹰手营子矿区"],["市辖区","成安县","磁县","丛台区","大名县","肥乡县","峰峰矿区","复兴区","馆陶县","广平县","邯郸县","邯山区","鸡泽县","临漳县","邱县","曲周县","涉县","魏县","武安市","永年县"],["市辖区","安平县","阜城县","故城县","冀州市","景县","饶阳县","深州市","桃城区","武强县","武邑县","枣强县"],["市辖区","安次区","霸州市","大厂回族自治县","大城县","固安县","广阳区","开发区","三河市","文安县","香河县","永清县"],["市辖区","北戴河区","昌黎县","抚宁县","海港区","卢龙县","青龙满族自治县","山海关区"],["市辖区","长安区","高邑县","晋州市","井陉区","灵寿县","栾城区","平山县","桥东区","深泽县","无极县","辛集市","新华区","新乐市","行唐县","裕华区","元氏县","赞皇县","赵县","正定区"],["市辖区","丰南区","丰润区","古冶区","开平区","乐亭县","滦南县","滦县","迁安市","迁西县","唐海县","玉田县","遵化市"],["市辖区","柏乡县","广宗县","巨鹿县","临城县","临西县","隆尧县","内丘县","南宫市","南和县","宁晋县","平乡县","桥西区","清河县","任县","沙河市","威县","新河县","邢台市内","邢台县"],["市辖区","赤城县","崇礼县","沽源县","怀安县","康保县","尚义县","万全县","蔚县","下花园区","宣化区","宣化县","阳城县","张北县","涿鹿县"]]},{"province" : "河南","city" : ["安阳市","鹤壁市","济源市","焦作市","开封市","洛阳市","漯河市","南阳市","平顶山市","濮阳市","三门峡市","商丘市","新乡市","信阳市","许昌市","郑州市","周口市","驻马店市"],"area" : [[],["市辖区","鹤山区","浚县","淇滨区","淇县","山城区"],["市辖区","济源市"],["市辖区","博爱县","解放区","马村区","孟州市","沁阳市","山阳区","温县","武陟县","修武县","中站区"],["市辖区","鼓楼区","金明区","开封县","兰考县","龙亭区","杞县","顺河回族区","通许县","尉氏县","禹王台区"],["市辖区","瀍河回族区","吉利区","涧西区","老城区","栾川县","洛龙区","洛南新区","洛宁县","孟津县","汝阳县","嵩县","西工区","新安县","偃师市","伊川县","宜阳县"],["市辖区","临颍区","舞阳县","郾城区","源汇区","召陵区"],["市辖区","邓州市","方城县","高新区","内乡县","南召县","社旗县","唐河县","桐柏县","宛城区","卧龙区","西峡县","淅川县","新野县","镇平县"],["市辖区","宝丰县","郏县","鲁山县","汝州市","石龙区","卫东区","舞钢市","新华区","叶县","湛河区"],["市辖区","范县","华龙区","南乐县","濮阳县","清丰县","台前县"],["市辖区","湖滨区","灵宝市","卢氏县","陕县","渑池县","义马市"],["市辖区","民权县","宁陵县","夏邑县","永城市","虞城县","柘城县"],["市辖区","长垣县","封丘县","凤泉区","红旗区","辉县市","获嘉县","牧野区","卫滨区","卫辉市","新乡县","延津县","原阳县"],["市辖区","固始县","光山县","淮滨县","潢川县","罗山县","平桥区","商城县","浉河县","息县","新县"],["市辖区","长葛市","魏都区","襄城县","许昌县","鄢陵县","禹州市"],["市辖区","登封市","二七区","高新区","巩义市","管城回族区","惠济区","金水区","上街区","新密市","新郑市","荥阳市","郑东新区","中牟县","中原区"],["市辖区","川汇区","郸城县","扶沟县","淮阳县","鹿邑县","商水县","沈丘县","太康县","西华县","项城市"],["市辖区","泌阳县","平舆县","确山县","汝南县","上蔡县","遂平县","西平县","新蔡县","驿城区","正阳县"]]},{"province" : "黑龙江","city" : ["北安市","大庆市","大兴安岭地区","哈尔滨市","鹤岗市","黑河市","鸡西市","佳木斯市","牡丹江市","七台河市","齐齐哈尔市","双鸭山市","绥化市","铁力市","伊春市"],"area" : [["市辖区","北安市"],["市辖区","大同区","红岗区","林甸区","龙凤区","让胡路区","萨尔图区","肇源县","肇州县"],["市辖区","呼玛县","呼中区","加格达奇去","漠河县","松岭区","塔河县"],["市辖区","阿城区","巴彦县","宾县","道里区","道外区","方正县","呼兰区","经济技术开发区","南岗区","平房区","尚志市","双城市","松北区","通河县","五常市","香坊区","延寿县","依兰县"],["市辖区","东山区","工农区","萝北县","南山区","绥宾县","向阳区","兴安区","兴山区"],["市辖区","爱辉区","北安市","黑河市","嫩江县","孙吴县","五大连池市","逊克县"],["市辖区","城子河区","滴道区","恒山区","虎林市","鸡东县","鸡冠区","梨树区","麻山区","密山市"],["市辖区","东风区","抚远县","富锦市","桦川县","桦南县","前进区","汤原县","同江市","向阳区","永红区"],["市辖区","爱民区","东安区","东宁县","海林市","林口县","穆棱市","宁安市","绥芬河市","西安区","阳明区"],["市辖区","勃利县","茄子河区","桃山区","新兴区"],["市辖区","昂昂溪区","拜泉县","富拉尔基区","富裕县","甘南县","建华区","克东县","克山县","龙江县","龙沙区","梅里斯达斡尔族区","讷河市","碾子山区","泰来县","铁锋区","依安县"],["市辖区","宝清县","宝山区","集贤县","尖山区","岭东区","饶河县","四方台区","友谊县"],["市辖区","安达市","北林区","海伦市","兰西县","明水县","青冈县","庆安县","绥棱县","望奎县","肇东市"],["市辖区","铁力市"],["市辖区","翠峦区","带岭区","东风区","红星区","嘉荫县","金山屯区","美溪区","南岔区","上甘岭区","汤旺河区","铁力市","乌马河区","乌伊岭区","五营区","西林区","新青区","伊春区","友好区"]]},{"province" : "湖北","city" : ["鄂州市","恩施市","恩施土家族苗族自治州","洪湖市","黄冈市","黄石市","荆门市","荆州市","潜江市","神农架林区","十堰市","随州市","天门市","武汉市","仙桃市","咸宁市","襄阳市","孝感市","宜昌市","宜都市","钟祥市"],"area" : [["市辖区","鄂城区","华容区","梁子湖区"],["市辖区","恩施市"],["市辖区","巴东县","恩施市","鹤峰县","建始县","来凤县","利川市","咸丰县","宣恩县"],["市辖区","洪湖市"],["市辖区","红安县","黄梅县","黄州区","罗田县","麻城市","蕲春县","团风县","武穴市","浠水县","仙桃市","英山县"],["市辖区","大冶市","黄石港区","铁山区","西塞山区","下陆区","阳新县"],["市辖区","东宝区","掇刀区","京山县","沙洋县","钟祥市"],["市辖区","公安县","洪湖市","监利县","江陵县","荆州区","沙市区","石首市","松滋市"],["市辖区","潜江市"],["市辖区","神农架林区"],["市辖区","丹江口市","房县","茅箭区","郧西县","郧县","张湾区","竹山县","竹溪县"],["市辖区","广水市","曾都区"],["市辖区","天门市"],["市辖区","蔡甸区","东西湖区","汉南区","汉阳区","洪山区","黄陂区","江岸区","江汉区","江夏区","硚口区","青山区","武昌区","新洲区"],["市辖区","仙桃市"],["市辖区","赤壁市","崇阳县","嘉鱼县","通城县","通山县","咸安区"],["市辖区","保康县","樊城区","谷城县","老河口市","南漳县","襄城区","襄州区","宜城市","枣阳市"],["市辖区","安陆市","大悟县","汉川市","孝昌县","孝南区","应城市","云梦县"],["市辖区","长阳土家族自治县","当阳市","点军区","五峰土家族自治县","伍家岗区","西陵区","猇亭区","兴山县","夷陵区","宜都市","远安县","枝江市","秭归县"],["市辖区","宜都市"],["市辖区","钟祥市"]]},{"province" : "湖南","city" : ["长沙市","常德市","郴州市","衡阳市","怀化市","耒阳市","娄底市","韶山市","邵阳市","湘潭市","湘西土家族苗族","益阳市","永州市","岳阳市","张家界市","株洲市"],"area" : [["市辖区","长沙县","长沙县","芙蓉区","开福区","浏阳市","宁乡县","天心区","望城县","雨花区","岳麓区"],["市辖区","安乡县","鼎城区","汉寿县","津市市","澧县","临澧县","石门县","桃源县","武陵区"],["市辖区","安仁县","北湖区","桂东县","桂阳县","嘉禾县","临武县","汝城县","苏仙区","宜章县","永兴县","资兴市"],["市辖区","常宁市","衡东县","衡南县","衡山县","衡阳县","耒阳市","南岳区","祁东县","石鼓区","雁峰区","蒸湘区","珠晖区"],["市辖区","辰溪县","鹤城区","洪江市","怀化市区","会同县","靖州苗族侗族自治县","麻阳苗族自治县","通道侗族自治县","新晃侗族自治县","溆浦县","沅陵县","芷江侗族自治县","中方县"],["市辖区","蔡子池区","耒阳市"],["市辖区","冷水江市","涟源市","娄底市","娄星区","双峰县","新化县"],["市辖区","韶山市"],["市辖区","北塔区","城步苗族自治区","大祥区","洞口县","隆回县","邵东县","邵阳县","双清区","绥宁县","武冈市","新宁县","新邵县"],["市辖区","韶山市","湘潭县","湘乡市","雨湖区","岳塘区"],["市辖区","保靖县","凤凰县","古丈县","花垣县","吉首市","龙山县","泸溪县","永顺县"],["市辖区","安化县","赫山区","南县","桃江县","沅江市","资阳区"],["市辖区","道县","东安县","江华瑶族自治县","江永县","蓝山县","冷水滩区","零陵区","宁远县","祁阳县","双牌县","新田县"],["市辖区","华容县","君山区","临湘市","汨罗市","平江县","湘阴县","岳阳楼区","岳阳县","云溪区"],["市辖区","慈利县","桑植县","武陵源区","永定区"],["市辖区","茶陵县","荷塘区","醴陵市","芦淞区","石峰区","天元区","炎陵县","攸县","株洲县"]]},{"province" : "吉林","city" : ["白城市","白山市","长春市","公主岭市","珲春市","吉林市","辽源市","四平市","松原市","通化市","延边朝鲜族自治州"],"area" : [["市辖区","大安市","洮北区","洮南市","通榆县","镇赍市"],["市辖区","长白朝鲜族自治县","抚松县","浑江区","江源区","靖宇县","临江市"],["市辖区","朝阳区","朝阳区","德惠市","二道区","净月开发区","九台市","宽城区","绿园区","南关区","农安县","双阳区","榆树市"],["市辖区","公主岭市"],["市辖区","珲春市"],["市辖区","昌邑区","船营区","丰满区","桦甸市","蛟河市","龙潭区","磐石市","舒兰市","永吉县"],["市辖区","东丰县","东辽县","龙山区","西安区"],["市辖区","公主岭市","梨树县","双辽市","铁东区","铁西区","伊通满族自治县"],["市辖区","长岭县","扶余县","宁江区","前郭尔罗斯蒙古族自治县","乾安县"],["市辖区","东昌区","二道江区","辉南县","集安市","柳河县","梅河口市","通化县"],["市辖区","安图县","敦化市","和龙市","珲春市","龙井市","图们市","汪清县","延吉市"]]},{"province" : "江苏","city" : ["常熟市","常州市","丹阳市","高淳县","淮安市","江阴市","金坛市","昆山市","溧水县","连云港市","南京市","南通市","苏州市","宿迁市","太仓市","泰州市","无锡市","徐州市","盐城市","扬州市","宜兴市","张家港","镇江市"],"area" : [[],["市辖区","金坛市","溧阳市","戚墅堰区","天宁区","武进区","新北区","钟楼区"],[],[],["市辖区","楚州区","洪泽县","淮阴区","金湖县","涟水县","清河区","清浦区","盱眙县"],[],[],[],[],["市辖区","东海县","赣榆县","灌南县","灌云县","海州区","连云区","新浦区"],["市辖区","白下区","高淳县","鼓楼区","建邺区","江宁区","溧水县","六合区","浦口区","栖霞区","秦淮区","下关区","玄武区","雨花台区"],["市辖区","崇川区","港闸区","海安县","海门市","开发区","启东市","如东县","如皋市","通州区"],["市辖区","沧浪区","常熟市","工业园区","虎丘区","金阊区","昆山市","平江区","太仓市","吴江市","吴中区","相城区","张家港市"],["市辖区","沭阳县","泗洪县","泗阳县","宿城区","宿迁市区","宿豫区"],[],["市辖区","高港区","海陵区","姜堰市","靖江市","泰兴市","兴化市"],["市辖区","北塘区","滨湖区","崇安区","惠山区","江阴市","南长区","锡山区","新区","宜兴市"],["市辖区","大庙镇","大吴镇","丰县","鼓楼区","贾汪区","金山桥开发区","柳新镇","沛县","邳州市","泉山区","睢宁县","铜山县","新沂市","云龙区","郑集镇"],["市辖区","滨海县","大丰市","东台市","阜宁县","建湖县","射阳县","亭湖区","响水县","盐都区"],["市辖区","宝应县","高邮市","广陵区","邗江区","江都市","维扬区","仪征市"],[],[],["市辖区","丹徒区","丹阳市","京口区","句容市","润州区","扬中市","镇江新区"]]},{"province" : "江西","city" : ["抚州市","赣州市","吉安市","景德镇市","九江市","南昌市","萍乡市","上饶市","新余市","宜春市","鹰潭市"],"area" : [["市辖区","崇仁县","东乡县","广昌县","金溪县","乐安县","黎川县","临川区","南城县","南丰县","宜黄县","资溪县"],["市辖区","安远县","崇义县","大余县","定南县","赣县","会昌县","龙南县","南康市","宁都县","全南县","瑞金市","上犹县","石城县","信丰县","兴国县","寻乌县","于都县","章贡区"],["市辖区","安福县","吉安县","吉水县","吉州区","井冈山市","青原区","遂川县","泰和县","万安县","峡江县","新干县","永丰县","永新县"],["市辖区","昌江区","浮梁县","乐平市","珠山区"],["市辖区","德安县","都昌县","共青城","湖口县","九江县","庐山区","彭泽县","瑞昌市","武宁县","星子县","修水县","浔阳区","永修县"],["市辖区","安义县","昌北区","东湖区","高新区","红谷滩新区","进贤县","南昌县","青山湖区","青云谱区","湾里区","西湖区","新建县"],["市辖区","安源区","开发区","莲花县","芦溪县","上栗县","湘东区"],["市辖区","德兴市","广丰县","横峰县","鄱阳县","铅山县","上饶县","万年县","婺源县","信州区","弋阳县","余干县","玉山县"],["市辖区","分宜县","渝水区"],["市辖区","丰城市","奉新县","高安市","靖安县","上高县","铜鼓县","万载县","宜丰县","袁州区","樟树市"],["市辖区","贵溪市","余江县","月湖区"]]},{"province" : "辽宁","city" : ["鞍山市","本溪市","朝阳市","大连市","丹东市","抚顺市","阜新市","海城市","葫芦岛市","锦州市","辽阳市","盘锦市","沈阳市","铁岭市","营口市"],"area" : [["市辖区","鞍山高新区","海城区","立山区","千山区","台安县","铁东区","铁西区","岫岩满族自治县"],["市辖区","本溪满族自治县","恒仁满族自治县","明山区","南芬区","平山区","溪湖区"],["市辖区","北票市","朝阳县","建平县","喀喇沁左翼蒙古自治县","凌源市","龙城区","双塔区"],["市辖区","长海县","大连开发区","甘井子区","高新园区","金州区","旅顺口区","普兰店市","沙河口区","瓦房店市","西岗区","中山区","庄河市"],["市辖区","东港市","凤城市","宽甸满族自治县","元宝区","振安区","振兴区"],["市辖区","东洲区","抚顺县","清原满族自治县","顺城区","望花区","新宾满族自治县","新抚区"],["市辖区","阜新蒙古族自治县","海州区","清河门区","太平区","细河区","新邱区","彰武县"],["市辖区","海城市内"],["市辖区","建昌县","连山区","龙港区","南票区","绥中县","兴城市"],["市辖区","北镇市","古塔区","黑山县","凌海市","凌河区","太和区","义县"],["市辖区","白塔区","灯塔市","弓长岭区","宏伟区","辽阳县","太子河区","文圣区"],["市辖区","大洼县","盘山县","双台子区","兴隆台区"],["市辖区","大东区","法库县","和平区","皇姑区","浑南新区","康平县","辽中县","沈北新区","沈河区","苏家屯区","铁西区","新民区","于洪区"],["市辖区","昌图县","调兵山市","开原市","清河区","铁岭县","西丰县","银州区"],["市辖区","鲅鱼圈区","大石桥市","盖州区","老边区","西市区","站前区"]]},{"province" : "内蒙","city" : ["阿拉善盟","巴彦淖尔市","包头市","赤峰市","鄂尔多斯市","呼和浩特市","呼伦贝尔市","通辽市","乌海市","乌兰察布盟","锡林郭勒盟","兴安盟","哲里木盟"],"area" : [["市辖区","阿拉善右旗","阿拉善左旗","额济纳旗"],["市辖区","磴口县","杭锦后旗","临河区","乌拉特后旗","乌拉特前旗","乌拉特中旗","五原县"],["市辖区","白云矿区","达尔罕茂明安联合旗","东河区","固阳县","九原区","昆都仑区","昆都仑区","青山区","青山区","石拐区","土默特右旗"],["市辖区","阿鲁科尔沁旗","敖汉旗","巴林右旗","巴林左旗","红山区","喀喇沁旗","克什克腾旗","林西县","宁城县","松山区","翁牛特旗","元宝山区"],["市辖区","达拉特旗","东胜区","鄂托克旗","鄂托克前旗","杭锦旗","乌审旗","伊金霍洛旗","准格尔旗"],["市辖区","和林格尔县","回民区","清水河县","赛罕区","土默特左旗","托克托县","武川县","新城区","玉泉区"],["市辖区","阿荣旗","陈巴尔虎旗","额尔古纳市","鄂伦春自治旗","鄂温克族自治旗","根河市","海拉尔市","满洲里市","莫力达瓦达斡尔族自治旗","新巴尔虎右旗","新巴尔虎左旗","牙克石市","扎兰屯市"],["市辖区","霍林郭勒市","开鲁县","科尔沁区","科尔沁左翼后旗","科尔沁左翼中旗","库伦旗","奈曼旗","扎鲁特旗"],["市辖区","海勃湾区","海南区","乌达区"],["市辖区","察哈尔右翼后旗","察哈尔右翼前旗","察哈尔右翼中旗","丰镇市","化德县","集宁区","凉城县","商都县","四子王旗","兴和县","卓资县"],["市辖区","阿巴嘎旗","东乌珠穆沁旗","多伦县","二连浩特市","苏尼特右旗","苏尼特左旗","太仆寺旗","西乌珠穆沁旗","锡林浩特市","镶黄旗","正蓝旗","正镶白旗"],["市辖区","阿尔山市","科尔沁右翼前旗","科尔沁右翼中旗","突泉县","乌兰浩特市","扎赍特旗"],["市辖区","霍林郭勒市","科尔沁左翼后旗","科尔沁左翼中旗","库伦旗","奈曼旗"]]},{"province" : "宁夏","city" : ["固原市","石嘴山市","吴忠市","银川市","中卫市"],"area" : [["市辖区","固原县","泾源县","隆德县","彭阳县","西吉县","原州区"],["市辖区","大武口区","惠农区","平罗县"],["市辖区","红寺堡开发区","利通区","青铜峡市","同心县","盐池县"],["市辖区","贺兰县","金凤区","灵武市","西夏区","兴庆区","永宁县"],["市辖区","海原县","沙坡头区","中宁县"]]},{"province" : "青海","city" : ["果洛藏族自治州","海北州","海东地区","海南州","海西州","黄南州","西宁市","玉树藏族自治州"],"area" : [["市辖区","班玛县","达日县","甘德县","久治县","玛多县","玛沁县"],["市辖区","刚察县","海晏县","门源回族自治县","祁连县"],["市辖区","互助土族自治县","化隆回族自治县","乐都县","民和回族土族自治县","平安县","循化撒拉族自治县"],["市辖区","共和县","贵德县","贵南县","海南藏族自治州市","同德县","兴海县"],["市辖区","大柴旦行委","德令哈市","都兰县","格尔木市","冷湖行委","茫崖行委","天峻县","乌兰县"],["市辖区","河南蒙古族自治县","尖扎县","李家峡","同仁县","泽库县"],["市辖区","城北区","城东区","城西区","城中区","大通回族土族自治县","湟源县","湟中县"],["市辖区","称多县","囊谦县","曲麻莱县","玉树县","杂多县","治多县"]]},{"province" : "全境","city" : [],"area" : []},{"province" : "山东","city" : ["滨州市","德州市","东营市","菏泽市","济南市","济宁市","莱芜市","聊城市","临沂市","青岛市","日照市","泰安市","威海市","潍坊市","烟台市","枣庄市","淄博市"],"area" : [["市辖区","滨城区","博兴县","惠民县","无棣县","阳信县","沾化县","邹平县"],["市辖区","德城区","乐陵市","临邑县","陵县","宁津县","平原县","齐河县","庆云县","武城县","夏津县","禹城市"],["市辖区","东营区","广饶县","河口区","垦利县","利津县"],["市辖区","曹县","成武县","单县","定陶县","东明县","菏泽市","巨野县","鄄城县","牡丹区","郓城县"],["市辖区","长清区","高新区","济阳县","愧荫区","历城区","历下区","平阴县","商河县","市中区","天桥区","章丘区"],["市辖区","嘉祥县","金乡县","梁山县","曲阜县","任城区","市中区","泗水县","微山县","汶上县","兖州市","鱼台县","邹城市"],["市辖区","钢城区","莱城区"],["市辖区","茌平县","东阿县","东昌府区","高唐","冠县","临清市","莘县","阳谷县"],["市辖区","苍山县","费县","河东区","莒南县","兰山区","临沭县","罗庄区","蒙阴县","平邑县","郯城县","沂南县","沂水县"],["市辖区","城阳区","黄岛区","即墨市","胶南市","胶州市","莱西市","崂山区","李沧区","平度市","市北区","市南区","四方区"],["市辖区","东港区","莒县","岚山区","五莲县","新市区"],["市辖区","岱岳区","东平县","肥城市","宁阳县","泰山区","新泰市"],["市辖区","高区","环翠区","荣成市","乳山市","文登市"],["市辖区","安丘市","昌乐县","昌邑市","坊子区","高密市","寒亭区","奎文区","临朐县","青州市","寿光市","潍城区","潍坊高新技术开发区","诸城市"],["市辖区","长岛县","福山区","海阳市","莱山区","莱阳市","莱州市","龙口区","牟平区","蓬莱市","栖霞市","烟台开发区","招远市","芝罘区"],["市辖区","山亭区","市中区","台儿庄区","滕州市","薛城区","峄城区"],["市辖区","博山区","高青区","桓台县","临淄区","沂源县","张店区","周村区","淄博区"]]},{"province" : "山西","city" : ["长治市","大同市","晋城市","晋中市","临汾市","吕梁市","朔州市","太原市","忻州市","阳泉市","运城市"],"area" : [["市辖区","长治县","长子县","壶关县","黎城县","潞城市","平顺县","沁县","沁源县","屯留县","武乡县","襄垣县"],["市辖区","大同县","广灵县","浑源县","灵丘县","南郊区","天镇县","新荣区","阳高县","左云县"],["市辖区","高平市","陵川县","沁水县","泽州县"],["市辖区","和顺县","介休市","灵石县","平遥县","祁县","寿阳县","太谷县","昔阳县","榆次区","榆社县","左权县"],["市辖区","安泽县","大宁县","汾西县","浮山县","古县","洪洞县","侯马市","霍州市","吉县","蒲县","曲沃县","隰县","乡宁县","襄汾县","尧都区","翼城县","永和县"],["市辖区","方山县","汾阳市","交城县","交口县","岚县","离石区","临县","柳林县","石楼县","文水县","孝义区","兴县","中阳县"],["市辖区","怀仁县","平鲁区","山阴县","朔城区","应县","右玉县"],["市辖区","古交市","尖草坪区","晋源区","娄烦县","清徐县","万柏林区","小店区","杏花岭区","阳曲县","迎泽区"],["市辖区","保德县","代县","定襄县","繁峙县","河曲县","静乐县","岢岚县","宁武县","偏关县","神池县","五台县","五寨县","忻府区","原平市"],["市辖区","城区","郊区","矿区","平定县","盂县"],["市辖区","河津市","稷山县","绛县","平陆县","芮城县","万荣县","闻喜县","夏县","新绛县","盐湖区","永济市","垣曲县"]]},{"province" : "陕西","city" : ["安康市","宝鸡市","汉中市","商洛市","铜川市","渭南市","西安市","咸阳市","延安市","榆林市"],"area" : [["市辖区","安康市","白河县","汉滨区","汉阴县","岚皋县","宁陕县","平利县","石泉县","旬阳县","镇坪县","紫阳县"],["市辖区","陈仓区","凤县","凤翔县","扶风县","金台区","麟游县","陇县","眉县","歧山县","千阳县","太白县","渭滨区"],["市辖区","城固县","佛坪县","汉台区","留坝县","略阳县","勉县","南郑县","宁强县","西乡县","洋县","镇巴县"],["市辖区","丹凤县","洛南县","山阳县","商南县","商州区","镇安县","柞水县"],[],["市辖区","白水县","澄城县","大荔县","富平县","韩城市","合阳县","华县","华阴市","临渭区","蒲城县","潼关县"],["市辖区","灞桥区","碑林区","长安区","高陵县","高新区","户县","蓝田县","莲湖区","临潼区","未央区","阎良区","雁塔区","杨陵区","周至县"],["市辖区","彬县","长武县","淳化县","泾阳县","礼泉县","乾县","秦都区","三原县","渭城区","武功县","武功县","兴平市","旬邑县","永寿县"],["市辖区","安塞县","宝塔区","富县","甘泉县","黄陵县","黄龙县","洛川县","吴起县","延长县","延川县","宜川县","志丹县","子长县"],["市辖区","定边县","府谷县","横山县","佳县","靖边县","米脂县","清涧县","神木县","绥德县","吴堡县","榆阳区","子洲县"]]},{"province" : "上海","city" : ["上海市"],"area" : [["市辖区","宝山区","长宁区","崇明县","奉贤区","虹口区","黄浦区","嘉定区","金山区","静安区","卢湾区","闵行区","南汇区","浦东区","普陀区","青浦区","松江区","徐汇区","杨浦区","闸北区"]]},{"province" : "四川","city" : ["阿坝藏族羌族自治州","巴中市","成都市","达州市","德阳市","甘孜藏族自治州","广安市","广元市","江油市","乐山市","凉山彝族自治州","泸州市","眉山市","绵阳市","内江市","南充市","攀枝花市","遂宁市","雅安市","宜宾市","资阳市","自贡市"],"area" : [["市辖区","阿坝县","黑水县","红原县","金川县","九寨沟县","理县","马尔康县","茂县","壤塘县","若尔盖县","松潘县","汶川县","小金县"],["市辖区","巴中市","巴州区","南江县","平昌县","通江县"],["市辖区","成华区","崇州市","都江堰市","高新区","金牛区","金堂县","锦江区","龙泉驿区","彭州市","郫县","青白江区","青羊区","邛崃市","双流县","温江区","武侯区","新都区"],["市辖区","达县","大竹县","开江县","渠县","通川区","万源市","宣汉县"],["市辖区","广汉市","旌阳区","罗江县","绵竹市","什邡市","中江县"],["市辖区","巴塘县","白玉县","丹巴县","道孚县","稻城县","得荣县","德格县","甘孜县","九龙县","康定县","理塘县","泸定县","炉霍县","色达县","石渠县","乡城县","新龙县","雅江县"],["市辖区","广安区","华蓥市","邻水县","武胜县","岳池县"],["市辖区","苍溪县","朝天区","剑阁县","利州区","青川县","旺苍县","元坝区"],["市辖区","江油市"],["市辖区","峨边彝族自治县","峨眉山市","夹江县","犍为县","金口河区","井研县","马边彝族自治县","沐川县","沙湾区","市中区","五通桥区"],["市辖区","布拖县","德昌县","甘洛县","会东县","会理县","金阳县","雷波县","炉霍县","美姑县","冕宁县","木里藏族自治县","宁南县","普格县","西昌市","喜德县","盐源县","越西县","昭觉县"],["市辖区","古蔺县","合江县","江阳区","龙马潭区","泸县","纳溪区","叙永县"],["市辖区","丹棱县","东坡区","洪雅县","彭山县","青神县","仁寿县"],["市辖区","北川羌族自治县","涪城区","高新区","江油市","经开区","平武县","三台县","盐亭县","游仙区","游仙区"],["市辖区","东兴区","东兴区","隆昌县","市中区","威远县","资中县"],["市辖区","高坪区","嘉陵区","阆中市","南部县","蓬安县","顺庆区","西充县","仪陇县","营山县"],["市辖区","东区","米易县","仁和区","西区","盐边县"],["市辖区","安居区","船山区","大英县","蓬溪县","射洪县"],["市辖区","宝兴县","汉源县","芦山县","名山县","石棉县","天全县","荥经县","雨城区"],["市辖区","长宁县","翠屏区","高县","珙县","江安县","筠连县","南溪县","屏山县","兴文县","宜宾县"],["市辖区","安岳县","简阳市","乐至县","雁江区"],["市辖区","大安区","富顺县","贡井区","荣县","沿滩区","自流井区"]]},{"province" : "台湾","city" : ["台湾市"],"area" : [["市辖区","台北","台南","台中"]]},{"province" : "天津","city" : ["天津市"],"area" : [["市辖区","宝坻区","北辰区","大港区","东丽区","汉沽区","和平区","河北区","河东区","河西区","红桥区","蓟县","津南区","静海区","南开区","宁河县","塘沽区","武清县","西青区"]]},{"province" : "西藏","city" : ["阿里地区","昌都地区","拉萨","林芝地区","那曲地区","日喀则地区","山南地区"],"area" : [["市辖区","措勤县","噶尔县","改则县","革吉县","普兰县","日土县","札达县"],["市辖区","八宿县","边坝县","察雅县","昌都县","丁青县","贡觉县","江达县","类乌齐县","洛隆县","芒康县","左贡县"],["市辖区","城关区","达孜县","当雄县","堆龙德庆县","林周县","墨竹工卡县","尼木县","曲水县"],["市辖区","波密县","察隅县","工布江达县","朗县","林芝县","米林县","墨脱县"],["市辖区","安多县","巴青县","班戈县","比如县","嘉黎县","那曲县","尼玛县","聂荣县","申扎县","索县"],["市辖区","昂仁县","白朗县","定结县","定日县","岗巴县","吉隆县","江孜县","康马县","拉孜县","南木林县","聂拉木县","仁布县","日喀则市","萨嘎县","萨迦县","谢通门县","亚东县","仲巴县"],["市辖区","措美县","错那县","贡嘎县","加查县","浪卡子县","隆子县","洛扎县","乃东县","琼结县","曲松县","桑日县","扎囊县"]]},{"province" : "香港","city" : ["香港特别行政区"],"area" : [["市辖区","香港市区内"]]},{"province" : "新疆","city" : ["阿克苏地区","阿勒泰地区","巴音郭楞蒙古族自治州","博尔塔拉蒙古自治州","昌吉回族自治州","哈密地区","和田地区","喀什地区","克拉玛依市","克孜勒苏柯尔克孜","石河子市","塔城地区","吐鲁番地区","乌鲁木齐市","五家渠市","新疆维吾尔自治区","伊犁哈萨克自治州"],"area" : [["市辖区","阿克苏市","阿拉尔市","阿瓦提县","拜城县","柯坪县","库车县","沙雅县","温宿县","乌什县","新和县"],["市辖区","阿勒泰市","布尔津县","福海县","富蘊县","哈巴河县","吉木乃县","清河县"],["市辖区","博湖县","和静县","和硕县","库尔勒市","轮台县","且末县","若羌县","尉犁县","焉耆回族自治县"],["市辖区","博乐市","精河县","温泉县"],["市辖区","昌吉市","阜康市","呼图壁县","吉木萨尔县","玛纳斯县","木垒哈萨克自治县","奇台县"],["市辖区","巴里坤哈萨克自治县","哈密市","鄯善县","伊吾县"],["市辖区","策勒县","和田市","洛浦县","民丰县","墨玉县","皮山县","于田县"],["市辖区","巴楚县","伽师县","喀什市","麦盖提县","莎车县","疏附县","疏勒县","塔什库尔甘塔吉","叶城县","英吉沙县","岳普湖县","泽普县"],["市辖区","白碱滩区","独山子区","克拉玛依区","乌尔禾区"],["市辖区","阿合奇县","阿克陶县","阿图什市","乌恰县"],["市辖区","石河子区"],["市辖区","额敏县","和布克塞尔蒙古自治州","沙湾县","塔城市","托里县","乌苏市","裕民县"],["市辖区","鄯善县","吐鲁番市","托克逊县"],["市辖区","达坂城区","米东区","沙依巴克区","水磨沟区","天山区","头屯河区","乌鲁木齐县","新市区"],["市辖区","五家渠市"],["市辖区","新源县"],["市辖区","察布查尔锡伯自治州","巩留县","霍城县","奎屯市","尼勒克县","特克斯县","新源县","伊宁市","伊宁县","昭苏县"]]},{"province" : "云南","city" : ["保山市","楚雄彝族自治州","大理白族自治州","德宏傣族景颇族自治州","迪庆藏族自治州","红河彝族哈尼族自治区","昆明市","丽江地区","临沧市","怒江傈僳族自治州","普洱市","曲靖市","文山壮族苗族自治州","西双版纳傣族自治州","玉溪市","昭通市"],"area" : [["市辖区","昌宁县","龙陵县","隆阳区","施甸县","腾冲县"],["市辖区","楚雄市","大姚县","禄丰县","牟定县","南华县","双柏县","武定县","姚安县","永仁县","元谋县"],["市辖区","宾川县","大理市","洱源县","鹤庆县","剑川县","弥渡县","南涧彝族自治县","巍山彝族回族自治县","祥云县","漾濞彝族自治县","永平县","云龙县"],["市辖区","梁河县","陇川县","潞西市","瑞丽市","盈江县"],["市辖区","迪庆藏族自治州"],["市辖区","个旧市","河口瑶族自治县","红河县","建水县","金平苗族瑶族傣族自治县","开远市","泸西县","绿春县","蒙自县","弥勒县","屏边苗族自治县","石屏县","元阳县"],["市辖区","安宁县","呈贡县","东川区","富民县","官渡区","蒿明县","晋宁县","禄劝彝族苗族自治县","盘龙区","石林彝族自治县","五华区","西山区","寻甸回族彝族自治县","宜良县"],["市辖区","古城区","华坪县","宁蒗彝族自治县","永胜县","玉龙纳西族自治县"],["市辖区","沧源佤族自治县","凤庆县","耿马傣族佤族自治县","临翔区","双江拉祜族佤族布朗族傣族自治县","永德县","云县","镇康县"],["市辖区","福贡县","贡山独龙族怒族自治县","兰坪白族普米族自治县","泸水县"],["市辖区","江城哈尼族彝族自治县","景东彝族自治县","景谷傣族彝族自治县","澜沧拉祜族自治县","孟连傣族拉祜族佤族自治县","墨江哈尼族自治县","宁洱哈尼族彝族自治县","思茅区","西盟佤族自治县","镇沅彝族哈尼族拉祜族自治县"],["市辖区","富源县","会泽县","陆良县","罗平县","马龙区","麒麟区","师宗县","宣威市","沾益县"],["市辖区","富宁县","广南县","麻栗坡县","马关县","丘北县","文山县","西畴县","砚山县"],["市辖区","景洪县","勐海县","勐腊县"],["市辖区","澄江区","峨山彝族自治县","红塔区","华宁区","江川县","通海县","新平彝族傣族自治县","易门县","源江哈尼族彝族自治县"],["市辖区","大关县","鲁甸县","巧家县","水富县","绥江县","威信县","盐津县","彝良县","永善县","昭阳区","镇雄县"]]},{"province" : "浙江","city" : ["慈溪市","杭州市","湖州市","嘉善市","嘉兴市","金华市","丽水市","临海市","宁波市","宁海市","千岛湖","衢州市","上虞市","绍兴市","台州市","温州市","象山市","萧山市","义乌市","永康市","余姚市","舟山市","诸暨市"],"area" : [[],["市辖区","滨江区","淳安县","富阳市","拱墅区","建德市","江干区","良渚镇","临安市","临平镇","瓶窑镇","乔司镇","上城区","桐庐县","西湖区","下城区","下沙区","闲林镇","萧山区","余杭区"],["市辖区","安吉县","长兴县","德清县","南浔区","吴兴区"],[],["市辖区","南湖区","南浔区","平湖市","桐乡市","秀洲区"],["市辖区","东阳市","金东区","兰溪市","磐安县","浦江县","武义县","婺城区","义乌市","永康市"],["市辖区","缙云县","景宁畚族自治县","莲都区","龙泉市","青田县","庆元县","松阳县","遂昌县","云和县"],[],["市辖区","北仑区","慈溪市","奉化市","海曙区","江北区","江东区","宁海县","象山县","鄞州区","余姚市","镇海区"],[],[],["市辖区","常山县","江山市","开化县","柯城区","龙游县","衢江区"],[],["市辖区","上虞市","绍兴县","嵊州市","新昌县","诸暨市"],["市辖区","黄岩区","椒江区","临海市","路桥区","三门县","天台县","温岭市","仙居县","玉环县"],["市辖区","苍南县","洞头县","郭溪镇","海宁市","海盐市","嘉善县","瞿溪镇","乐清市","龙湾区","鹿城区","南白象镇","瓯海区","潘桥镇","平阳县","瑞安市","泰顺县","温州茶山高教园区","文成县","永嘉县"],[],[],[],[],[],["市辖区","岱山县","定海区","普陀区","嵊泗县"],[]]},{"province" : "重庆","city" : ["重庆市"],"area" : [["市辖区","巴南区","北碚区","璧山县","长寿区","大渡口区","大足县","丰都县","涪陵区","高新区","合川区","江北区","江津区","九龙坡区","梁平县","南岸区","南川市","黔江区","荣昌县","沙坪坝区","双桥区","铜梁县","潼南县","万盛区","万州区","武隆县","永川区","渝北区","渝中区"]]}]';
