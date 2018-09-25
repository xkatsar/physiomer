var physiometre_resetStep2 = null;
var physiometre_step2Draw = null;


(function($) {
    var _stepValue = '';
    var div = document.getElementById('physiometre-step2');
    var _paper = Raphael(div, 931, 366);
    var _paths = {};
    var lang = Drupal.settings.current_language.language;
    
    physiometre_step2Draw = function() {
        // Paths metadata
        var background = '/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/0.jpg';
        var paths = [
            {
                'id': '1',
                'path': 'M0,0L439,0L0,326L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('1') == -1) ? '0' : '1-1') + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('1') == -1) ? '1-0' : '1-1') + '.jpg")',
                'zones': [
                    {
                        'path': 'M117,0L346,0L365,56L194,182L117,0',
                        'onClick': function() {onClick('1'); physiometre_step2Draw()}
                    }
                ]
            },
            {
                'id': '2',
                'path': 'M0,0L465,0L341,365L0,365L0,326L439,0L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('2') == -1) ? '0' : '2-1') + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('2') == -1) ? '2-0' : '2-1') + '.jpg")',
                'zones': [
                    {
                        'path': 'M365,56L428,107L364,296L194,182L365,56',
                        'onClick': function() {onClick('2'); physiometre_step2Draw()}
                    }
                ]
            },
            {
                'id': '3',
                'path': 'M0,0L478,0L608,365L341,365L465,0L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('3') == -1) ? '0' : '3-1') + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('3') == -1) ? '3-0' : '3-1') + '.jpg")',
                'zones': [
                    {
                        'path': 'M428,107L515,104L583,294L364,296L428,107',
                        'onClick': function() {onClick('3'); physiometre_step2Draw()}
                    }
                ]
            },
            {
                'id': '4',
                'path': 'M0,0L501,0L930,312L930,365L608,365L478,0L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('4') == -1) ? '0' : '4-1') + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('4') == -1) ? '4-0' : '4-1') + '.jpg")',
                'zones': [
                    {
                        'path': 'M515,104L574,53L746,179L583,294L515,104',
                        'onClick': function() {onClick('4'); physiometre_step2Draw()}
                    }
                ]
            },
            {
                'id': '5',
                'path': 'M0,0L501,0L930,312L930,0L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('5') == -1) ? '0' : '5-1') + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-2/' + ((_stepValue == '' || _stepValue.indexOf('5') == -1) ? '5-0' : '5-1') + '.jpg")',
                'zones': [
                    {
                        'path': 'M574,53L590,0L824,0L746,179L574,53',
                        'onClick': function() {onClick('5'); physiometre_step2Draw()}
                    }
                ]
            }
        ];
        // console.log(paths);
        
        // Draw paths
        for(var pathIndex in paths) {
            var path = paths[pathIndex];
            
            // Initialisation
            if(_paths[path.id] == null) {
                for(var i=0; i<path.zones.length; i++) {
                    var id = path.id + '-zone-' + i;
                    _paths[id] = _paper
                        .path(path.zones[i].path)
                        .click(path.zones[i].onClick)
                        .hover(onMouseEnter, onMouseLeave)
                        .attr({'fill-opacity': 0, 'fill': 'white', 'stroke-opacity': 0, 'cursor': 'pointer'});
                    _paths[id].id = id;
                }
                _paths[path.id] = _paper
                    .path(path.path)
                    .hover(onMouseEnter, onMouseLeave)
                    .attr({'stroke-opacity': 0});
                _paths[path.id].id = path.id;
                _paths[path.id + '-hover'] = _paper
                    .path(path.path)
                    .attr({'stroke-opacity': 0});
                _paths[path.id + '-hover'].id = path.id + '-hover';
            }
            
            // Update
            for(var i=0; i<path.zones.length; i++) {
                _paths[path.id + '-zone-' + i].toBack();
            }
            if(_paths[path.id].attr('fill') != path.backgroundImage) {
                _paths[path.id].attr({'fill': path.backgroundImage});
            }
            _paths[path.id].toBack();
            if(_paths[path.id + '-hover'].attr('fill') != path.hoverImage) {
                _paths[path.id + '-hover'].attr({'fill': path.hoverImage});
            }
            _paths[path.id + '-hover'].toBack();
        }
        
        // Draw background
        if(_paths['background'] == null) {
            _paths['background'] = _paper.image(background, 0, 0, 931, 366);
        }
        _paths['background'].toBack();
        $(div).trigger('update-physiometre-value', [_stepValue]);
        $(div).data('value', _stepValue);
        // $(div).attr('data-value', _stepValue);
        stepValues['2'] = _stepValue;
    }
    
    function onClick(stepValue) {
        if(_stepValue.indexOf(stepValue) != -1) {
            _stepValue = _stepValue.replace(stepValue + '|', '');
        } else {
            _stepValue += stepValue + '|';
        }
    }
    
    function onMouseEnter() {
        for(var pathId in _paths) {
            if(pathId.match(/^[0-9]+$/)) {
                _paths[pathId].attr({'fill-opacity': 1});
            }
        }
        var pathId = this.id.match(/^([0-9]+)/)[1];
        _paths[pathId].attr({'fill-opacity': 0});
    }
    
    function onMouseLeave() {
        for(var pathId in _paths) {
            if(pathId.match(/^[0-9]+$/)) {
                _paths[pathId].attr({'fill-opacity': 1});
            }
        }
    }
    
    (function init() {
        physiometre_resetStep2 = function(){
            _stepValue = '';
            physiometre_step2Draw();
        };
        physiometre_step2Draw();
    })();
})(jQuery);
