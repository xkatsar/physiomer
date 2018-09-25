<div class="popin-lang hide">
    <div class="rtecenter">
        <strong><span style="font-family:droid sans;"><span style="font-size:18px;"><span style="color:#0282c1;">WELCOME ON PHYSIOMER WEBSITE, CHOOSE YOUR COUNTRY*</span></span></span></strong>
    </div>
    <div class="rtecenter">
        <span style="color:#003c8c;"><span><span style="font-size:18px;"><span style="font-family:droid sans;">Bienvenue sur le site Physiomer, choisissez votre pays*</span></span></span></span>
    </div>
    <div class="rtecenter">
        <div class="fake-select" id="lang-select" style="position: relative;">
            <div class="list-selected">
                <span class="selection">Select a country</span>
            </div>
            <div class="list-container" style="z-index: 1;">
                <div class="scroll-container">
                    <ul class="list">
                        <?php
                            $redirStr = variable_get("physiomer_redirections", 'http://www.physiomer.fr|France');
                            $redirs = explode("\n", $redirStr);
                            foreach($redirs as $line):
                                $tab = explode('|', $line);
                                $url = '';
                                $label = '';
                                if (count($tab)>0) {
                                    $url = $tab[0];
                                }
                                if (count($tab)>1) {
                                    $label = $tab[1];
                                }
                        ?>
                            <li data-value="<?php print $url ?>"><?php print $label ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        <input id="validate-popin-lang" type="image" src="/<?php print drupal_get_path('module', 'physiomer') ?>/popin_lang/img/ok.png" style="z-index: 0;position: absolute; right: -10px;" />
        </div>
    </div>
</div>