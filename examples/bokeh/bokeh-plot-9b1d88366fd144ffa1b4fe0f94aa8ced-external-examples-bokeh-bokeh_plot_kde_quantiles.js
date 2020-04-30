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
    
      
      
    
      var element = document.getElementById("6899ab39-78e4-4908-af25-38f0b184ed2c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6899ab39-78e4-4908-af25-38f0b184ed2c' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;aab03e77-0c3c-4e70-905c-b8b737fa3022&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61913&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61923&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61880&quot;}},&quot;id&quot;:&quot;61874&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61924&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61873&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61915&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61892&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;61930&quot;},{&quot;id&quot;:&quot;61928&quot;}]},&quot;id&quot;:&quot;61931&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;6u3iAUFHij9s43UeAuSRP+JP+rtjpJY/WLx+WcVkmz9olIF7kxKgP6LKQ0rEcqI/3gAGGfXSpD8aN8jnJTOnP1RtirZWk6k/kKNMhYfzqz/K2Q5UuFOuPwOIaJH0WbA/IaPJ+AyKsT8+vipgJbqyP1zZi8c96rM/efTsLlYatT+XD06Wbkq2P7Uqr/2Gerc/0kUQZZ+quD/wYHHMt9q5Pw180jPQCrs/K5czm+g6vD9JspQCAWu9P2bN9WkZm74/hOhW0THLvz/RAVwcpX3AP2CPDFCxFcE/7xy9g72twT9+qm23yUXCPw04HuvV3cI/m8XOHuJ1wz8qU39S7g3EP7ngL4b6pcQ/SG7guQY+xT/X+5DtEtbFP2WJQSEfbsY/9BbyVCsGxz+DpKKIN57HPxIyU7xDNsg/ob8D8E/OyD8vTbQjXGbJP77aZFdo/sk/vtpkV2j+yT++2mRXaP7JPy9NtCNcZsk/ob8D8E/OyD8SMlO8QzbIP4Okoog3nsc/9BbyVCsGxz9liUEhH27GP9f7kO0S1sU/SG7guQY+xT+54C+G+qXEPypTf1LuDcQ/m8XOHuJ1wz8NOB7r1d3CP36qbbfJRcI/7xy9g72twT9gjwxQsRXBP9EBXBylfcA/hOhW0THLvz9mzfVpGZu+P0mylAIBa70/K5czm+g6vD8NfNIz0Aq7P/Bgccy32rk/0kUQZZ+quD+1Kq/9hnq3P5cPTpZuSrY/efTsLlYatT9c2YvHPeqzPz6+KmAlurI/IaPJ+AyKsT8DiGiR9FmwP8rZDlS4U64/kKNMhYfzqz9UbYq2VpOpPxo3yOclM6c/3gAGGfXSpD+iykNKxHKiP2iUgXuTEqA/WLx+WcVkmz/iT/q7Y6SWP2zjdR4C5JE/6u3iAUFHij/q7eIBQUeKPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[86]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5yck98oNAEDnJyT3yg0AQMRwHcy0t/8/L7MZLK1N/z/BQYQkYN7+P4BIUfxlbf4/V1YOqWj2/T9xncEoon79Py8T5oRBA/0/NWrPEviI/D++ZbIo4gz8P6lCSwL0jfs//ij/8psL+z+0JUVrR4T6P1w5Jhs1+fk/7/oGnOpm+T8wIsF05sv4P5c9FTIgJ/g/OT5djQJ29z8EMuJWa7r2P2XnpKIV9vU/rb9sCPgm9T9DVGngdE/0PwRmr2vybvM/bmDHTZCI8j9agw+7D5/xP7o1fwHFt/A/mntz5k2f7z9mtdAwu9rtP6x8E/ccI+w/IyV2prR46j8CRzBmL+boP1sLmhilaOc/hKRo4ioE5j+YGILcXL7kP4rfmp4BmuM/E6zZftOS4j9ZKb5hTLXhPyWXxmlb/uA/XKsfxTxt4D97ppj5/gTgPy9eaSmnjd8//DKgx0Zm3z8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[86]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61919&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61920&quot;}},&quot;id&quot;:&quot;61891&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61893&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61880&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61897&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61891&quot;}},&quot;id&quot;:&quot;61895&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61891&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61892&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61893&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61895&quot;}},&quot;id&quot;:&quot;61894&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61925&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;TWgVi3SWyj/c9cW+gC7LP2uDdvKMxss/+hAnJplezD+IntdZpfbMPxcsiI2xjs0/prk4wb0mzj81R+n0yb7OP8TUmSjWVs8/UmJKXOLuzz/wd/1Hd0PQP7i+1WF9j9A/fwWue4Pb0D9GTIaViSfRPw6TXq+Pc9E/1dk2yZW/0T+dIA/jmwvSP2Rn5/yhV9I/K66/Fqij0j/z9Jcwru/SP7o7cEq0O9M/goJIZLqH0z9JySB+wNPTPxAQ+ZfGH9Q/2FbRscxr1D+fnanL0rfUP5+dqcvSt9Q/n52py9K31D/YVtGxzGvUPxAQ+ZfGH9Q/SckgfsDT0z+CgkhkuofTP7o7cEq0O9M/8/SXMK7v0j8rrr8WqKPSP2Rn5/yhV9I/nSAP45sL0j/V2TbJlb/RPw6TXq+Pc9E/RkyGlYkn0T9/Ba57g9vQP7i+1WF9j9A/8Hf9R3dD0D9SYkpc4u7PP8TUmSjWVs8/NUfp9Mm+zj+muTjBvSbOPxcsiI2xjs0/iJ7XWaX2zD/6ECcmmV7MP2uDdvKMxss/3PXFvoAuyz9NaBWLdJbKP01oFYt0lso/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[54]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGsUZA5ZZAFAaxRkDllkAUDo8+SJYFYBQG7WtHQaRwFAzLcSN5o6AUD5nHwfLS8BQF9vxv3LJQFAG0I6cywfAUDYPPEFYhoBQHjU/6mZFwFAAW1PYqkWAUBCDr+mmhYBQNefDOf4FQFAutlSe30XAUAC3/BGfBcBQKIf8+N3FgFAuDj5cnYUAUBytRzL3w4BQJLXyaZ9BgFAVXqz6Bj7AECe6CrPLusAQLvxv2/q2QBASCMtlqrDAEDr7o47bqgAQGc/bXFTiABAg3BzB1JkAEDRLsj3jjoAQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[54]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61921&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61922&quot;}},&quot;id&quot;:&quot;61896&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61858&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;Z+SB5dgD1T8uK1r/3k/VP/VxMhnlm9U/vbgKM+vn1T+E/+JM8TPWP0xGu2b3f9Y/E42TgP3L1j/a02uaAxjXP6IaRLQJZNc/aWEczg+w1z8xqPTnFfzXP/juzAEcSNg/vzWlGyKU2D+HfH01KODYP07DVU8uLNk/FgouaTR42T/dUAaDOsTZP6WX3pxAENo/bN62tkZc2j8zJY/QTKjaP/trZ+pS9No/wrI/BFlA2z+K+RceX4zbP1FA8Ddl2Ns/GIfIUWsk3D/gzaBrcXDcP6cUeYV3vNw/pxR5hXe83D+nFHmFd7zcP+DNoGtxcNw/GIfIUWsk3D9RQPA3ZdjbP4r5Fx5fjNs/wrI/BFlA2z/7a2fqUvTaPzMlj9BMqNo/bN62tkZc2j+ll96cQBDaP91QBoM6xNk/FgouaTR42T9Ow1VPLizZP4d8fTUo4Ng/vzWlGyKU2D/47swBHEjYPzGo9OcV/Nc/aWEczg+w1z+iGkS0CWTXP9rTa5oDGNc/E42TgP3L1j9MRrtm93/WP4T/4kzxM9Y/vbgKM+vn1T/1cTIZ5ZvVPy4rWv/eT9U/Z+SB5dgD1T9n5IHl2APVPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[56]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIrcw5puA+T8itzDmm4D5PzwjGJb4Dvo/4W+87XKe+j838FdrtS/7P+MR/6gZv/s/vfjADCtS/D/319UqVuX8PwYsOHvKeP0/W/LCbO0J/j9WDpYr/Jz+P+cbMUfaKv8/3u7cA+24/z+TR63Vwh8AQB52Zi7uXgBA36SQjriaAEB6d1TFz9AAQMEvAADFAgFAv0duF5IsAUC14/tXxE4BQG82SerpaQFAd/KsrA19AUBULfvV54kBQEk2vatRkAFADiBFzAePAUAel3BU2IgBQHyLQRZqfgFARZXSoZ1yAUAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[56]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61923&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61924&quot;}},&quot;id&quot;:&quot;61901&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61926&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61898&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;61929&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;61930&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61915&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61865&quot;}},&quot;id&quot;:&quot;61864&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61919&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61860&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61903&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61920&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;61912&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61862&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61881&quot;}},&quot;id&quot;:&quot;61876&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61896&quot;}},&quot;id&quot;:&quot;61900&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61872&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61896&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61897&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61898&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61900&quot;}},&quot;id&quot;:&quot;61899&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61879&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61881&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61878&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61902&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61856&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61875&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[212]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[212]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61925&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61926&quot;}},&quot;id&quot;:&quot;61906&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61913&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61869&quot;}},&quot;id&quot;:&quot;61868&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61855&quot;},0,0]]},&quot;id&quot;:&quot;61928&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61908&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61901&quot;}},&quot;id&quot;:&quot;61905&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61901&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61902&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61903&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61905&quot;}},&quot;id&quot;:&quot;61904&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61869&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61864&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61867&quot;},{&quot;id&quot;:&quot;61871&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61868&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61894&quot;},{&quot;id&quot;:&quot;61899&quot;},{&quot;id&quot;:&quot;61904&quot;},{&quot;id&quot;:&quot;61909&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;61912&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61882&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61856&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61860&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61858&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61862&quot;}},&quot;id&quot;:&quot;61855&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61921&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61868&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61871&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61907&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61882&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61872&quot;},{&quot;id&quot;:&quot;61873&quot;},{&quot;id&quot;:&quot;61874&quot;},{&quot;id&quot;:&quot;61875&quot;},{&quot;id&quot;:&quot;61876&quot;},{&quot;id&quot;:&quot;61877&quot;},{&quot;id&quot;:&quot;61878&quot;},{&quot;id&quot;:&quot;61879&quot;}]},&quot;id&quot;:&quot;61929&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61906&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61907&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61908&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61910&quot;}},&quot;id&quot;:&quot;61909&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61865&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61864&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61867&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61922&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61906&quot;}},&quot;id&quot;:&quot;61910&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61872&quot;},{&quot;id&quot;:&quot;61873&quot;},{&quot;id&quot;:&quot;61874&quot;},{&quot;id&quot;:&quot;61875&quot;},{&quot;id&quot;:&quot;61876&quot;},{&quot;id&quot;:&quot;61877&quot;},{&quot;id&quot;:&quot;61878&quot;},{&quot;id&quot;:&quot;61879&quot;}]},&quot;id&quot;:&quot;61882&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61877&quot;,&quot;type&quot;:&quot;UndoTool&quot;}],&quot;root_ids&quot;:[&quot;61931&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"aab03e77-0c3c-4e70-905c-b8b737fa3022","root_ids":["61931"],"roots":{"61931":"6899ab39-78e4-4908-af25-38f0b184ed2c"}}];
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