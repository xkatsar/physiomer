/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'Bootstrap',
    [
        /* Buttons */
            { name : 'Button default'    , element : 'a'  , attributes : { 'class' : 'btn' } },
            { name : 'Button success'    , element : 'a'  , attributes : { 'class' : 'btn btn-success' } },
            { name : 'Button warning'    , element : 'a'  , attributes : { 'class' : 'btn btn-warning' } },
            { name : 'Button important'    , element : 'a'  , attributes : { 'class' : 'btn btn-important' } },
            { name : 'Button info'    , element : 'a'  , attributes : { 'class' : 'btn btn-info' } },
            { name : 'Button inverse'    , element : 'a'  , attributes : { 'class' : 'btn btn-inverse' } },
            
    ]);
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            { name : 'Paragraphe ClearFix'    , element : 'p'  , attributes : { 'class' : 'clearfix' } },
            
            { name : 'Alert Block'    , element : 'div'  , attributes : { 'class' : 'alert' } },
            { name : 'Error Block'    , element : 'div'  , attributes : { 'class' : 'alert alert-error' } },
            { name : 'Success Block'    , element : 'div'  , attributes : { 'class' : 'alert alert-success' } },
            { name : 'Info Block'    , element : 'div'  , attributes : { 'class' : 'alert alert-info' } },

            /* Labels */
            { name : 'Label default'    , element : 'span'  , attributes : { 'class' : 'label' } },
            { name : 'Label success'    , element : 'span'  , attributes : { 'class' : 'label label-success' } },
            { name : 'Label warning'    , element : 'span'  , attributes : { 'class' : 'label label-warning' } },
            { name : 'Label important'    , element : 'span'  , attributes : { 'class' : 'label label-important' } },
            { name : 'Label info'    , element : 'span'  , attributes : { 'class' : 'label label-info' } },
            { name : 'Label inverse'    , element : 'span'  , attributes : { 'class' : 'label label-inverse' } },

            /* Buttons */
            { name : 'Button default'    , element : 'a'  , attributes : { 'class' : 'btn' } },
            { name : 'Button success'    , element : 'a'  , attributes : { 'class' : 'btn btn-success' } },
            { name : 'Button warning'    , element : 'a'  , attributes : { 'class' : 'btn btn-warning' } },
            { name : 'Button important'    , element : 'a'  , attributes : { 'class' : 'btn btn-important' } },
            { name : 'Button info'    , element : 'a'  , attributes : { 'class' : 'btn btn-info' } },
            { name : 'Button inverse'    , element : 'a'  , attributes : { 'class' : 'btn btn-inverse' } },
            //*
            // { name : 'Preformatted Text', element : 'pre' },
            // { name : 'Address'			, element : 'address' },
            // */

            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'      , element : 'sup' },
            { name : 'Deleted'          , element : 'del' },
            //*/
            /*
            { name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },
            { name : 'Marker: Green'	, element : 'span', styles : { 'background-color' : 'Lime' } },

            { name : 'Big'				, element : 'big' },
            { name : 'Small'			, element : 'small' },
            { name : 'Typewriter'		, element : 'tt' },

            { name : 'Computer Code'	, element : 'code' },
            { name : 'Keyboard Phrase'	, element : 'kbd' },
            { name : 'Sample Text'		, element : 'samp' },
            { name : 'Variable'			, element : 'var' },

            { name : 'Deleted Text'		, element : 'del' },
            { name : 'Inserted Text'	, element : 'ins' },

            { name : 'Cited Work'		, element : 'cite' },
            { name : 'Inline Quotation'	, element : 'q' },

            { name : 'Language: RTL'	, element : 'span', attributes : { 'dir' : 'rtl' } },
            { name : 'Language: LTR'	, element : 'span', attributes : { 'dir' : 'ltr' } },

            */
            /* Object Styles */

            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            }
    ]);
}