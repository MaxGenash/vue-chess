webpackJsonp([3,4],{230:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(38),a=s(o),r=i(2),d=s(r),u=i(216),l=s(u);e.default={template:i(355),route:{data:function(t){return{filters:{u1:":u1"===this.$route.params.u1?"":"all"===this.$route.params.u1?"":this.$route.params.u1,u2:":u2"===this.$route.params.u2?"":"all"===this.$route.params.u2?"":this.$route.params.u2},skip:":skip"===this.$route.params.skip?0:parseInt(this.$route.params.skip),boardSelect:":idBoard"===this.$route.params.idBoard?"none":this.$route.params.idBoard}}},data:function(){return{boardSelect:"",limit:20,foundList:[],boardView:d.default.get("boardView",{}),totalRecords:0,filters:{u1:"",u2:""},skip:-1}},components:{BoardVisor:l.default},methods:{updateRouter:function(){var t=""===this.filters.u1?"all":this.filters.u1,e=""===this.filters.u2?"all":this.filters.u2,i="/visor/"+this.boardView._id+"/"+this.skip+"/"+t+"/"+e;this.$route.router.replace(i),a.default.setParms({u1:t,u2:e,skip:this.skip,idBoard:this.boardView._id})},Filter:function(){var t={filters:this.filters,limit:this.limit,skip:this.skip};a.default.filter(this,t).then(function(t){if(this.foundList=t.data.documents,this.totalRecords=t.data.total,this.updateRouter(),this.boardSelect!==this.boardView._id)for(var e in this.foundList)this.foundList[e]._id===this.boardSelect&&this.selectBoard(this.foundList[e])},function(t){this.error=t.data})},selectBoard:function(t){this.boardView=t,d.default.set("boardView",t),this.updateRouter()}},created:function(){},watch:{skip:function(t,e){this.Filter()}}}},355:function(t,e){t.exports='<div class="col s12"> <div class="col s12 m6 l3"> <div> <label>{{ $t("visor.found") }} :{{totalRecords}}</label> <div style="text-align: center"> <md-pagination :current-page.sync=skip :page-size=20 :total-records.sync=totalRecords> </md-pagination> </div> <md-input class="col s6 m6 l6" name=white :value.sync=filters.u1 @keyup="Filter() | debounce 300"> {{ $t("visor.whiteName") }} </md-input> <md-input class="col s6 m6 l6" name=black :value.sync=filters.u2 @keyup="Filter() | debounce 300"> {{ $t("visor.blackName") }} </md-input> <div style="height: 65vh;overflow: auto" class="col s12 m12 l12"> <table class=table> <tbody> <tr v-for="board in foundList" @click=selectBoard(board) v-bind:class="[boardView._id === board._id ? \'item-select\' : \'\']"> <td>{{ board.u1}} vs {{ board.u2}}</td> <td>G. {{ board.wins}} M.{{ board.motiv }}</td> </tr> </tbody> </table> </div> </div> </div> <div class="col s12 m6 l9"> <board-visor :board=boardView></board-visor> </div> </div> <style scoped> .item-select {\n        background-color: #90a4ae;;\n    } </style> '},363:function(t,e,i){var s,o,a={};s=i(230),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(r.template=o),r.computed||(r.computed={}),Object.keys(a).forEach(function(t){var e=a[t];r.computed[t]=function(){return e}})}});
//# sourceMappingURL=3.aa6f69de6dd850bc277a.js.map