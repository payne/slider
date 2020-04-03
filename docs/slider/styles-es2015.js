(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! =======================================================\n                      VERSION  10.6.2              \n========================================================= */\n/*! =========================================================\n * bootstrap-slider.js\n *\n * Maintainers:\n *\t\tKyle Kemp\n *\t\t\t- Twitter: @seiyria\n *\t\t\t- Github:  seiyria\n *\t\tRohit Kalkur\n *\t\t\t- Twitter: @Rovolutionary\n *\t\t\t- Github:  rovolution\n *\n * =========================================================\n  *\n * bootstrap-slider is released under the MIT License\n * Copyright (c) 2019 Kyle Kemp, Rohit Kalkur, and contributors\n * \n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the \"Software\"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n * \n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n *\n * ========================================================= */\n.slider{display:inline-block;vertical-align:middle;position:relative}\n.slider.slider-horizontal{width:210px;height:20px}\n.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}\n.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}\n.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px}\n.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{position:relative;top:50%;transform:translateY(-50%);border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#2e6da4;margin-top:0}\n.slider.slider-horizontal .slider-tick-container{white-space:nowrap;position:absolute;top:0;left:0;width:100%}\n.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}\n.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}\n.slider.slider-horizontal .tooltip{transform:translateX(-50%)}\n.slider.slider-horizontal.slider-rtl .slider-track{left:initial;right:0}\n.slider.slider-horizontal.slider-rtl .slider-tick,.slider.slider-horizontal.slider-rtl .slider-handle{margin-left:initial;margin-right:-10px}\n.slider.slider-horizontal.slider-rtl .slider-tick-container{left:initial;right:0}\n.slider.slider-horizontal.slider-rtl .tooltip{transform:translateX(50%)}\n.slider.slider-vertical{height:210px;width:20px}\n.slider.slider-vertical .slider-track{width:10px;height:100%;left:25%;top:0}\n.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}\n.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}\n.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-top:-10px}\n.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#2e6da4;border-right-color:#2e6da4;margin-left:0;margin-right:0}\n.slider.slider-vertical .slider-tick-label-container{white-space:nowrap}\n.slider.slider-vertical .slider-tick-label-container .slider-tick-label{padding-left:4px}\n.slider.slider-vertical .tooltip{transform:translateY(-50%)}\n.slider.slider-vertical.slider-rtl .slider-track{left:initial;right:25%}\n.slider.slider-vertical.slider-rtl .slider-selection{left:initial;right:0}\n.slider.slider-vertical.slider-rtl .slider-tick.triangle,.slider.slider-vertical.slider-rtl .slider-handle.triangle{border-width:10px 10px 10px 0}\n.slider.slider-vertical.slider-rtl .slider-tick-label-container .slider-tick-label{padding-left:initial;padding-right:4px}\n.slider.slider-disabled .slider-handle{background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0);background-repeat:repeat-x}\n.slider.slider-disabled .slider-track{background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);background-repeat:repeat-x;cursor:not-allowed}\n.slider input{display:none}\n.slider .tooltip{pointer-events:none}\n.slider .tooltip.top{margin-top:-36px}\n.slider .tooltip-inner{white-space:nowrap;max-width:none}\n.slider .hide{display:none}\n.slider-track{position:absolute;cursor:pointer;background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);background-repeat:repeat-x;box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}\n.slider-selection{position:absolute;background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);background-repeat:repeat-x;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-sizing:border-box;border-radius:4px}\n.slider-selection.tick-slider-selection{background-image:linear-gradient(to bottom,#8ac1ef 0,#82b3de 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff8ac1ef',endColorstr='#ff82b3de',GradientType=0);background-repeat:repeat-x}\n.slider-track-low,.slider-track-high{position:absolute;background:transparent;box-sizing:border-box;border-radius:4px}\n.slider-handle{position:absolute;top:0;width:20px;height:20px;background-color:#337ab7;background-image:linear-gradient(to bottom,#337ab7 0,#2e6da4 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7',endColorstr='#ff2e6da4',GradientType=0);background-repeat:repeat-x;-webkit-filter:none;filter:none;box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}\n.slider-handle:hover{cursor:pointer}\n.slider-handle.round{border-radius:50%}\n.slider-handle.triangle{background:transparent none}\n.slider-handle.custom{background:transparent none}\n.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}\n.slider-tick{position:absolute;cursor:pointer;width:20px;height:20px;background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);background-repeat:repeat-x;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-sizing:border-box;-webkit-filter:none;filter:none;opacity:.8;border:0 solid transparent}\n.slider-tick.round{border-radius:50%}\n.slider-tick.triangle{background:transparent none}\n.slider-tick.custom{background:transparent none}\n.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}\n.slider-tick.in-selection{background-image:linear-gradient(to bottom,#8ac1ef 0,#82b3de 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff8ac1ef',endColorstr='#ff82b3de',GradientType=0);background-repeat:repeat-x;opacity:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtc2xpZGVyL2Rpc3QvY3NzL2Jvb3RzdHJhcC1zbGlkZXIubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7MkRBRTJEO0FBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQXFDOEQ7QUFBQyxRQUFRLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLGlCQUFpQjtBQUFDLDBCQUEwQixXQUFXLENBQUMsV0FBVztBQUFDLHdDQUF3QyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTTtBQUFDLHFJQUFxSSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVE7QUFBQyxnRkFBZ0YsaUJBQWlCO0FBQUMsa0dBQWtHLGlCQUFpQixDQUFDLE9BQU8sQ0FBZ0MsMEJBQTBCLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxZQUFZO0FBQUMsaURBQWlELGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUFDLHVEQUF1RCxrQkFBa0IsQ0FBQyxlQUFlO0FBQUMsMEVBQTBFLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUI7QUFBQyxtQ0FBa0UsMEJBQTBCO0FBQUMsbURBQW1ELFlBQVksQ0FBQyxPQUFPO0FBQUMsc0dBQXNHLG1CQUFtQixDQUFDLGtCQUFrQjtBQUFDLDREQUE0RCxZQUFZLENBQUMsT0FBTztBQUFDLDhDQUE0RSx5QkFBeUI7QUFBQyx3QkFBd0IsWUFBWSxDQUFDLFVBQVU7QUFBQyxzQ0FBc0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSztBQUFDLDBDQUEwQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO0FBQUMscUZBQXFGLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTztBQUFDLDRFQUE0RSxnQkFBZ0I7QUFBQyw4RkFBOEYsNkJBQTZCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUMsY0FBYztBQUFDLHFEQUFxRCxrQkFBa0I7QUFBQyx3RUFBd0UsZ0JBQWdCO0FBQUMsaUNBQWdFLDBCQUEwQjtBQUFDLGlEQUFpRCxZQUFZLENBQUMsU0FBUztBQUFDLHFEQUFxRCxZQUFZLENBQUMsT0FBTztBQUFDLG9IQUFvSCw2QkFBNkI7QUFBQyxtRkFBbUYsb0JBQW9CLENBQUMsaUJBQWlCO0FBQUMsdUNBQTRLLGtFQUFrRSxDQUFDLG1IQUFtSCxDQUFDLDBCQUEwQjtBQUFDLHNDQUEySyxrRUFBa0UsQ0FBQyxtSEFBbUgsQ0FBQywwQkFBMEIsQ0FBQyxrQkFBa0I7QUFBQyxjQUFjLFlBQVk7QUFBQyxpQkFBaUIsbUJBQW1CO0FBQUMscUJBQXFCLGdCQUFnQjtBQUFDLHVCQUF1QixrQkFBa0IsQ0FBQyxjQUFjO0FBQUMsY0FBYyxZQUFZO0FBQUMsY0FBYyxpQkFBaUIsQ0FBQyxjQUFjLENBQXNJLGtFQUFrRSxDQUFDLG1IQUFtSCxDQUFDLDBCQUEwQixDQUFvRCwwQ0FBMEMsQ0FBQyxpQkFBaUI7QUFBQyxrQkFBa0IsaUJBQWlCLENBQXNJLGtFQUFrRSxDQUFDLG1IQUFtSCxDQUFDLDBCQUEwQixDQUFvRCwwQ0FBMEMsQ0FBMEQscUJBQXFCLENBQUMsaUJBQWlCO0FBQUMsd0NBQTZLLGtFQUFrRSxDQUFDLG1IQUFtSCxDQUFDLDBCQUEwQjtBQUFDLHFDQUFxQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBMEQscUJBQXFCLENBQUMsaUJBQWlCO0FBQUMsZUFBZSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBc0ksa0VBQWtFLENBQUMsbUhBQW1ILENBQUMsMEJBQTBCLENBQUMsbUJBQVcsQ0FBWCxXQUFXLENBQWlGLHVFQUF1RSxDQUFDLDBCQUEwQjtBQUFDLHFCQUFxQixjQUFjO0FBQUMscUJBQXFCLGlCQUFpQjtBQUFDLHdCQUF3QiwyQkFBMkI7QUFBQyxzQkFBc0IsMkJBQTJCO0FBQUMsOEJBQThCLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsYUFBYTtBQUFDLGFBQWEsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQXNJLGtFQUFrRSxDQUFDLG1IQUFtSCxDQUFDLDBCQUEwQixDQUFvRCwwQ0FBMEMsQ0FBMEQscUJBQXFCLENBQUMsbUJBQVcsQ0FBWCxXQUFXLENBQUMsVUFBVSxDQUFDLDBCQUEwQjtBQUFDLG1CQUFtQixpQkFBaUI7QUFBQyxzQkFBc0IsMkJBQTJCO0FBQUMsb0JBQW9CLDJCQUEyQjtBQUFDLDRCQUE0QixnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGFBQWE7QUFBQywwQkFBK0osa0VBQWtFLENBQUMsbUhBQW1ILENBQUMsMEJBQTBCLENBQUMsU0FBUyIsImZpbGUiOiJub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNsaWRlci9kaXN0L2Nzcy9ib290c3RyYXAtc2xpZGVyLm1pbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgIFZFUlNJT04gIDEwLjYuMiAgICAgICAgICAgICAgXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qISA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGJvb3RzdHJhcC1zbGlkZXIuanNcbiAqXG4gKiBNYWludGFpbmVyczpcbiAqXHRcdEt5bGUgS2VtcFxuICpcdFx0XHQtIFR3aXR0ZXI6IEBzZWl5cmlhXG4gKlx0XHRcdC0gR2l0aHViOiAgc2VpeXJpYVxuICpcdFx0Um9oaXQgS2Fsa3VyXG4gKlx0XHRcdC0gVHdpdHRlcjogQFJvdm9sdXRpb25hcnlcbiAqXHRcdFx0LSBHaXRodWI6ICByb3ZvbHV0aW9uXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICpcbiAqIGJvb3RzdHJhcC1zbGlkZXIgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkgS3lsZSBLZW1wLCBSb2hpdCBLYWxrdXIsIGFuZCBjb250cmlidXRvcnNcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAqIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAqIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLy5zbGlkZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOnJlbGF0aXZlfS5zbGlkZXIuc2xpZGVyLWhvcml6b250YWx7d2lkdGg6MjEwcHg7aGVpZ2h0OjIwcHh9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbCAuc2xpZGVyLXRyYWNre2hlaWdodDoxMHB4O3dpZHRoOjEwMCU7bWFyZ2luLXRvcDotNXB4O3RvcDo1MCU7bGVmdDowfS5zbGlkZXIuc2xpZGVyLWhvcml6b250YWwgLnNsaWRlci1zZWxlY3Rpb24sLnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbCAuc2xpZGVyLXRyYWNrLWxvdywuc2xpZGVyLnNsaWRlci1ob3Jpem9udGFsIC5zbGlkZXItdHJhY2staGlnaHtoZWlnaHQ6MTAwJTt0b3A6MDtib3R0b206MH0uc2xpZGVyLnNsaWRlci1ob3Jpem9udGFsIC5zbGlkZXItdGljaywuc2xpZGVyLnNsaWRlci1ob3Jpem9udGFsIC5zbGlkZXItaGFuZGxle21hcmdpbi1sZWZ0Oi0xMHB4fS5zbGlkZXIuc2xpZGVyLWhvcml6b250YWwgLnNsaWRlci10aWNrLnRyaWFuZ2xlLC5zbGlkZXIuc2xpZGVyLWhvcml6b250YWwgLnNsaWRlci1oYW5kbGUudHJpYW5nbGV7cG9zaXRpb246cmVsYXRpdmU7dG9wOjUwJTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7Ym9yZGVyLXdpZHRoOjAgMTBweCAxMHB4IDEwcHg7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItYm90dG9tLWNvbG9yOiMyZTZkYTQ7bWFyZ2luLXRvcDowfS5zbGlkZXIuc2xpZGVyLWhvcml6b250YWwgLnNsaWRlci10aWNrLWNvbnRhaW5lcnt3aGl0ZS1zcGFjZTpub3dyYXA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCV9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbCAuc2xpZGVyLXRpY2stbGFiZWwtY29udGFpbmVye3doaXRlLXNwYWNlOm5vd3JhcDttYXJnaW4tdG9wOjIwcHh9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbCAuc2xpZGVyLXRpY2stbGFiZWwtY29udGFpbmVyIC5zbGlkZXItdGljay1sYWJlbHtwYWRkaW5nLXRvcDo0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXJ9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbCAudG9vbHRpcHstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbC5zbGlkZXItcnRsIC5zbGlkZXItdHJhY2t7bGVmdDppbml0aWFsO3JpZ2h0OjB9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbC5zbGlkZXItcnRsIC5zbGlkZXItdGljaywuc2xpZGVyLnNsaWRlci1ob3Jpem9udGFsLnNsaWRlci1ydGwgLnNsaWRlci1oYW5kbGV7bWFyZ2luLWxlZnQ6aW5pdGlhbDttYXJnaW4tcmlnaHQ6LTEwcHh9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbC5zbGlkZXItcnRsIC5zbGlkZXItdGljay1jb250YWluZXJ7bGVmdDppbml0aWFsO3JpZ2h0OjB9LnNsaWRlci5zbGlkZXItaG9yaXpvbnRhbC5zbGlkZXItcnRsIC50b29sdGlwey1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCg1MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDUwJSl9LnNsaWRlci5zbGlkZXItdmVydGljYWx7aGVpZ2h0OjIxMHB4O3dpZHRoOjIwcHh9LnNsaWRlci5zbGlkZXItdmVydGljYWwgLnNsaWRlci10cmFja3t3aWR0aDoxMHB4O2hlaWdodDoxMDAlO2xlZnQ6MjUlO3RvcDowfS5zbGlkZXIuc2xpZGVyLXZlcnRpY2FsIC5zbGlkZXItc2VsZWN0aW9ue3dpZHRoOjEwMCU7bGVmdDowO3RvcDowO2JvdHRvbTowfS5zbGlkZXIuc2xpZGVyLXZlcnRpY2FsIC5zbGlkZXItdHJhY2stbG93LC5zbGlkZXIuc2xpZGVyLXZlcnRpY2FsIC5zbGlkZXItdHJhY2staGlnaHt3aWR0aDoxMDAlO2xlZnQ6MDtyaWdodDowfS5zbGlkZXIuc2xpZGVyLXZlcnRpY2FsIC5zbGlkZXItdGljaywuc2xpZGVyLnNsaWRlci12ZXJ0aWNhbCAuc2xpZGVyLWhhbmRsZXttYXJnaW4tdG9wOi0xMHB4fS5zbGlkZXIuc2xpZGVyLXZlcnRpY2FsIC5zbGlkZXItdGljay50cmlhbmdsZSwuc2xpZGVyLnNsaWRlci12ZXJ0aWNhbCAuc2xpZGVyLWhhbmRsZS50cmlhbmdsZXtib3JkZXItd2lkdGg6MTBweCAwIDEwcHggMTBweDt3aWR0aDoxcHg7aGVpZ2h0OjFweDtib3JkZXItbGVmdC1jb2xvcjojMmU2ZGE0O2JvcmRlci1yaWdodC1jb2xvcjojMmU2ZGE0O21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjB9LnNsaWRlci5zbGlkZXItdmVydGljYWwgLnNsaWRlci10aWNrLWxhYmVsLWNvbnRhaW5lcnt3aGl0ZS1zcGFjZTpub3dyYXB9LnNsaWRlci5zbGlkZXItdmVydGljYWwgLnNsaWRlci10aWNrLWxhYmVsLWNvbnRhaW5lciAuc2xpZGVyLXRpY2stbGFiZWx7cGFkZGluZy1sZWZ0OjRweH0uc2xpZGVyLnNsaWRlci12ZXJ0aWNhbCAudG9vbHRpcHstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LnNsaWRlci5zbGlkZXItdmVydGljYWwuc2xpZGVyLXJ0bCAuc2xpZGVyLXRyYWNre2xlZnQ6aW5pdGlhbDtyaWdodDoyNSV9LnNsaWRlci5zbGlkZXItdmVydGljYWwuc2xpZGVyLXJ0bCAuc2xpZGVyLXNlbGVjdGlvbntsZWZ0OmluaXRpYWw7cmlnaHQ6MH0uc2xpZGVyLnNsaWRlci12ZXJ0aWNhbC5zbGlkZXItcnRsIC5zbGlkZXItdGljay50cmlhbmdsZSwuc2xpZGVyLnNsaWRlci12ZXJ0aWNhbC5zbGlkZXItcnRsIC5zbGlkZXItaGFuZGxlLnRyaWFuZ2xle2JvcmRlci13aWR0aDoxMHB4IDEwcHggMTBweCAwfS5zbGlkZXIuc2xpZGVyLXZlcnRpY2FsLnNsaWRlci1ydGwgLnNsaWRlci10aWNrLWxhYmVsLWNvbnRhaW5lciAuc2xpZGVyLXRpY2stbGFiZWx7cGFkZGluZy1sZWZ0OmluaXRpYWw7cGFkZGluZy1yaWdodDo0cHh9LnNsaWRlci5zbGlkZXItZGlzYWJsZWQgLnNsaWRlci1oYW5kbGV7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsI2RmZGZkZiAwLCNiZWJlYmUgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLCNkZmRmZGYgMCwjYmViZWJlIDEwMCUpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZGZkZmRmIDAsI2JlYmViZSAxMDAlKTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmRmZGZkZicsZW5kQ29sb3JzdHI9JyNmZmJlYmViZScsR3JhZGllbnRUeXBlPTApO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5zbGlkZXIuc2xpZGVyLWRpc2FibGVkIC5zbGlkZXItdHJhY2t7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsI2U1ZTVlNSAwLCNlOWU5ZTkgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLCNlNWU1ZTUgMCwjZTllOWU5IDEwMCUpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZTVlNWU1IDAsI2U5ZTllOSAxMDAlKTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmU1ZTVlNScsZW5kQ29sb3JzdHI9JyNmZmU5ZTllOScsR3JhZGllbnRUeXBlPTApO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O2N1cnNvcjpub3QtYWxsb3dlZH0uc2xpZGVyIGlucHV0e2Rpc3BsYXk6bm9uZX0uc2xpZGVyIC50b29sdGlwe3BvaW50ZXItZXZlbnRzOm5vbmV9LnNsaWRlciAudG9vbHRpcC50b3B7bWFyZ2luLXRvcDotMzZweH0uc2xpZGVyIC50b29sdGlwLWlubmVye3doaXRlLXNwYWNlOm5vd3JhcDttYXgtd2lkdGg6bm9uZX0uc2xpZGVyIC5oaWRle2Rpc3BsYXk6bm9uZX0uc2xpZGVyLXRyYWNre3Bvc2l0aW9uOmFic29sdXRlO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCNmNWY1ZjUgMCwjZjlmOWY5IDEwMCUpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwjZjVmNWY1IDAsI2Y5ZjlmOSAxMDAlKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2Y1ZjVmNSAwLCNmOWY5ZjkgMTAwJSk7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmNWY1ZjUnLGVuZENvbG9yc3RyPScjZmZmOWY5ZjknLEdyYWRpZW50VHlwZT0wKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteDstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMSk7Ym9yZGVyLXJhZGl1czo0cHh9LnNsaWRlci1zZWxlY3Rpb257cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsI2Y5ZjlmOSAwLCNmNWY1ZjUgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLCNmOWY5ZjkgMCwjZjVmNWY1IDEwMCUpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjlmOWY5IDAsI2Y1ZjVmNSAxMDAlKTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmY5ZjlmOScsZW5kQ29sb3JzdHI9JyNmZmY1ZjVmNScsR3JhZGllbnRUeXBlPTApO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLDAuMTUpO2JveC1zaGFkb3c6aW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwwLjE1KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyLXJhZGl1czo0cHh9LnNsaWRlci1zZWxlY3Rpb24udGljay1zbGlkZXItc2VsZWN0aW9ue2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCM4YWMxZWYgMCwjODJiM2RlIDEwMCUpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwjOGFjMWVmIDAsIzgyYjNkZSAxMDAlKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzhhYzFlZiAwLCM4MmIzZGUgMTAwJSk7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmY4YWMxZWYnLGVuZENvbG9yc3RyPScjZmY4MmIzZGUnLEdyYWRpZW50VHlwZT0wKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0uc2xpZGVyLXRyYWNrLWxvdywuc2xpZGVyLXRyYWNrLWhpZ2h7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyLXJhZGl1czo0cHh9LnNsaWRlci1oYW5kbGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjc7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIzMzN2FiNyAwLCMyZTZkYTQgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLCMzMzdhYjcgMCwjMmU2ZGE0IDEwMCUpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjMzM3YWI3IDAsIzJlNmRhNCAxMDAlKTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZjMzN2FiNycsZW5kQ29sb3JzdHI9JyNmZjJlNmRhNCcsR3JhZGllbnRUeXBlPTApO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O2ZpbHRlcjpub25lOy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjIpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjIpLDAgMXB4IDJweCByZ2JhKDAsMCwwLC4wNSk7Ym9yZGVyOjAgc29saWQgdHJhbnNwYXJlbnR9LnNsaWRlci1oYW5kbGU6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9LnNsaWRlci1oYW5kbGUucm91bmR7Ym9yZGVyLXJhZGl1czo1MCV9LnNsaWRlci1oYW5kbGUudHJpYW5nbGV7YmFja2dyb3VuZDp0cmFuc3BhcmVudCBub25lfS5zbGlkZXItaGFuZGxlLmN1c3RvbXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IG5vbmV9LnNsaWRlci1oYW5kbGUuY3VzdG9tOjpiZWZvcmV7bGluZS1oZWlnaHQ6MjBweDtmb250LXNpemU6MjBweDtjb250ZW50OidcXDI2MDUnO2NvbG9yOiM3MjYyMDR9LnNsaWRlci10aWNre3Bvc2l0aW9uOmFic29sdXRlO2N1cnNvcjpwb2ludGVyO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsI2Y5ZjlmOSAwLCNmNWY1ZjUgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLCNmOWY5ZjkgMCwjZjVmNWY1IDEwMCUpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjlmOWY5IDAsI2Y1ZjVmNSAxMDAlKTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmY5ZjlmOScsZW5kQ29sb3JzdHI9JyNmZmY1ZjVmNScsR3JhZGllbnRUeXBlPTApO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLDAuMTUpO2JveC1zaGFkb3c6aW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwwLjE1KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZmlsdGVyOm5vbmU7b3BhY2l0eTouODtib3JkZXI6MCBzb2xpZCB0cmFuc3BhcmVudH0uc2xpZGVyLXRpY2sucm91bmR7Ym9yZGVyLXJhZGl1czo1MCV9LnNsaWRlci10aWNrLnRyaWFuZ2xle2JhY2tncm91bmQ6dHJhbnNwYXJlbnQgbm9uZX0uc2xpZGVyLXRpY2suY3VzdG9te2JhY2tncm91bmQ6dHJhbnNwYXJlbnQgbm9uZX0uc2xpZGVyLXRpY2suY3VzdG9tOjpiZWZvcmV7bGluZS1oZWlnaHQ6MjBweDtmb250LXNpemU6MjBweDtjb250ZW50OidcXDI2MDUnO2NvbG9yOiM3MjYyMDR9LnNsaWRlci10aWNrLmluLXNlbGVjdGlvbntiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwjOGFjMWVmIDAsIzgyYjNkZSAxMDAlKTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsIzhhYzFlZiAwLCM4MmIzZGUgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM4YWMxZWYgMCwjODJiM2RlIDEwMCUpO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmOGFjMWVmJyxlbmRDb2xvcnN0cj0nI2ZmODJiM2RlJyxHcmFkaWVudFR5cGU9MCk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXg7b3BhY2l0eToxfSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./bootstrap-slider.min.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!************************************************************************************************!*\
  !*** multi ./src/styles.css ./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/mattgpayne/a/slider/src/styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! /home/mattgpayne/a/slider/node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css */"./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map