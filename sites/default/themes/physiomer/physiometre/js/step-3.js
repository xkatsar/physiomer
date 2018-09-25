var physiometre_resetStep3 = null;
var physiometre_step3Draw = null;

(function($) {
    var _stepValueLeft = '';
    var _stepValueRight = '';
    var div = document.getElementById('physiometre-step-3');
    var _paperLeft = Raphael(document.getElementById('canvasLeft'), 465, 365);
    var _paperRight = Raphael(document.getElementById('canvasRight'), 465, 365);
    var _pathsLeft = {};
    var _pathsRight = {};
    var lang = Drupal.settings.current_language.language;

    physiometre_step3Draw = function() {
        physiometre_step3DrawLeft();
        physiometre_step3DrawRight();
    }

    physiometre_step3DrawLeft = function() {
        // Paths metadata
        var pathsLeft = [
            {
                'id': '1-1',
                'path': 'M0,0L0,131L215,131L215,364L0,364L0,131L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/' + ((_stepValueLeft == '' || _stepValueLeft != '1-1') ? '1-0' : _stepValueLeft) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/1-1.jpg")',
                'zones': [
                    {
                        'path': 'M0,0L0,131L53,131L215,131L215,267L109,225L53,131L0,131L0,0',
                        'onClick': function() {_stepValueLeft = '1-1'; physiometre_step3DrawLeft(); }
                    }
                ]
            },
            {
                'id': '1-2',
                'path': 'M0,0L0,131L430,131L430,364L216,364L216,131L0,131L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/' + ((_stepValueLeft == '' || _stepValueLeft != '1-2') ? '1-0' : _stepValueLeft) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/1-2.jpg")',
                'zones': [
                    {
                        'path': 'M0,0L0,131L373,131L333,238L216,267L216,131L0,131L0,0',
                        'onClick': function() {_stepValueLeft = '1-2'; physiometre_step3DrawLeft(); }
                    }
                ]
            }
        ];

        // Draw paths
        for(var pathIndex in pathsLeft) {
            var path = pathsLeft[pathIndex];

            // Initialisation
            if(_pathsLeft[path.id] == null) {
                for(var i=0; i<path.zones.length; i++) {
                    var id = path.id + '-zone-' + i;
                    _pathsLeft[id] = _paperLeft
                        .path(path.zones[i].path)
                        .click(path.zones[i].onClick)
                        .hover(onMouseEnterLeft, onMouseLeaveLeft)
                        .attr({'fill-opacity': 0, 'fill': 'white', 'stroke-opacity': 0, 'cursor': 'pointer'});
                    _pathsLeft[id].id = id;
                }
                _pathsLeft[path.id] = _paperLeft
                    .path(path.path)
                    .hover(onMouseEnterLeft, onMouseLeaveLeft)
                    .attr({'stroke-opacity': 0});
                _pathsLeft[path.id].id = path.id;
                _pathsLeft[path.id + '-hover'] = _paperLeft
                    .path(path.path)
                    .attr({'stroke-opacity': 0});
                _pathsLeft[path.id + '-hover'].id = path.id + '-hover';
            }

            // Update
            for(var i=0; i<path.zones.length; i++) {
                _pathsLeft[path.id + '-zone-' + i].toBack();
            }
            if(_pathsLeft[path.id].attr('fill') != path.backgroundImage) {
                _pathsLeft[path.id].attr({'fill': path.backgroundImage});
            }
            _pathsLeft[path.id].toBack();
            if(_pathsLeft[path.id + '-hover'].attr('fill') != path.hoverImage) {
                _pathsLeft[path.id + '-hover'].attr({'fill': path.hoverImage});
            }
            _pathsLeft[path.id + '-hover'].toBack();
        }
        $(div).trigger('update-physiometre-value', [_stepValueRight]);
        $(div).trigger('update-physiometre-value', [_stepValueLeft]);
        $(div).data('value-right', _stepValueRight);
        $(div).data('value-left', _stepValueLeft);
        // $(div).attr('data-value-right', _stepValueRight);
        // $(div).attr('data-value-left', _stepValueLeft);
        stepValues['3'] = {
            right: _stepValueRight,
            left: _stepValueLeft
        };
    }

    function onMouseEnterLeft() {
        for(var pathId in _pathsLeft) {
            if(pathId.match(/^[0-9]+-[0-9]+$/)) {
                _pathsLeft[pathId].attr({'fill-opacity': 1});
            }
        }
        var pathId = this.id.match(/^([0-9]+-[0-9]+)/)[1];
        _pathsLeft[pathId].attr({'fill-opacity': 0});
    }

    function onMouseLeaveLeft() {
        for(var pathId in _pathsLeft) {
            if(pathId.match(/^[0-9]+-[0-9]+$/)) {
                _pathsLeft[pathId].attr({'fill-opacity': 1});
            }
        }
    }

    physiometre_step3DrawRight = function() {
        // Paths metadata
        var pathsRight = [
            {
                'id': '2-1',
                'path': 'M0,0L0,131L234,131L234,364L0,364L0,131L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/' + ((_stepValueRight == '' || _stepValueRight != '2-1') ? '2-0' : _stepValueRight) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/2-1.jpg")',
                'zones': [
                    {
                        'path': 'M0,0L0,131L72,131L234,131L234,267L128,225L72,131L0,131L0,0',
                        'onClick': function() {_stepValueRight = '2-1'; physiometre_step3DrawRight()}
                    }
                ]
            },
            {
                'id': '2-2',
                'path': 'M0,0L0,131L448,131L448,364L234,364L234,131L0,131L0,0',
                'backgroundImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/' + ((_stepValueRight == '' || _stepValueRight != '2-2') ? '2-0' : _stepValueRight) + '.jpg")',
                'hoverImage': 'url("/sites/default/themes/physiomer/physiometre/image-'+lang+'/step-3/2-2.jpg")',
                'zones': [
                    {
                        'path': 'M0,0L0,131L391,131L351,238L234,267L234,131L0,131L0,0',
                        'onClick': function() {_stepValueRight = '2-2'; physiometre_step3DrawRight()}
                    }
                ]
            }
        ];

        // Draw paths
        for(var pathIndex in pathsRight) {
            var path = pathsRight[pathIndex];

            // Initialisation
            if(_pathsRight[path.id] == null) {
                for(var i=0; i<path.zones.length; i++) {
                    var id = path.id + '-zone-' + i;
                    _pathsRight[id] = _paperRight
                        .path(path.zones[i].path)
                        .click(path.zones[i].onClick)
                        .hover(onMouseEnterRight, onMouseLeaveRight)
                        .attr({'fill-opacity': 0, 'fill': 'white', 'stroke-opacity': 0, 'cursor': 'pointer'});
                    _pathsRight[id].id = id;
                }
                _pathsRight[path.id] = _paperRight
                    .path(path.path)
                    .hover(onMouseEnterRight, onMouseLeaveRight)
                    .attr({'stroke-opacity': 0});
                _pathsRight[path.id].id = path.id;
                _pathsRight[path.id + '-hover'] = _paperRight
                    .path(path.path)
                    .attr({'stroke-opacity': 0});
                _pathsRight[path.id + '-hover'].id = path.id + '-hover';
            }

            // Update
            for(var i=0; i<path.zones.length; i++) {
                _pathsRight[path.id + '-zone-' + i].toBack();
            }
            if(_pathsRight[path.id].attr('fill') != path.backgroundImage) {
                _pathsRight[path.id].attr({'fill': path.backgroundImage});
            }
            _pathsRight[path.id].toBack();
            if(_pathsRight[path.id + '-hover'].attr('fill') != path.hoverImage) {
                _pathsRight[path.id + '-hover'].attr({'fill': path.hoverImage});
            }
            _pathsRight[path.id + '-hover'].toBack();
        }
        $(div).trigger('update-physiometre-value', [_stepValueRight]);
        $(div).trigger('update-physiometre-value', [_stepValueLeft]);
        $(div).data('value-right', _stepValueRight);
        $(div).data('value-left', _stepValueLeft);
        // $(div).attr('data-value-right', _stepValueRight);
        // $(div).attr('data-value-left', _stepValueLeft);
        stepValues['3'] = {
            right: _stepValueRight,
            left: _stepValueLeft
        };
    }

    function onMouseEnterRight() {
        for(var pathId in _pathsRight) {
            if(pathId.match(/^[0-9]+-[0-9]+$/)) {
                _pathsRight[pathId].attr({'fill-opacity': 1});
            }
        }
        var pathId = this.id.match(/^([0-9]+-[0-9]+)/)[1];
        _pathsRight[pathId].attr({'fill-opacity': 0});
    }

    function onMouseLeaveRight() {
        for(var pathId in _pathsRight) {
            if(pathId.match(/^[0-9]+-[0-9]+$/)) {
                _pathsRight[pathId].attr({'fill-opacity': 1});
            }
        }
    }

    (function init() {
        physiometre_resetStep3 = function(){
            _stepValueLeft = '';
            _stepValueRight = '';
            physiometre_step3DrawLeft();
            physiometre_step3DrawRight();
        };
        physiometre_step3DrawLeft();
        physiometre_step3DrawRight();
    })();
})(jQuery);
