function getWord() { 
    // return ["阿谀"",""矮"",""矮小"",""爱搭不理"",""爱国"",""爱面子"",""碍事"",""碍眼"",""安定"",""安分"",""安分守己"",""安静"",""安贫乐道"",""安生"",""安详"",""岸然"",""黯淡"",""肮脏"",""傲"",""傲慢"",""八面玲珑"",""拔尖儿"",""跋扈"",""霸道"",""霸气"",""白"",""白痴"",""白净"",""百依百顺"",""百折不挠"",""摆架子"",""摆阔"",""摆谱儿"",""败家"",""拜金"",""搬弄是非"",""半吊子"",""半路出家"",""膀大腰圆"",""包容"",""薄情"",""薄幸"",""饱经风霜"",""保守"",""暴力"",""暴戾"",""暴虐"",""暴躁"",""卑鄙"",""卑贱"",""卑劣"",""卑俗"",""卑微"",""卑污"",""卑下"",""悲哀"",""悲惨"",""悲观"",""悲天悯人"",""背叛"",""背信弃义"",""被动"",""奔放"",""本分"",""笨蛋"",""笨口拙舌"",""笨手笨脚"",""笨头笨脑"",""笨重"",""笨拙"",""笨嘴拙舌"",""笔挺"",""笔直"",""鄙吝"",""鄙陋"",""鄙俗"",""毕恭毕敬"",""闭月羞花"",""变态"",""变通"",""标新立异"",""彪悍"",""表里如一"",""别扭"",""别无长物"",""别有用心"",""冰冷"",""冰清玉洁"",""秉正"",""病病歪歪"",""病弱"",""病态"",""博爱"",""博导"",""博古通今"",""博识"",""博士"",""博闻强记"",""博闻强识"",""博学"",""不安"",""不卑不亢"",""不端"",""不贰过"",""不凡"",""不甘寂寞"",""不公"",""不苟"",""不轨"",""不羁"",""不近人情"",""不拘小节"",""不堪"",""不可救药"",""不可理喻"",""不可一世"",""不良"",""不伦不类"",""不名一文"",""不仁"",""不三不四"",""不善"",""不识抬举"",""不孝"",""不肖"",""不懈"",""不行"",""不修边幅"",""不学无术"",""不择手段"",""不着边际"",""不自量力"",""不足挂齿"",""猜忌"",""猜疑"",""才高八斗"",""才华"",""才能"",""才疏学浅"",""才学"",""财大气粗"",""财富"",""财迷心窍"",""残暴"",""残毒"",""残酷"",""残虐"",""残缺"",""残忍"",""苍老"",""操之过急"",""草根"",""草率"",""插科打诨"",""察言观色"",""差"",""差劲"",""差生"",""孱弱"",""谄媚"",""颤颤巍巍"",""猖狂"",""敞亮"",""唱反调"",""超群"",""朝气"",""朝秦暮楚"",""朝三暮四"",""吵人"",""沉静"",""沉闷"",""沉默"",""沉稳"",""沉鱼落雁"",""沉着"",""成功"",""成熟"",""诚笃"",""诚恳"",""诚朴"",""诚实"",""诚信"",""诚挚"",""逞能"",""逞强"",""吃不开"",""吃得开"",""痴呆"",""痴情"",""痴心"",""迟钝"",""迟缓"",""持重"",""赤诚"",""赤胆忠心"",""冲动"",""崇高"",""宠辱不惊"",""丑"",""丑八怪"",""丑恶"",""丑陋"",""出尔反尔"",""出口成章"",""出类拔萃"",""出色"",""出息"",""出众"",""初出茅庐"",""传统"",""吹毛求疵"",""纯粹"",""纯洁"",""纯良"",""纯朴"",""纯情"",""纯真"",""淳厚"",""淳朴"",""蠢"",""蠢笨"",""蠢头蠢脑"",""绰约"",""慈爱"",""慈悲"",""慈祥"",""聪慧"",""聪敏"",""聪明"",""聪悟"",""聪颖"",""从容"",""从容不迫"",""粗暴"",""粗笨"",""粗鄙"",""粗糙"",""粗犷"",""粗豪"",""粗鲁"",""粗率"",""粗莽"",""粗浅"",""粗手笨脚"",""粗俗"",""粗线条"",""粗心"",""粗枝大叶"",""粗壮"",""脆弱"",""达观"",""大大咧咧"",""大度"",""大方"",""大公无私"",""大逆不道"",""大气"",""大手大脚"",""大无畏"",""大义凛然"",""大意"",""大有可为"",""大有作为"",""大智若愚"",""呆板"",""呆若木鸡"",""呆傻"",""呆头呆脑"",""呆滞"",""呆子"",""歹毒"",""怠惰"",""丹心"",""单纯"",""胆大包天"",""胆大妄为"",""胆怯"",""胆小鬼"",""淡定"",""淡漠"",""淡泊"",""当机立断"",""道貌岸然"",""得寸进尺"",""得当"",""得过且过"",""得心应手"",""德高望重"",""地道"",""登堂入室"",""低层"",""低沉"",""低档"",""低等"",""低调"",""低端"",""低级"",""低贱"",""低劣"",""低迷"",""低能"",""低人一等"",""低三下四"",""低声下气"",""低俗"",""低下"",""底层"",""颠倒是非"",""典雅"",""刁蛮"",""吊儿郎当"",""调皮"",""顶级"",""顶尖"",""顶事"",""顶天立地"",""丢盔弃甲"",""丢面子"",""丢三落四"",""懂事"",""懂行"",""动人心魄"",""斗心眼儿"",""独裁"",""独当一面"",""独断"",""独具匠心"",""独立"",""独辟蹊径"",""独善其身"",""独树一帜"",""独特"",""肚量"",""妒忌"",""端正"",""端庄"",""短浅"",""短视"",""短小精悍"",""对答如流"",""敦厚"",""敦实"",""多才多艺"",""多愁善感"",""多虑"",""多谋善断"",""多情"",""多事"",""多心"",""多疑"",""咄咄逼人"",""堕落"",""惰 "",""婀娜"",""恶毒"",""恶贯满盈"",""恶狠狠"",""恶劣"",""恶煞"",""恶心"",""耳聪目明"",""二把刀"",""发愤图强"",""乏味"",""烦人"",""烦躁"",""反叛"",""饭桶"",""放荡"",""放浪"",""放浪形骸"",""放肆"",""放纵"",""飞扬跋扈"",""肥胖"",""废物"",""奋发"",""奋发图强"",""奋勇"",""愤怒"",""愤世嫉俗"",""丰腴"",""风华正茂"",""风流"",""风趣"",""风骚"",""风云人物"",""疯疯癫癫"",""疯狂"",""锋芒毕露"",""奉公守法"",""奉献"",""肤浅"",""敷衍"",""服从"",""浮夸"",""浮躁"",""腐败"",""负心"",""负责"",""附庸风雅"",""复杂"",""富贵"",""富豪"",""富翁"",""富有"",""富裕"",""富足"",""肝胆相照"",""赶时髦"",""感性"",""干才"",""干脆"",""干净"",""干练"",""刚愎自用"",""刚烈"",""刚强"",""刚毅"",""刚正"",""刚正不阿"",""刚直"",""钢筋铁骨"",""高"",""高昂"",""高傲"",""高不可攀"",""高层"",""高大"",""高风亮节"",""高贵"",""高洁"",""高妙"",""高明"",""高人一等"",""高尚"",""高深"",""高手"",""高谈阔论"",""高挑儿"",""高屋建瓴"",""高效"",""高雅"",""高瞻远瞩"",""个性"",""跟风"",""耿介"",""耿直"",""公道"",""公平"",""公然"",""公允"",""公正"",""功成名就"",""恭敬"",""苟且"",""狗腿子"",""够格"",""够意思 "",""孤傲"",""孤单"",""孤独"",""孤芳自赏"",""孤高"",""孤苦伶仃"",""孤陋寡闻"",""孤僻"",""古板"",""古怪"",""骨感"",""固步自封"",""固执"",""故弄玄虚"",""顾家"",""寡廉鲜耻"",""寡情"",""寡言"",""乖戾"",""乖僻"",""乖巧"",""乖张"",""拐弯抹角"",""怪里怪气"",""官僚"",""光彩"",""光彩照人"",""光明"",""光明磊落"",""光明正大"",""光鲜"",""广博"",""规矩"",""诡诈"",""鬼鬼祟祟"",""鬼灵精"",""鬼头鬼脑"",""贵气"",""国色天香"",""果断"",""果敢"",""果决"",""裹足不前"",""过分"",""过河拆桥"",""过激"",""过气"",""过人"",""孩子气 "",""害群之马"",""害人虫"",""害臊"",""害羞"",""憨厚"",""憨实"",""憨直"",""含蓄"",""涵养"",""寒碜"",""寒酸"",""悍勇"",""沆瀣一气"",""豪放"",""豪横"",""豪迈"",""豪气"",""豪爽"",""好大喜功"",""好高骛远"",""好看"",""好客"",""好奇"",""好强"",""好色"",""好胜"",""好事"",""好说话"",""好为人师"",""好心"",""好逸恶劳"",""合群"",""合作"",""和蔼"",""和气"",""和善"",""和顺"",""鹤发童颜"",""鹤立鸡群"",""黑"",""黑黢黢"",""黑心"",""黑黝黝"",""狠毒"",""狠心"",""横暴"",""横行霸道"",""猴儿精"",""厚道"",""忽悠"",""狐朋狗党"",""胡搅蛮缠"",""胡闹"",""胡说"",""胡说八道"",""胡子拉碴"",""胡作非为"",""糊涂"",""虎背熊腰"",""虎头蛇尾"",""互助"",""护短"",""花拳绣腿"",""花容月貌"",""花心"",""华而不实"",""华贵"",""滑稽"",""滑头"",""滑头滑脑"",""怀才不遇"",""欢快"",""患得患失"",""荒唐"",""荒淫"",""灰头土脸"",""诙谐"",""挥霍"",""挥金如土"",""讳疾忌医"",""慧黠"",""慧眼"",""昏庸"",""浑浑噩噩"",""混乱"",""混账"",""豁达"",""活泼"",""活跃"",""机变"",""机警"",""机伶"",""机灵"",""机敏"",""机巧"",""机智"",""积极"",""激进"",""激情"",""吉人天相"",""极端"",""急公好义"",""急功近利"",""急进"",""急性子"",""急躁"",""疾恶如仇"",""计较"",""记仇"",""记恨"",""家徒四壁"",""家喻户晓"",""假仁假义"",""假惺惺"",""驾轻就熟"",""尖锐"",""尖酸"",""尖酸刻薄"",""尖嘴"",""尖嘴薄舌"",""尖嘴猴腮"",""奸猾"",""奸险"",""奸邪"",""奸诈"",""坚持"",""坚定"",""坚强"",""坚忍"",""坚韧"",""坚毅"",""坚贞"",""艰苦"",""艰难"",""俭朴"",""俭省"",""俭约"",""简单"",""简朴"",""见利忘义"",""见钱眼开"",""见异思迁"",""健康"",""健朗"",""健美"",""健谈"",""健忘"",""健壮"",""讲究"",""讲理"",""交际花"",""娇滴滴"",""娇媚"",""娇娆"",""娇柔"",""娇生惯养"",""娇艳"",""姣好"",""骄傲"",""骄横"",""骄奢淫逸"",""焦虑"",""焦躁"",""狡辩"",""狡猾"",""狡狯"",""狡黠"",""狡诈"",""矫健"",""矫捷"",""矫情"",""矫揉造作"",""矫饰"",""脚踏实地"",""较真儿"",""教师"",""教授"",""教养"",""节俭"",""节约"",""节制"",""杰出"",""拮据"",""洁身自好"",""结巴"",""结实"",""斤斤计较"",""矜持"",""尽善尽美"",""尽责"",""尽职"",""紧张"",""谨慎"",""谨言慎行"",""进取"",""禁欲"",""泾渭分明"",""惊艳"",""兢兢业业"",""精打细算"",""精干"",""精明"",""精明强干"",""精神"",""精细"",""精益求精"",""精英"",""精致"",""精壮"",""井底之蛙"",""靓丽"",""靓女"",""敬佩"",""敬业"",""窘促"",""窘困"",""窘迫"",""纠结"",""拘谨"",""拘束"",""居安思危"",""居心叵测"",""鞠躬尽瘁"",""局促"",""沮丧"",""举一反三"",""举足轻重"",""巨富"",""狷介"",""绝情"",""倔头倔脑"",""君子"",""俊美"",""俊俏"",""俊秀"",""开放"",""开朗"",""开明"",""坎坷"",""看风使舵"",""康健"",""慷慨"",""靠不住"",""靠得住"",""靠谱儿"",""苛刻"",""苛求"",""苛责"",""磕磕绊绊"",""可爱"",""可悲"",""可鄙"",""可恶"",""可贵"",""可恨"",""可敬"",""可靠"",""可怜"",""可怕"",""可亲"",""可憎"",""克己"",""克勤克俭"",""克制"",""刻板"",""刻薄"",""刻毒"",""刻苦"",""恪尽职守"",""客观"",""客气"",""肯干"",""恳挚"",""抠门儿"",""口才"",""口吃"",""口蜜腹剑"",""口若悬河"",""口是心非"",""枯木逢春"",""枯燥"",""酷炫"",""夸夸其谈"",""夸张"",""快乐"",""宽大"",""宽宏"",""宽宏大量"",""宽厚"",""宽容"",""狂暴"",""狂放"",""狂妄"",""狂野"",""狂躁"",""旷达"",""困顿"",""困窘"",""困苦"",""困难"",""阔绰"",""阔气"",""垃圾"",""邋遢"",""赖皮"",""褴褛"",""懒"",""懒惰"",""懒骨头"",""懒散"",""狼狈"",""狼心狗肺"",""浪荡"",""浪漫"",""劳苦功高"",""唠叨"",""老成"",""老成持重"",""老诚"",""老当益壮"",""老到"",""老道"",""老好人"",""老奸巨猾"",""老辣"",""老练"",""老马识途"",""老谋深算"",""老派"",""老气"",""老气横秋"",""老实"",""老于世故"",""乐观"",""乐善好施"",""乐天"",""乐天知命"",""了不得"",""了不起"",""羸弱"",""冷傲"",""冷淡"",""冷静"",""冷酷"",""冷漠"",""冷若冰霜"",""冷血动物"",""冷眼"",""愣头愣脑"",""离谱儿"",""礼貌"",""礼贤下士"",""理性"",""理智"",""力争上游"",""历练"",""厉害"",""利己"",""利落"",""利索"",""利欲熏心"",""怜悯"",""廉洁"",""廉明"",""廉正"",""练达"",""两肋插刀"",""两面三刀"",""两袖清风"",""潦倒"",""凛然"",""吝啬"",""伶仃"",""伶俐"",""伶牙俐齿"",""灵光"",""灵敏"",""灵巧"",""灵透"",""灵性"",""玲珑"",""凌乱"",""领导"",""溜须拍马"",""六亲不认"",""六神无主"",""鲁钝"",""鲁莽"",""鲁直"",""啰唆"",""啰嗦"",""罗曼蒂克"",""落花流水"",""落井下石"",""落寞"",""落魄"",""落伍"",""率然"",""率性"",""率真"",""率直"",""麻木"",""麻木不仁"",""马虎"",""马马虎虎"",""马前卒"",""蛮不讲理"",""蛮横"",""满不在乎"",""满腹经纶"",""漫不经心"",""慢条斯理"",""慢吞吞"",""忙碌"",""盲从"",""盲目"",""茫然"",""莽撞"",""毛糙"",""毛手毛脚"",""毛躁"",""矛盾"",""冒失"",""没大没小"",""没谱儿"",""没轻没重"",""没趣"",""没头没脑"",""没心没肺"",""眉清目秀"",""美"",""美好"",""美丽"",""美貌"",""美女"",""媚俗"",""魅惑"",""魅力"",""迷糊"",""迷茫"",""迷人"",""绵里藏针"",""腼腆"",""面黄肌瘦"",""面面俱到"",""面善"",""面子"",""苗条"",""蔑视"",""敏感"",""敏慧"",""敏捷"",""敏锐"",""名不副实"",""名不虚传"",""明辨是非"",""明察秋毫"",""明理"",""明眸"",""明眸皓齿"",""明哲保身"",""明智"",""冥顽"",""磨蹭"",""莫测高深"",""莫名其妙"",""漠不关心"",""漠然"",""墨守成规"",""默默无闻"",""木讷"",""目不识丁"",""目光短浅"",""目光如豆"",""目光如炬"",""目空一切"",""目无全牛"",""目中无人"",""耐看"",""耐心"",""难看"",""囊中羞涩"",""内涵"",""内敛"",""内向"",""能干"",""能力"",""能人"",""能说会道"",""能文能武"",""能言善辩"",""逆反"",""逆来顺受"",""蔫儿坏"",""年富力强"",""年高德劭"",""年轻"",""宁死不屈"",""凝脂"",""牛脾气"",""农民"",""浓艳"",""奴性"",""驽钝"",""努力"",""暖男"",""懦弱"",""女神"",""怕生"",""怕事"",""怕羞"",""拍马屁"",""排斥"",""叛逆"",""胖"",""蓬头垢面"",""疲乏"",""疲劳"",""偏激"",""偏颇"",""偏私"",""偏心"",""偏心眼儿"",""偏执"",""剽悍"",""飘逸"",""漂亮"",""慓悍"",""拼搏"",""拼命"",""贫乏"",""贫寒"",""贫苦"",""贫困"",""贫穷"",""贫嘴"",""贫嘴薄舌"",""品味"",""平等"",""平凡"",""平和"",""平平"",""平实"",""平易近人"",""平庸"",""泼辣"",""婆婆妈妈"",""魄力"",""朴实"",""朴素"",""普通"",""凄惨"",""欺骗"",""其貌不扬"",""奇怪"",""奇葩"",""奇特"",""起早贪黑"",""气场"",""气冲霄汉"",""气派"",""气势汹汹"",""气质"",""迁怒"",""谦卑"",""谦恭"",""谦和"",""谦谦君子"",""谦顺"",""谦虚"",""谦逊"",""虔诚"",""黔驴技穷"",""浅薄"",""浅尝辄止"",""浅见"",""浅陋"",""强词夺理"",""强大"",""强悍"",""强健"",""强弩之末"",""强势"",""强硬"",""强壮"",""憔悴"",""巧妙"",""巧舌如簧"",""俏丽"",""俏皮"",""翘尾巴"",""怯场"",""怯懦"",""怯弱"",""怯生生"",""锲而不舍"",""亲和"",""亲近"",""亲切"",""亲善"",""勤"",""勤奋"",""勤工俭学"",""勤俭"",""勤恳"",""勤快"",""勤劳"",""勤勉"",""青面獠牙"",""轻浮"",""轻贱"",""轻狂"",""轻诺寡信"",""轻佻"",""轻信"",""倾家荡产"",""清白"",""清纯"",""清寒"",""清苦"",""清冷"",""清廉"",""清贫"",""清新"",""清秀"",""情绪化"",""罄竹难书"",""穷"",""穷乏"",""穷苦"",""穷困"",""穷酸"",""囚首垢面"",""曲意逢迎"",""屈才"",""黢黑"",""权威"",""全才"",""全能"",""缺德"",""惹是非"",""惹是生非"",""热忱"",""热诚"",""热情"",""热心"",""热心肠"",""人才"",""人微言轻"",""人云亦云"",""仁爱"",""仁慈"",""仁厚"",""忍耐"",""忍辱负重"",""认生"",""认死理"",""认真"",""任劳任怨"",""任性"",""柔和"",""柔美"",""如雷贯耳"",""如沐春风"",""如鱼得水"",""如坐针毡"",""儒雅"",""乳臭未干"",""软弱"",""睿智"",""弱不禁风"",""弱势"",""弱小"",""弱智"",""撒谎"",""洒脱"",""飒爽"",""三心二意"",""散漫"",""丧尽天良"",""丧心病狂"",""煞气"",""傻"",""傻瓜"",""傻呵呵"",""傻乎乎"",""傻子"",""善感"",""善良"",""善心"",""伤风败俗"",""上进"",""上流"",""上相"",""少不更事"",""奢侈"",""奢华"",""奢糜"",""奢靡"",""蛇蝎"",""舍己为人"",""身败名裂"",""身价"",""身强力壮"",""绅士"",""深沉"",""深谋远虑"",""深情"",""神机妙算"",""神经过敏"",""神经质"",""神秘"",""神气"",""审慎"",""审时度势"",""生龙活虎"",""盛气凌人"",""失礼"",""失信"",""十恶不赦"",""时髦"",""时尚"",""识趣"",""识相"",""实事求是"",""实心眼儿"",""实在"",""拾荒"",""食古不化"",""史无前例"",""世故"",""世俗"",""市侩"",""势利"",""势利眼"",""事半功倍"",""恃才傲物"",""嗜血"",""手腕"",""手足无措"",""守财奴"",""守法"",""守旧"",""守口如瓶"",""守时"",""守信"",""守拙"",""首富"",""瘦弱"",""瘦小"",""书生气"",""淑女"",""鼠辈"",""鼠肚鸡肠"",""鼠目寸光"",""耍滑头"",""耍贫嘴"",""耍心眼儿"",""帅"",""帅气"",""爽快"",""爽朗"",""爽约"",""爽直"",""水滴石穿"",""水性杨花"",""顺从"",""顺眼"",""说谎"",""说一不二"",""思辨"",""斯文"",""死板"",""死脑筋"",""死皮赖脸"",""死气沉沉"",""死心眼儿"",""死有余辜"",""四平八稳"",""肆无忌惮"",""肆意"",""松散"",""俗气"",""素雅"",""素养"",""素质"",""算计"",""随便"",""随波逐流"",""随和"",""随机应变"",""随心所欲"",""随意"",""随遇而安"",""损人"",""损人利己"",""踏实"",""泰然处之"",""泰然自若"",""贪财"",""贪吃"",""贪得无厌"",""贪腐"",""贪官"",""贪婪"",""贪生"",""贪污"",""贪心"",""坦诚"",""坦荡"",""坦率"",""坦然"",""螳臂当车"",""逃避"",""淘气"",""讨人嫌"",""讨嫌"",""讨厌"",""特色"",""啼笑皆非"",""体面"",""体贴"",""倜傥"",""天才"",""天赋"",""天香国色"",""天真"",""天姿国色"",""恬不知耻"",""恬淡"",""恬静"",""甜美"",""挑肥拣瘦"",""挑三拣四"",""挑剔"",""贴心"",""铁公鸡"",""铁面无私"",""铁石心肠"",""铁血"",""听话"",""亭亭玉立"",""挺拔"",""通畅"",""通达"",""通情达理"",""通权达变"",""通透"",""同流合污"",""童心"",""童颜鹤发"",""痛苦"",""投机"",""投其所好"",""秃顶"",""徒有虚名"",""土崩瓦解"",""土豪"",""土气"",""推己及人"",""推脱"",""颓废"",""退缩"",""拖沓"",""拖拉"",""拖泥带水"",""拖延"",""驼背"",""妥协"",""外面儿光"",""外强中干"",""外向"",""外行"",""外圆内方"",""完美"",""玩世不恭"",""顽固"",""顽劣"",""顽皮"",""顽强"",""婉约"",""妄自菲薄"",""妄自尊大"",""忘恩负义"",""威猛"",""威慑"",""威武"",""威严"",""微不足道"",""微贱"",""微弱"",""微小"",""微笑"",""违法乱纪"",""唯利是图"",""唯唯诺诺"",""唯我独尊"",""惟利是图"",""惟我独尊"",""伟大"",""伪君子"",""伪善"",""萎靡"",""卫生"",""为非作歹"",""未雨绸缪"",""畏难"",""畏怯"",""畏首畏尾"",""畏缩"",""温和"",""温厚"",""温良"",""温暖"",""温柔"",""温顺"",""温吞"",""温文尔雅"",""温驯"",""文化"",""文静"",""文明"",""文气"",""文弱"",""文雅"",""文质彬彬"",""文绉绉"",""闻达"",""稳健"",""稳扎稳打"",""稳重"",""窝囊"",""窝囊废"",""我行我素"",""龌龊"",""污言秽语"",""无耻"",""无敌"",""无恶不作"",""无法无天"",""无精打采"",""无可奈何"",""无赖"",""无理"",""无理取闹"",""无力"",""无聊"",""无名小卒"",""无奈"",""无能"",""无情"",""无声"",""无事生非"",""无私"",""无所不为"",""无所事事"",""无所适从"",""无所作为"",""无微不至"",""无为"",""无畏"",""无语"",""无知"",""无足轻重"",""妩媚"",""武断"",""务实"",""西施"",""嬉皮笑脸"",""喜怒无常"",""喜新厌旧"",""细嫩"",""细腻"",""细心"",""细致"",""侠义"",""狭隘"",""下等"",""下贱"",""下流"",""下三滥"",""下作"",""先见之明"",""先进"",""纤弱"",""闲人"",""贤良"",""贤明"",""贤能"",""娴静"",""娴熟"",""显赫"",""险诈"",""现实"",""羡慕"",""享乐主义"",""像样"",""骁悍"",""骁勇"",""消沉"",""消极"",""消瘦"",""潇洒"",""嚣张"",""小聪明"",""小肚鸡肠"",""小家子气"",""小气"",""小巧玲珑"",""小人"",""小手小脚"",""小题大做"",""小心眼儿"",""孝顺"",""笑里藏刀"",""笑面虎"",""邪恶"",""懈怠"",""心不在焉"",""心慈手软"",""心狠手辣"",""心机"",""心宽"",""心灵"",""心灵手巧"",""心明眼亮"",""心平气和"",""心软"",""心细"",""心猿意马"",""心直口快"",""辛苦"",""辛勤"",""新潮"",""新手"",""信得过"",""信口雌黄"",""信口开河"",""惺惺作态"",""行尸走肉"",""形单影只"",""兴妖作怪"",""幸福"",""幸运"",""性感"",""性急"",""凶巴巴"",""凶恶"",""凶悍"",""凶狠"",""凶横"",""凶狂"",""凶猛"",""胸无点墨"",""雄才大略"",""修养"",""羞答答"",""羞怯"",""羞涩"",""羞羞答答"",""秀色可餐"",""秀外慧中"",""虚怀若谷"",""虚假"",""虚名"",""虚荣"",""虚弱"",""虚伪"",""虚心"",""虚张声势"",""煊赫"",""悬梁刺股"",""学霸"",""学富五车"",""雪白"",""雪中送炭"",""血气方刚"",""循规蹈矩"",""徇私"",""压抑"",""严格"",""严谨"",""严苛"",""严酷"",""严厉"",""严肃"",""言必有中"",""言不及义"",""言不由衷"",""言过其实"",""眼高手低"",""眼疾手快"",""眼力见儿"",""厌恶"",""厌世"",""厌学"",""艳俗"",""阳奉阴违"",""阳刚"",""阳光"",""仰慕"",""养尊处优"",""吆五喝六"",""妖媚"",""妖艳"",""腰缠万贯"",""要面子"",""野性"",""业余"",""叶公好龙"",""夜郎自大"",""一板一眼"",""一本正经"",""一表人才"",""一成不变"",""一根筋"",""一家之言"",""一蹶不振"",""一流"",""一毛不拔"",""一鸣惊人"",""一贫如洗"",""一穷二白"",""一身是胆"",""一手遮天"",""一丝不苟"",""一文不名"",""一无是处"",""一无所有"",""一言九鼎"",""衣冠楚楚"",""依赖"",""遗臭万年"",""以身作则"",""以怨报德"",""倚老卖老"",""义气"",""异味"",""抑郁"",""意气风发"",""毅力"",""因循守旧"",""阴沉"",""阴毒"",""阴柔"",""阴险"",""阴阳怪气"",""阴郁"",""殷富"",""殷勤"",""殷实"",""淫荡"",""淫乱"",""淫猥"",""英俊"",""英明"",""英武"",""英勇"",""颖悟"",""硬朗"",""庸碌"",""庸俗"",""雍容"",""慵懒"",""勇"",""勇敢"",""勇悍"",""勇猛"",""勇往直前"",""勇武"",""用功"",""用心"",""优等"",""优厚"",""优良"",""优美"",""优柔"",""优柔寡断"",""优秀"",""优雅"",""忧愁"",""忧郁"",""幽默"",""幽雅"",""犹疑"",""犹豫"",""油滑"",""油腻"",""油腔滑调"",""油嘴滑舌"",""游手好闲"",""友爱"",""友好"",""友善"",""有的放矢"",""有礼"",""有力"",""有名"",""有名无实"",""有目共睹"",""有谱儿"",""有气无力"",""有趣"",""有始有终"",""有恃无恐"",""有条不紊"",""有头有脸"",""有为"",""有眼无珠"",""有种"",""幼稚"",""诱人"",""迂腐"",""迂阔"",""迂拙"",""愉悦"",""愚笨"",""愚不可及"",""愚痴"",""愚蠢"",""愚钝"",""愚昧"",""愚拙"",""与人为善"",""羽毛未丰"",""语无伦次"",""玉洁冰清"",""渊博"",""圆滑"",""圆润"",""远见"",""匀称"",""杂乱"",""仔细"",""脏"",""造作"",""择善而从"",""贼眉鼠眼"",""贼头贼脑"",""扎实"",""宅"",""宅男"",""债台高筑"",""瞻前顾后"",""崭露头角"",""占便宜"",""张狂"",""张扬"",""獐头鼠目"",""长袖善舞"",""仗义"",""着调"",""贞洁"",""真诚"",""真率"",""真实"",""真心"",""真挚"",""镇定"",""镇静"",""争面子"",""挣扎"",""狰狞"",""铮铮"",""整洁"",""正常"",""正大光明"",""正当"",""正当年"",""正点"",""正经"",""正经八百"",""正派"",""正气"",""正人君子"",""正颜厉色"",""正义"",""正直"",""知情达理"",""知趣"",""知书达理"",""知性"",""知足"",""执拗"",""执着"",""执著"",""直肠子"",""直接"",""直截了当"",""直觉"",""直率"",""直爽"",""直心眼儿"",""直性"",""直性子"",""只言片语"",""趾高气扬"",""至诚"",""志大才疏"",""志同道合"",""质朴"",""智慧"",""稚气"",""稚拙"",""中规中矩"",""中肯"",""中庸"",""中用"",""忠"",""忠诚"",""忠厚"",""忠良"",""忠实"",""忠顺"",""忠心"",""忠义"",""忠勇"",""忠贞"",""钟灵毓秀"",""众叛亲离"",""周到"",""周密"",""周全"",""皱纹"",""珠圆玉润"",""主动"",""主观"",""主见"",""著名"",""专断"",""专横"",""专一"",""专注"",""庄严"",""庄重"",""装模作样"",""装腔作势"",""壮观"",""壮健"",""壮阔"",""壮丽"",""壮烈"",""壮实"",""追求"",""准时"",""拙笨"",""拙劣"",""捉襟见肘"",""卓越"",""自傲"",""自暴自弃"",""自卑"",""自闭"",""自吹自擂"",""自大"",""自负"",""自高自大"",""自告奋勇"",""自豪"",""自控"",""自夸"",""自力更生"",""自立"",""自恋"",""自律"",""自满"",""自命不凡"",""自谦"",""自强"",""自然"",""自食其力"",""自私"",""自私自利"",""自我"",""自信"",""自以为是"",""自由"",""自怨自艾"",""自知之明"",""自制"",""自主"",""自作多情"",""走心"",""走运"",""足智多谋"",""钻牛角尖"",""嘴紧"",""嘴快"",""嘴稳"",""罪不容诛"",""罪大恶极"",""罪恶"",""罪有应得"",""醉生梦死"",""尊贵"",""尊重"",""左右逢源"",""作"",""作怪"",""作威作福"",""坐井观天"",""坐享其成"",""做作"];
    return ["强弩之末","淳朴","损人","粗豪","偏心","锲而不舍","天香国色","贫苦","轻狂","平凡","凄惨","狠心","可悲","清白","刚愎自用","勇猛","凶狠","有名无实","情绪化","丑","利索","守旧","利欲熏心","过激","丧尽天良","穷苦","一无所有","贫寒","不修边幅","伤风败俗","苗条","好看","伪善","贫困","低迷","孝顺","自私","默默无闻","怯懦","表里如一","狂妄","牛脾气","迂拙","违法乱纪","畏难","正气","虚心","一毛不拔","傻子","老到","低级","一贫如洗","才高八斗","鼠肚鸡肠","强硬","内敛","可恨","鬼灵精","心直口快","爱国","泰然处之","细嫩","傻","温良","正当年","白痴","狡诈","单纯","自以为是","秀色可餐","穷困","愚蠢","张狂","好色","邋遢","丑八怪","真实","笨手笨脚","囚首垢面","傻乎乎","不可理喻","三心二意","无足轻重","无法无天","身价","醉生梦死","好逸恶劳","文明","不可一世","素养","高昂","狡黠","操之过急","亲善","腰缠万贯","放浪","痴情","刁蛮","文化","虚名","黑","差劲","壮健","宁死不屈","其貌不扬","没谱儿","看风使舵","嘴紧","淡泊","优等","犹疑","泼辣","和蔼","尽责","通畅","不三不四","博闻强识","强大","崇高","笨嘴拙舌","大大咧咧","圆润","典雅","新潮","半路出家","鹤立鸡群","放浪形骸","形单影只","中规中矩","无名小卒","苛刻","冷静","矮","油滑","无理","兢兢业业","纯真","聪慧","威武","光彩","丧心病狂","徒有虚名","不足挂齿","疲劳","变通","恶煞","淫猥","花容月貌","愚笨","悍勇","嚣张","白净","美好","温顺","一根筋","举一反三","狼心狗肺","不行","疲乏","粗壮","厌世","淫乱","节俭","简单","低档","礼贤下士","随遇而安","变态","虔诚","罗曼蒂克","谦逊","简朴","优美","讨嫌","自我","居心叵测","激情","霸道","推己及人","内涵","体面","敬佩","匀称","名不虚传","著名","风骚","纯粹","清贫","痛苦","百依百顺","仁爱","阳奉阴违","下三滥","够格","老好人","爽快","恶心","疯狂","开明","矫饰","有名","能言善辩","高洁","阴阳怪气","骨感","耐看","死气沉沉","恭敬","性感","杰出","朝秦暮楚","装腔作势","显赫","阔气","依赖","犹豫","腐败","心平气和","诚笃","奋发图强","君子","机智","豪横","清寒","老谋深算","愚拙","明理","一板一眼","德高望重","脏","瞻前顾后","美","说谎","暴躁","果敢","好大喜功","幼稚","奸邪","历练","烦人","飞扬跋扈","放纵","气势汹汹","奋发","明辨是非","一家之言","拖泥带水","朝气","才疏学浅","乐天","嘴快","准时","得寸进尺","美丽","一无是处","有条不紊","怀才不遇","木讷","天姿国色","教师","利落","肥胖","一文不名","书生气","秀外慧中","骁勇","自满","勤恳","悲天悯人","坦荡","健忘","坚定","通达","灵透","投机","忠厚","听话","可亲","无恶不作","抠门儿","风华正茂","淡定","妒忌","阴沉","感性","健康","壮阔","谦顺","热诚","老成持重","慧黠","多心","绰约","病态","婉约","不轨","安静","可怜","勇武","贫乏","玉洁冰清","浓艳","厌学","口是心非","足智多谋","机灵","康健","颠倒是非","煊赫","真心","秉正","恶毒","狐朋狗党","兴妖作怪","自恋","浅见","扎实","阴毒","恪尽职守","笑面虎","敏感","不着边际","胆怯","美女","浅薄","好强","面善","胡子拉碴","夸张","学霸","居安思危","恶劣","贫嘴薄舌","一穷二白","得心应手","蠢头蠢脑","正当","不伦不类","和顺","爽朗","刻板","羞答答","上流","野性","主观","冥顽","刻薄","优厚","因循守旧","潇洒","微不足道","志同道合","寒碜","愚钝","蠢笨","衣冠楚楚","有种","跟风","结巴","性急","蛮不讲理","鲁直","倔头倔脑","沆瀣一气","奸险","灰头土脸","不拘小节","矮小","浑浑噩噩","刻苦","清冷","欺骗","孤单","娇柔","家徒四壁","目无全牛","多事","财大气粗","拘谨","摆阔","有谱儿","俏丽","偏颇","潦倒","随和","严格","不自量力","卑贱","拼搏","奢糜","困苦","顽劣","壮丽","鄙吝","诙谐","挺拔","固步自封","轻信","用功","有趣","颖悟","艰苦","现实","黑黢黢","特色","吹毛求疵","节约","喜怒无常","卑俗","智慧","笑里藏刀","大意","獐头鼠目","讲究","怯弱","华贵","如雷贯耳","不公","善心","尖酸刻薄","过气","急功近利","勤","坦然","结实","手足无措","奸诈","紧张","执拗","不孝","独立","忍耐","口才","妖艳","直爽","知足","滑头滑脑","麻木","专一","涵养","贴心","忠实","眼力见儿","张扬","信得过","一身是胆","老当益壮","严酷","恬不知耻","骄奢淫逸","教授","独当一面","浪漫","毛糙","率直","莫名其妙","别无长物","阴险","高挑儿","不学无术","不苟","爱搭不理","贼眉鼠眼","务实","歹毒","唯唯诺诺","以身作则","庸碌","胸无点墨","力争上游","盛气凌人","毛躁","鄙俗","着调","幽雅","正派","罪恶","马虎","庸俗","孤独","妄自尊大","土豪","文雅","合群","腼腆","随心所欲","憨实","喜新厌旧","土气","热情","任劳任怨","低端","整洁","识相","龌龊","认死理","卑微","膀大腰圆","贤明","钢筋铁骨","不懈","不卑不亢","信口雌黄","旷达","文气","口若悬河","绅士","讳疾忌医","奇怪","广博","对答如流","蛮横","焦虑","滑稽","细心","痴心","神经质","拖延","优秀","奉公守法","作威作福","小气","安分守己","深情","不凡","孤高","短视","胆大包天","出息","人微言轻","谨言慎行","挥霍","富裕","率然","豪气","好事","乐善好施","登堂入室","素雅","周密","文质彬彬","糊涂","记恨","怕羞","轻贱","凝脂","自知之明","乐观","虎头蛇尾","狭隘","公然","羞涩","阿谀","残毒","裹足不前","老派","勤工俭学","义气","大有可为","较真儿","心灵手巧","斤斤计较","独具匠心","矫情","执著","盲目","新手","铁公鸡","世俗","刚正不阿","放荡","粗浅","老气","拍马屁","黢黑","窝囊","烦躁","坚持","惰 ","学富五车","卫生","混乱","冒失","正常","说一不二","时髦","普通","尊贵","刚直","果断","压抑","贼头贼脑","唯我独尊","道貌岸然","浅陋","严苛","持重","强势","年轻","叶公好龙","魅力","小手小脚","不名一文","文静","草率","姣好","执着","狰狞","乖巧","无知","精明","独裁","残忍","债台高筑","大逆不道","自主","守口如瓶","勤劳","弱智","莽撞","渊博","有礼","枯燥","尽善尽美","客观","率性","拙笨","咄咄逼人","无事生非","爽约","笔挺","走心","过分","活泼","平庸","困难","用心","实在","粗暴","无所作为","守信","贤能","温暖","忠心","干脆","发愤图强","低下","光鲜","以怨报德","孤芳自赏","安定","言过其实","言不及义","志大才疏","自大","贫嘴","迷糊","秃顶","拐弯抹角","心明眼亮","拖拉","果决","小题大做","首富","主见","弱势","笨头笨脑","无可奈何","俭约","倜傥","丑恶","脚踏实地","盲从","老于世故","吝啬","面面俱到","机巧","忠诚","高谈阔论","刻毒","直接","西施","苛责","高效","横行霸道","赤诚","斯文","宽容","算计","淘气","谦虚","笔直","公允","鲁莽","博识","高屋建瓴","猖狂","直率","快乐","啼笑皆非","周全","宽厚","爱面子","好为人师","魄力","微弱","克己","进取","时尚","老实","拘束","钟灵毓秀","不羁","恳挚","财富","奋勇","笨口拙舌","能人","稳扎稳打","妩媚","博士","低人一等","互助","守拙","择善而从","慈悲","胆大妄为","窝囊废","十恶不赦","俊秀","差生","如鱼得水","理性","困窘","朝三暮四","俭省","朴实","通情达理","自由","可恶","好说话","优柔","交际花","傻呵呵","好客","审慎","举足轻重","迷茫","孤苦伶仃","霸气","褴褛","本分","吃得开","富贵","粗糙","有气无力","靓丽","和善","昏庸","孩子气 ","混账","憔悴","廉正","挥金如土","被动","礼貌","心猿意马","惺惺作态","抑郁","细致","善感","出口成章","碍事","低劣","玩世不恭","负心","粗俗","劳苦功高","愣头愣脑","狂放","垃圾","拔尖儿","大方","达观","愚痴","尽职","言必有中","倚老卖老","理智","大无畏","穷","沉闷","败家","博闻强记","狡辩","饭桶","童心","不善","薄幸","挣扎","自吹自擂","无力","干练","惊艳","枯木逢春","懂行","独特","皱纹","完美","逃避","小肚鸡肠","好心","坚毅","随机应变","落花流水","井底之蛙","神气","负责","镇静","笨重","自命不凡","凶横","不择手段","嬉皮笑脸","正经八百","沮丧","天才","局促","刚烈","利己","虚怀若谷","贪心","不安","庄重","无理取闹","纠结","浮躁","胆小鬼","尖嘴薄舌","精打细算","公道","幽默","退缩","神秘","无情","铮铮","诚恳","洒脱","豁达","贫穷","享乐主义","丢面子","优良","友爱","清纯","别扭","练达","拼命","矛盾","不甘寂寞","有眼无珠","死心眼儿","廉明","谦谦君子","敏慧","屈才","微笑","事半功倍","胡说","知书达理","坚强","光彩照人","罪大恶极","蔑视","迟钝","刚强","窘迫","冷眼","外强中干","婀娜","气质","奸猾","如沐春风","呆子","年高德劭","气派","见钱眼开","难看","高深","闲人","独善其身","鬼头鬼脑","正义","忠义","无敌","挑三拣四","亲和","正大光明","大气","名不副实","畏首畏尾","保守","明哲保身","恶狠狠","面黄肌瘦","粗心","神经过敏","思辨","不贰过","凶悍","蓬头垢面","全才","崭露头角","自然","顶级","怜悯","娴熟","端正","可敬","有恃无恐","全能","严肃","赖皮","老气横秋","忙碌","沉静","呆若木鸡","乖张","动人心魄","宽大","出类拔萃","磕磕绊绊","无精打采","矫健","坚贞","粗枝大叶","见异思迁","离谱儿","一丝不苟","下贱","满不在乎","诡诈","粗手笨脚","害羞","自闭","老奸巨猾","雪白","不端","阳刚","记仇","厌恶","辛苦","肆无忌惮","顽固","一表人才","偏心眼儿","娇娆","知情达理","婆婆妈妈","禁欲","俏皮","明眸","奇特","内向","悲惨","跋扈","猜疑","奇葩","背叛","长袖善舞","无声","胡作非为","敏锐","孱弱","标新立异","短小精悍","眉清目秀","察言观色","正直","明智","身败名裂","勇往直前","知性","贪腐","刚毅","随意","低调","伟大","守时","骁悍","孤陋寡闻","聪颖","娴静","热心肠","凶狂","强壮","雄才大略","随便","克勤克俭","瘦弱","敬业","体贴","软弱","笨拙","殷勤","口蜜腹剑","草根","家喻户晓","贵气","故弄玄虚","机警","寡言","和气","病弱","懒惰","客气","寡情","出尔反尔","开朗","残虐","自强","活跃","急公好义","一鸣惊人","正点","纤弱","精益求精","顾家","激进","浮夸","虚荣","直截了当","温柔","认生","骄横","茫然","甜美","吵人","拜金","了不得","奢华","饱经风霜","壮烈","娇媚","黑心","公平","健壮","羽毛未丰","铁石心肠","囊中羞涩","像样","专横","老道","铁血","怕生","冷傲","作","友善","无语","八面玲珑","患得患失","铁面无私","焦躁","幸运","穷酸","逆来顺受","专断","大度","无赖","自傲","插科打诨","尖嘴","高风亮节","丢三落四","沉鱼落雁","荒唐","消瘦","沉着","安分","拮据","从容","美貌","固执","怠惰","肤浅","肮脏","急躁","远见","通权达变","强健","英武","粗鄙","与人为善","大义凛然","怕事","严厉","有的放矢","一言九鼎","呆板","偏激","仗义","规矩","勤俭","奢靡","可贵","狗腿子","自食其力","附庸风雅","纯朴","目光短浅","谦卑","懒骨头","先见之明","市侩","开放","勤勉","弱小","装模作样","傻瓜","懒散","痴呆","英俊","轻诺寡信","一成不变","暖男","慧眼","巨富","守法","农民","耍贫嘴","目光如炬","节制","罪有应得","暴虐","沉默","诚信","传统","心慈手软","心软","诚挚","憨直","害人虫","可鄙","坚忍","人云亦云","颓废","淑女","欢快","忠勇","忘恩负义","顶事","高妙","堕落","平等","大手大脚","养尊处优","小家子气","积极","损人利己","主动","亲切","撒谎","消极","地道","气冲霄汉","爽直","灵光","呆滞","蛇蝎","威猛","蔫儿坏","可靠","耳聪目明","深谋远虑","飘逸","摆谱儿","苛求","丢盔弃甲","自高自大","稚拙","水滴石穿","虚伪","复杂","勤奋","心宽","闻达","冷若冰霜","岸然","高大","功成名就","没轻没重","惹是生非","艳俗","俊俏","豪迈","忠贞","护短","趾高气扬","残暴","坚韧","粗犷","风云人物","多疑","合作","卑下","精细","媚俗","虚张声势","丑陋","油腔滑调","不识抬举","卑鄙","怯场","安生","淡漠","轻佻","才华","平和","勇悍","窘促","目光如豆","无私","雍容","英勇","精明强干","自立","成熟","嘴稳","羞怯","平易近人","顶天立地","高贵","大智若愚","落魄","虎背熊腰","为非作歹","热忱","上相","气场","直性子","如坐针毡","要面子","精英","安贫乐道","审时度势","愚昧","唠叨","妖媚","外行","懂事","殷实","轻浮","粗率","消沉","古板","夸夸其谈","唱反调","别有用心","奉献","业余","胡说八道","娇滴滴","水性杨花","仰慕","敏捷","伪君子","精神","挑肥拣瘦","硬朗","漠然","不堪","不仁","吆五喝六","呆傻","坐井观天","宽宏大量","没心没肺","个性","一流","面子","率真","高","六神无主","舍己为人","悬梁刺股","娇生惯养","先进","靓女","语无伦次","自谦","飒爽","雪中送炭","冷漠","自私自利","能文能武","啰唆","粗笨","笨蛋","忠","畏怯","正颜厉色","精致","造作","温驯","清秀","努力","聪敏","罄竹难书","起早贪黑","黑黝黝","半吊子","端庄","傲","宽宏","走运","土崩瓦解","羞羞答答","才学","猜忌","心不在焉","殷富","鬼鬼祟祟","无微不至","纯情","贪婪","多情","小心眼儿","花心","没头没脑","呆头呆脑","贪污","中用","强悍","猴儿精","淳厚","萎靡","计较","高傲","了不起","偏私","散漫","宠辱不惊","壮实","摆架子","诚朴","童颜鹤发","浪荡","鼠辈","泰然自若","狡猾","文弱","清苦","慷慨","胡搅蛮缠","未雨绸缪","老练","壮观","灵敏","真率","浅尝辄止","残酷","鄙陋","贪官","素质","废物","多才多艺","愚不可及","得过且过","无所适从","冲动","势利眼","俊美","目不识丁","通透","包容","极端","忽悠","油嘴滑舌","狼狈","慈爱","真挚","仔细","心狠手辣","挑剔","自卑","假惺惺","出众","身强力壮","顽皮","泾渭分明","狷介","骄傲","寒酸","仁厚","小聪明","眼高手低","死脑筋","光明","慵懒","讲理","煞气","闭月羞花","目中无人","诱人","博学","稳健","够意思 ","溜须拍马","鼠目寸光","直觉","拖沓","周到","微小","镇定","懦弱","倾家荡产","惹是非","无为","羸弱","直肠子","背信弃义","纯洁","异味","瘦小","做作","眼疾手快","缺德","低俗","朴素","毅力","珠圆玉润","忠良","识趣","凌乱","官僚","诚实","投其所好","鹤发童颜","行尸走肉","文绉绉","驾轻就熟","多虑","教养","靠谱儿","荒淫","大有作为","下作","众叛亲离","光明正大","颤颤巍巍","自信","坦诚","阔绰","巧妙","排斥","坦率","六亲不认","愉悦","丹心","妄自菲薄","小人","稚气","守财奴","有力","虚弱","娇艳","平实","短浅","驽钝","睿智","豪放","肝胆相照","年富力强","凛然","不肖","冰冷","帅气","克制","卑污","逆反","女神","食古不化","谦恭","乳臭未干","贪财","死板","史无前例","乖戾","剽悍","顶尖","随波逐流","贤良","愤世嫉俗","成功","彪悍","能干","信口开河","困顿","亭亭玉立","心细","低层","有始有终","自律","正经","精壮","魅惑","坎坷","酷炫","不可救药","二把刀","低贱","两肋插刀","奔放","口吃","玲珑","碍眼","富有","落井下石","自控","贪得无厌","狠毒","侠义","勇","目空一切","慢吞吞","急性子","严谨","认真","慈祥","风趣","英明","多愁善感","实心眼儿","死有余辜","下流","马马虎虎","曲意逢迎","怯生生","洁身自好","厚道","黯淡","谨慎","遗臭万年","憨厚","老成","上进","百折不挠","叛逆","孤傲","有头有脸","手腕","耿介","机变","害群之马","贪吃","刚正","伶俐","独辟蹊径","机伶","吊儿郎当","贪生","公正","温和","人才","中庸","满腹经纶","从容不迫","正人君子","风流","干才","自豪","至诚","质朴","才能","忠顺","忍辱负重","自力更生","肚量","奢侈","落伍","温吞","墨守成规","凶猛","毛手毛脚","老马识途","明察秋毫","磨蹭","弱不禁风","卑劣","宅男","慢条斯理","柔美","华而不实","恶贯满盈","廉洁","绵里藏针","残缺","黔驴技穷","尊重","杂乱","自夸","罪不容诛","讨厌","绝情","过人","粗鲁","自负","拙劣","老诚","放肆","一蹶不振","鞠躬尽瘁","自告奋勇","愤怒","平平","干净","机敏","实事求是","污言秽语","无奈","低沉","阳光","凶恶","恬静","耍滑头","松散","暴力","灵巧","健谈","粗线条","世故","高瞻远瞩","天赋","优柔寡断","外面儿光","翘尾巴","惟我独尊","无所事事","矜持","超群","亲近","博导","迷人","逞能","安详","强词夺理","豪爽","服从","不良","靠不住","老辣","神机妙算","细腻","急进","清新","无畏","自作多情","虚假","厉害","四平八稳","顺从","迟缓","窘困","独树一帜","优雅","伶仃","无聊","花拳绣腿","低能","游手好闲","冷淡","锋芒毕露","外向","低等","温厚","儒雅","谄媚","两袖清风","可憎","直心眼儿","热心","惟利是图","任性","狂躁","矫捷","孤僻","吉人天相","赤胆忠心","阴柔","胡闹","忧愁","健美","踏实","柔和","偏执","友好","莫测高深","贞洁","谦和","独断","无能","丰腴","势利","卓越","苟且","庄严","靠得住","邪恶","高手","耐心","灵性","暴戾","落寞","幸福","徇私","肯干","心灵","敦实","乖僻","高尚","能力","嗜血","知趣","善良","同流合污","羡慕","左右逢源","一本正经","好奇","大公无私","富豪","富足","假仁假义","淫荡","漂亮","低三下四","能说会道","奴性","下等","害臊","乏味","迂阔","可爱","仁慈","勇敢","唯利是图","低声下气","迁怒","生龙活虎","讨人嫌","聪明","恬淡","赶时髦","财迷心窍","辛勤","尖锐","高雅","疾恶如仇","夜郎自大","薄情","凶巴巴","妥协","推脱","钻牛角尖","毕恭毕敬","慓悍","畏缩","富翁","敦厚","威慑","死皮赖脸","差","冰清玉洁","乐天知命","出色","恃才傲物","多谋善断","勤快","白","纯良","失信","鲁钝","狂暴","过河拆桥","血气方刚","我行我素","好高骛远","争面子","调皮","肆意","国色天香","两面三刀","漠不关心","矫揉造作","高明","天真","得当","博爱","巧舌如簧","敷衍","健朗","吃不开","伶牙俐齿","自暴自弃","高不可攀","深沉","俗气","失礼","高层","尖酸","清廉","拾荒","悲观","病病歪歪","初出茅庐","顺眼","循规蹈矩","滑头","品味","怪里怪气","作怪","明眸皓齿","耍心眼儿","青面獠牙","疯疯癫癫","一手遮天","古怪","有为","好胜","没趣","心机","意气风发","只言片语","忧郁","自制","狂野","油腻","耿直","直性","懈怠","自怨自艾","顽强","光明磊落","艰难","少不更事","当机立断","外圆内方","坐享其成","圆滑","寡廉鲜耻","漫不经心","占便宜","尖嘴猴腮","啰嗦","修养","狡狯","穷乏","螳臂当车","武断","小巧玲珑","中肯","险诈","搬弄是非","逞强","阴郁","底层","博古通今","见利忘义","不近人情","高人一等","无耻","冷酷","傲慢","脆弱","聪悟","冷血动物","可怕","含蓄","威严","俭朴","悲哀","言不由衷","蠢","没大没小","驼背","无所不为","麻木不仁","权威","帅","宅","温文尔雅","懒","微贱","沉稳","苍老","追求","敞亮","真诚","有目共睹","粗莽","稳重","迂腐","捉襟见肘","专注","马前卒","横暴","精干","反叛","斗心眼儿","领导","胖"]
}