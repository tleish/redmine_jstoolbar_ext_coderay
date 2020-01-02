(function () {
  if(typeof RedmineWikiToolbarExt === 'undefined') return false;

  var coderay_languages = ["c", "clojure", "css", "delphi", "diff", "erb", "go", "groovy", "haml", "html", "java", "javascript", "json", "lua", "php", "python", "ruby", "sass", "sql", "taskpaper", "xml", "yaml"];

  var buttons = [
    {
      title: 'CodeRay', type: 'button', after: 'pre',
      fn: { wiki: function (event) {
        var coderay_buttons = RedmineWikiToolbarExt.CoderaySubMenuButtons.get(this, coderay_languages);
        RedmineWikiToolbarExt.SubMenu.open(this.toolbar, event.target, coderay_buttons)
      }}
    }
  ];

  /**
   * Draw to page
   */
  RedmineWikiToolbarExt.ToolbarElements.add(buttons);

  /**
   * @class CoderaySubMenuButtons
   * @desc Create coderay menu buttons
   * @methods get()
   */
  RedmineWikiToolbarExt.CoderaySubMenuButtons = (function() {
    var toolbar, coderay;
    var button_class_name_prefix = RedmineWikiToolbarExt.button_class_name_prefix;

    var get = function(toolbar_obj, coderay_array){
      toolbar = toolbar_obj, coderay = coderay_array;
      if(coderay.length ===0 ) return [];
      var buttons = build_buttons();
      return buttons;
    };

    var build_buttons = function(){
      return $.map(coderay, function (language) {
        var data = button_data(language);
        return build_button(data);
      });
    };

    var button_data = function(language){
      var type = RedmineWikiToolbarExt.Markup.type(),
          beg = '', end = '';

      switch (type) {
        case 'textile':
          beg = '<pre><code class="' + language + '">\n';
          end = '\n</code></pre>';
          break;
        case 'markdown':
          beg = '~~~ ' + language + '\n';
          end = '\n~~~';
          break;
      }

      return  { label: language, beg: beg, end: end };
    };

    var build_button = function (data) {
      return $('<button>' + decodeURIComponent(data.label) + '</button>')
        .data(data)
        .addClass(button_class_name_prefix + 'coderay_submenu_' + data.label)
        .click( button_click );
    };

    var button_click = function(event){
      var data = $(event.target).data();
      toolbar.encloseSelection(data.beg, data.end, function(str) {
        return str;
      });
    };

    return {
      get: get
    };
  })();

}());
