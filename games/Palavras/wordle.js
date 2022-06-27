var height = 6; // Número de tentativas
var width = 5; // Número de letras

var row = 0; // Tentativa atual
var col = 0; // Letra atual da tentativa

var gameOver = false
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

var wordList = ["aonde","apago","apaga","aparo","apego","banir","enfio","enfim","enfie","enfia","baniu","barro","barra","bares","bardo","anzol","barco","barca","barba","bases","comum","arroz","acabo","acabe","acaba","abuso","abuse","abusa","circo","canas","canal","campo","camas","banco","banca","banal","bambu","mexer","Fudeu","Sarra","Nossa","senso","afeto","sutil","audaz","termo","nobre","fazer","vigor","lapso","negro","ideia","genro","desde","posse","poder","comia","comeu","comes","comer","comem","comei","comas","comam","colou","colhê","colho","colhi","colhe","colha","coles","colem","colei","colas","colar","colam","coisa","coice","cofre"];

var guessList = ["algoz","êxito","sagaz","âmago","mexer","senso","afeto","sutil","inato","cerne","mútuo","audaz","porém","termo","nobre","aquém","ímpio","fazer","seção","vigor","lapso","negro","ideia","genro","desde","posse","fútil","atroz","razão","torpe","expor","ânimo","honra","detém","ardil","gleba","ânsia","ética","poder","ávido","sanar","atrás","pífio","muito","dizer","gesto","digno","corja","justo","tenaz","ceder","anexo","fugaz","vivaz","porra","óbice","cozer","coser","revés","assim","hábil","moral","dever","ébrio","comum","afago","fluir","vício","causa","ontem","censo","reaça","sério","citar","impor","seara","enfim","prole","cisma","pudor","neném","brado","álibi","regra","gerar","égide","obter","louco","crise","pesar","tênue","saber","probo","tenro","pleno","então","viril","óbvio","quiçá","ápice","parvo","bruma","favor","visar","temor","sinto","sábio","denso","tange","desse","reter","jeito","haver","sobre","apraz","senil","sonho","seria","labor","fusão","óbito","usura","criar","culto","temer","rogar","manso","ameno","êxodo","adiar","juízo","presa","revel","forma","clava","birra","pedir","prosa","vácuo","mundo","dogma","estar","fator","tempo","servo","árduo","falar","varão","farsa","mútua","acaso","pulha","forte","falta","cunho","ainda","exato","grato","etnia","fluxo","amplo","saúde","achar","feixe","guisa","assaz","mágoa","parco","caçar","doido","prumo","laico","atuar","feliz","tomar","reles","ritmo","herói","lavra","praxe","haste","noção","vital","cruel","débil","deter","levar","amigo","casal","gozar","graça","matiz","visão","anuir","crivo","finjo","algum","devir","chulo","dúbio","beata","ordem","certo","rigor","saída","sesta","épico","casta","leito","bravo","capaz","vulto","lâmia","salvo","sulco","acima","relva","vênia","mesmo","dorso","possa","cisão","valha","único","peste","valor","fugir","vasto","coisa","valia","tecer","garbo","banal","puxar","sendo","dócil","reger","furor","pobre","árido","igual","maior","breve","ativo","ouvir","senão","falso","selar","velar","anelo","casto","horda","áureo","fitar","viver","olhar","boçal","toada","pompa","morar","gerir","sumir","cópia","voraz","fácil","cabal","leigo","morte","tédio","noite","remir","moção","homem","coeso","união","segue","prece","avião","vimos","coçar","vendo","terno","cesta","tende","venal","aceso","peixe","vazio","claro","sonso","pardo","mesma","façam","motim","hiato","série","pauta","passo","bando","virão","senda","velho","grave","opção","ótica","anciã","rever","saruê","imune","houve",
"salve","Citar","Cesso","Bisca","Fadem","Fluxo","Verbo","Anelo","Cabal","Capaz","Sumam","Bague","Terão","Havia","Insta","Deste","ídolo","íamos","Temos","V.sa.","Turba","Bugar","Saído","Suave","Prosa","Pampa","ávida","Xucra","Cisão","Garbo","Denso","Leigo","Posse","Pajem","Autos","Ideal","Peita","Truta","Tê-lo","Desse","Lidar","Manas","Vezes","Vilão","Ornar","Atado","Grupo","Corno","Jeito","Má-fé","Ganja","Ameno","Cioso","União","Sussa","Estar","Rosca","Tenro","Torou","Fucei","Oxalá","Irada","Lábia","Pazes","Gerir","Judeu","Pecha","Atido","Grosa","Amuou","Riste","Alado","Linda","Clava","Pugna","Inato","Mouro","único","Topei","Detém","Reset","Senda","Lorde","Mosto","Picar","Cenho","Ladra","Tiver","Culta","Torpe","Laudo","Pinto","Cedeu","Valia","Texto","Grude","Tição","Pacto","Nobre","Santo","Rusga","Paúra","Tenaz","Zumbi","àtoa","Torso","Passe","Justo","Tiete","Caída","Ponha","Saite","Manha","Trama","Tédio","Grife","Tarar","Tribo","Advir","Alude","ícone","Feito","Aluno","Golfo","Douto","Igual","Findo","Pimba","Irmão","Legue","Algia","Fruir","Fundo","Facho","Versa","Exime","Fórum","Shaft","Revés","Detêm","Bossa","Tônus","Remir","Cunhã","Amigo","Afeto","Turbe","Ouvem","Urubu","Comum","Falsa","Mesmo","Frase","Brisa","Andes","Tecer","Possa","Fumar","Galam","Sabão","Hamsá","álibi","Sonsa","Guisa","Venal","Cousa","Istmo","Orixá","Cumim","Enfim","Praza","Marco","Serem","Baguá","Assim","Males","Queda","Axial","Dócil","Quota","Legou","Lavra","Sábia","índex","Deusa","Catzo","Gabar","Sarar","Ancas","Serra","óbvio","Dever","Risco","Seara","Poser","Obrar","Séria","Blefe","Vivaz","Jájá","Amena","Núbil","Enema","Amado","Idéia","Porém","Avexe","Logos","Focar","Logre","Swing","Vasto","Audaz","Combo","Ferra","Intra","Gênio","Fadar","Butim","Trupé","Feita","Tenso","Campo","Sejam","Corre","Bruto","Abate","Veado","êmese","Seria","Mexer","Ferpa","Ralou","Temer","Velho","Piava","órgão","Sanha","Opaco","Putão","Fator","Podem","Mirra","Reles","Logro","Comer","Sheik","ótica","Fácil","Vulva","Terno","Lavro","Buliu","Saque","Lazer","Leste","Amplo","Salmo","Seção","Parsa","Ohana","Sabem","Vagal","Haver","Gamar","Bugre","Farpa","Brejo","Adeus","Zuado","Bucha","Gleba","árduo","Draga","Broto","Força","Servo","Mossa","ético","Ainda","Punha","Letal","Gorar","Pasma","Rimes","Ordem","Cocar","Valor","Setor","Pleno","Dação","Miose","Díade","Sorva","Crise","Pólis","Ileso","Viram","Pesar","Oásis","Baila","Parca","Apraz","Minha","Tábua","Bruxa","Vivia","Ficar","Busca","Vital","Infra","Puxar",
"Estio","Livro","Mongo","Banza","Tongo","Bando","Calço","Passa","Parvo","Porão","Soldo","Inter","Sarau","Gloso","Dados","Trela","Saída","Fores","Resma","Baque","Manso","Gomem","Fudeu","Sarra","Nossa","Plaga","ânsia","Folga","Dildo","Lerda","Traga","Fugir","Impor","Relou","Cargo","Braba","Ameba","Staff","Efatá","Bucho","Gomar","Labor","Gosto","Fluir","Usura","Casta","Caçoa","átimo","Vetor","Rever","Ative","Avaro","Féria","Surte","Criva","Bicha","Aceso","Cisma","Louco","Ciúme","Sulco","Ninfo","Densa","Diabo","Vazão","Logar","Lasca","Púbis","Fiado","Dérbi","Abono","Mores","Vazio","Niver","Expor","Vasta","Messe","Mixou","Logra","Irado","Forte","Basal","Dúbio","Benga","Parta","Civil","Faraó","Setup","Murta","Untar","Dotar","Nudez","Pouco","Sabia","Visar","Amada","Fossa","Corró","Bolão","Nodal","Psico","Ardil","Falso","Escol","Usque","Alçar","Obras","Seita","Abade","Mitar","Hiper","Safra","Prelo","Sanga","Negão","Atroz","Taura","Breve","Trash","Nódoa","Dança","Capar","Haule","Rezar","Exige","Pomar","Magia","Temor","Idoso","Peste","Gesto","Rubro","Afins","Cúria","Amapô","Advêm","Xeque","Proto","Coroa","Valho","Pente","Short","Fazer","Fazem","Modal","Pecar","Obter","Brabo","Outro","Doido","Tempo","Tutor","Afudê","Credo","Borsa","Crica","Feice","Lerdo","Beata","Censo","Cotas","Valer","Fação","Ceder","Ardor","Lento","Junco","Grata","Imune","Clima","Sacro","Aguar","Motim","Babar","Pálio","Raiva","Drusa","Reger","Manhã","Lixar","Sacas","Dindo","Meter","Trago","Visto","Fungo","Zuera","Nesga","Frisa","Vazar","Neném","Grumo","Babão","Cânon","Rapto","Obeso","Ativo","Bordo","Apoio","Qualé","Jejum","átrio","Minar","Xiita","Elide","Flato","Agudo","Queca","Muito","Droga","Cetro","Blitz","Sorte","Novel","Beijo","Sesta","Aipim","Mitra","Afago","Taxar","Penso","Chapa","Bagui","Velar","Pocar","Praia","Abeia","Ajayô","Provê","Rácio","Anais","Pegar","Viste","Ceifa","Probo","Timbó","Táxon","Urrar","Beato","Hemos","Pakas","Prevê","Sacal","Virem","Buril","Ovino","Baita","Papel","Sítio","Vinde","Vemos","Casar","Bença","Chulo","Avoar","Apois","Xinxa","Coité","Grifo","Bicho","Monga","Pitéu","ímpar","Afim","Garoa","Pinar","Saber","Tinha","Fisco","Cerva","Phyna","Miúda","Parir","Fauna","ânimo","Slide","Pulha","Talho","Malha","Bebum","Privê","Nação","Manja","Noite","Afora","Menas","Jazia","Repto","Sonho","Jazem","Fusão","Guéla","Párea","Fraco","Betão","Cromo","Fraga","Dizer","Homem","Atuar","Gerar","Piada","Mimar","Mexeu","Bruma","Uruca","Tolir","Tilti","Pódio","Criar","Orçar","Selar",
"Prega","Forma","ébano","Rilex","Cosmo","Cocho","Ramal","Senil","Vimos","Turvo","Ajuda","Bodar","Indez","Mirim","Cachê","Anexo","Pobre","Borel","Poeta","écran","Nível","Rédea","Cobro","étimo","Visgo","Retém","Relar","Trans","Cobra","Devir","Tanso","Tomar","Telos","Bilau","Farás","Feixe","Coita","Jazer","Andor","Ouçam","Depôs","Ativa","ébrio","Derby","Canga","Young","Mambo","Sábio","Tufão","Rumor","Trova","Bolei","Nimbo","Hálux","Travo","Opõem","Varei","Adoro","Futum","Cheio","Xoxar","Curra","Catso","Sépia","éfode","Broca","Dread","Ardis","Lance","Calmo","Reter","Bamba","Bardo","Reaça","Trena","Danar","Gueto","Jegue","óbulo","Roçar","Girau","Fuark","Grego","Campa","Dendê","Micro","Aluir","Sarça","Virtú","Douta","Suíte","Cozer","Arfar","Viger","Rente","Lenda","Metro","Guapa","Trará","Pagar","Teste","Gavar","Firme","Vendo","Anuir","Bravo","Boato","Gazua","Bufar","Exato","Dobro","Pegos","Perva","Lavor","Muque","Turva","Signo","Edito","álamo","Conas","Fuzuê","Ratam","Biziu","Cabra","Esgar","Tosca","Furor","Cesto","Tibia","Lhano","Lauto","Cusco","Culpa","Retrô","Débil","Natal","Cruel","Máfia","Lesão","Lorpa","Yohan","Tchau","Gansa","Quite","Noção","Fúria","Pissa","Tento","Gamei","Cevar","Clero","Zelar","Mudar","Rango","Peraí","Bafão","Cagar","Adeno","Point","Reres","Coser","Pitar","Sogra","Prima","Obtêm","Coice","Bater","Terna","Pança","Frito","Húmus","Abadá","Verme","Varão","Piado","Claro","Pedir","Hepta","Filão","Falta","Babem","Elite","Símio","Vírus","ótimo","Darão","Busto","Ethos","Fiéis","Sobre","Malsã","édipo","Mundo","Felpa","Poste","Sahel","Sabiá","Guela","Opção","Calça","Meado","Achar","Balda","Lista","Frade","Podar","ágora","Atual","Deter","Foque","óbito","Fiada","Platô","Rulez","Mafuá","Zoado","Inibe","Hoste","Supus","Pacas","Grimm","Ginga","Mente","álveo","Delta","Caibo","Gemer","Terçã","Ticar","êmico","Saúda","Carga","Porte","Totem","Banzé","Olhar","Arqui","ébria","Tolha","Inane","Avara","édito","Morte","Egito","Tansa","Brava","Segar","à-toa","Falha","Peido","Alelo","Béque","Nambu","Terra","Ganso","Chaga","Lasso","Lanha","Fervo","Leria","Arras","Altar","índia","Parar","Arcar","Fosso","Basta","Xerém","Poema","Légua","Fixar","Autor","Larga","Canaã","Magma","Tekar","Chiar","Astro","Corbã","Limpo","Róseo","Zonzo","úmido","Xanha","Bantu","Birra","Boite","Renca","Praça","Tetéu","Carro","Casto","V.sª.","Verga","Forfé","Pasmo","Cunha","Fodem","Pirar","Pompa","Acima","Aviso","Mouse","Senão","Meche","Jovem","Vacum","Ambas","Preço","Daora","Greta","Parto",
"Vedar","Balir","Prumo","Corpo","Humor","árido","Matar","Bagar","Conto","Cerão","Galga","Inata","Viver","Tunda","Vadio","Seixo","Carão","Rocha","Grota","Xaina","âmbar","Moché","Etino","Brown","Rádio","Louçã","Conho","Penha","Acuso","Picuá","Busão","Malta","Bobão","Rolar","Pique","Peixe","Fiofó","Birro","Sinal","Meada","Ficta","Xaxim","Pasme","Blunt","Choca","Ponte","Maçom","Expôs","Cisco","Ilesa","Safam","Kbyte","Apego","Xangô","Banir","Saiba","Longo","Caçou","Xingu","Rubor","Eluir","Curso","Corso","Salvo","Ganga","Leira","Creca","Arroz","Frete","Veaco","Súcia","Ownar","Sorgo","Carta","Flama","Ulalá","Edema","átona","Cassa","Gordo","Fitar","Crime","Kafta","Gnose","Apelo","Borga","Haste","Iogue","Gesta","Corgo","Porco","Venta","Hotel","Babau","Rogar","Gizar","Zonza","Aquo","Fiúza","Viela","Tripé","Acolá","Molde","Vesga","Ripar","Optar","Lomba","Cafua","Trote","Tisga","Jeton","Sósia","Pachá","Nácar","Exito","Broma","Penal","Gambá","Chuva","Canto","Polca","Kafka","Caril","época","Refém","Bisco","Fuste","Adobe","Livre","Saíra","Falou","Mojar","Traço","Kombi","Viral","Pandu","Tonto","Bolar","Efebo","Macho","Capão","Zâmbi","Glote","Lucro","Ufano","Induz","Vesse","Cisto","Saldo","Acero","Super","Negro","Poita","Petiz","Ranso","Maior","Sorry","Monta","Corte","Peito","Albor","Passo","Canha","Chibo","Metrô","Série","Abrir","Linfa","Gafar","Imago","Fenda","Hindu","Colar","Loque","Farsa","Sódio","Façam","Tumba","Tiziu","Miado","Nunca","Negar","Prado","Filar","Urato","Caçar","Trino","Scrap","Frapê","Tasca","Fruto","órfão","Poncã","Exijo","Morsa","Lauta","Plaza","Sedar","ábaco","Posta","Chita","Norte","Nafta","Genro","áureo","Monge","Aonde","Furto","Balão","Aliar","Galar","Nobel","Nhaca","Latim","Nédio","Dedéu","Testo","Chape","Traia","Idade","Geral","Lousa","Cotar","Turma","Conga","Nanar","Jante","Favor","Forro","Bruno","Dedal","Bulir","Murro","Sugar","Relho","Saúva","Local","Gofar","Porta","Vídia","Lácio","Biate","Mixar","Bumba","Canxa","Dorso","Zebra","Roubo","Foste","êmulo","Igapó","Farra","Patim","Pitiú","Luzir","Chabú","Homão","Nasal","Vesgo","Bilro","China","Flash","Podre","Dólar","Suada","Magôo","Sadia","Varde","Xunda","Bagos","Laivo","Magro","Dúzia","Panca","Tieta","Grave","Bisel",
"êmula","ésimo","ésima","éreis","época","épico","épica","éguas","ébrio","ébano","ânsia","ânodo","ânimo","âmbar","âmago","ázimo","ávido","ávida","áureo","áurea","átrio","átono","átona","átomo","árido","árida","árias","áreas","árduo","árdua","árabe","ápice","álibi","álbum","álamo","águia","águas","ágios","ágeis","ágata","ágape","ácido","ácida","ácaro","ábaco","Érico","Érica","Épiro","Éfeso","Édipo","Ávila","Átila","estão","estás","estas","estar","estai","esses","essas","esqui","espiã","espiá","espio","espie","espia","escôo","escoá","escol","escoe","escoa","ervas","errou","erros","erres","errem","errei","erras","errar","erram","errai","erodo","erodi","erode","eroda","ermos","eriçá","eriço","eriça","erijo","erija","erigi","erige","erice","erguê","ergui","ergue","ergas","ergam","ereto","ereta","enviá","envio","envie","envia","entôo","então","entrá","entro","entre","entra","entoá","entoe","entoa","entes","enojá","enojo","enoje","enoja","enjôo","enjoá","enjoe","enjoa","enfiá","enfio","enfim","enfie","enfia","enchê","encho","enchi","enche","encha","emulá","emulo","emule","emula","emito","emiti","emite","emita","emaná","emano","emane","emana","elmos","elixo","elixi","elixe","elite","elevá","elevo","eleve","eleva","elejo","eleja","elegê","elegi","elege","ejetá","ejeto","ejete","ejeta","eixos","eiras","educá","educo","educa","editá","edito","edita","edema","ecoou","ecoes","ecoem","ecoei","ecoas","ecoar","ecoam","ecoai","dúzia","dúbio","dúbia","dólar","débil","dália","dutos","durou","duros","durmo","durma","dures","durem","durei","duras","durar","duram","durai","duque","duplo","dupla","dunga","dunas","dumas","dueto","duelá","duelo","duele","duela","ducha","dublá","dublo","duble","dubla","duais","drogá","drogo","droga","drená","dreno","drene","drena","drama","dragá","drago","draga","doído","doída","doías","doíam","douto","douta","dourá","douro","doure","doura","dotou","dotes","dotem","dotei","dotas","dotar","dotam","dotai","dosou","doses","dosem","dosei","dosas","dosar","dosam","dosai","dorso","dormi","dorme","dores","dopou","dopes","dopem","dopei","dopas","dopar","dopam","dopai","donos","donde","donas","domou","domes","domem","domei","domas","domar","domam","domai","doido","doida","dogma","doerá","doera","doemo","doeis","docas","dobrá","dobro","dobre","dobra","doava","doará","doara","doamo","doais","doado","doada","dizia","dizes","dizer","dizem","dizei","divas","ditou","ditos","dites","ditem","ditei","ditas","ditar","ditam","ditai","distá","disto",
"diste","dista","disso","disse","dispô","discá","disco","disca","dirão","dirás","diria","direi","dique","diodo","diluí","diluo","dilui","dilua","digná","digno","digne","digna","digas","digam","dieta","dicas","diabo","devia","deveu","deves","dever","devem","devei","devas","devam","deusa","detém","deter","desço","desça","deste","desta","desse","dessa","despi","despe","desde","descê","desci","desce","dermo","deres","derem","deras","deram","depõe","depôs","depus","depor","dente","denso","densa","demão","demos","delta","deles","delas","deixá","deixo","deixe","deixa","deitá","deito","deite","deita","dedão","deduz","dedos","dedal","decaí","decai","davas","davam","datou","dates","datem","datei","datas","datar","datam","datai","darão","darás","daria","dares","darem","darei","dardo","daqui","dançá","danço","dança","dante","danou","danos","danes","danem","danei","dando","dance","danas","danar","danam","danai","damos","damas","dados","dadas","cútis","cúria","côdea","cópia","cólon","cívil","círio","cílio","césio","célia","cápua","cuíca","custá","custo","custe","custa","cuspo","cuspi","cuspa","curvá","curvo","curve","curva","curto","curti","curte","curta","cursá","curso","curse","cursa","curou","cures","curem","curei","curas","curar","curam","curai","cupom","cupim","cunhá","cunho","cunhe","cunha","cumes","culto","culta","culpá","culpo","culpe","culpa","cujus","cujos","cujas","cuidá","cuido","cuide","cuida","cuias","cueca","cucos","cucas","cubro","cubra","cubos","cubas","crêem","cruzá","cruzo","cruze","cruza","cruel","cruas","cromá","cromo","crome","croma","crivá","crivo","crive","criva","crise","criou","crina","crime","cries","criem","criei","crido","crias","criar","criam","criai","crerá","crera","cremá","cremo","creme","crema","creio","creia","credo","crede","cravá","cravo","crave","crava","coíbo","coíbe","coíba","coçou","coças","coçar","coçam","coçai","cozia","cozeu","cozes","cozer","cozem","cozei","cozas","cozam","coxos","coxim","coxas","covas","couve","couro","coube","cotou","cotes","cotem","cotei","cotas","cotar","cotam","cotai","costa","cospe","cosmo","cosia","coseu","coses","coser","cosem","cosei","cosas","cosam","corôo","corôa","corça","corvo","cortá","corto","corte","corta","corrê","corro","corri","corre","corra","corpo","coroá","corou","coros","coroe","coroa","corno","corja","cores","corem","corei","corda","coras","corar","coram","coral","corai","copos","copiá","copio","copie","copia","copas","contê","contá","conto","conte","conta","congá","cones","conde",
"comum","compô","comia","comeu","comes","comer","comem","comei","comas","comam","colou","colhê","colho","colhi","colhe","colha","coles","colem","colei","colas","colar","colam","colai","coito","coisa","coifa","coice","coibi","cofre","coevo","coeva","coeso","coesa","coemo","coeis","cocos","cocho","coces","cocem","cocei","cocal","cobrá","cobro","cobri","cobre","cobra","coaxá","coaxo","coaxe","coaxa","coava","coará","coara","coamo","coajo","coaja","coais","coagi","coage","coado","coada","clube","cloro","clone","clips","clima","clero","clava","claro","clara","clamá","clamo","clame","clama","ciúme","civis","civil","citou","cites","citem","citei","citas","citar","citam","citai","cisão","cisne","cismá","cismo","cisme","cisma","ciscá","cisco","cisca","circo","cipós","cioso","ciosa","cinza","cinto","cinta","cinjo","cinja","cingi","cinge","cindo","cindi","cinde","cinda","cinco","cifrá","cifro","cifre","cifra","cidra","ciclo","chuva","chutá","chuto","chute","chuta","chupá","chupo","chupe","chupa","choça","chovê","chovo","chovi","chove","chova","chorá","choro","chore","chora","chocá","choco","choca","chiou","chies","chiem","chiei","chias","chiar","chiam","chiai","cheio","cheia","chegá","chego","chega","chefe","chefa","checá","checo","checa","chave","chato","chata","chapa","chamá","chamo","chame","chama","chalé","chale","chagá","chago","chaga","cetro","cetim","cesto","cesta","cessá","cesso","cesse","cessa","cervo","certo","certa","cerrá","cerro","cerre","cerra","cerol","cerni","cerne","cerda","cercá","cerco","cerca","ceras","cento","censo","cenas","celta","celas","ceifá","ceifo","ceife","ceifa","ceies","ceiem","ceias","ceiam","cegue","cegou","cegos","cegas","cegar","cegam","cegai","ceemo","ceeis","cedro","cedia","cedeu","cedes","ceder","cedem","cedei","cedas","cedam","ceava","ceara","ceamo","ceais","ceado","caíra","caímo","caído","caída","caías","caíam","caçôo","cação","caçoá","caçou","caçoe","caçoa","caças","caçar","caçam","caçai","cavou","caviá","cavio","cavie","cavia","caves","cavem","cavei","cavas","cavar","cavam","cavai","cauto","cauta","causá","causo","cause","causa","caule","cauda","catre","catou","cates","catem","catei","catas","catar","catam","catai","casto","casta","cassá","casso","casse","cassa","caspa","casou","casos","cases","casem","casei","casco","casca","casas","casar","casam","casal","casai","carão","carta","carro","carpi","carpe","carpa","caros","carne","carmo","cargo","carga","cardo","caras","capuz","caput","captá","capto","capte","capta","capou",
"capim","capes","capem","capei","capaz","capas","capar","capam","capai","cantá","canto","cante","canta","cansá","canso","canse","cansa","canos","canoa","canja","canga","canaã","canas","canal","campo","camas","calçá","calço","calça","calvo","calva","calou","calos","calor","calmo","calma","calhá","calho","calhe","calha","cales","calem","calei","caldo","calda","calcá","calco","calce","calca","calas","calar","calam","calai","caixa","cairá","caiou","caies","caiem","caiei","caido","caibo","caiba","caias","caiar","caiam","caiai","cague","cagou","cagas","cagar","cagam","cagai","cafés","cacto","cacos","cacho","caces","cacem","cacei","cacas","cabra","cabos","cabia","cabes","caber","cabem","cabei","búzio","bônus","bôers","bóies","bóiem","bóias","bóiam","bílis","bário","buxos","busto","buscá","busco","busca","burro","burra","burlá","burlo","burle","burla","burgo","bundá","bundo","bunde","bunda","bumbo","buliu","bulis","bulir","bulia","bules","bulbo","bulas","bulam","bujão","bufão","bufou","bufes","bufem","bufei","bufas","bufar","bufam","bufai","bueno","bucho","bucha","bucal","bruxo","bruxa","bruto","bruta","bruma","brotá","broto","brote","brota","bromo","brocá","broco","broca","broas","brito","brita","brisa","brios","brins","brigá","brigo","briga","brida","brevê","breve","bretã","brejo","brecá","breco","breca","braço","braça","bravo","brava","brasa","bramá","bramo","brami","brame","brama","bradá","brado","brade","brada","brabo","braba","boxeá","botão","botou","botes","botem","botei","botas","botar","botam","botai","bosta","bossa","borrá","borro","borre","borra","bordá","bordo","borde","borda","bonés","bonde","bomba","bolão","bolso","bolsa","bolou","bolos","bolha","boles","bolem","bolei","boldo","bolas","bolar","bolam","bolai","boiou","boina","boiei","boiar","boiai","bodes","bodas","bocha","bocas","bocal","bobos","bobeá","bobas","boato","boate","blusa","bloco","blefá","blefo","blefe","blefa","bisão","bispo","birra","bique","bingo","bigas","biela","bicou","bicos","bicho","bicha","bicas","bicar","bicam","bicai","besta","berço","berrá","berro","berre","berra","beque","benzê","benzo","benzi","benze","benza","benta","bemol","belos","belga","belas","beiço","beirá","beiro","beire","beira","beijá","beijo","beije","beija","becos","becas","bebês","bebia","bebeu","bebes","beber","bebem","bebei","bebas","bebam","beato","beata","baías","baços","bazar","bauru","batom","batia","bateu","bates","bater","batem","batel","batei","batas","batam","bastá","basto","baste","basta","baseá",
"bases","barão","barrá","barro","barre","barra","bares","bardo","barco","barca","barba","baque","banjo","baniu","banis","banir","bania","banhá","banho","banhe","banha","banes","banem","bando","banda","bancá","banco","banca","banal","bambu","bambo","bamba","balão","balsa","baliu","balis","balir","balia","baleá","bales","balem","balde","balas","balam","baião","baixá","baixo","baixe","baixa","baita","bailá","bailo","baile","baila","baias","bagos","bagas","bafos","bacia","babão","babás","babou","babes","babem","babei","babas","babar","babam","babai","aéreo","aérea","ações","açude","azulá","azulo","azule","azula","azuis","azoto","azias","azedá","azedo","azede","azeda","azará","azaro","azare","azara","axila","axial","avéns","avião","avivá","avivo","avive","aviva","avisá","aviso","avise","avisa","avirá","aviou","avimo","avies","avier","aviem","aviei","avias","aviar","aviam","aviai","avelã","aveio","aveia","avaro","avara","avais","autuá","autuo","autue","autua","autos","autor","auras","aulas","audaz","aténs","atéia","aturá","aturo","ature","atura","atuou","atuns","atues","atuem","atuei","atuas","atuar","atuam","atual","atuai","atrás","atriz","atraí","atrai","atolá","atolo","atole","atola","atlas","atiçá","atiço","atiça","ativá","ativo","ative","ativa","atirá","atiro","atire","atira","atiná","atino","atine","atina","atido","atice","ateve","ateus","aterá","ateou","atemo","ateis","ateio","ateie","ateia","ateei","atear","ateai","atava","atará","atara","atamo","atais","atado","atada","atacá","ataco","ataca","astro","assôo","assoá","assou","assoe","assoa","assis","assim","asseá","asses","assem","assei","assaz","assas","assar","assam","assai","aspas","asnos","asilá","asilo","asile","asila","artes","arroz","arriá","arrio","arrie","arria","arreá","arque","arpôo","arpão","arpoá","arpoe","arpoa","aroma","armou","armes","armem","armei","armas","armar","armam","armai","argüi","argúi","arguí","arguo","argua","arfou","arfes","arfem","arfei","arfas","arfar","arfam","arfai","arena","aremo","arejá","arejo","areje","areja","areis","areia","areal","ardor","ardis","ardil","ardia","ardeu","ardes","arder","ardem","ardei","ardas","ardam","arcou","arcos","arcas","arcar","arcam","arcai","araçá","arava","arará","arara","aramo","arame","arais","arado","arada","aquém","apóio","apóie","apóia","apurá","apuro","apure","apura","aptos","aptas","apolo","apoiá","apoio","apitá","apito","apite","apita","apeou","apená","apeno","apene","apena","apelá","apelo","apele","apela","apeio","apeie","apeia",
"apegá","apego","apega","apeei","apear","apeai","apará","aparo","apare","apara","apagá","apago","apaga","aorta","aonde","anões","anéis","anzol","anuís","anuía","anulá","anulo","anule","anula","anuiu","anuis","anuir","anuem","anuas","anuam","anual","antão","antro","antes","antas","ansiá","anotá","anoto","anote","anota","anjos","animá","animo","anime","anima","angra","anglo","anexá","anexo","anexe","anexa","anelá","anelo","anele","anela","andou","andor","andes","andem","andei","andas","andar","andam","andai","anciã","ancas","anais","amplo","ampla","amolá","amolo","amole","amola","amimá","amimo","amime","amima","amigá","amigo","amiga","amido","ameça","ameno","amena","amemo","ameis","ameia","ameba","ambos","ambas","amava","amará","amaro","amara","amamo","amais","amado","amada","alçou","alças","alçar","alçam","alçai","alvos","alvor","alves","alvas","aluno","aluna","alugá","alugo","aluga","aludo","aludi","alude","aluda","altos","alteá","altas","altar","aloés","alojá","alojo","aloje","aloja","alocá","aloco","aloca","almas","aliás","alisá","aliso","alise","alisa","aliou","alijá","alijo","alije","alija","alies","aliem","aliei","alias","aliar","aliam","aliai","alhos","alheá","algum","algoz","algas","alemã","alegá","alego","alega","aldeã","alces","alcem","alcei","alagá","alago","alaga","alado","alada","ajudá","ajudo","ajude","ajuda","ajamo","ajais","ainda","aguçá","aguço","aguça","aguou","agues","aguem","aguei","agudo","aguda","aguce","aguas","aguar","aguam","aguai","agora","agitá","agito","agite","agita","agirá","agira","agimo","agido","agias","agiam","aftas","afros","aforá","aforo","afore","afora","afogá","afogo","afoga","afofá","afofo","afofe","afofa","afobá","afobo","afobe","afoba","afluí","afluo","aflui","aflua","afixá","afixo","afixe","afixa","afiro","afira","afiou","afiná","afins","afino","afine","afina","afies","afiem","afiei","afias","afiar","afiam","afiai","afetá","afeto","afete","afeta","aferi","afere","afegã","afaná","afano","afane","afana","afagá","afago","afaga","advém","advir","advim","adulá","adulo","adule","adula","adubá","adubo","adube","aduba","adoçá","adoço","adoça","adotá","adoto","adote","adota","adorá","adoro","adore","adora","adoce","aditá","adito","adite","adita","adirá","adiro","adira","adiou","adimo","adies","adiem","adiei","adido","adida","adias","adiar","adiam","adiai","adeus","aderi","adere","adega","adaga","acusá","acuso","acuse","acusa","acuou","acues","acuem","acuei","acudo","acudi","acuda","acuas","acuar","acuam","acuai","acolá",
"acode","acima","achou","aches","achem","achei","achas","achar","acham","achai","aceto","aceso","acesa","acená","aceno","acene","acena","acatá","acato","acate","acata","acaso","acabá","acabo","acabe","acaba","abusá","abuso","abuse","abusa","abstê","abriu","abris","abrir","abril","abria","abreu","abres","abrem","abras","abram","abono","aboli","abole","abluí","abluo","ablui","ablua","abeto","abatê","abato","abati","abate","abata","abaná","abano","abane","abana","abalá","abalo","abale","abala","abafá","abafo","abafe","abafa","abade","Ester","Esopo","Emaús","Elixa","Elisa","Elias","Egito","Edite","Edgar","Délhi","Dácia","Dubai","Diana","Dhaka","Denis","Delhi","David","Dario","Darci","Dakar","Dafne","Dacca","César","Cátia","Couto","China","Chile","Chico","Chica","Ceará","Carla","Cairo","Busan","Bruno","Braga","Borba","Bielo","Berta","Berna","Bento","Belém","Bangu","Bahia","Bagdá","Babel","Aécio","Artur","Argos","Argel","André","Amora","Amapá","Alpes","Aline","Algol","Alceu","Alair","Aires","Acker","Accra","Acaia","Abner"];

var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();

window.onload = function(){
    startGame();
}

function startGame(){
    // Cria o quadro
    for(let r = 0; r < height; r++){
        for(let c = 0; c < width; c++){
            // <span id="0-0" class="tile"></span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Criar o teclado
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    ]

    for(let i = 0; i < keyboard.length; i++){
        let currentRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for(let j = 0; j < currentRow.length; j++){
            let keyTile = document.createElement("div");

            let key = currentRow[j];
            keyTile.innerText = key;
            if(key == "Enter"){
                keyTile.id = "Enter";
            }
            else if(key == "⌫"){
                keyTile.id = "Backspace";
            }
            else if("A" <= key && key <= "Z"){
                keyTile.id = "Key" + key; // "Key" + "A"
            }

            keyTile.addEventListener("click", processKey);

            if(key == "Enter"){
                keyTile.classList.add("enter-key-tile");
            }
            else{
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }

    // Ao pressionar uma tecla
    document.addEventListener("keyup", function(e) {
        processInput(e);
    })
}

function processKey(){
    let e = {"code" : this.id};
    processInput(e);
}

function processInput(e){
    if (gameOver)
        return;

    if ("Key A" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currentTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currentTile.innerText == "") {
                currentTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        document.getElementById("answer").innerText = "";
        if (0 < col && col <= width){
            col -= 1;
        }
        let currentTile = document.getElementById(row.toString() + '-' + col.toString());
        currentTile.innerText = "";
    }
    else if (e.code == "Enter") {
        update();
    }

    if(!gameOver && row == height){
        gameOver = true;
        document.getElementById("answer").innerText = word;
        winningMessageTextElement.innerText = 'A PALAVRA ERA:\n'+ word
        winningMessage.classList.add("show-winning-message");
    }
}

function update(){
    let guess = "";
    document.getElementById("answer").innerText = "";

    for(let c = 0; c < width; c++){
        let currentTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currentTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase();
    if(!guessList.includes(guess)){
        document.getElementById("answer").innerText = "Palavra fora da lista!";
        return;
    }

    let correct = 0;
    let letterCount = {}; // ARROZ = {A:1, R:2, O:1, Z:1}
    for(let i = 0; i < word.length; i++){
        letter = word[i];
        if(letterCount[letter]){
            letterCount[letter] += 1;
        }
        else{
            letterCount[letter] = 1;
        }
    }

    // Primeira interação, checar todas as corretas
    for(let c = 0; c < width; c++){
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currentTile.innerText;

        // Se a letra está na posição correta
        if(word[c] == letter){
            currentTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1;
        }

        if(correct == width){
            gameOver = true;
            winningMessageTextElement.innerText = 'PALAVRA CORRETA!'
            winningMessage.classList.add("show-winning-message");
        }
    }
    
    // Novamente e marque quais estão presentes, mas na posição errada
    for(let c = 0; c < width; c++){
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currentTile.innerText;
        
        if(!currentTile.classList.contains("correct")){
            // Se há a letra na palavra
            if(word.includes(letter) && letterCount[letter] > 0){
                currentTile.classList.add("present");
                let keyTile = document.getElementById("Key" + letter);
                if(!keyTile.classList.contains("correct")){
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            }
            // Se não há a letra na palavra
            else{
                currentTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                if(!keyTile.classList.contains("present" && "correct")){
                    keyTile.classList.add("absent");
                }
            }
        }
    }

    row += 1; // Começar uma nova linha (palavra)
    col = 0; // Começa em 0 para nova linha (palavra)
}