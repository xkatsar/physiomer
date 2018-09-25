var physiometre_resetStep1 = null;
var physiometre_step1Draw = null;
(function($) {
    var _stepValue = '';
    var div = document.getElementById('physiometre-step1');
    var _paper = Raphael(div, 931, 366);
    var _paths = {};
    var lang = Drupal.settings.current_language.language;
    
    physiometre_step1Draw = function() {
        // Paths metadata
        var background = '/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-1/0.jpg';
        var paths = [
            {
                'id': '1-1',
                'path': 'M0,0L460,0L242,366L0,366L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-1/' + ((_stepValue == '' || _stepValue.indexOf('1-') == -1) ? '0' : _stepValue) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-1/' + ((_stepValue == '' || _stepValue.indexOf('1-') == -1) ? '1-0' : _stepValue) + '.jpg")',
                'zones': [
                    {
                        'path': 'M115,0L224,0L250,96L169,148L115,0',
                        'onClick': function() {_stepValue = '1-1'; physiometre_step1Draw()}
                    },
                    {
                        'path': 'M252,98L342,195L298,269L170,152L252,98',
                        'onClick': function() {_stepValue = '1-2'; physiometre_step1Draw()}
                    }
                ]
            },
            {
                'id': '1-2',
                'path': 'M0,0L460,0L242,366L692,366L480,0L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-1/' + ((_stepValue == '' || _stepValue.indexOf('2-') == -1) ? '0' : _stepValue) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-1/' + ((_stepValue == '' || _stepValue.indexOf('2-') == -1) ? '2-0' : _stepValue) + '.jpg")',
                'zones': [
                    {
                        'path': 'M344,195L426,225L410,309L299,270L344,195',
                        'onClick': function() {_stepValue = '2-1'; physiometre_step1Draw()}
                    },
                    {
                        'path': 'M426,224L513,223L528,308L411,309L426,224',
                        'onClick': function() {_stepValue = '2-2'; physiometre_step1Draw()}
                    },
                    {
                        'path': 'M514,224L592,194L638,273L529,310L514,224',
                        'onClick': function() {_stepValue = '2-3'; physiometre_step1Draw()}
                    }
                ]
            },
            {
                'id': '1-3',
                'path': 'M0,0L480,0L692,366L931,366L931,0L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-1/' + ((_stepValue == '' || _stepValue.indexOf('3-') == -1) ? '0' : _stepValue) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer2013/physiometre/image-'+lang+'/step-1/' + ((_stepValue == '' || _stepValue.indexOf('3-') == -1) ? '3-0' : _stepValue) + '.jpg")',
                'zones': [
                    {
                        'path': 'M592,194L681,103L762,160L638,272L592,194',
                        'onClick': function() {_stepValue = '3-1'; physiometre_step1Draw()}
                    },
                    {
                        'path': 'M681,102L711,0L825,0L764,160L681,102',
                        'onClick': function() {_stepValue = '3-2'; physiometre_step1Draw()}
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
            _paths['background'] = _paper.image(background, 0, 0, 931, 366);
        }
        _paths['background'].toBack();
        $(div).trigger('update-physiometre-value', [_stepValue]);
        $(div).data('value', _stepValue);
        stepValues['1'] = _stepValue;
        // $(div).attr('data-value', _stepValue);
    }
    
    function onMouseEnter() {
        for(var pathId in _paths) {
            if(pathId.match(/^[0-9]+-[0-9]+$/)) {
                _paths[pathId].attr({'fill-opacity': 1});
            }
        }
        var pathId = this.id.match(/^([0-9]+-[0-9]+)/)[1];
        _paths[pathId].attr({'fill-opacity': 0});
    }
    
    function onMouseLeave() {
        for(var pathId in _paths) {
            if(pathId.match(/^[0-9]+-[0-9]+$/)) {
                _paths[pathId].attr({'fill-opacity': 1});
            }
        }
    }
    
    (function init() {
        physiometre_resetStep1 = function(){
            _stepValue = '';
            physiometre_step1Draw();
        };
        physiometre_step1Draw();
    })();
})(jQuery);
