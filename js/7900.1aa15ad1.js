"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7900],{77900:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var a=l(81518),t={name:"riskContractList",extends:l(45488).Z,data:function(){return{form:{contractType:{keyword:void 0,expandAll:!1,treeData:a.Jq,fieldValue:"",fieldName:"contractType",fieldShow:"",fieldType:"1",label:"业务域",pluginType:"TREE",refName:"tree"},contractName:{fieldValue:"",fieldName:"contractName",fieldType:"",label:"合同名称"},riskNumber:{fieldValue:"",fieldName:"riskNumber",fieldType:"",label:"风险编号"},riskType:{fieldValue:"",fieldName:"riskType",fieldType:"",label:"风险分类"},riskSource:{fieldValue:"",fieldName:"riskSource",fieldType:"",label:"风险来源"},ourIdentity:{fieldValue:"",fieldName:"ourIdentity",fieldType:"",label:"我方身份"}},tags:[],collapseActiveNames:["1"],searchForm:{keyword:void 0,sortField:"",showMore:!1},infor:{childList:[],rights:0,sql:[],totalPage:1,total:1,page:1,sKey:"",sortName:"",sortBy:"desc",size:10}}},methods:{loadPage:function(){this.createParam(),this.infor=a.kR},jumpTo:function(e){this.$router.replace(e)}},created:function(){},mounted:function(){this.loadPage()}},i=(0,l(1001).Z)(t,function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("div",{staticClass:"list-page knowledge-graph"},[a("left-panel-container",{attrs:{"panel-width":"250px"},scopedSlots:l._u([{key:"panel",fn:function(){return[a("el-scrollbar",{staticClass:"y-box"},[a("el-form",{ref:"form",staticClass:"side-form",attrs:{"label-width":"0px",size:"small"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-collapse",{on:{change:function(e){}},model:{value:l.collapseActiveNames,callback:function(e){l.collapseActiveNames=e},expression:"collapseActiveNames"}},[a("el-collapse-item",{attrs:{title:"合同类型",name:"1"}},[a("template",{slot:"title"},[a("h3",[l._v("合同类型")])]),[a("d-tree",l._b({ref:"tree",on:{"node-click":l.createParam}},"d-tree",l.form.contractType,!1,!0))]],2)],1)],1)],1)]},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"common-list"},[a("el-form",{attrs:{inline:!0,size:"small","label-width":"100px"}},[a("div",{staticClass:"main-params"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"合同名称"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.contractName.fieldValue,callback:function(e){l.$set(l.form.contractName,"fieldValue",e)},expression:"form.contractName.fieldValue"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"风险编号"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.riskNumber.fieldValue,callback:function(e){l.$set(l.form.riskNumber,"fieldValue",e)},expression:"form.riskNumber.fieldValue"}})],1)],1),a("el-col",{staticClass:"button-group",attrs:{span:8}},[a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-download"}},[l._v("导出")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:l.loadPage}},[l._v("查询")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:l.resetParam}},[l._v("重置")]),a("el-button",{attrs:{type:"text"},on:{click:function(e){l.searchForm.showMore=!l.searchForm.showMore}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.searchForm.showMore,expression:"!searchForm.showMore"}]},[l._v(" 展开"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("span",{directives:[{name:"show",rawName:"v-show",value:l.searchForm.showMore,expression:"searchForm.showMore"}]},[l._v(" 收起"),a("i",{staticClass:"el-icon-arrow-up el-icon--right"})])])],1)],1)],1)],1),a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:l.searchForm.showMore,expression:"searchForm.showMore"}]},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"风险分类"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.riskType.fieldValue,callback:function(e){l.$set(l.form.riskType,"fieldValue",e)},expression:"form.riskType.fieldValue"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"风险来源"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.riskSource.fieldValue,callback:function(e){l.$set(l.form.riskSource,"fieldValue",e)},expression:"form.riskSource.fieldValue"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"我方身份"}},[a("el-input",{attrs:{clearable:""},model:{value:l.form.ourIdentity.fieldValue,callback:function(e){l.$set(l.form.ourIdentity,"fieldValue",e)},expression:"form.ourIdentity.fieldValue"}})],1)],1)],1)],1)]),a("div",{staticClass:"params-tag"},[0<l.tags.length?a("el-form-item",l._l(l.tags,function(t,e){return a("el-tag",{attrs:{closable:"",type:"info"},on:{close:function(e){return l.closeTag(t.name)}}},[l._v(" "+l._s(t.label)+"："+l._s(t.fieldShow)+" ")])}),1):l._e()],1)],1),a("el-table",{staticClass:"table",attrs:{data:l.infor.items}},[a("el-table-column",{attrs:{fixed:"left",label:l.$t("序号"),width:"80",align:"left"},scopedSlots:l._u([{key:"default",fn:function(e){return[l._v(" "+l._s(e.$index+1+(l.infor.page-1)*l.infor.size)+" ")]}}])}),a("el-table-column",{attrs:{prop:"contractName",fixed:"left",label:l.$t("合同名称"),"show-tooltip-when-overflow":!0,align:"left","min-width":"220"}}),a("el-table-column",{attrs:{prop:"contractType",label:l.$t("合同类型"),"show-tooltip-when-overflow":!0,align:"left","min-width":"160"}}),a("el-table-column",{attrs:{prop:"subject",label:l.$t("标的"),"show-tooltip-when-overflow":!0,align:"left","min-width":"160"}}),a("el-table-column",{attrs:{prop:"ourIdentity",label:l.$t("我方身份"),"show-tooltip-when-overflow":!0,align:"left","min-width":"120"}}),a("el-table-column",{attrs:{prop:"riskSource",label:l.$t("风险来源"),align:"left","min-width":"200"},scopedSlots:l._u([{key:"default",fn:function(e){return l._l(e.row.riskSource,function(e,t){return a("el-tooltip",{key:t,attrs:{effect:"dark",content:e,placement:"top"}},[a("span",{staticClass:"column-card risk-source ellipsis"},[l._v(l._s(e))])])})}}])}),a("el-table-column",{attrs:{prop:"riskBehaviorCount",label:l.$t("风险行为"),align:"left","show-tooltip-when-overflow":!0,"min-width":"120"}}),a("el-table-column",{attrs:{prop:"illegalElementCount",label:l.$t("不符审查要素"),"show-tooltip-when-overflow":!0,align:"left","min-width":"120"}}),a("el-table-column",{attrs:{prop:"actualOccurrenceRiskCount",label:l.$t("风险实际发生"),"show-tooltip-when-overflow":!0,align:"left",width:"120"}}),a("el-table-column",{attrs:{prop:"updateDate",label:l.$t("更新日期"),"show-tooltip-when-overflow":!0,align:"left","min-width":"160"}}),a("el-table-column",{staticClass:"operation-column",attrs:{fixed:"right",label:l.$t("操作"),align:"left",width:"100"},scopedSlots:l._u([{key:"default",fn:function(e){return[a("span",{staticClass:"operation-button detail-button",on:{click:function(e){return l.jumpTo("/legalThinkTank/riskContractDetail")}}},[a("i",{staticClass:"el-icon-more"})]),a("span",{staticClass:"operation-button knowledge-graph-button"},[a("i",{staticClass:"el-icon-paperclip"})])]}}])})],1),a("pagination",{attrs:{infor:l.infor},on:{listening:l.loadPage}})],1)]},proxy:!0}])})],1)},[],!1,null,"1aa81a2f",null).exports},45488:function(e,t,l){l.d(t,{Z:function(){return i}});var a={createTags:function(i){var e,r=[];for(e in i)!function(e){var t,l=i[e];if("CHECKBOX"===l.pluginType)0<l.fieldValue.length&&(t=[],l.dict.forEach(function(e){-1<l.fieldValue.indexOf(e.diccode)&&t.push(e.basename)}),l.fieldShow=t.join("，"));else if("RADIO"===l.pluginType){if(l.fieldValue)for(var a=0;a<l.dict.length;a++)if(l.dict[a].diccode===l.fieldValue){l.fieldShow=l.dict[a].basename;break}}else"TREE"!==l.pluginType&&("DATERANGE"===l.pluginType?l.fieldValue&&0<l.fieldValue.length&&(l.fieldShow=l.fieldValue[0]+" 至 "+l.fieldValue[1]):l.fieldShow=l.fieldValue);l.fieldValue&&l.fieldShow&&r.push({name:l.fieldName,label:l.label,fieldShow:l.fieldShow})}(e);return r},removeTag:function(e,t){t=t[e];t.fieldShow="",t.fieldValueType?t.fieldValue=new t.fieldValueType:t.fieldValue=""}},i={name:"listPageBase",data:function(){return{form:{},tags:[],searchForm:{keyword:void 0,sortField:"",showMore:!1},infor:{childList:[],rights:0,sql:[],totalPage:1,total:1,page:1,sKey:"",sortName:"",sortBy:"desc",size:10}}},methods:{loadPage:function(){this.createParam(),this.infor=[]},createParam:function(){this.tags=a.createTags(this.form)},resetParam:function(){var t=this;this.tags.forEach(function(e){a.removeTag(e.name,t.form);e=t.form[e.name];"TREE"===e.pluginType&&t.$refs[e.refName].clear()}),this.createParam()},closeTag:function(e){a.removeTag(e,this.form);e=this.form[e];"TREE"===e.pluginType&&this.$refs[e.refName].clear(),this.createParam()}}}},81518:function(e,t,l){l.d(t,{Jq:function(){return a},Qj:function(){return r},kR:function(){return i}});var a=[{label:"采购合同",value:"1",children:[{label:"零部件采购合同",value:"1-1",children:[{label:"风险条款",value:"1-1-1"},{label:"缺失条款",value:"1-1-2"}]},{label:"备件/原材料采购合同",value:"1-2"}]},{label:"销售合同",value:"2",children:[{label:"二级 2-1"}]},{label:"借款合同",value:"3",children:[{label:"二级 2-1"}]},{label:"租赁合同",value:"4",children:[{label:"二级 2-1"}]}],i={total:115,totalPage:12,sortBy:"",page:1,sort:"",items:[{contractName:"合同xxx",contractType:"采购合同",subject:"管理软件",ourIdentity:"甲方",riskSource:["相对方","风险条款"],riskBehaviorCount:5,illegalElementCount:12,illegalBehavior:32,actualOccurrenceRiskCount:32,updateDate:"2022-05-22",riskBehaviorDetail:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskId:"A-01-01-001",riskType:"合规风险",businessDomainSource:"合同管理",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险"},{contractName:"合同xxx",contractType:"采购合同",subject:"管理软件",ourIdentity:"甲方",riskSource:["相对方","风险条款"],riskBehaviorCount:5,illegalElementCount:12,illegalBehavior:32,actualOccurrenceRiskCount:32,updateDate:"2022-05-22",riskBehaviorDetail:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskId:"A-01-01-001",riskType:"合规风险",businessDomainSource:"合同管理",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险"},{contractName:"合同xxx",contractType:"采购合同",subject:"管理软件",ourIdentity:"甲方",riskSource:["相对方","风险条款"],riskBehaviorCount:5,illegalElementCount:12,illegalBehavior:32,actualOccurrenceRiskCount:32,updateDate:"2022-05-22",riskBehaviorDetail:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskId:"A-01-01-001",riskType:"合规风险",businessDomainSource:"合同管理",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险"},{contractName:"合同xxx",contractType:"采购合同",subject:"管理软件",ourIdentity:"甲方",riskSource:["相对方","风险条款"],riskBehaviorCount:5,illegalElementCount:12,illegalBehavior:32,actualOccurrenceRiskCount:32,updateDate:"2022-05-22",riskBehaviorDetail:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskId:"A-01-01-001",riskType:"合规风险",businessDomainSource:"合同管理",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险"}],size:10},r={total:115,totalPage:12,sortBy:"",page:1,sort:"",items:[{riskBehavior:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskNumber:"A-01-01-001",riskType:"合规风险",sourceBusinessDomain:"合同管理",riskSource:"合同相对方",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险",riskControlMode:["系统控制","人工审核"],riskControlMeasures:"合同承办部门在合同系统送审合同时，系统强制要求上传相对方资质文件，在审核合同过程中，相对方资质文件是合同承办部门及法律部门必审内容",riskControlResponsibleOrganization:["业务承办部门","法务部门"],riskLevel:"一般风险",recognitionTimes:55,actualOccurrenceRiskCount:55,accumulatedEconomicLoss:343,updateDate:"2022-12-12"},{riskBehavior:"未按照集团有关规定对合同相对方资信、授权和合同条款进行有效审查，或未要求合同相对方提供必要的文件",riskNumber:"A-01-01-001",riskType:"合规风险",sourceBusinessDomain:"合同管理",riskSource:"合同相对方",riskJudgmentCriteria:["《合同管理规定》第23条","《合同管理规定》第24条"],riskConsequence:"法律责任和国有资产损失风险",riskControlMode:["系统控制","人工审核"],riskControlMeasures:"合同承办部门在合同系统送审合同时，系统强制要求上传相对方资质文件，在审核合同过程中，相对方资质文件是合同承办部门及法律部门必审内容",riskControlResponsibleOrganization:["业务承办部门","法务部门"],riskLevel:"一般风险",recognitionTimes:55,actualOccurrenceRiskCount:55,accumulatedEconomicLoss:343,updateDate:"2022-12-12"}],size:10}}}]);