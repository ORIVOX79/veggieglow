// ===== VEGGIEGLOW — DATA.JS =====

const RECIPES = [

  // ── PETIT-DÉJEUNER (10) ──────────────────────────────────────────────────
  {
    id:1, cat:'petit-dejeuner', emoji:'🥣',
    img:'images/Bol-de-smoothie-a-lacai-et-mangue.png',
    name:'Bowl açaï mangue & chia',
    time:'10 min', servings:1, difficulty:'Facile',
    kcal:380, proteins:12, carbs:52, fats:14,
    bg:'linear-gradient(135deg,#667eea22,#764ba244)',
    ingredients:["200g de pulpe d'açaï surgelée","1 banane congelée","80ml de lait d'amande","½ mangue fraîche","2 c.à.s de graines de chia","1 c.à.s de beurre d'amande","Granola et noix de coco râpée pour garnir"],
    steps:["Mixer la pulpe d'açaï avec la banane et le lait d'amande jusqu'à texture épaisse et crémeuse.","Verser dans un bol et garnir de tranches de mangue fraîche.","Ajouter les graines de chia et le beurre d'amande en filet.","Terminer avec le granola et la noix de coco. Servir immédiatement."]
  },
  {
    id:2, cat:'petit-dejeuner', emoji:'🥞',
    img:'images/Pancakes-avoine-banane.png',
    name:'Pancakes avoine & banane',
    time:'20 min', servings:2, difficulty:'Facile',
    kcal:320, proteins:11, carbs:55, fats:8,
    bg:'linear-gradient(135deg,#f6d36522,#f093fb22)',
    ingredients:["2 bananes très mûres","150g de farine d'avoine","2 œufs","100ml de lait végétal","1 c.à.c de levure chimique","1 pincée de cannelle","Sirop d'érable et fruits rouges pour servir"],
    steps:["Écraser les bananes en purée lisse.","Ajouter les œufs, le lait végétal, mélanger.","Incorporer la farine d'avoine, la levure et la cannelle. Laisser reposer 5 min.","Cuire de petits pancakes 2–3 min par côté à feu moyen dans une poêle légèrement huilée.","Servir avec le sirop d'érable et les fruits rouges."]
  },
  {
    id:3, cat:'petit-dejeuner', emoji:'🍳',
    img:'images/Omelette-epinards-feta.png',
    name:'Omelette épinards & feta',
    time:'15 min', servings:1, difficulty:'Facile',
    kcal:290, proteins:22, carbs:5, fats:21,
    bg:'linear-gradient(135deg,#43e97b22,#38f9d722)',
    ingredients:["3 œufs frais","80g d'épinards frais","50g de feta émiettée","1 c.à.s de lait","1 c.à.c d'huile d'olive","Sel, poivre noir","Quelques feuilles de basilic"],
    steps:["Battre les œufs avec le lait, saler et poivrer.","Faire tomber les épinards 1 min dans l'huile d'olive chaude.","Verser les œufs battus sur les épinards, cuire à feu moyen.","Quand les bords sont pris, parsemer de feta et plier l'omelette en deux.","Garnir de basilic frais et servir immédiatement."]
  },
  {
    id:4, cat:'petit-dejeuner', emoji:'🍓',
    img:'images/Overnight-oats-fraises-pistaches.png',
    name:'Overnight oats fraises & pistaches',
    time:'5 min + 8h', servings:1, difficulty:'Facile',
    kcal:410, proteins:15, carbs:58, fats:13,
    bg:'linear-gradient(135deg,#ff9a9e22,#fecfef22)',
    ingredients:["80g de flocons d'avoine","200ml de lait végétal","100g de fraises fraîches","2 c.à.s de yaourt nature","1 c.à.s de miel","2 c.à.s de pistaches concassées","1 c.à.c de graines de lin"],
    steps:["Mélanger les flocons d'avoine, le lait végétal, le yaourt, le miel et les graines de lin dans un bocal.","Bien remuer, couvrir et réfrigérer toute une nuit (minimum 4h).","Au moment de servir, garnir de fraises tranchées et de pistaches concassées."]
  },
  {
    id:5, cat:'petit-dejeuner', emoji:'🥐',
    img:'images/Toast-avocat-oeuf-poche-zaatar.png',
    name:'Toast avocat & œuf poché zaatar',
    time:'15 min', servings:1, difficulty:'Moyen',
    kcal:420, proteins:18, carbs:32, fats:26,
    bg:'linear-gradient(135deg,#d4fc7922,#96e6a122)',
    ingredients:["2 tranches de pain au levain","1 avocat bien mûr","2 œufs","1 c.à.s de vinaigre blanc","1 c.à.s de zaatar","Piment d'Espelette, fleur de sel","Jus de citron, huile d'olive"],
    steps:["Toaster les tranches de pain.","Écraser l'avocat avec le jus de citron, une pincée de sel et de piment.","Faire pocher les œufs 3–4 min dans de l'eau frémissante vinaigrée.","Étaler la purée d'avocat sur le pain, déposer l'œuf poché.","Saupoudrer de zaatar et de fleur de sel, arroser d'un filet d'huile."]
  },
  {
    id:6, cat:'petit-dejeuner', emoji:'🥣',
    img:'images/Smoothie-bowl-myrtilles-spiruline.png',
    name:'Smoothie bowl myrtilles & spiruline',
    time:'10 min', servings:1, difficulty:'Facile',
    kcal:350, proteins:14, carbs:48, fats:10,
    bg:'linear-gradient(135deg,#4776e622,#8e54e922)',
    ingredients:["150g de myrtilles surgelées","1 banane congelée","1 c.à.c de spiruline en poudre","100ml de lait de coco","Kiwi tranché, granola, graines de chanvre pour garnir","1 c.à.s de beurre de cajou"],
    steps:["Mixer les myrtilles, la banane, la spiruline et le lait de coco jusqu'à texture très épaisse.","Verser dans un bol.","Garnir de kiwi tranché, de granola, de graines de chanvre et d'un peu de beurre de cajou."]
  },
  {
    id:7, cat:'petit-dejeuner', emoji:'🍵',
    img:'images/Chia-pudding-matcha-coco.png',
    name:'Chia pudding matcha & coco',
    time:'5 min + 6h', servings:2, difficulty:'Facile',
    kcal:290, proteins:8, carbs:28, fats:16,
    bg:'linear-gradient(135deg,#43e97b22,#38f9d722)',
    ingredients:["6 c.à.s de graines de chia","400ml de lait de coco","1 c.à.c de matcha en poudre","2 c.à.s de sirop d'érable","Kiwi, mangue et noix de coco râpée pour servir"],
    steps:["Diluer le matcha dans un peu de lait de coco chaud.","Mélanger avec le reste du lait de coco, le sirop d'érable et les graines de chia.","Fouetter vigoureusement pour éviter les grumeaux. Réfrigérer 6h en remuant après 30 min.","Servir garnit de kiwi, mangue et noix de coco râpée."]
  },
  {
    id:8, cat:'petit-dejeuner', emoji:'🍌',
    img:'images/Pain-banane-noix-chocolat.png',
    name:'Pain banane, noix & chocolat',
    time:'65 min', servings:10, difficulty:'Facile',
    kcal:285, proteins:6, carbs:42, fats:11,
    bg:'linear-gradient(135deg,#f7971e22,#ffd20022)',
    ingredients:["3 bananes très mûres","200g de farine complète","80g de sucre muscovado","2 œufs","80ml d'huile de coco fondue","1 sachet de levure chimique","80g de noix concassées","60g de pépites de chocolat noir"],
    steps:["Préchauffer le four à 175°C. Beurrer un moule à cake.","Écraser les bananes à la fourchette. Ajouter les œufs, l'huile de coco et le sucre.","Incorporer la farine et la levure sans trop travailler. Ajouter les noix et les pépites.","Verser dans le moule et cuire 50–55 min. Vérifier la cuisson avec un cure-dent.","Laisser refroidir 10 min avant de démouler."]
  },
  {
    id:9, cat:'petit-dejeuner', emoji:'🥜',
    img:'images/Porridge-beurre-de-cacahuete-banane.png',
    name:'Porridge beurre de cacahuète & banane',
    time:'10 min', servings:1, difficulty:'Facile',
    kcal:450, proteins:16, carbs:62, fats:16,
    bg:'linear-gradient(135deg,#c79f3022,#e55d8722)',
    ingredients:["80g de flocons d'avoine","300ml de lait d'avoine","1 c.à.s de beurre de cacahuète","½ banane tranchée","1 c.à.c de miel","Pépites de chocolat noir, graines de chanvre pour garnir"],
    steps:["Cuire les flocons d'avoine dans le lait d'avoine à feu doux pendant 5 min en remuant.","Incorporer le beurre de cacahuète et le miel hors du feu.","Verser dans un bol et garnir de banane tranchée, de pépites de chocolat et de graines de chanvre."]
  },
  {
    id:10, cat:'petit-dejeuner', emoji:'🧇',
    img:'images/Gaufres-legeres-fromage-blanc-fruits.png',
    name:'Gaufres légères fromage blanc & fruits',
    time:'30 min', servings:4, difficulty:'Moyen',
    kcal:280, proteins:12, carbs:38, fats:9,
    bg:'linear-gradient(135deg,#a8edea22,#fed6e322)',
    ingredients:["200g de farine","2 œufs (séparés)","200g de fromage blanc","100ml de lait","2 c.à.s de sucre","1 sachet de levure chimique","Fruits frais variés et miel pour servir"],
    steps:["Mélanger la farine, la levure, les jaunes d'œufs, le lait, le fromage blanc et le sucre.","Monter les blancs en neige ferme et les incorporer délicatement au mélange.","Cuire dans le gaufrier préchauffé et huilé pendant 4–5 min.","Servir avec des fruits frais et un filet de miel."]
  },

  // ── DÉJEUNER (12) ────────────────────────────────────────────────────────
  {
    id:11, cat:'dejeuner', emoji:'🥗',
    img:'images/Bowl-quinoa-mediterraneen.png',
    name:'Bowl quinoa méditerranéen',
    time:'30 min', servings:2, difficulty:'Facile',
    kcal:520, proteins:18, carbs:68, fats:19,
    bg:'linear-gradient(135deg,#a8edea22,#fed6e322)',
    ingredients:["200g de quinoa","1 concombre","200g de tomates cerises","150g de pois chiches cuits","100g d'olives kalamata","150g de feta en dés","Jus de 2 citrons, huile d'olive, origan séché, sel"],
    steps:["Rincer le quinoa et le cuire dans 400ml d'eau salée pendant 12–15 min. Laisser refroidir.","Couper le concombre en demi-lunes et les tomates cerises en deux.","Préparer la vinaigrette : jus de citron, huile d'olive, origan, sel.","Combiner le quinoa, les légumes, les pois chiches et les olives. Napper de vinaigrette.","Parsemer de feta et servir à température ambiante."]
  },
  {
    id:12, cat:'dejeuner', emoji:'🍛',
    img:'images/Curry-lentilles-corail-coco.png',
    name:'Curry lentilles corail & coco',
    time:'35 min', servings:4, difficulty:'Moyen',
    kcal:445, proteins:21, carbs:62, fats:13,
    bg:'linear-gradient(135deg,#ffd89b22,#19547b22)',
    ingredients:["300g de lentilles corail","400ml de lait de coco","1 boîte de tomates concassées (400g)","1 oignon, 3 gousses d'ail, 2cm de gingembre frais","2 c.à.s de pâte de curry","Curcuma, garam masala, cumin","Coriandre fraîche et riz basmati pour servir"],
    steps:["Faire revenir l'oignon haché, l'ail et le gingembre dans un peu d'huile.","Ajouter la pâte de curry et les épices, cuire 1 min pour les libérer.","Incorporer les lentilles, les tomates et le lait de coco. Porter à ébullition.","Réduire le feu et mijoter 20–25 min jusqu'à ce que les lentilles soient fondantes.","Ajuster l'assaisonnement, servir avec le riz et la coriandre fraîche."]
  },
  {
    id:13, cat:'dejeuner', emoji:'🥙',
    img:'images/Wraps-falafels-houmous.png',
    name:'Wraps falafels & houmous',
    time:'45 min', servings:4, difficulty:'Moyen',
    kcal:480, proteins:16, carbs:58, fats:22,
    bg:'linear-gradient(135deg,#d4fc7922,#96e6a122)',
    ingredients:["400g de pois chiches cuits","½ oignon, 2 gousses d'ail, persil, coriandre","1 c.à.c de cumin et coriandre moulue","4 grandes tortillas","200g d'houmous (pois chiches, tahini, citron, ail)","Salade, tomates, concombre, oignon rouge","Sauce tahini (tahini + jus de citron + eau + sel)"],
    steps:["Mixer pois chiches, oignon, ail, herbes et épices. Former des boulettes de 3cm.","Cuire les falafels au four à 200°C pendant 20 min en les retournant à mi-cuisson.","Préparer l'houmous en mixant tous les ingrédients jusqu'à texture lisse.","Étaler l'houmous sur chaque tortilla, garnir de falafels et légumes frais.","Napper de sauce tahini, rouler fermement et servir."]
  },
  {
    id:14, cat:'dejeuner', emoji:'🍝',
    img:'images/250g-de-fusilli-ou-rigatoni.png',
    name:'Pasta pesto épinards & ricotta',
    time:'25 min', servings:2, difficulty:'Facile',
    kcal:560, proteins:20, carbs:72, fats:22,
    bg:'linear-gradient(135deg,#43e97b22,#38f9d722)',
    ingredients:["250g de fusilli ou rigatoni","100g d'épinards frais","30g de basilic frais","40g de pignons de pin","60g de parmesan râpé","100g de ricotta","3 c.à.s d'huile d'olive, sel, poivre"],
    steps:["Cuire les pâtes al dente selon les instructions. Réserver une tasse d'eau de cuisson.","Mixer les épinards, le basilic, les pignons, le parmesan et l'huile d'olive en pesto.","Égoutter les pâtes et les mélanger avec le pesto, lier avec l'eau de cuisson si nécessaire.","Servir avec des quenelles de ricotta et un peu de parmesan supplémentaire."]
  },
  {
    id:15, cat:'dejeuner', emoji:'🥚',
    img:'images/Shakshuka-poivrons-zaatar.png',
    name:'Shakshuka poivrons & zaatar',
    time:'30 min', servings:2, difficulty:'Facile',
    kcal:310, proteins:18, carbs:24, fats:17,
    bg:'linear-gradient(135deg,#ff616122,#ffc16422)',
    ingredients:["4 œufs","2 poivrons (rouge et jaune)","400g de tomates concassées","1 oignon, 3 gousses d'ail","1 c.à.c de cumin, paprika fumé, harissa","1 c.à.s de zaatar","Feta, coriandre fraîche, pain pita"],
    steps:["Faire revenir l'oignon et les poivrons émincés dans l'huile d'olive jusqu'à ramollissement.","Ajouter l'ail et les épices, cuire 1 min.","Verser les tomates concassées et mijoter 10 min. Assaisonner.","Creuser des cavités dans la sauce et casser les œufs dedans. Couvrir et cuire 6–8 min.","Saupoudrer de zaatar, garnir de feta et coriandre. Servir avec du pain pita."]
  },
  {
    id:16, cat:'dejeuner', emoji:'🌮',
    img:'images/Tacos-haricots-noirs-salsa-mangue.png',
    name:'Tacos haricots noirs & salsa mangue',
    time:'25 min', servings:4, difficulty:'Facile',
    kcal:420, proteins:15, carbs:52, fats:18,
    bg:'linear-gradient(135deg,#1e3c7222,#2a529822)',
    ingredients:["400g de haricots noirs cuits","8 tortillas de maïs","1 avocat mûr","200g de chou rouge émincé","1 mangue en petits dés","Jus de lime, coriandre fraîche, jalapeño","Cumin, paprika, sel"],
    steps:["Chauffer les haricots noirs avec le cumin, le paprika et le sel. Écraser grossièrement.","Préparer la salsa : dés de mangue, coriandre, lime, jalapeño émincé.","Faire le guacamole : avocat écrasé, jus de lime, sel, coriandre.","Chauffer les tortillas 30 sec de chaque côté.","Garnir de haricots, guacamole, chou rouge et salsa mangue."]
  },
  {
    id:17, cat:'dejeuner', emoji:'🍜',
    img:'images/Ramen-vegetarien-miso-tofu.png',
    name:'Ramen végétarien miso & tofu',
    time:'45 min', servings:2, difficulty:'Moyen',
    kcal:480, proteins:22, carbs:58, fats:18,
    bg:'linear-gradient(135deg,#24243e22,#30203022)',
    ingredients:["2 portions de nouilles ramen","1L de bouillon de légumes","3 c.à.s de miso blanc","200g de tofu ferme","2 œufs cuits 6 min","100g de pousses de soja","Algues nori, champignons enoki, ciboulette, sésame"],
    steps:["Porter le bouillon à 80°C (ne pas bouillir). Diluer le miso dedans.","Couper le tofu en cubes, le faire dorer 8 min à la poêle avec un peu d'huile de sésame et de sauce soja.","Cuire les œufs 6 min, les refroidir, les écaler et les couper en deux.","Cuire les nouilles selon les instructions, les rincer.","Assembler : bouillon miso, nouilles, tofu, œuf mollet, soja, enoki, nori, ciboulette, sésame."]
  },
  {
    id:18, cat:'dejeuner', emoji:'🥗',
    img:'images/Taboule-libanais-au-persil-plat.png',
    name:'Taboulé libanais au persil plat',
    time:'20 min + 1h', servings:4, difficulty:'Facile',
    kcal:240, proteins:6, carbs:34, fats:10,
    bg:'linear-gradient(135deg,#d4fc7922,#96e6a122)',
    ingredients:["100g de boulgour fin","1 botte de persil plat (env. 150g)","½ botte de menthe fraîche","3 tomates mûres","2 oignons nouveaux","Jus de 3 citrons","5 c.à.s d'huile d'olive extra-vierge"],
    steps:["Réhydrater le boulgour 15 min dans de l'eau bouillante, égoutter et laisser refroidir.","Ciseler très finement le persil et la menthe.","Couper les tomates et les oignons en très petits dés.","Mélanger tous les ingrédients avec le jus de citron et l'huile d'olive.","Réfrigérer 1h pour que les saveurs se développent. Servir frais."]
  },
  {
    id:19, cat:'dejeuner', emoji:'🍲',
    img:'images/Dahl-epinards-pois-chiches.png',
    name:'Dahl épinards & pois chiches',
    time:'35 min', servings:4, difficulty:'Facile',
    kcal:410, proteins:18, carbs:52, fats:15,
    bg:'linear-gradient(135deg,#ffd89b22,#19547b22)',
    ingredients:["400g de pois chiches cuits","200g d'épinards frais","400ml de lait de coco","2 tomates concassées","1 oignon, 3 gousses d'ail","Garam masala, curcuma, cumin, coriandre","Riz basmati et coriandre fraîche pour servir"],
    steps:["Faire revenir l'oignon et l'ail, ajouter les épices et cuire 1 min.","Ajouter les tomates, les pois chiches et le lait de coco. Mijoter 15 min.","Incorporer les épinards et cuire encore 3 min jusqu'à ce qu'ils fondent.","Ajuster l'assaisonnement.","Servir sur le riz basmati avec de la coriandre fraîche."]
  },
  {
    id:20, cat:'dejeuner', emoji:'🥘',
    img:'images/Risotto-champignons-huile-de-truffe.png',
    name:'Risotto champignons & huile de truffe',
    time:'40 min', servings:2, difficulty:'Moyen',
    kcal:490, proteins:14, carbs:68, fats:18,
    bg:'linear-gradient(135deg,#89216b22,#da449122)',
    ingredients:["200g de riz arborio","300g de champignons mélangés (Paris, shiitake, pleurotes)","1 échalote, 2 gousses d'ail","150ml de vin blanc sec","800ml de bouillon de légumes chaud","40g de parmesan râpé","30g de beurre, quelques gouttes d'huile de truffe"],
    steps:["Faire revenir les champignons émincés avec l'ail dans l'huile d'olive jusqu'à dorure. Réserver.","Dans la même casserole, revenir l'échalote avec le beurre, ajouter le riz et nacrer 2 min.","Déglacer au vin blanc, remuer jusqu'à absorption complète.","Ajouter le bouillon chaud louche par louche en remuant constamment (18–20 min).","Hors du feu, incorporer parmesan et beurre. Garnir de champignons et d'un filet d'huile de truffe."]
  },
  {
    id:21, cat:'dejeuner', emoji:'🫕',
    img:'images/Soupe-gaspacho-andalou.png',
    name:'Soupe gaspacho andalou',
    time:'15 min + 2h', servings:4, difficulty:'Facile',
    kcal:150, proteins:4, carbs:18, fats:8,
    bg:'linear-gradient(135deg,#f9953022,#ef473a22)',
    ingredients:["800g de tomates très mûres","1 concombre","1 poivron rouge","½ oignon rouge","2 gousses d'ail","3 c.à.s d'huile d'olive","2 c.à.s de vinaigre de xérès","Sel, 50g de pain rassis trempé dans l'eau"],
    steps:["Mixer tous les légumes avec l'ail, le pain essoré, l'huile d'olive et le vinaigre.","Assaisonner généreusement en sel. Ajouter un peu d'eau pour la consistance désirée.","Filtrer si vous souhaitez une texture lisse, ou conserver avec pulpe.","Réfrigérer au moins 2h pour servir bien froid.","Servir avec des dés de concombre, poivron et un filet d'huile."]
  },
  {
    id:22, cat:'dejeuner', emoji:'🥞',
    img:'images/Quiche-poireaux-chevre.png',
    name:'Quiche poireaux & chèvre',
    time:'55 min', servings:6, difficulty:'Moyen',
    kcal:420, proteins:16, carbs:28, fats:28,
    bg:'linear-gradient(135deg,#89216b22,#da449122)',
    ingredients:["1 pâte brisée","3 poireaux émincés","200g de bûche de chèvre","3 œufs","200ml de crème fraîche épaisse","80ml de lait","Sel, poivre blanc, muscade râpée, thym frais"],
    steps:["Préchauffer le four à 180°C. Foncer le moule avec la pâte brisée et précuire 10 min.","Faire fondre les poireaux émincés dans le beurre à feu doux pendant 10 min. Laisser tiédir.","Battre les œufs avec la crème, le lait, sel, poivre et muscade.","Disposer les poireaux sur la pâte, couvrir de tranches de chèvre, verser la crème.","Cuire 30–35 min jusqu'à ce que la quiche soit prise et dorée."]
  },

  // ── DÎNER (12) ───────────────────────────────────────────────────────────
  {
    id:23, cat:'diner', emoji:'🥦',
    img:'images/Buddha-bowl-tahini-legumes-rotis.png',
    name:'Buddha bowl tahini & légumes rôtis',
    time:'45 min', servings:2, difficulty:'Facile',
    kcal:550, proteins:19, carbs:64, fats:25,
    bg:'linear-gradient(135deg,#43e97b22,#38f9d722)',
    ingredients:["1 patate douce, ½ courge butternut","150g de brocoli","200g de pois chiches cuits","150g de quinoa","4 c.à.s de tahini, jus de 1 citron, 1 gousse d'ail, sel, eau","Épinards frais, ½ avocat, graines de sésame"],
    steps:["Préchauffer le four à 200°C. Couper les légumes en morceaux, assaisonner et rôtir 30 min.","Cuire le quinoa pendant 12–15 min.","Préparer la sauce tahini en mélangeant tahini, citron, ail, sel et assez d'eau pour une texture fluide.","Assembler les bols : quinoa, légumes rôtis, pois chiches, épinards et avocat tranché.","Napper généreusement de sauce tahini et parsemer de sésame grillé."]
  },
  {
    id:24, cat:'diner', emoji:'🍕',
    img:'images/Pizza-blanche-asperges-chevre.png',
    name:'Pizza blanche asperges & chèvre',
    time:'35 min', servings:2, difficulty:'Facile',
    kcal:490, proteins:19, carbs:58, fats:21,
    bg:'linear-gradient(135deg,#ffffff22,#96ceb422)',
    ingredients:["2 pâtes à pizza fines prêtes à l'emploi","200g de chèvre frais","150ml de crème fraîche épaisse","1 botte d'asperges vertes fines","80g de parmesan râpé","2 gousses d'ail, thym frais, zeste de citron","Huile d'olive, roquette pour finir"],
    steps:["Préchauffer le four à 240°C avec la plaque à pizza dedans.","Mélanger la crème fraîche avec l'ail haché, étaler sur les pâtes.","Parsemer de chèvre émietté et de parmesan.","Disposer les asperges finement tranchées, ajouter du thym.","Cuire 10–12 min jusqu'à dorure. Garnir de roquette et de zeste de citron."]
  },
  {
    id:25, cat:'diner', emoji:'🧆',
    img:'images/Moussaka-vege-aux-lentilles.png',
    name:'Moussaka végé aux lentilles',
    time:'80 min', servings:6, difficulty:'Difficile',
    kcal:390, proteins:18, carbs:42, fats:18,
    bg:'linear-gradient(135deg,#6c5ce722,#a29bfe22)',
    ingredients:["2 aubergines, 3 pommes de terre","300g de lentilles vertes","400g de tomates concassées","1 oignon, cannelle, cumin, origan","Béchamel : 500ml lait, 50g farine, 50g beurre","100g de parmesan râpé, 2 œufs"],
    steps:["Préchauffer le four à 200°C. Rôtir les tranches d'aubergines et pommes de terre 20 min.","Cuire les lentilles avec l'oignon, les tomates concassées et les épices pendant 20 min.","Préparer la béchamel classique, hors du feu incorporer le parmesan et les œufs.","Montage en couches dans un plat : pommes de terre, lentilles, aubergines, béchamel.","Cuire au four 35 min à 180°C. Laisser reposer 15 min avant de servir."]
  },
  {
    id:26, cat:'diner', emoji:'🍜',
    img:'images/Pad-thai-vegetarien-aux-cacahuetes.png',
    name:'Pad thaï végétarien aux cacahuètes',
    time:'30 min', servings:2, difficulty:'Moyen',
    kcal:520, proteins:18, carbs:68, fats:20,
    bg:'linear-gradient(135deg,#f9953022,#ef473a22)',
    ingredients:["200g de nouilles de riz plates","200g de tofu ferme","100g de pousses de soja","2 œufs","3 oignons nouveaux, cacahuètes concassées","Sauce : 3 c.à.s soja, 2 c.à.s tamarin, 1 c.à.s sucre de palme","1 lime, piment frais"],
    steps:["Tremper les nouilles de riz 30 min dans de l'eau froide, égoutter.","Faire dorer le tofu coupé en dés dans un wok très chaud.","Pousser le tofu sur le côté, brouiller les œufs dans le wok.","Ajouter la sauce, les nouilles, les soja et les oignons. Sauter 2 min.","Dresser avec les cacahuètes concassées, un quartier de lime et du piment."]
  },
  {
    id:27, cat:'diner', emoji:'🫙',
    img:'images/Lasagnes-epinards-ricotta.png',
    name:'Lasagnes épinards & ricotta',
    time:'70 min', servings:6, difficulty:'Moyen',
    kcal:450, proteins:22, carbs:52, fats:18,
    bg:'linear-gradient(135deg,#43e97b22,#38f9d722)',
    ingredients:["12 feuilles de lasagne","600g d'épinards frais","500g de ricotta","800ml de sauce béchamel","100g de parmesan râpé","2 gousses d'ail","Muscade, sel, poivre"],
    steps:["Préchauffer le four à 180°C.","Faire tomber les épinards avec l'ail dans l'huile. Refroidir, mélanger avec la ricotta, assaisonner avec muscade, sel et poivre.","Préparer la béchamel classique.","Montage : couche de béchamel, lasagne, épinards-ricotta, répéter 3 fois. Finir avec béchamel et parmesan.","Cuire à couvert 45 min, puis 10 min à découvert pour gratiner."]
  },
  {
    id:28, cat:'diner', emoji:'🌶️',
    img:'images/Chili-sin-carne-aux-3-haricots.png',
    name:'Chili sin carne aux 3 haricots',
    time:'50 min', servings:4, difficulty:'Facile',
    kcal:430, proteins:20, carbs:62, fats:10,
    bg:'linear-gradient(135deg,#f9953022,#ef473a22)',
    ingredients:["200g de haricots noirs, rouges et blancs cuits","2 boîtes de tomates concassées","1 oignon, 3 gousses d'ail","Chili, paprika fumé, cumin, origan","1 poivron rouge, 100g de maïs","Coriandre fraîche, citron vert","Riz ou tortillas pour servir"],
    steps:["Faire revenir l'oignon, l'ail et le poivron avec toutes les épices.","Ajouter les tomates concassées et les trois types de haricots.","Incorporer le maïs et laisser mijoter à feu moyen pendant 30 min.","Goûter et ajuster l'assaisonnement en sel, piment et épices.","Servir avec la coriandre, un quartier de citron vert et du riz."]
  },
  {
    id:29, cat:'diner', emoji:'🫕',
    img:'images/Tajine-legumes-fruits-secs.png',
    name:'Tajine légumes & fruits secs',
    time:'60 min', servings:4, difficulty:'Moyen',
    kcal:360, proteins:10, carbs:54, fats:14,
    bg:'linear-gradient(135deg,#ffd89b22,#19547b22)',
    ingredients:["2 courgettes, 2 carottes, 1 aubergine","400g de pois chiches cuits","100g d'abricots secs, 50g de raisins secs","Ras el hanout, safran, cannelle, cumin","300ml de bouillon de légumes","Amandes effilées grillées, coriandre fraîche","Couscous ou pain pour servir"],
    steps:["Couper tous les légumes en morceaux de taille similaire.","Faire revenir avec le ras el hanout, la cannelle et le cumin pendant 3 min.","Ajouter les pois chiches, les fruits secs, le safran infusé et le bouillon.","Couvrir et laisser mijoter à feu doux pendant 40 min.","Garnir d'amandes grillées et de coriandre. Servir avec le couscous."]
  },
  {
    id:30, cat:'diner', emoji:'🫔',
    img:'images/Tarte-tatin-legumes-dautomne.png',
    name:'Tarte tatin légumes d\'automne',
    time:'55 min', servings:6, difficulty:'Difficile',
    kcal:380, proteins:8, carbs:42, fats:20,
    bg:'linear-gradient(135deg,#c79f3022,#e55d8722)',
    ingredients:["1 pâte feuilletée","2 betteraves, 2 carottes, 1 panais","200g de chèvre frais","3 c.à.s de miel","2 c.à.s de vinaigre balsamique","30g de beurre, thym frais","50g de noix concassées"],
    steps:["Préchauffer le four à 200°C. Éplucher et couper tous les légumes en rondelles de 5mm.","Dans un moule allant au four, faire caraméliser le miel avec le beurre. Ajouter le balsamique.","Disposer les légumes en rosace dans le caramel, saler et poivrer. Enfourner 15 min.","Parsemer de chèvre émietté et de thym. Recouvrir avec la pâte feuilletée en rentrant les bords.","Cuire 25 min jusqu'à belle dorure. Retourner aussitôt sur un plat. Garnir de noix."]
  },
  {
    id:31, cat:'diner', emoji:'🌿',
    img:'images/Polenta-cremeuse-champignons.png',
    name:'Polenta crémeuse & champignons',
    time:'35 min', servings:2, difficulty:'Facile',
    kcal:480, proteins:14, carbs:58, fats:22,
    bg:'linear-gradient(135deg,#89216b22,#da449122)',
    ingredients:["150g de polenta","600ml de bouillon de légumes","100ml de crème liquide","50g de parmesan râpé","400g de champignons mélangés","3 gousses d'ail, persil plat","Beurre, huile d'olive, sel, poivre"],
    steps:["Porter le bouillon à ébullition, verser la polenta en pluie en remuant constamment.","Cuire 5 min à feu doux. Incorporer la crème et le parmesan. Assaisonner.","Faire sauter les champignons à feu vif dans le beurre et l'ail pendant 8 min jusqu'à dorure.","Assaisonner les champignons avec sel, poivre et persil ciselé.","Dresser la polenta crémeuse dans les assiettes et garnir de champignons."]
  },
  {
    id:32, cat:'diner', emoji:'🥘',
    img:'images/Gratin-dauphinois-vegetalien.png',
    name:'Gratin dauphinois végétalien',
    time:'80 min', servings:6, difficulty:'Moyen',
    kcal:340, proteins:6, carbs:45, fats:15,
    bg:'linear-gradient(135deg,#f5e6c822,#e5bccd22)',
    ingredients:["1,2 kg de pommes de terre à chair ferme","500ml de lait d'avoine","200ml de crème de cajou","3 gousses d'ail écrasées","1 c.à.c de muscade râpée","Sel, poivre blanc, levure nutritionnelle (optionnel)"],
    steps:["Préchauffer le four à 180°C. Peler et trancher finement les pommes de terre (2–3mm).","Mélanger le lait d'avoine, la crème de cajou, l'ail, la muscade, le sel et le poivre.","Huiler généreusement un plat à gratin, disposer les pommes de terre en couches superposées.","Verser le mélange laiteux, il doit presque couvrir les pommes de terre.","Cuire 65–70 min jusqu'à ce que le dessus soit doré et les pommes de terre fondantes."]
  },
  {
    id:33, cat:'diner', emoji:'🍄',
    img:'images/Veloute-de-champignons-creme-de-truffe.png',
    name:'Velouté de champignons & crème de truffe',
    time:'35 min', servings:4, difficulty:'Facile',
    kcal:240, proteins:7, carbs:18, fats:16,
    bg:'linear-gradient(135deg,#24243e22,#30203022)',
    ingredients:["400g de champignons de Paris","200g de shiitake ou pleurotes","1 oignon, 3 gousses d'ail","800ml de bouillon de légumes","200ml de crème liquide","Quelques gouttes d'huile de truffe","Persil plat, sel, poivre"],
    steps:["Faire revenir l'oignon haché et l'ail dans l'huile d'olive pendant 3 min.","Ajouter tous les champignons émincés et cuire 8 min à feu vif jusqu'à dorure.","Verser le bouillon, couvrir et cuire encore 15 min.","Mixer avec la crème jusqu'à texture très lisse. Assaisonner.","Servir dans des bols avec quelques gouttes d'huile de truffe et du persil."]
  },
  {
    id:34, cat:'diner', emoji:'🫔',
    img:'images/Feuilletes-spanakopita-epinards-feta.png',
    name:'Feuilletés spanakopita épinards & feta',
    time:'40 min', servings:4, difficulty:'Moyen',
    kcal:380, proteins:14, carbs:32, fats:23,
    bg:'linear-gradient(135deg,#43e97b22,#38f9d722)',
    ingredients:["6 feuilles de pâte filo","400g d'épinards frais","200g de feta émiettée","2 œufs battus","1 oignon émincé","Huile d'olive, aneth frais","Graines de nigelle pour décorer"],
    steps:["Préchauffer le four à 180°C.","Faire tomber les épinards avec l'oignon dans l'huile. Refroidir. Mélanger avec la feta, les œufs et l'aneth.","Badigeonner les feuilles filo d'huile d'olive, les superposer par paires.","Répartir la farce et former des triangles ou rouleaux. Parsemer de nigelle.","Cuire 25–30 min jusqu'à dorure et croustillant. Servir chaud."]
  },

  // ── SOUPES (6) ───────────────────────────────────────────────────────────
  {
    id:35, cat:'soupe', emoji:'🫕',
    img:'images/Veloute-potimarron-gingembre-coco.png',
    name:'Velouté potimarron gingembre & coco',
    time:'40 min', servings:4, difficulty:'Facile',
    kcal:220, proteins:4, carbs:32, fats:10,
    bg:'linear-gradient(135deg,#f9953022,#ef473a22)',
    ingredients:["1 potimarron (env. 900g)","400ml de lait de coco","600ml de bouillon de légumes","1 oignon, 3cm de gingembre frais","½ c.à.c de curry doux","Graines de courge grillées, crème de coco pour servir"],
    steps:["Laver le potimarron, retirer les graines et couper en cubes (la peau est comestible).","Faire revenir l'oignon et le gingembre râpé avec le curry pendant 2 min.","Ajouter le potimarron et le bouillon. Cuire à feu moyen 25 min jusqu'à tendreté.","Mixer avec le lait de coco jusqu'à texture très lisse. Assaisonner.","Servir avec un filet de crème de coco et des graines de courge grillées."]
  },
  {
    id:36, cat:'soupe', emoji:'🍅',
    img:'images/Soupe-tomates-roties-basilic.png',
    name:'Soupe tomates rôties & basilic',
    time:'55 min', servings:4, difficulty:'Facile',
    kcal:180, proteins:4, carbs:22, fats:9,
    bg:'linear-gradient(135deg,#f9953022,#ef473a22)',
    ingredients:["1,2 kg de tomates mûres","1 oignon rouge coupé en quartiers","6 gousses d'ail non pelées","1 botte de basilic frais","3 c.à.s d'huile d'olive","800ml de bouillon de légumes","Parmesan et croûtons pour servir"],
    steps:["Préchauffer le four à 200°C. Couper les tomates en deux, les disposer côté coupé vers le haut.","Ajouter les quartiers d'oignon et les gousses d'ail. Arroser d'huile d'olive et enfourner 30–35 min.","Peler l'ail rôti et mixer tous les légumes avec le basilic et le bouillon.","Chauffer, assaisonner et rectifier la consistance avec plus de bouillon si nécessaire.","Servir avec des croûtons grillés et du parmesan râpé."]
  },
  {
    id:37, cat:'soupe', emoji:'🧅',
    img:'images/Soupe-a-loignon-gratinee.png',
    name:'Soupe à l\'oignon gratinée',
    time:'65 min', servings:4, difficulty:'Moyen',
    kcal:350, proteins:14, carbs:42, fats:14,
    bg:'linear-gradient(135deg,#f6d36522,#f093fb22)',
    ingredients:["1,5 kg d'oignons jaunes","1L de bouillon de légumes","200ml de vin blanc sec","4 tranches épaisses de pain","150g de gruyère râpé","40g de beurre, huile d'olive","Thym, laurier, sel, poivre"],
    steps:["Émincer les oignons finement. Les caraméliser à feu doux avec le beurre, le thym et le laurier pendant 40 min en remuant régulièrement.","Déglacer au vin blanc, laisser réduire 5 min. Verser le bouillon et cuire 15 min.","Assaisonner en sel et poivre. Retirer le laurier.","Répartir la soupe dans des bols allant au four. Poser une tranche de pain et couvrir de gruyère.","Passer sous le gril 5–8 min jusqu'à gratinage. Servir immédiatement."]
  },
  {
    id:38, cat:'soupe', emoji:'🥬',
    img:'images/Soupe-de-lentilles-vertes-a-la-francaise.png',
    name:'Soupe de lentilles vertes à la française',
    time:'45 min', servings:4, difficulty:'Facile',
    kcal:280, proteins:16, carbs:44, fats:6,
    bg:'linear-gradient(135deg,#24243e22,#30203022)',
    ingredients:["300g de lentilles vertes du Puy","1 oignon, 2 carottes, 2 branches de céleri","2 gousses d'ail","1 bouquet garni (thym, laurier, persil)","1 c.à.s de vinaigre de vin rouge","Sel, poivre, pain de campagne"],
    steps:["Rincer les lentilles. Émincer l'oignon, les carottes et le céleri.","Faire revenir les légumes dans l'huile d'olive 5 min, ajouter l'ail.","Verser les lentilles, le bouquet garni et couvrir d'eau à hauteur + 4cm.","Cuire à feu moyen 30–35 min jusqu'à ce que les lentilles soient tendres.","Ajouter le vinaigre, assaisonner. Servir avec du pain de campagne grillé."]
  },
  {
    id:39, cat:'soupe', emoji:'🥣',
    img:'images/Soupe-miso-legumes-detox.png',
    name:'Soupe miso & légumes detox',
    time:'20 min', servings:2, difficulty:'Facile',
    kcal:150, proteins:9, carbs:16, fats:6,
    bg:'linear-gradient(135deg,#a8edea22,#fed6e322)',
    ingredients:["1L d'eau filtrée","3 c.à.s de miso blanc","100g de tofu soyeux coupé en cubes","30g d'algues wakamé réhydratées","100g de champignons de Paris tranchés","2 oignons verts émincés","Gingembre frais râpé, sauce soja, graines de sésame"],
    steps:["Porter l'eau à 80°C (ne pas bouillir, cela dégrade le miso).","Réhydrater les algues wakamé 5 min dans de l'eau froide, égoutter.","Diluer le miso dans un peu d'eau chaude prélevée, remettre dans la casserole.","Ajouter le tofu, les champignons, les algues et le gingembre râpé. Chauffer 2 min sans bouillir.","Servir garni d'oignons verts et de sésame."]
  },
  {
    id:40, cat:'soupe', emoji:'🌽',
    img:'images/Veloute-de-mais-poivrons-rouges.png',
    name:'Velouté de maïs & poivrons rouges',
    time:'40 min', servings:4, difficulty:'Facile',
    kcal:220, proteins:6, carbs:38, fats:7,
    bg:'linear-gradient(135deg,#f7971e22,#ffd20022)',
    ingredients:["500g de maïs en grains (surgelé ou frais)","3 poivrons rouges rôtis","1 oignon, 2 gousses d'ail","400ml de bouillon de légumes","200ml de lait d'avoine","Paprika fumé, coriandre fraîche","Crème légère pour servir"],
    steps:["Rôtir les poivrons directement sur la flamme ou au four à 220°C. Peler, épépiner.","Faire revenir l'oignon et l'ail, ajouter le maïs et les poivrons pelés.","Verser le bouillon et le lait d'avoine, cuire 20 min.","Mixer partiellement pour garder un peu de texture. Assaisonner avec le paprika fumé.","Servir avec un filet de crème et des feuilles de coriandre."]
  },

  // ── SNACKS (5) ───────────────────────────────────────────────────────────
  {
    id:41, cat:'snack', emoji:'🥜',
    img:'images/Energy-balls-chocolat-noisettes.png',
    name:'Energy balls chocolat & noisettes',
    time:'15 min + 30 min', servings:15, difficulty:'Facile',
    kcal:118, proteins:4, carbs:14, fats:6,
    bg:'linear-gradient(135deg,#3d1c0222,#783f0422)',
    ingredients:["150g de flocons d'avoine","80g de pâte de noisette (ou beurre d'amande)","60ml de miel ou sirop d'érable","40g de cacao non sucré","50g de pépites de chocolat noir","2 c.à.s de graines de chia","1 c.à.c d'extrait de vanille"],
    steps:["Mélanger tous les ingrédients dans un grand bol jusqu'à obtenir une pâte homogène.","Réfrigérer 30 min pour que la pâte soit plus facile à travailler.","Former des boules de 25g environ (taille d'une noix).","Conserver dans un contenant hermétique au réfrigérateur jusqu'à 2 semaines."]
  },
  {
    id:42, cat:'snack', emoji:'🧁',
    img:'images/Muffins-courgettes-herbes.png',
    name:'Muffins courgettes & herbes',
    time:'35 min', servings:12, difficulty:'Facile',
    kcal:145, proteins:5, carbs:18, fats:6,
    bg:'linear-gradient(135deg,#96ceb422,#88d8b022)',
    ingredients:["250g de farine de blé","2 courgettes moyennes râpées","3 œufs","100ml d'huile de tournesol","150ml de lait végétal","80g de gruyère râpé","Basilic, thym, sel, poivre, 1 sachet de levure"],
    steps:["Préchauffer le four à 180°C. Huiler un moule à 12 muffins.","Mélanger la farine, la levure, le sel et le poivre dans un grand bol.","Battre les œufs avec l'huile et le lait. Presser les courgettes râpées pour enlever l'excès d'eau.","Incorporer le mélange liquide et les courgettes aux ingrédients secs. Ajouter les herbes et le gruyère.","Remplir les moules aux 3/4 et cuire 22–25 min. Vérifier avec un cure-dent."]
  },
  {
    id:43, cat:'snack', emoji:'🫙',
    img:'images/Houmous-betterave-chips-de-pita.png',
    name:'Houmous betterave & chips de pita',
    time:'15 min', servings:4, difficulty:'Facile',
    kcal:180, proteins:6, carbs:22, fats:8,
    bg:'linear-gradient(135deg,#e91e8c22,#ff607022)',
    ingredients:["400g de pois chiches cuits","200g de betterave cuite","3 c.à.s de tahini","Jus de 2 citrons","2 gousses d'ail","3 c.à.s d'huile d'olive","4 pains pita, sel, cumin, paprika fumé"],
    steps:["Mixer les pois chiches, la betterave, le tahini, le jus de citron et l'ail jusqu'à texture très lisse.","Ajouter l'huile d'olive, le cumin et le sel. Ajuster la consistance avec un peu d'eau si nécessaire.","Couper les pitas en triangles et les enfourner à 200°C pendant 8 min jusqu'à ce qu'ils soient croustillants.","Dresser le houmous dans un bol, arroser d'huile d'olive et saupoudrer de paprika.","Servir avec les chips de pita chauds."]
  },
  {
    id:44, cat:'snack', emoji:'🍿',
    img:'images/Pois-chiches-rotis-aux-epices.png',
    name:'Pois chiches rôtis aux épices',
    time:'40 min', servings:4, difficulty:'Facile',
    kcal:158, proteins:8, carbs:22, fats:5,
    bg:'linear-gradient(135deg,#ffd89b22,#19547b22)',
    ingredients:["400g de pois chiches cuits (bien secs)","2 c.à.s d'huile d'olive","1 c.à.c de paprika fumé","1 c.à.c de cumin moulu","½ c.à.c de curcuma","½ c.à.c de sel fin","Piment de Cayenne selon le goût"],
    steps:["Préchauffer le four à 200°C. Bien sécher les pois chiches avec du papier absorbant.","Mélanger dans un bol avec l'huile d'olive et toutes les épices.","Étaler en une seule couche sur une plaque de cuisson.","Rôtir 30–35 min en remuant à mi-cuisson jusqu'à ce qu'ils soient bien croustillants.","Laisser refroidir complètement pour qu'ils durcissent encore plus. Conserver dans un bocal ouvert."]
  },
  {
    id:45, cat:'snack', emoji:'🥨',
    img:'images/Crackers-graines-de-lin-romarin.png',
    name:'Crackers graines de lin & romarin',
    time:'30 min', servings:6, difficulty:'Facile',
    kcal:110, proteins:4, carbs:12, fats:6,
    bg:'linear-gradient(135deg,#fdfcfb22,#e2d1c322)',
    ingredients:["150g de farine complète","50g de graines de lin dorées","2 c.à.s d'huile d'olive extra-vierge","70ml d'eau tiède","1 c.à.c de sel fin","1 c.à.s de romarin séché émietté","Fleur de sel pour saupoudrer"],
    steps:["Préchauffer le four à 180°C. Mélanger la farine, les graines de lin, le sel et le romarin.","Ajouter l'huile d'olive et l'eau tiède. Pétrir jusqu'à obtenir une pâte homogène mais non collante.","Étaler très finement (2mm) entre deux feuilles de papier cuisson.","Marquer les crackers avec un couteau sans couper jusqu'en bas.","Saupoudrer de fleur de sel et cuire 15–18 min jusqu'à dorure. Laisser refroidir sur une grille."]
  },

  // ── DESSERTS (5) ─────────────────────────────────────────────────────────
  {
    id:46, cat:'dessert', emoji:'🍮',
    img:'images/Panna-cotta-vanille-coulis-framboise.png',
    name:'Panna cotta vanille & coulis framboise',
    time:'20 min + 4h', servings:4, difficulty:'Moyen',
    kcal:230, proteins:4, carbs:28, fats:12,
    bg:'linear-gradient(135deg,#fff9c422,#ff6b6b22)',
    ingredients:["500ml de crème de coco entière","200ml de lait d'amande","4 feuilles de gélatine (ou 2g d'agar-agar)","60g de sucre de canne","1 gousse de vanille fendue","300g de framboises fraîches ou surgelées","2 c.à.s de sucre glace"],
    steps:["Ramollir les feuilles de gélatine 5 min dans de l'eau froide.","Chauffer la crème de coco, le lait, le sucre et les graines de vanille sans faire bouillir.","Essorer la gélatine et la dissoudre dans la crème chaude hors du feu.","Verser dans 4 verrines et réfrigérer au minimum 4h.","Mixer les framboises avec le sucre glace, filtrer. Napper les panna cottas au moment de servir."]
  },
  {
    id:47, cat:'dessert', emoji:'🍫',
    img:'images/Mousse-chocolat-noir-aquafaba.png',
    name:'Mousse chocolat noir & aquafaba',
    time:'20 min + 2h', servings:4, difficulty:'Facile',
    kcal:280, proteins:6, carbs:32, fats:16,
    bg:'linear-gradient(135deg,#24243e22,#30203022)',
    ingredients:["200g de chocolat noir 70%","400ml d'aquafaba (jus de pois chiches en boîte)","40g de sucre de canne fin","1 c.à.c d'extrait de vanille","1 pincée de sel","Cacao en poudre et fruits rouges pour servir"],
    steps:["Fondre le chocolat noir au bain-marie. Laisser tiédir à température ambiante.","Monter l'aquafaba en neige très ferme avec la pincée de sel (8–10 min au batteur électrique).","Ajouter le sucre progressivement en continuant de battre 2 min.","Incorporer délicatement le chocolat fondu et la vanille en pliant avec une maryse.","Répartir dans des verrines, réfrigérer minimum 2h. Servir avec du cacao et des fruits rouges."]
  },
  {
    id:48, cat:'dessert', emoji:'🍎',
    img:'images/Crumble-pomme-poire-cannelle.png',
    name:'Crumble pomme-poire & cannelle',
    time:'45 min', servings:6, difficulty:'Facile',
    kcal:320, proteins:4, carbs:48, fats:13,
    bg:'linear-gradient(135deg,#f7971e22,#ffd20022)',
    ingredients:["4 pommes Golden, 3 poires Williams","100g de sucre de canne","2 c.à.c de cannelle moulue","120g de farine d'épeautre","80g de flocons d'avoine","60g de beurre froid en dés","40g de sucre roux"],
    steps:["Préchauffer le four à 180°C.","Peler et couper les fruits en cubes. Les mélanger avec le sucre et la cannelle dans le plat à gratin.","Préparer le crumble : mélanger farine, flocons, sucre roux et beurre froid du bout des doigts jusqu'à texture sableuse.","Étaler le crumble uniformément sur les fruits.","Cuire 30–35 min jusqu'à ce que le dessus soit bien doré. Servir tiède avec de la crème fraîche."]
  },
  {
    id:49, cat:'dessert', emoji:'🫐',
    img:'images/Cheesecake-myrtilles-sans-cuisson.png',
    name:'Cheesecake myrtilles sans cuisson',
    time:'30 min + 6h', servings:8, difficulty:'Moyen',
    kcal:390, proteins:7, carbs:38, fats:24,
    bg:'linear-gradient(135deg,#4776e622,#8e54e922)',
    ingredients:["250g de biscuits type digestive","100g de beurre fondu","500g de cream cheese à température ambiante","200ml de crème liquide entière","100g de sucre glace tamisé","Zeste de 1 citron, 1 c.à.c d'extrait de vanille","200g de myrtilles fraîches, 50g de sucre"],
    steps:["Mixer les biscuits en poudre, mélanger avec le beurre fondu. Tasser dans le fond d'un moule à charnière. Réfrigérer.","Fouetter le cream cheese avec le sucre glace, le zeste de citron et la vanille.","Monter la crème liquide en chantilly ferme et l'incorporer délicatement au cream cheese.","Verser sur la base biscuitée, lisser et réfrigérer minimum 6h (idéalement une nuit).","Coulis : cuire myrtilles et sucre 10 min. Laisser refroidir. Napper le cheesecake avant de servir."]
  },
  {
    id:50, cat:'dessert', emoji:'🍋',
    img:'images/Tarte-au-citron-meringuee.png',
    name:'Tarte au citron meringuée',
    time:'60 min + 2h', servings:8, difficulty:'Difficile',
    kcal:350, proteins:7, carbs:48, fats:16,
    bg:'linear-gradient(135deg,#f6d36522,#ffecd222)',
    ingredients:["1 pâte sucrée (farine, beurre, sucre, œuf)","Jus et zeste de 4 citrons","150g de sucre","3 œufs entiers + 2 jaunes","80g de beurre en dés","Meringue : 3 blancs d'œufs, 150g de sucre, 1 pincée de sel"],
    steps:["Précuire la pâte sucrée à blanc 15 min à 175°C avec des billes de cuisson.","Préparer le curd : fouetter jus de citron, zeste, sucre, œufs et jaunes au bain-marie jusqu'à épaississement. Incorporer le beurre hors du feu.","Verser le curd sur la pâte refroidie. Réfrigérer 2h.","Monter les blancs en neige, ajouter le sucre progressivement jusqu'à meringue ferme et brillante.","Dresser la meringue sur la tarte et caraméliser au chalumeau ou sous le gril."]
  }

];

// ─── COOKING TIMES ────────────────────────────────────────────────────────
const COOKING_TIMES = {
  legumes: [
    {name:'Asperges vertes',   vapeur:'5–8 min',   eau:'6–10 min',  four:'15–20 min', poele:'4–6 min',   note:'Al dente recommandé'},
    {name:'Aubergines',        vapeur:'8–10 min',  eau:'—',          four:'25–35 min', poele:'10–12 min', note:'Saler pour dégorger 20 min'},
    {name:'Betteraves',        vapeur:'30–40 min', eau:'35–50 min',  four:'60–90 min', poele:'—',         note:'Selon la taille'},
    {name:'Brocoli',           vapeur:'4–6 min',   eau:'5–8 min',   four:'20–25 min', poele:'5–7 min',   note:'Ne pas trop cuire'},
    {name:'Carottes',          vapeur:'8–12 min',  eau:'10–15 min', four:'25–30 min', poele:'8–10 min',  note:'Rondelles de 5mm'},
    {name:'Céleri-rave',       vapeur:'15–20 min', eau:'20–25 min', four:'35–40 min', poele:'12–15 min', note:'Cubes de 2cm'},
    {name:'Champignons',       vapeur:'3–5 min',   eau:'—',          four:'15–20 min', poele:'5–8 min',   note:'Ne jamais mouiller'},
    {name:'Chou-fleur',        vapeur:'6–8 min',   eau:'8–12 min',  four:'25–30 min', poele:'8–10 min',  note:'En fleurettes'},
    {name:'Chou kale',         vapeur:'4–6 min',   eau:'3–4 min',   four:'12–15 min', poele:'3–5 min',   note:'Masser avec sel d\'abord'},
    {name:'Courgettes',        vapeur:'5–7 min',   eau:'4–6 min',   four:'20–25 min', poele:'4–6 min',   note:'Éviter de surcuire'},
    {name:'Épinards',          vapeur:'2–3 min',   eau:'1–2 min',   four:'—',         poele:'2–3 min',   note:'Fondent très vite'},
    {name:'Fenouil',           vapeur:'10–15 min', eau:'10–15 min', four:'30–35 min', poele:'10–12 min', note:'En quartiers'},
    {name:'Haricots verts',    vapeur:'5–7 min',   eau:'5–8 min',   four:'15–20 min', poele:'5–7 min',   note:'Eau bouillante très salée'},
    {name:'Panais',            vapeur:'12–15 min', eau:'12–18 min', four:'30–40 min', poele:'10–12 min', note:'Révèle sa douceur au four'},
    {name:'Patate douce',      vapeur:'15–20 min', eau:'20–25 min', four:'35–45 min', poele:'12–15 min', note:'Entière au four : 60 min'},
    {name:'Petits pois',       vapeur:'3–4 min',   eau:'3–5 min',   four:'—',         poele:'3–4 min',   note:'Surgelés directs'},
    {name:'Poireaux',          vapeur:'8–10 min',  eau:'10–12 min', four:'25–30 min', poele:'8–10 min',  note:'Rondelles ou entiers'},
    {name:'Poivrons',          vapeur:'8–10 min',  eau:'—',          four:'30–40 min', poele:'8–10 min',  note:'Peler après passage au four'},
    {name:'Pommes de terre',   vapeur:'20–25 min', eau:'20–25 min', four:'45–60 min', poele:'15–20 min', note:'Départ eau froide salée'},
    {name:'Potimarron',        vapeur:'15–20 min', eau:'—',          four:'35–45 min', poele:'12–15 min', note:'Peau comestible (non pelé)'},
    {name:'Topinambour',       vapeur:'15–20 min', eau:'15–20 min', four:'35–40 min', poele:'12–15 min', note:'Frotter la peau sous l\'eau'},
  ],
  cereales: [
    {name:'Amarante',          eau:'350ml/100g', temps:'20–25 min', note:'Ratio 1:3,5'},
    {name:'Boulgour fin',      eau:'200ml/100g', temps:'15 min',    note:'Eau bouillante, couvrir, éteindre'},
    {name:'Épeautre',          eau:'300ml/100g', temps:'45–60 min', note:'Tremper 12h avant cuisson'},
    {name:'Farro',             eau:'300ml/100g', temps:'25–30 min', note:'Tremper 8h avant cuisson'},
    {name:'Flocons d\'avoine', eau:'300ml/100g', temps:'3–5 min',   note:'Remuer constamment'},
    {name:'Millet',            eau:'250ml/100g', temps:'20–25 min', note:'Torréfier à sec 2 min avant'},
    {name:'Orge perlé',        eau:'250ml/100g', temps:'25–30 min', note:'Excellent pour risottos'},
    {name:'Polenta instantanée',eau:'400ml/100g',temps:'5 min',     note:'Remuer constamment au fouet'},
    {name:'Polenta classique', eau:'400ml/100g', temps:'30 min',    note:'Cuisson lente, feu doux'},
    {name:'Quinoa',            eau:'200ml/100g', temps:'12–15 min', note:'Rincer abondamment avant'},
    {name:'Riz basmati',       eau:'200ml/100g', temps:'12–15 min', note:'Rincer 3 fois jusqu\'à eau claire'},
    {name:'Riz brun',          eau:'250ml/100g', temps:'35–45 min', note:'Tremper 1h pour accélérer'},
    {name:'Riz à sushi',       eau:'220ml/100g', temps:'15 min',    note:'Ne pas saler, laisser reposer 10 min'},
    {name:'Sarrasin',          eau:'200ml/100g', temps:'15–20 min', note:'Torréfié à sec = kasha'},
    {name:'Semoule fine',      eau:'200ml/100g', temps:'5 min',     note:'Eau bouillante + couvrir 5 min'},
    {name:'Teff',              eau:'300ml/100g', temps:'15–20 min', note:'Très riche en calcium et fer'},
  ],
  legumineuses: [
    {name:'Azuki',              trempage:'8h',          cuisson:'45–60 min',  note:'Base desserts japonais (anko)'},
    {name:'Fèves',              trempage:'12h',         cuisson:'40–60 min',  note:'Peler la seconde peau après cuisson'},
    {name:'Flageolets',         trempage:'8h',          cuisson:'1h–1h30',    note:'Accompagnement traditionnel'},
    {name:'Haricots blancs',    trempage:'12h',         cuisson:'1h30–2h',    note:'Changer l\'eau de trempage'},
    {name:'Haricots noirs',     trempage:'12h',         cuisson:'1h–1h30',    note:'Ne pas saler en début de cuisson'},
    {name:'Haricots rouges',    trempage:'12h',         cuisson:'1h30–2h',    note:'Bouillir 10 min fort (toxines)'},
    {name:'Lentilles béluga',   trempage:'—',           cuisson:'20–25 min',  note:'Gardent leur forme parfaitement'},
    {name:'Lentilles corail',   trempage:'—',           cuisson:'15–20 min',  note:'Fondent — idéales en soupe/dahl'},
    {name:'Lentilles du Puy',   trempage:'—',           cuisson:'25–30 min',  note:'IGP, parfum noisette délicat'},
    {name:'Lentilles vertes',   trempage:'—',           cuisson:'25–35 min',  note:'Ne pas saler au début'},
    {name:'Pois cassés',        trempage:'4h (optionnel)',cuisson:'30–45 min', note:'Fondent naturellement'},
    {name:'Pois chiches',       trempage:'12h',         cuisson:'1h30–2h',    note:'Autocuiseur ÷ 3 (30–40 min)'},
    {name:'Soja vert (edamame)',trempage:'—',           cuisson:'4–5 min',    note:'Eau bouillante très salée'},
  ],
  oeufs: [
    {name:'Œuf à la coque',     methode:'Eau bouillante',           temps:'3–4 min',  texture:'Blanc coagulé, jaune totalement coulant'},
    {name:'Œuf mollet',         methode:'Eau bouillante',           temps:'6 min',    texture:'Blanc ferme, jaune crémeux et coulant'},
    {name:'Œuf dur',            methode:'Eau froide → bouillir',    temps:'10–12 min',texture:'Entièrement coagulé, jaune pas vert'},
    {name:'Œuf poché',          methode:'Eau frémissante + vinaigre',temps:'3–4 min', texture:'Blanc enveloppe le jaune coulant'},
    {name:'Omelette baveuse',   methode:'Poêle très chaude',        temps:'1–2 min',  texture:'Bords cuits, intérieur encore souple'},
    {name:'Œuf au plat',        methode:'Poêle à feu très doux',    temps:'3–5 min',  texture:'Blanc opaque, jaune intact et brillant'},
    {name:'Œufs brouillés',     methode:'Bain-marie ou feu très doux',temps:'6–8 min',texture:'Crémeux, soyeux, fondants'},
    {name:'Feta',               methode:'Telle quelle ou au four',  temps:'—',        texture:'Au four 8 min → dorée et fondante'},
    {name:'Ricotta',            methode:'Telle quelle',             temps:'—',        texture:'Légère, idéale pour farces et desserts'},
    {name:'Mozzarella',         methode:'Température ambiante',     temps:'—',        texture:'Fondre au four pizza : 8–10 min à 240°C'},
    {name:'Burrata',            methode:'Sortir du frigo 20 min',   temps:'—',        texture:'Cœur crémeux et fondant à température ambiante'},
  ]
};

// ─── PORTIONS ─────────────────────────────────────────────────────────────
const PORTIONS_BASE = [
  {emoji:'🍝', name:'Pâtes sèches (plat principal)',  unit:'g',      base:90,  visual:'1 grosse poignée fermée'},
  {emoji:'🍝', name:'Pâtes sèches (accompagnement)', unit:'g',      base:60,  visual:'1 petite poignée'},
  {emoji:'🍚', name:'Riz cru',                       unit:'g',      base:70,  visual:'½ verre à vin'},
  {emoji:'🫘', name:'Légumineuses sèches',            unit:'g',      base:60,  visual:'½ verre à vin'},
  {emoji:'🥦', name:'Légumes (crus bruts)',           unit:'g',      base:220, visual:'2 bonnes poignées'},
  {emoji:'🥚', name:'Œufs (omelette)',                unit:'œuf(s)', base:2,   visual:'—'},
  {emoji:'🥚', name:'Œufs (plat principal)',          unit:'œuf(s)', base:3,   visual:'—'},
  {emoji:'🧀', name:'Fromage à gratiner',             unit:'g',      base:35,  visual:'≈ 3 fines tranches'},
  {emoji:'🧀', name:'Fromage (fondue/raclette)',      unit:'g',      base:90,  visual:'≈ 8 tranches'},
  {emoji:'🥔', name:'Pommes de terre',                unit:'g',      base:225, visual:'2–3 spécimens moyens'},
  {emoji:'🌾', name:'Semoule / couscous cru',        unit:'g',      base:70,  visual:'≈ ½ verre'},
  {emoji:'🫙', name:'Soupe (entrée)',                 unit:'ml',     base:250, visual:'1 bol'},
  {emoji:'🫙', name:'Soupe (plat complet)',           unit:'ml',     base:400, visual:'2 bols'},
  {emoji:'🛢️', name:'Huile pour cuisson',            unit:'ml',     base:10,  visual:'1 c.à.s'},
  {emoji:'🫕', name:'Sauce (accompagnement)',         unit:'ml',     base:60,  visual:'4 c.à.s'},
];

// ─── ASTUCES ──────────────────────────────────────────────────────────────
const ASTUCES = {
  temps: {
    title:'⏰ Gagner du temps en cuisine',
    items:[
      {icon:'🔪', title:'La mise en place', text:'Avant d\'allumer le moindre feu, découpez tout, dosez tout et sortez vos ustensiles. C\'est le secret des chefs pour ne jamais brûler un oignon pendant qu\'on cherche le sel.'},
      {icon:'🍲', title:'Doublez les doses', text:'Si vous faites une sauce tomate, un gratin ou une soupe, faites-en deux fois plus. Congelez une portion — c\'est un repas "gratuit" pour les soirs de flemme.'},
      {icon:'🧹', title:'Nettoyez au fur et à mesure', text:'Un évier vide à la fin du repas change radicalement l\'expérience de cuisine. Lavez les ustensiles pendant les temps de cuisson passifs.'},
      {icon:'📅', title:'Batch cooking du dimanche', text:'Cuisez un grand volume de céréales et légumineuses, rôtissez plusieurs légumes d\'un coup. Toute la semaine en est simplifiée — montez vos bols en 5 min.'},
      {icon:'🧄', title:'Les aliments toujours prêts', text:'Oignon émincé, ail haché, herbes ciselées et citron pressé au frigo. Ils réduisent le temps actif de 50% sur presque chaque recette.'},
      {icon:'♨️', title:'Cuisson parallèle', text:'Lancez toujours ce qui cuit le plus longtemps en premier (céréales complètes, légumineuses). Les cuissons rapides (légumes, œufs) suivent.'},
    ]
  },
  erreurs: {
    title:'🚑 Rattraper les erreurs courantes',
    items:[
      {icon:'🧂', title:'Trop salé ?', text:'Dans une sauce, ajoutez une pomme de terre crue épluchée — elle absorbera l\'excès de sel en cuisant. Sinon, un peu de sucre ou d\'acide (citron, vinaigre) peut équilibrer. Un filet de crème dilue aussi.'},
      {icon:'🌶️', title:'Trop pimenté ?', text:'Ajoutez un corps gras (crème fraîche, lait de coco, yaourt) ou une touche de sucre. L\'acidité peut aussi aider. Ne jamais ajouter d\'eau : elle propage la capsaïcine et aggrave la brûlure.'},
      {icon:'💧', title:'Sauce trop liquide ?', text:'Délayez 1 c.à.c de fécule de maïs dans un peu d\'eau froide, versez dans la sauce bouillante en remuant. Magique. Ou réduire simplement à feu vif sans couvercle.'},
      {icon:'🔥', title:'Plat brûlé dans la casserole ?', text:'Ne pas remuer ! Transvaser délicatement dans une nouvelle casserole sans racler le fond brûlé. Ajouter un bout de pain ou une pomme pour absorber le goût.'},
      {icon:'😶', title:'Plat trop acide ?', text:'Une pincée de sucre ou une toute petite pincée de bicarbonate de soude neutralise l\'acidité d\'une sauce tomate. Testez avec le bout d\'une cuillère avant d\'ajouter.'},
      {icon:'🤕', title:'Caramel qui cristallise ?', text:'Ajoutez quelques gouttes de jus de citron en début de cuisson pour éviter la cristallisation. Si c\'est déjà arrivé, ajoutez de l\'eau et refaites chauffer à feu doux en remuant.'},
    ]
  },
  substituts: {
    title:'🔄 Substituts de dernière minute',
    items:[
      {icon:'🥚', title:'Plus d\'œuf pour un gâteau ?', text:'Remplacez 1 œuf par : ½ banane écrasée, 50g de compote de pommes, 3 c.à.s d\'aquafaba (jus de pois chiches), ou 1 c.à.s de graines de lin + 3 c.à.s d\'eau (laisser gonfler 5 min).'},
      {icon:'🥛', title:'Plus de crème liquide ?', text:'Du lait entier avec un peu de beurre fondu (ratio 3:1), ou du fromage frais (type St Môret) détendu à l\'eau tiède. Version végane : crème de coco ou crème de cajou.'},
      {icon:'🍋', title:'Plus de citron ?', text:'Un filet de vinaigre de cidre apporte l\'acidité nécessaire. 1 c.à.c de vinaigre ≈ 1 c.à.s de jus de citron. Le vinaigre de xérès est particulièrement polyvalent.'},
      {icon:'🧈', title:'Plus de beurre pour un gâteau ?', text:'Huile de coco fondue (même quantité), ou purée d\'amandes pour les brownies. Pour les pâtisseries, réduire légèrement la quantité (80% du poids de beurre initial).'},
      {icon:'🍯', title:'Plus de sucre ?', text:'Miel ou sirop d\'érable (réduire de 25% car plus sucrés et liquides). Banane très mûre pour les préparations sucrées chauffées.'},
      {icon:'🌾', title:'Plus de farine ?', text:'Farine d\'épeautre, de riz ou d\'avoine mixée selon la recette. Pour épaissir une sauce : fécule de maïs (moitié moins) ou arrow-root.'},
      {icon:'🧀', title:'Plus de parmesan ?', text:'Levure nutritionnelle (goût umami/fromager), grana padano ou pecorino. Version végane : levure nutritionnelle + noix de cajou mixées finement + sel.'},
      {icon:'🫙', title:'Plus de moutarde ?', text:'Raifort râpé (plus piquant), wasabi dilué, ou moutarde en grains. En vinaigrette : le balsamique émulsionné avec l\'huile peut remplacer l\'effet liant.'},
    ]
  },
  fast: {
    title:'✨ La Règle F.A.S.T. — L\'assaisonnement parfait',
    intro:'Votre plat vous semble "fade" sans que vous ne sachiez pourquoi ? Avant de rajouter du sel, appliquez la règle F.A.S.T. dans l\'ordre :',
    items:[
      {icon:'🫒', title:'F — Fat (Gras)', text:'Un filet d\'huile d\'olive de qualité, une noisette de beurre ou une cuillère de crème juste avant de servir. Le gras est le vecteur des arômes — sans lui, les saveurs ne se libèrent pas pleinement.'},
      {icon:'🍋', title:'A — Acid (Acide)', text:'Un trait de jus de citron, de vinaigre de vin ou de xérès réveille instantanément les saveurs. L\'acide contrebalance le gras et rend un plat "vivant". Souvent plus efficace que le sel.'},
      {icon:'🧂', title:'S — Salt (Sel)', text:'Sel, mais aussi sauce soja, tamari, parmesan râpé, câpres ou miso. Ces sources ajoutent du sel ET de l\'umami. Saler en fin de cuisson permet de mieux doser.'},
      {icon:'🍯', title:'T — Sweet (Sucré)', text:'Une pincée de sucre, une touche de miel ou de sirop d\'érable casse l\'amertume ou l\'acidité excessive. Dans les sauces tomate, vinaigrettes et soupes, c\'est souvent la clé finale.'},
    ]
  },
  conservation: {
    title:'🧊 Conservation & fraîcheur',
    items:[
      {icon:'🌿', title:'Herbes fraîches', text:'Basilic : à température ambiante dans un verre d\'eau (jamais au frigo — il noircit). Persil, coriandre : dans un torchon humide au frigo ou dans un verre d\'eau. Se conservent 1 semaine.'},
      {icon:'🍅', title:'Tomates', text:'Jamais au frigo ! Le froid détruit leur arôme et leur texture. À température ambiante, queues en haut. Mûrissez les tomates encore fermes près d\'une banane.'},
      {icon:'🥑', title:'Avocat', text:'Entamé avec son noyau + quelques gouttes de citron. Film plastique au contact de la chair. Se conserve 1–2 jours au frigo. Congelez la pulpe en purée citronnée pour les smoothies.'},
      {icon:'🧄', title:'Ail & oignons', text:'Dans un endroit sec, sombre et aéré (jamais au frigo, jamais en sac plastique). Durée : 1–2 mois. Ail germé : retirez le germe vert (amer) — l\'ail reste utilisable.'},
      {icon:'🫘', title:'Légumineuses cuites', text:'Au frigo dans leur eau de cuisson : 4–5 jours. Au congélateur (en portions de 400g) : 3 mois. Cuisinez-en de grandes quantités pour avoir toujours du prêt à l\'emploi.'},
      {icon:'🥬', title:'Légumes à feuilles', text:'Enveloppés dans un torchon humide au frigo. Épinards et kale : dans un sac hermétique avec papier absorbant. Laitue : stocker avec la racine dans l\'eau froide.'},
      {icon:'🍞', title:'Pain', text:'À température ambiante (le frigo accélère le rassissement). Enveloppé dans du lin. Congeler en tranches — se grille directement sans décongélation.'},
      {icon:'❄️', title:'Congélation intelligente', text:'Portionnez toujours avant congélation. Étiquetez avec date et contenu. Durée : soupes/sauces 3 mois, céréales cuites 2 mois, pâtisseries 1 mois.'},
    ]
  },
  couteaux: {
    title:'🔪 Couteaux & techniques de découpe',
    items:[
      {icon:'🔪', title:'Les 3 couteaux indispensables', text:'(1) Couteau de chef 20cm : pour 90% du travail. (2) Couteau d\'office 10cm : précision et épluchage. (3) Couteau à pain dentelé : pain, tomates et agrumes. Ces trois font 95% du travail.'},
      {icon:'💧', title:'L\'aiguisage régulier', text:'Un couteau affûté est plus sûr qu\'un couteau émoussé (on n\'appuie pas, donc moins de risques de glisser). Utiliser un fusil chaque semaine, une pierre tous les 6 mois.'},
      {icon:'🤌', title:'La prise en main correcte', text:'"Pince" : saisir la lame entre pouce et index, les autres doigts autour du manche. La main qui tient l\'aliment forme une griffe — les jointures guident la lame. Ne jamais lever les doigts.'},
      {icon:'🥕', title:'La julienne', text:'Couper en tranches de 3mm, superposer les tranches, couper en bâtonnets de 3mm × 5–6cm. Idéale pour les carottes, poireaux, poivrons. Cuisson rapide et uniforme.'},
      {icon:'🧅', title:'Émincer un oignon sans pleurer', text:'Couper en deux par la racine (la conserver pour maintenir les couches). Réfrigérer l\'oignon 30 min avant. Ou couper sous un filet d\'eau froide — le gaz se dissout dans l\'eau.'},
      {icon:'🌿', title:'Ciseler les herbes', text:'Basilic : empiler les feuilles, rouler en cigare, couper finement (chiffonnade). Persil/coriandre : hacher en croisant la lame en éventail. Ciboulette : couper en biais pour plus de surface.'},
    ]
  }
};

// ─── SEASONAL PRODUCE ─────────────────────────────────────────────────────
const SEASONAL_PRODUCE = {
  0:{fruits:['Clémentines','Oranges','Pamplemousse','Kiwis','Citrons','Bananes'],legumes:['Poireaux','Choux de Bruxelles','Courges','Navets','Betteraves','Chou kale','Céleri-rave','Endives','Mâche']},
  1:{fruits:['Clémentines','Oranges','Pamplemousse','Kiwis','Citrons'],legumes:['Poireaux','Choux','Navets','Betteraves','Chou kale','Céleri-rave','Endives','Topinambour','Mâche','Épinards']},
  2:{fruits:['Oranges','Pamplemousse','Kiwis','Citrons','Rhubarbe (début)'],legumes:['Poireaux','Épinards','Oseille','Cresson','Radis','Betteraves','Chou vert','Asperges (fin mars)']},
  3:{fruits:['Fraises','Rhubarbe','Citrons'],legumes:['Asperges','Petits pois','Radis','Épinards','Laitue','Oignons nouveaux','Oseille','Artichaut','Ail nouveau']},
  4:{fruits:['Fraises','Cerises','Rhubarbe'],legumes:['Asperges','Petits pois','Fèves','Radis','Courgettes (début)','Laitue','Artichaut','Concombres']},
  5:{fruits:['Fraises','Cerises','Abricots','Framboises','Groseilles','Melons'],legumes:['Courgettes','Tomates','Concombres','Haricots verts','Petits pois','Poivrons','Aubergines','Fenouil']},
  6:{fruits:['Abricots','Pêches','Nectarines','Framboises','Myrtilles','Pastèque','Melons','Figues (début)','Prunes'],legumes:['Courgettes','Tomates','Poivrons','Aubergines','Concombres','Haricots verts','Maïs','Basilic']},
  7:{fruits:['Pêches','Nectarines','Prunes','Figues','Raisins','Myrtilles','Mûres','Pastèque','Melons'],legumes:['Tomates','Poivrons','Aubergines','Courgettes','Maïs','Haricots verts','Concombres','Butternut (début)']},
  8:{fruits:['Raisins','Figues','Prunes','Poires','Pommes','Coings','Mûres'],legumes:['Courge butternut','Potimarron','Tomates','Poivrons','Champignons','Épinards','Brocoli','Céleri']},
  9:{fruits:['Pommes','Poires','Coings','Châtaignes','Noix','Raisins'],legumes:['Potimarron','Courge','Champignons','Choux','Betteraves','Poireaux','Chou kale','Céleri-rave','Navets']},
  10:{fruits:['Pommes','Poires','Coings','Châtaignes','Kiwis','Citrons'],legumes:['Choux','Poireaux','Betteraves','Navets','Panais','Céleri-rave','Endives','Mâche','Topinambour']},
  11:{fruits:['Clémentines','Oranges','Pamplemousse','Kiwis','Pommes','Poires','Châtaignes'],legumes:['Poireaux','Choux de Bruxelles','Courges','Navets','Betteraves','Céleri-rave','Endives','Mâche','Topinambour']}
};

const MONTH_NAMES = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
