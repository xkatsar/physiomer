if(typeof(CKEDITOR) !== 'undefined') {
    (function(CKEDITOR) {
        CKEDITOR.addTemplates('physiomer',{
            imagesPath: CKEDITOR.getUrl(
                '/sites/default/themes/physiomer2013/javascript/ckeditor/images/'
            ),
            templates:[
                {
                    title:'Entête 2 colonnes',
                    image:'header-2-cols.png',
                    description:'Entête avec 2 colonnes',
                    html:'<div class="node-header clearfix"> \
                <div class="node-header-group"> \
                    <h1>[node:title] <span class="subtitle">[node:field_sous_titre]</span></h1> \
                     \
                </div> \
                <div class="row-fluid display-table"> \
                    <div class="submenu-left table-cell"> \
                        <div class="fleches-list p25"> \
                            <ul> \
                                <li>Item 1</li> \
                                <li>Item 2</li> \
                                <li>Item 3</li> \
                            </ul> \
                        </div> \
                    </div> \
                    <div class="content-right table-cell" style="padding-top:0;"> \
                        <div style="margin-right:200px;"> \
                            <p> \
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, unde voluptatibus iure doloribus facere magni aspernatur ad. Necessitatibus, corporis, doloremque, possimus sunt vero praesentium nulla inventore laborum quae aut quis! \
                            </p> \
                            <p> \
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, incidunt, odit error debitis quidem dignissimos porro nesciunt unde vel molestias itaque necessitatibus reprehenderit harum assumenda ut repudiandae impedit dolore laboriosam! \
                            </p> \
                            <p class="zoom"> \
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, optio, autem, ab, voluptatum nihil facilis beatae nisi molestias culpa mollitia ad placeat dolor nulla sapiente dolorum adipisci cupiditate tempora qui? \
                            </p> \
                        </div> \
                    </div> \
                </div> \
            </div> \
            <hr class="header-shadow" /> \
            <div class="p25"> \
                <div class="node-header-group"> \
                    <h1> \
                        La marque Physiomer, laboratoire de la mer</h1> \
                    <h2 class="subtitle"> \
                        La science de la Mer au service de votre santé et de votre bien-être</h2> \
                </div> \
                <p> \
                    <strong>Proin viverra augue sit amet justo pulvinar vestibulum</strong>. Quisque facilisis dictum faucibus. Sed et magna eu nulla vestibulum semper nec dignissim neque. Donec sit amet odio eros. Etiam elit quam, tincidunt et sagittis at, feu giat at ante. In adipiscing viverra leo ut volutpat. Duis id ante est. Etiam vehicula varius velit, vitae viverra felis iaculis eget. Nunc pulvinar gravida lacinia. Quisque nulla justo, dapibus eu euismod eu. \
                </p> \
                <h2> \
                    Titre H2 \
                </h2> \
                <p> \
                    Venenatis hendrerit nisi. Nulla in dolor mi. <strong>Suspendisse mollis augue a erat viverra sit</strong> amet suscipit justo tempor. Etiam consectetur faucibus urna at porta. Fusce a mauris leo. Aliquam adipiscing interdum lobortis. Ula at neque mauris. Fusce sit amet varius quam. Aliquam at neque mi. Suspendisse ut rutrum ipsum. Pellentesque vehicula, mauris in porttitor tempus, erat augue congue felis, at tempus purus magna.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque egestas quam ac felis pellentesque euismod. Praesent varius ultrices neque, sit amet. \
                </p> \
                <p>&nbsp;</p> \
                <p>&nbsp;</p> \
                <h3> \
                    Titre h3</h3> \
                <p>Quisque facilisis dictum faucibus. Sed et magna eu nulla vestibulum semper nec dignissim neque. Donec sit amet odio eros. Etiam elit quam, tincidunt et sagittis at, feu giat at ante. In adipiscing viverra leo ut volutpat.</p> \
                <ul> \
                    <li> \
                        Liste item 1</li> \
                    <li> \
                        Liste item 2</li> \
                    <li> \
                        Liste item 3</li> \
                </ul> \
                <h4> \
                    Titre h4</h4> \
            </div> \
            <p> \
                <img alt="" class="media-image attr__typeof__foaf:Image img__fid__28 img__view_mode__media_original attr__format__media_original" height="456" src="/sites/default/files/grandjeu.jpg" typeof="foaf:Image" width="980" /> \
            </p> \
 \
'
                },
                {
                    title:'Lire la suite',
                    image:'read-more.png',
                    description:'Bouton',
                    html:'<a class="btn btn-physiomer pull-right" href="/fr/le-rhume-et-ses-complications"><i class="icon-fleche-bleue">&nbsp;</i> Lire la suite</a>'
                },
                {
                    title:'Zoom',
                    image:'zoom.png',
                    description:'Paragraphe de mise en avant avec fond bleu',
                    html:'<p class="zoom"> \
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, optio, autem, ab, voluptatum nihil facilis beatae nisi molestias culpa mollitia ad placeat dolor nulla sapiente dolorum adipisci cupiditate tempora qui? \
                            </p>'
                },
                {
                    title:'Pouce',
                    image:'pouce.png',
                    description:"Paragraphe de mise en avant avec un pictogramme de pouce en l'air aligné à gauche",
                    html:'<p class="emphase">Venenatis hendrerit nisi. Nulla in dolor mi. Suspendisse mollis augue a erat viverra sit amet suscipit justo tempor.</p>'
                },
                {
                    title:'Liste flèches',
                    image:'plus-fleches.png',
                    description:"Liste d'élements avec une flèche",
                    html:'<div class="fleches-list"> \
                            <ul> \
                                <li>Item 1</li> \
                                <li>Item 2</li> \
                                <li>Item 3</li> \
                            </ul> \
                        </div>'
                },
                {
                    title:'Liste +',
                    image:'plus-list.png',
                    description:"Liste d'élements avec un +",
                    html:'<div class="plus-list"> \
                            <ul> \
                                <li>Item 1</li> \
                                <li>Item 2</li> \
                                <li>Item 3</li> \
                            </ul> \
                        </div>'
                },
                {
                    title:'Liste flèche blanche',
                    image:'plus-fleches.png',
                    description:"Liste d'élements avec une flèche blanche",
                    html:'<div class="fleches-blanches-list"> \
                            <ul> \
                                <li>Item 1</li> \
                                <li>Item 2</li> \
                                <li>Item 3</li> \
                            </ul> \
                        </div>'
                },
                {
                    title:'Post-it',
                    image:'postit.png',
                    description:"",
                    html:'<div class="post-it table-cell"> \
<div class="postit-header"> \
                &nbsp; \
            </div> \
<div class="post-it-content"> \
<h2 class="postit-title"> \
                    Pour Qui ?<br></h2> \
<ul class="tag-list"><li> \
                        6 ans et + \
                    </li> \
</ul><h2 class="postit-title"> \
                    Pour Quoi ?<br></h2> \
<ul class="tag-list"><li> \
                        Hygiène nasale \
                    </li> \
<li> \
                        Nez qui coule \
                    </li> \
</ul><h2 class="postit-title"> \
                    Comment ?<br></h2> \
<p>             <a class="btn btn-physiomer" href="#"><i class="icon-fleche-bleue">&nbsp;</i> Voir la vidéo d\'utilisation</a> \
            </p></div> \
</div>'
                },
                {
                    title:'Fiche Produit',
                    image:'produit.png',
                    description:"",
                    html:'<div class="field-item even" property="content:encoded"><div class="node-header clearfix"> \
<div class="node-header-group"> \
<h1 class="rounded-title"> \
            test<br></h1> \
</div> \
<div class="row-fluid display-table"> \
<div class="product-image-left table-cell"> \
            <img alt="physiomer jet normal" height="280" src="/sites/default/files/physiomer-jet-normal.png" title="physiomer jet normal" width="131"></div> \
<div class="content table-cell"> \
<p> \
                <b>PHYSIOMER Jet Normal</b> est le seul lavage nasal diffusé sous forme de jet fin. Cette diffusion est mieux adaptée aux nez des enfants et des adultes.<br><b>PHYSIOMER Jet Normal</b> permet de : \
            </p> \
<ul class="plus-list"><li> \
                    Dégager le nez \
                </li> \
<li> \
                    Assainir les fosses nasales en évacuant les allergènes et pathogènes inspirés: bactéries, virus, poussières, acariens, pollen, fumée, pollution \
                </li> \
<li> \
                    Prévenir le rhume et les complications infectieuses (oreilles, sinus, gorge, bronches) \
                </li> \
<li> \
                    Rétablir la respiration nasale en cas de nez bouché. \
                </li> \
</ul><p> \
                &nbsp; \
            </p> \
</div> \
<div class="post-it table-cell"> \
<div class="postit-header"> \
                &nbsp; \
            </div> \
<div class="post-it-content"> \
<h2 class="postit-title"> \
                    Pour Qui ?<br></h2> \
[node:field_pour_qui] \
<h2 class="postit-title"> \
                    Pour Quoi ?<br></h2> \
[node:field_symptomes] \
                        Nez qui coule \
                    </li> \
</ul><h2 class="postit-title"> \
                    Comment ?<br></h2> \
<p>             <a class="btn btn-physiomer" href="#"><i class="icon-fleche-bleue">&nbsp;</i> Voir la vidéo d utilisation</a> \
            </p></div> \
</div> \
</div> \
</div> \
<hr class="header-shadow"><div class="row-inline row-fluid odd"> \
<h2 class="icon-title icon-star"> \
        Le plus produit<br></h2> \
<div class="row-fluid content-row-large"> \
<div class="span8"> \
<p> \
                La diffusion en continu sous forme de jet fin permet de débarrasser efficacement le nez de l encombrement muqueux et des particules indésirables. <strong>Seul PHYSIOMER vous propose le choix entre 2 modes de diffusion</strong> par jet d intensité variable selon la nature et la quantité des sécrétions nasales : \
            </p> \
<ul class="plus-list"><li> \
                    <strong class="underline">PHYSIOMER Jet Normal</strong> pour les sécrétions claires \
                </li> \
<li> \
                    <strong class="underline">PHYSIOMER Jet Fort</strong> pour les sécrétions purulentes plus épaisses (à partir de 10 ans) \
                </li> \
</ul><p>            En plus du simple lavage, PHYSIOMER permet de <strong>renforcer les défenses des muqueuses</strong> grâce à l action conjuguée des 80 sels minéraux et oligo-éléments, en particulier le fer et le cuivre reconnus pour leur action bénéfique contre l infection. \
        </p></div> \
<div class="span3"> \
            <img height="216" src="/sites/default/files/physiomer-produit-illu.png" width="245"></div> \
</div> \
</div> \
<div class="row-inline row even"> \
<div class="span6"> \
<h2 class="icon-title icon-chrono"> \
            La posologie<br></h2> \
<div class="row content-row-large"> \
<p> \
                PHYSIOMER est spécialement adapté aux muqueuses nasales, mêmes les plus fragiles et peut être utilisé plusieurs fois par jour en toute sécurité. \
            </p> \
<h4> \
                Nez qui coule ou encombré<br></h4> \
<p> \
                Utiliser <strong>4 à 6 fois</strong> par jour pour dégager les fosses nasales et rétablir la respiration nasale en cas de rhume, rhinopharyngite, grippe et autres formes de rhinites \
            </p> \
<h4> \
                Hygiène nasale<br></h4> \
<p> \
                Utiliser quotidiennement <strong>1 à 2 fois</strong> pour évacuer les agents infectieux et viraux, et prévenir les complications au niveau de la sphère ORL : otites, infections des autres organes respiratoires (pharynx et bronches) \
            </p> \
</div> \
</div> \
<div class="span6"> \
<h2 class="icon-title icon-gouttes"> \
            La composition<br></h2> \
<div class="row content-row-large"> \
<ul class="plus-list"><li> \
                    Eau de mer naturelle \
                </li> \
<li> \
                    Sans conservateur ni ajout de substance chimique \
                </li> \
<li> \
                    Stérile \
                </li> \
<li> \
                    Sans gaz propulseur afin de maintenir une température d utilisation agréable. \
                </li> \
<li> \
                    Isotonique* \
                </li> \
</ul><p>            <small>* de concentration en sels minéraux et oligo-éléments équivalente à 9g/l de chlorure de sodium comme celle de l organisme.</small> \
        </p></div> \
</div> \
</div> \
<div class="row-inline row-fluid odd"> \
<h2 class="icon-title icon-hand"> \
        Pourquoi choisir physiomer Jet Normal ?<br></h2> \
<div class="row-fluid content-row-large"> \
        <img height="416" src="/sites/default/files/pourquoi-physiomer-jet.jpg" width="882"></div> \
</div> \
</div>'
                },
            ]
        });
        
    })(CKEDITOR);
}