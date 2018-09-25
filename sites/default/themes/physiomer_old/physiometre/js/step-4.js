var physiometre_resetStep4 = null;
var physiometre_step4Draw = null;
(function($) {
    var _stepValue = '';
    var div = document.getElementById('physiometre-step4');
    var _paper = Raphael(div, 931, 365);
    var _paths = {};
    var lang = Drupal.settings.current_language.language;

    physiometre_step4Draw = function() {
        // Paths metadata
        var background = '/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-4/0.jpg';
        var paths = [
            {
                'id': '1',
                'path': 'M0,0L0,130L451,130L339,364L0,364L0,130L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-4/' + ((_stepValue == '' || _stepValue != '1') ? '0' : _stepValue) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-4/' + ((_stepValue == '' || _stepValue != '1') ? '1' : _stepValue) + '.jpg")',
                'zones': [
                    {
                        'path': 'M416,131L437,159L388,263L293,131L416,131',
                        'onClick': function() {_stepValue = '1'; physiometre_step4Draw()}
                    }
                ]
            },
            {
                'id': '2',
                'path': 'M0,0L0,130L451,130L339,364L597,364L484,130L0,130L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-4/' + ((_stepValue == '' || _stepValue != '2') ? '0' : _stepValue) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-4/' + ((_stepValue == '' || _stepValue != '2') ? '2' : _stepValue) + '.jpg")',
                'zones': [
                    {
                        'path': 'M437,159L497,156L547,262L388,263L437,159',
                        'onClick': function() {_stepValue = '2'; physiometre_step4Draw()}
                    }
                ]
            },
            {
                'id': '3',
                'path': 'M0,0L0,130L484,130L597,364L930,364L930,130L0,130L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-4/' + ((_stepValue == '' || _stepValue != '3') ? '0' : _stepValue) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-4/' + ((_stepValue == '' || _stepValue != '3') ? '3' : _stepValue) + '.jpg")',
                'zones': [
                    {
                        'path': 'M497,156L514,131L638,131L547,262L497,156',
                        'onClick': function() {_stepValue = '3'; physiometre_step4Draw()}
                    }
                ]
            }
        ];
        
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
            _paths['background'] = _paper.image(background, 0, 0, 931, 365);
        }
        _paths['background'].toBack();
        $(div).trigger('update-physiometre-value', [_stepValue]);
        $(div).data('value', _stepValue);
        // $(div).attr('data-value', _stepValue);
        stepValues['4'] = _stepValue;
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
        physiometre_resetStep4 = function(){
            _stepValue = '';
            physiometre_step4Draw();
        };
        physiometre_step4Draw();
    })();
})(jQuery);
