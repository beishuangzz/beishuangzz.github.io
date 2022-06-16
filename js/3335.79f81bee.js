"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3335],{33335:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var l=t(16857),a={name:"riskSourceList",extends:t(45488).Z,data:function(){return{form:{riskSource:{enableFilter:!1,treeData:l.Nb,fieldValue:"",fieldName:"riskSource",fieldShow:"",fieldType:"1",label:"风险来源",pluginType:"TREE",refName:"riskSourceTree"},businessDomain:{enableFilter:!0,keyword:void 0,treeData:l._,fieldValue:"",fieldName:"businessDomain",fieldShow:"",fieldType:"1",label:"业务域",pluginType:"TREE",refName:"businessDomainTree"},contractName:{fieldValue:"",fieldName:"contractName",fieldType:"",label:"合同名称"},contractType:{fieldValue:"",fieldName:"contractType",fieldType:"",label:"合同类型"},ourIdentity:{fieldValue:"",fieldName:"ourIdentity",fieldType:"",label:"我方身份"}},tags:[],collapseActiveNames:["1","2"],searchForm:{keyword:void 0,sortField:"",showMore:!1},infor:{childList:[],rights:0,sql:[],totalPage:1,total:1,page:1,sKey:"",sortName:"",sortBy:"desc",size:10}}},methods:{loadPage:function(){this.createParam(),this.infor=l.Ig},jumpToDetail:function(e){var a;1===e.type?a="/legalThinkTank/riskSourceDetail_riskClause":2===e.type&&(a="/legalThinkTank/riskSourceDetail_oppositeParty"),this.$router.replace({path:a,query:{}})}},created:function(){},mounted:function(){this.loadPage()}},i=(0,t(1001).Z)(a,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"list-page knowledge-graph"},[l("left-panel-container",{attrs:{"panel-width":"250px"},scopedSlots:t._u([{key:"panel",fn:function(){return[l("el-scrollbar",{staticClass:"y-box"},[l("el-form",{ref:"form",staticClass:"side-form",attrs:{"label-width":"0px",size:"small"},nativeOn:{submit:function(e){e.preventDefault()}}},[l("el-collapse",{on:{change:function(e){}},model:{value:t.collapseActiveNames,callback:function(e){t.collapseActiveNames=e},expression:"collapseActiveNames"}},[l("el-collapse-item",{attrs:{title:"",name:"1"}},[l("template",{slot:"title"},[l("h3",[t._v("风险来源")])]),[l("d-tree",t._b({ref:"riskSourceTree",on:{"node-click":t.createParam}},"d-tree",t.form.riskSource,!1,!0))]],2),l("el-collapse-item",{attrs:{title:"",name:"2"}},[l("template",{slot:"title"},[l("h3",[t._v("业务域")])]),[l("d-tree",t._b({ref:"businessDomainTree",on:{"node-click":t.createParam}},"d-tree",t.form.businessDomain,!1,!0))]],2)],1)],1)],1)]},proxy:!0},{key:"default",fn:function(){return[l("div",{staticClass:"common-list"},[l("el-form",{attrs:{inline:!0,size:"small","label-width":"100px"}},[l("div",{staticClass:"main-params"},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"合同名称"}},[l("el-input",{attrs:{clearable:""},model:{value:t.form.contractName.fieldValue,callback:function(e){t.$set(t.form.contractName,"fieldValue",e)},expression:"form.contractName.fieldValue"}})],1)],1),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"合同类型"}},[l("el-input",{attrs:{clearable:""},model:{value:t.form.contractType.fieldValue,callback:function(e){t.$set(t.form.contractType,"fieldValue",e)},expression:"form.contractType.fieldValue"}})],1)],1),l("el-col",{staticClass:"button-group",attrs:{span:8}},[l("el-form-item",[l("el-button",{attrs:{icon:"el-icon-download"}},[t._v("导出")]),l("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.loadPage}},[t._v("查询")]),l("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.resetParam}},[t._v("重置")]),l("el-button",{attrs:{type:"text"},on:{click:function(e){t.searchForm.showMore=!t.searchForm.showMore}}},[l("span",{directives:[{name:"show",rawName:"v-show",value:!t.searchForm.showMore,expression:"!searchForm.showMore"}]},[t._v(" 展开"),l("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),l("span",{directives:[{name:"show",rawName:"v-show",value:t.searchForm.showMore,expression:"searchForm.showMore"}]},[t._v(" 收起"),l("i",{staticClass:"el-icon-arrow-up el-icon--right"})])])],1)],1)],1)],1),l("el-collapse-transition",[l("div",{directives:[{name:"show",rawName:"v-show",value:t.searchForm.showMore,expression:"searchForm.showMore"}]},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"我方身份"}},[l("el-input",{attrs:{clearable:""},model:{value:t.form.ourIdentity.fieldValue,callback:function(e){t.$set(t.form.ourIdentity,"fieldValue",e)},expression:"form.ourIdentity.fieldValue"}})],1)],1)],1)],1)]),l("div",{staticClass:"params-tag"},[0<t.tags.length?l("el-form-item",t._l(t.tags,function(a,e){return l("el-tag",{attrs:{closable:"",type:"info",size:"small"},on:{close:function(e){return t.closeTag(a.name)}}},[t._v(" "+t._s(a.label)+"："+t._s(a.fieldShow)+" ")])}),1):t._e()],1)],1),l("el-table",{staticClass:"table",attrs:{data:t.infor.items,"show-header":!1}},[l("el-table-column",{attrs:{align:"left","min-width":"90%"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{staticClass:"header"},[l("router-link",{attrs:{to:"/xxx",replace:""}},[t._v(" "+t._s(e.row.title)+" ")]),t._v("   "),t._l(e.row.tags,function(e,a){return l("el-tag",{attrs:{type:"info",effect:"plain",size:"small"}},[t._v(" "+t._s(e)+" ")])})],2),l("div",{staticClass:"content"},[t._v(" "+t._s(e.row.detail)+" ")]),l("div",{staticClass:"relation"},[t._v(" 来源："+t._s(e.row.source)+" / 访问次数："+t._s(e.row.visitCount)+" / 更新日期："+t._s(e.row.updateDate)+" ")])]}}])}),l("el-table-column",{attrs:{label:t.$t("操作"),align:"center","min-width":"10%"},scopedSlots:t._u([{key:"default",fn:function(a){return[l("span",{staticClass:"operation-button detail-button",on:{click:function(e){return t.jumpToDetail(a.row)}}},[l("i",{staticClass:"el-icon-more"})]),l("span",{staticClass:"operation-button knowledge-graph-button"},[l("i",{staticClass:"el-icon-paperclip"})])]}}])})],1),l("pagination",{attrs:{infor:t.infor},on:{listening:t.loadPage}})],1)]},proxy:!0}])})],1)},[],!1,null,"1e374f32",null).exports},45488:function(e,a,t){t.d(a,{Z:function(){return i}});var l={createTags:function(i){var e,r=[];for(e in i)!function(e){var a,t=i[e];if("CHECKBOX"===t.pluginType)0<t.fieldValue.length&&(a=[],t.dict.forEach(function(e){-1<t.fieldValue.indexOf(e.diccode)&&a.push(e.basename)}),t.fieldShow=a.join("，"));else if("RADIO"===t.pluginType){if(t.fieldValue)for(var l=0;l<t.dict.length;l++)if(t.dict[l].diccode===t.fieldValue){t.fieldShow=t.dict[l].basename;break}}else"TREE"!==t.pluginType&&("DATERANGE"===t.pluginType?t.fieldValue&&0<t.fieldValue.length&&(t.fieldShow=t.fieldValue[0]+" 至 "+t.fieldValue[1]):t.fieldShow=t.fieldValue);t.fieldValue&&t.fieldShow&&r.push({name:t.fieldName,label:t.label,fieldShow:t.fieldShow})}(e);return r},removeTag:function(e,a){a=a[e];a.fieldShow="",a.fieldValueType?a.fieldValue=new a.fieldValueType:a.fieldValue=""}},i={name:"listPageBase",data:function(){return{form:{},tags:[],searchForm:{keyword:void 0,sortField:"",showMore:!1},infor:{childList:[],rights:0,sql:[],totalPage:1,total:1,page:1,sKey:"",sortName:"",sortBy:"desc",size:10}}},methods:{loadPage:function(){this.createParam(),this.infor=[]},createParam:function(){this.tags=l.createTags(this.form)},resetParam:function(){var a=this;this.tags.forEach(function(e){l.removeTag(e.name,a.form);e=a.form[e.name];"TREE"===e.pluginType&&a.$refs[e.refName].clear()}),this.createParam()},closeTag:function(e){l.removeTag(e,this.form);e=this.form[e];"TREE"===e.pluginType&&this.$refs[e.refName].clear(),this.createParam()}}}},16857:function(e,a,t){t.d(a,{G8:function(){return o},Ig:function(){return r},Nb:function(){return l},_:function(){return i}});var l=[{label:"文本",value:"1",children:[{label:"合同文本",value:"1-1",children:[{label:"风险条款",value:"1-1-1"},{label:"缺失条款",value:"1-1-2"}]},{label:"合同附件",value:"1-2"}]},{label:"相对方",value:"2",children:[{label:"二级 2-1"}]},{label:"违规",value:"3",children:[{label:"二级 2-1"}]},{label:"其他",value:"4",children:[{label:"二级 2-1"}]}],i=[{label:"合同管理",value:"1",children:[{label:"采购合同",value:"1-1",children:[{label:"化工品采购合同",value:"1-1-1"}]},{label:"建筑工程合同",value:"1-2"}]},{label:"公司治理",value:"2",children:[{label:"二级 2-1"}]},{label:"投资管理",value:"3",children:[{label:"二级 2-1"}]},{label:"采购生产",value:"4",children:[{label:"二级 2-1"}]},{label:"工程建设",value:"5",children:[{label:"二级 2-1"}]},{label:"市场营销",value:"6",children:[{label:"二级 2-1"}]},{label:"财务管理",value:"7",children:[{label:"二级 2-1"}]},{label:"知识产权",value:"8",children:[{label:"二级 2-1"}]}],r={total:115,totalPage:12,sortBy:"",page:1,sort:"",items:[{detail:"2021年11月，由于货物运输资源饱和，**公司寻求新的货物运输方后，拟于对方签订《****货物运输合同》，合同中约定我方的租赁方式为即租车又租人，一旦人员出现人身安全，会导致我方承担风险过重,此类型业务采用的合同文本类型使用错误，应使用货物运输合同，司机方由运输方提供。",tags:["合同文本","租赁合同","货车"],title:"《***货物运输合同》采用了货车租赁及司机雇佣的方式",source:"风险合同实例",visitCount:33,type:1,updateDate:"2022-12-12"},{detail:"1.承租方不承担租赁物的保管责任/承租方不对设备及人员的安全负责。2.出租方承担租赁物的保管责任/出租方对设备及人员的安全负责。",tags:["风险条款","租赁合同","设备","甲方"],title:"保管及安全条款",source:"风险合同实例",visitCount:1234,type:2,updateDate:"2021-11-15"},{detail:"合同应当约定负责具体履约的授权人，并详细写明授权人的身份信息、联系方式和授权权限，防止授权信息或权限不明引起纠纷。",tags:["缺失条款","租赁合同","设备","甲方"],title:"授权人约定条款",source:"外部同业知识",visitCount:1234,type:3,updateDate:"2021-11-15"}],size:10},o={total:115,totalPage:12,sortBy:"",page:1,sort:"",items:[{riskBehavior:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskNumber:"A-01-01-001",riskType:"合规风险",sourceBusinessDomain:"合同管理",riskSource:"合同相对方",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险",riskControlMode:["系统控制","人工审核"],riskControlMeasures:"合同承办部门在合同系统送审合同时，系统强制要求上传相对方资质文件，在审核合同过程中，相对方资质文件是合同承办部门及法律部门必审内容",riskControlResponsibleOrganization:["业务承办部门","法务部门"],riskLevel:"一般风险",recognitionTimes:55,actualOccurrenceRiskCount:55,accumulatedEconomicLoss:343,updateDate:"2022-12-12"},{riskBehavior:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskNumber:"A-01-01-001",riskType:"合规风险",sourceBusinessDomain:"合同管理",riskSource:"合同相对方",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险",riskControlMode:["系统控制","人工审核"],riskControlMeasures:"合同承办部门在合同系统送审合同时，系统强制要求上传相对方资质文件，在审核合同过程中，相对方资质文件是合同承办部门及法律部门必审内容",riskControlResponsibleOrganization:["业务承办部门","法务部门"],riskLevel:"一般风险",recognitionTimes:55,actualOccurrenceRiskCount:55,accumulatedEconomicLoss:343,updateDate:"2022-12-12"}],size:10}}}]);