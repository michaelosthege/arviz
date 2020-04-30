(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("2f8993ec-29d7-4b34-8867-7c66cb9b6311");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2f8993ec-29d7-4b34-8867-7c66cb9b6311' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;b362680b-efa7-4456-8dbe-a1f0c5a3c808&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59480&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59483&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59484&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59488&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59449&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59452&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59535&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59521&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59489&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59477&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59484&quot;},{&quot;id&quot;:&quot;59485&quot;},{&quot;id&quot;:&quot;59486&quot;},{&quot;id&quot;:&quot;59487&quot;},{&quot;id&quot;:&quot;59488&quot;},{&quot;id&quot;:&quot;59489&quot;}]},&quot;id&quot;:&quot;59491&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59505&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59531&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59443&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59505&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59450&quot;}},&quot;id&quot;:&quot;59449&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59472&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59454&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59485&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59514&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59441&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59512&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59513&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59514&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59516&quot;}},&quot;id&quot;:&quot;59515&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59534&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59535&quot;}},&quot;id&quot;:&quot;59512&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59534&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59500&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59453&quot;},{&quot;id&quot;:&quot;59454&quot;},{&quot;id&quot;:&quot;59455&quot;},{&quot;id&quot;:&quot;59456&quot;},{&quot;id&quot;:&quot;59457&quot;},{&quot;id&quot;:&quot;59458&quot;}]},&quot;id&quot;:&quot;59460&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59437&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59499&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59457&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59481&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59436&quot;},{&quot;id&quot;:&quot;59467&quot;}]},&quot;id&quot;:&quot;59517&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59456&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59532&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59507&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59446&quot;}},&quot;id&quot;:&quot;59445&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59507&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59498&quot;}},&quot;id&quot;:&quot;59502&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59453&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;WmQ730+Nlz9Ei2zn+6mxP76fGi/dJMY/CtejcD0Kxz8GgZVDi2zHP4cW2c73U8M/cT0K16NwvT+kcD0K16OwP7pJDAIrh5Y/ukkMAiuHhj956SYxCKx8P/yp8dJNYlA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59531&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59532&quot;}},&quot;id&quot;:&quot;59498&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59490&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59504&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59512&quot;}},&quot;id&quot;:&quot;59516&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59445&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59448&quot;},{&quot;id&quot;:&quot;59452&quot;},{&quot;id&quot;:&quot;59510&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59449&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59501&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59504&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59460&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59437&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59441&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59439&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59443&quot;}},&quot;id&quot;:&quot;59436&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59476&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59479&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59490&quot;}},&quot;id&quot;:&quot;59486&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59528&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59477&quot;}},&quot;id&quot;:&quot;59476&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59468&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59487&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59513&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59511&quot;}]},&quot;id&quot;:&quot;59510&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59501&quot;}]},&quot;id&quot;:&quot;59511&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59459&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59474&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59459&quot;}},&quot;id&quot;:&quot;59455&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59450&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59526&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59481&quot;}},&quot;id&quot;:&quot;59480&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59498&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59499&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59500&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59502&quot;}},&quot;id&quot;:&quot;59501&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59526&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59470&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59445&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59448&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59476&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59479&quot;},{&quot;id&quot;:&quot;59483&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59480&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59515&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59521&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59491&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59468&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59472&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59470&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59474&quot;}},&quot;id&quot;:&quot;59467&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59458&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59528&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59439&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59446&quot;,&quot;type&quot;:&quot;BasicTicker&quot;}],&quot;root_ids&quot;:[&quot;59517&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"b362680b-efa7-4456-8dbe-a1f0c5a3c808","root_ids":["59517"],"roots":{"59517":"2f8993ec-29d7-4b34-8867-7c66cb9b6311"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();