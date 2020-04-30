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
    
      
      
    
      var element = document.getElementById("1970dd33-68cf-4526-b6d4-f34c3fed171a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1970dd33-68cf-4526-b6d4-f34c3fed171a' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;d64a5ab1-5398-4a94-827d-f84e5456a032&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60942&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60945&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60942&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60945&quot;},{&quot;id&quot;:&quot;60949&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60946&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;60972&quot;},{&quot;id&quot;:&quot;60977&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;60980&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60960&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60934&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60938&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60936&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60940&quot;}},&quot;id&quot;:&quot;60933&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60947&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;60980&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60969&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60970&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60971&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60973&quot;}},&quot;id&quot;:&quot;60972&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60975&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60990&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60957&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60936&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60955&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60988&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60958&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60969&quot;}},&quot;id&quot;:&quot;60973&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60976&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60951&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60934&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60981&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60970&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60950&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60987&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60988&quot;}},&quot;id&quot;:&quot;60969&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60946&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60949&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60983&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60974&quot;}},&quot;id&quot;:&quot;60978&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60938&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60981&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60947&quot;}},&quot;id&quot;:&quot;60946&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60958&quot;}},&quot;id&quot;:&quot;60952&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60974&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60975&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60976&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60978&quot;}},&quot;id&quot;:&quot;60977&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60943&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60987&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60971&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60983&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60943&quot;}},&quot;id&quot;:&quot;60942&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60959&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60950&quot;},{&quot;id&quot;:&quot;60951&quot;},{&quot;id&quot;:&quot;60952&quot;},{&quot;id&quot;:&quot;60953&quot;},{&quot;id&quot;:&quot;60954&quot;},{&quot;id&quot;:&quot;60955&quot;},{&quot;id&quot;:&quot;60956&quot;},{&quot;id&quot;:&quot;60957&quot;}]},&quot;id&quot;:&quot;60960&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60953&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60989&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;s7TFZuk8A8DNgJZJmSkDwN4MSn+biALAbOOa37ra/L9ObPUGsob5vxWFdWdShfm/na8aOq4z+L/8Oe9cw4f3v6Hr0MILLPa/a5D71k/X9b/HxbyNjpX1v3bJyl4lEfW/M0FHEUSN878cB0IJ1WLyv7Q1arlrwfC/wJ2uNikp8L85V179yQHwv3xKMJ3Pk++/29dfRdeF778dieEWBPruv1Y60rFopO2/gGV3A6sj7b9cKFGX6Qntv2mbH3RUR+u/oC9UJQGN6b+6bLxn1ybpv2e0/GnhROi/htPFIUGp57/j8qhMElbnvxHWJFBLpOa/aTkAvDJV5L9up2GDlljjv73a7BbXUeO/xtaJ503Y4b+yA8GBgErhv0B/8bxYnt+/5P9u9/SB3r9qm2GvlJrXv/H7IqVapdS/rcj7wMSa1L+ZT82eOEDRvx4FMGYaOtG/wBgH0mhEyL+u7pP+YqjFv1LjMe59p8S/cXwpXZarwb/u33J+eLGlv2B63V5opJ0/5adG7/GQtj/Sng+luXW3P8rD+LhRvMo/k5S13klx0T/CYVWYXKLRP+FykTbCH9I/7w5KE2yx0z9NdO0IzjHUP97BOm35zNY/8o6Kzz1N1z84prFC/qLYP/F7ttytwNo/6sF5TkMU2z/WupDTLorgP6L25UBeoeA/G38H8DKi4D/Cmiul6gjiP5ebDLWm5+I/ieROea+C4z8zwc0yxt7jP8t8+Aq0S+Y/b/YS24ql6D/1KbfktsDpP/iU570zwuk/uXlpdeDg6j/lQx/OlY3rP6MPPXS2rus/85mCA82N7D8KXo+uv2ntPxla9orXs+0/4uV+SI/i7T86YZ4zBc7uP9O5LAPH4u4/ClrwDjFy8D/00ImzCoPwP9BvOI4w1PA/m3HD09l38T+3YfSefJ/yP+rN8UFNqvM/YDYoX+879T8b+ol7f6T1P8v2V4XnIPY/5soy9Ivy9j8jSpH2f/n2Pzw8pLOgv/c/MF1Tnu1T+D8TJFXUSxf8P8Z7xNxxLPw/nI/dS48E/j9DuQA1Hzv+PyuUZOJp1P4/vK+tEx0QBEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;mpZ0Mi2G6T9m/tJszazpP0TmawHJ7uo/So4ykKKS8T/ZSYX8pjzzP3Y9RcxWPfM/Mqjy4ijm8z8CY4hRHjz0PzCKlx766fQ/yjeCFFgU9T8cnSG5ODX1P0WbmlBtd/U/Zl9c91059j9y/F57lc72PyblSiNKn/c/ILGoZGvr9z9k1FABG//3P2HtsxgMG/g/CQqoLooe+D+5nUf6fkH4P2pxi9Pllvg/oCYiPxW3+D/ptSuahb34PyYZ+OIqLvk/GPSqtr+c+T/S5BAmSrb5P+bSgKXH7vk/HouOt68V+j9Hw9Vseyr6P3zK9ivtVvo/pvH/ULPq+j8klidf2in7P1HJRDqKK/s/ToodhuyJ+z8Uv4/fX637PxjQYeg0DPw/BCASYcEv/D+TzBNqrQz9P4KgW6tUa/0/6obgZ6ds/T8NVibs+Nf9P1z/ObO82P0/dI7fcrl7/j8VwRbQeaX+P8vhHCGItf4/OWgtmkbl/j+ANAYeOqn/P3rdXmikHQBAoBq9x0NaAEB7PpTm1l0AQB7Gx43i1QBASVnrnRQXAUAcVoXJJRoBQC4XaSP8IQFA76A0wRY7AUBF147gHEMBQB6s05bPbAFA76j43NN0AUBkGivkL4oBQL9ny90KrAFAH5znNESxAUBbF3LaRRECQNS+HMgrFAJA4+8AXkYUAkBYc6VUHUECQHOTodb0XAJAkdwp71VwAkAmuFnG2HsCQJkPX4F2yQJAzl5iW7EUA0A/5ZbcFjgDQJ/yvHdGOANANy+tDhxcA0B96MO5snEDQPShh87WdQNAPlNwoLmRA0DB69H1N60DQEPLXvF6tgNAvNwP6VG8A0AnzHOmwNkDQDqXZeBY3ANAgha8Q4wcBEA9dOKswiAEQPQbjiMMNQRAZ9zwdPZdBEBuGL0n36cEQHpzfFCT6gRAmA3K1/tOBUCHfuLeH2kFQLP9VeE5iAVAurIM/aK8BUCJUqT9X74FQA8P6Szo7wVATNeUZ/sUBkAFSRX10gUHQPIeMXccCwdA52P30iOBB0BRLkDNx44HQAslmXgatQdA3tfWiQ4ICkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60989&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60990&quot;}},&quot;id&quot;:&quot;60974&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60956&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60940&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60959&quot;}},&quot;id&quot;:&quot;60954&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;}],&quot;root_ids&quot;:[&quot;60933&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"d64a5ab1-5398-4a94-827d-f84e5456a032","root_ids":["60933"],"roots":{"60933":"1970dd33-68cf-4526-b6d4-f34c3fed171a"}}];
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