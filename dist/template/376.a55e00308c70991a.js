"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[376],{376:(q,g,c)=>{c.r(g),c.d(g,{AttendenceModule:()=>K});var h=c(177),p=c(1188),e=c(4438);let R=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-attendence"]],decls:1,vars:0,template:function(o,t){1&o&&e.nrm(0,"router-outlet")},dependencies:[p.n3]})}return n})();var k=c(9159),b=c(4450),f=c(7812),v=c(1287),F=c(9950),u=c(2042),j=c(2798),C=c(6600),r=c(9417),_=c(4860),E=c(4823),M=c(1500);const T=n=>({setclose:n}),d=()=>({standalone:!0}),S=(n,s)=>({"d-block":n,"d-none":s});function w(n,s){1&n&&e.nrm(0,"i",13)}function V(n,s){1&n&&e.nrm(0,"i",14)}function I(n,s){if(1&n&&(e.j41(0,"mat-option",118),e.EFF(1),e.k0s()),2&n){const a=s.$implicit;e.Y8G("value",a.value),e.R7$(),e.SpI(" ",a.value," ")}}function $(n,s){if(1&n&&(e.j41(0,"mat-option",118),e.EFF(1),e.k0s()),2&n){const a=s.$implicit;e.Y8G("value",a.value),e.R7$(),e.SpI(" ",a.value," ")}}function P(n,s){if(1&n&&(e.j41(0,"mat-option",118),e.EFF(1),e.k0s()),2&n){const a=s.$implicit;e.Y8G("value",a.value),e.R7$(),e.SpI(" ",a.value," ")}}function G(n,s){if(1&n){const a=e.RV6();e.j41(0,"tr")(1,"td")(2,"label",74),e.bIt("click",function(){e.eBV(a);const t=e.XpG();return e.Njj(t.selectAll(t.initChecked))}),e.j41(3,"input",119),e.mxI("ngModelChange",function(t){e.eBV(a);const l=e.XpG();return e.DH7(l.initChecked,t)||(l.initChecked=t),e.Njj(t)}),e.k0s(),e.nrm(4,"span",76),e.k0s()(),e.j41(5,"td")(6,"div",120)(7,"a",121),e.nrm(8,"img",122),e.k0s(),e.j41(9,"div")(10,"a",123),e.EFF(11),e.k0s(),e.j41(12,"span",124),e.EFF(13),e.k0s()()()(),e.j41(14,"td"),e.EFF(15),e.k0s(),e.j41(16,"td"),e.EFF(17),e.k0s(),e.j41(18,"td"),e.EFF(19),e.k0s(),e.j41(20,"td"),e.EFF(21),e.k0s(),e.j41(22,"td"),e.EFF(23),e.k0s(),e.j41(24,"td"),e.EFF(25),e.k0s(),e.j41(26,"td"),e.EFF(27),e.k0s(),e.j41(28,"td")(29,"span",125),e.EFF(30,"Approved"),e.k0s()(),e.j41(31,"td",126)(32,"div",127)(33,"a",128),e.nrm(34,"i",129),e.k0s(),e.j41(35,"a",130),e.nrm(36,"i",131),e.k0s(),e.j41(37,"a",132),e.nrm(38,"i",133),e.k0s()()()()}if(2&n){const a=s.$implicit,o=e.XpG();e.R7$(3),e.R50("ngModel",o.initChecked),e.R7$(5),e.Y8G("src",a.img,e.B4B),e.R7$(3),e.JRh(a.name),e.R7$(2),e.JRh(a.posting),e.R7$(2),e.JRh(a.empId),e.R7$(2),e.JRh(a.Date),e.R7$(2),e.JRh(a.shift),e.R7$(2),e.JRh(a.clockIn),e.R7$(2),e.JRh(a.Production),e.R7$(2),e.JRh(a.overTime),e.R7$(2),e.JRh(a.totalhours)}}function B(n,s){if(1&n&&(e.j41(0,"mat-option",118),e.EFF(1),e.k0s()),2&n){const a=s.$implicit;e.Y8G("value",a.value),e.R7$(),e.SpI(" ",a.value," ")}}function J(n,s){if(1&n&&(e.j41(0,"mat-option",118),e.EFF(1),e.k0s()),2&n){const a=s.$implicit;e.Y8G("value",a.value),e.R7$(),e.SpI(" ",a.value," ")}}let N=(()=>{class n{constructor(a,o,t,l,i){this.data=a,this.pagination=o,this.router=t,this.sidebar=l,this.datePipe=i,this.initChecked=!1,this.showTimePicker=[],this.date=new Date,this.myTime=new Date,this.selectedValue1="",this.selectedValue2="",this.selectedValue3="",this.selectedList1=[{value:"Sort by Datee"},{value:"Newest"},{value:"Oldest"}],this.selectedList2=[{value:"Choose"},{value:"Mitchum Daniel"},{value:"Janet Hembre"},{value:"Russell Belle"}],this.selectedList3=[{value:"Choose"},{value:"Mitchum Daniel"},{value:"Janet Hembre"},{value:"Russell Belle"}],this.routes=b.J,this.tableData=[],this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.filter=!1,this.isCollapsed=!1,this.selectedList4=[{value:"Choose Name"},{value:"Mitchum Daniel"},{value:"Robert Grossman"},{value:"Janet Hembre"}],this.selectedList5=[{value:"Choose Status"},{value:"Approved"},{value:"Rejected"}],this.time1=new Date,this.time2=new Date,this.time3=new Date,this.time4=new Date,this.showBox=!1,this.data.getDataTable().subscribe(m=>{this.totalData=m.totalData,this.pagination.tablePageSize.subscribe(D=>{this.router.url==this.routes.attendanceAdmin&&(this.getTableData({skip:D.skip,limit:this.totalData}),this.pageSize=D.pageSize)})})}getTableData(a){this.data.getAttendanceAdmin().subscribe(o=>{this.tableData=[],this.serialNumberArray=[],this.totalData=o.totalData,o.data.map((t,l)=>{const i=l+1;l>=a.skip&&i<=a.limit&&(t.sNo=i,this.tableData.push(t),this.serialNumberArray.push(i))}),this.dataSource=new k.I6(this.tableData),this.pagination.calculatePageSize.next({totalData:this.totalData,pageSize:this.pageSize,tableData:this.tableData,serialNumberArray:this.serialNumberArray})})}sortData(a){const o=this.tableData.slice();this.tableData=a.active&&""!==a.direction?o.sort((t,l)=>(t[a.active]<l[a.active]?-1:1)*("asc"===a.direction?1:-1)):o}openFilter(){this.filter=!this.filter}toggleCollapse(){this.sidebar.toggleCollapse(),this.isCollapsed=!this.isCollapsed}toggleTimePicker(a){this.showTimePicker[0]!==a?this.showTimePicker[0]=a:this.showTimePicker=[]}formatTime(a){const o=new Date(a);return this.datePipe.transform(o,"h:mm a")}toggleBox(){this.showBox=!this.showBox}ngOnInit(){this.myDateValue=new Date}onDateChange(a){console.log(a)}selectAll(a){this.tableData.forEach(a?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(f.u),e.rXU(v.m),e.rXU(p.Ix),e.rXU(F.o),e.rXU(h.vh))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-attendance-admin"]],decls:276,vars:54,consts:[[1,"page-header"],[1,"add-item","d-flex"],[1,"page-title"],[1,"table-top-head"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Print"],[1,"feather","icon-printer","feather-rotate-ccw"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Refresh"],[1,"feather","icon-rotate-ccw","feather-rotate-ccw"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Collapse","matTooltip","Collapse","matTooltipPosition","above","id","collapse-header",3,"click"],[1,"feather","icon-chevron-up","feather-chevron-up"],[1,"feather","icon-chevron-down","feather-chevron-down"],[1,"page-btn"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#add-units",1,"btn","btn-added"],[1,"feather","icon-plus-circle","me-2"],[1,"card","table-list-card"],[1,"card-body","pb-0"],[1,"table-top"],[1,"search-set","mb-0"],[1,"search-input"],["href","javascript:void(0);",1,"btn","btn-searchset"],[1,"feather","icon-search","feather-search"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control"],[1,"search-path","d-flex","align-items-center","search-path-new"],[1,"d-flex"],["id","filter_search",1,"btn","btn-filter",3,"click","ngClass"],[1,"feather","icon-filter","filter-icon"],["src","assets/img/icons/closes.svg","alt","img"],[3,"click"],["href","javascript:void(0);",1,"me-3","layout-box"],[1,"feather","icon-layout","feather-search"],[1,"layout-drop-item","card"],[1,"drop-item-head"],[1,"status-toggle","modal-status","d-flex","justify-content-between","align-items-center"],[1,"status-label"],[1,"feather","icon-menu","feather-menu"],["type","checkbox","id","option1","checked","",1,"check"],["for","option1",1,"checktoggle"],["type","checkbox","id","option2","checked","",1,"check"],["for","option2",1,"checktoggle"],["type","checkbox","id","option3","checked","",1,"check"],["for","option3",1,"checktoggle"],["type","checkbox","id","option4","checked","",1,"check"],["for","option4",1,"checktoggle"],["type","checkbox","id","option5","checked","",1,"check"],["for","option5",1,"checktoggle"],["type","checkbox","id","option6","checked","",1,"check"],["for","option6",1,"checktoggle"],["type","checkbox","id","option7","checked","",1,"check"],["for","option7",1,"checktoggle"],["type","checkbox","id","option8","checked","",1,"check"],["for","option8",1,"checktoggle"],["href","javascript:void(0);",1,"btn-grid","active"],[1,"feather","icon-grid","feather-user"],[1,"form-sort"],[1,"feather","icon-sliders","info-img"],["placeholder","Sort by Date",1,"select","space-select",3,"ngModelChange","ngModel","ngModelOptions"],["id","filter_inputs",1,"card",3,"ngClass"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"input-blocks"],[1,"feather","icon-user","info-img"],["placeholder","Choose Name",1,"space-select","select",3,"ngModelChange","ngModel","ngModelOptions"],[1,"feather","icon-stop-circle","info-img"],["placeholder","Choose Status",1,"space-select","select",3,"ngModelChange","ngModel","ngModelOptions"],[1,"col-lg-3","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],[1,"table-responsive"],["matSort","","matSortActive","Sno","matSortDirection","asc","matSortDisableClear","",1,"table","datanew",3,"matSortChange"],[1,"no-sort"],[1,"checkboxs",3,"click"],["type","checkbox","id","select-all",3,"ngModelChange","ngModel"],[1,"checkmarks"],["mat-sort-header","empname"],["mat-sort-header","empid"],["mat-sort-header","date"],["mat-sort-header","shift"],["mat-sort-header","clockin"],["mat-sort-header","production"],["mat-sort-header","overtime"],["mat-sort-header","totalhours"],["mat-sort-header","approval"],["id","add-units",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","custom-modal-two"],[1,"modal-content"],[1,"page-wrapper-new","p-0"],[1,"content"],[1,"modal-header","border-0","custom-modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body","custom-modal-body"],[1,"col-lg-12"],[1,"mb-3"],[1,"form-label"],["placeholder","Choose",1,"select",3,"ngModelChange","ngModel","ngModelOptions"],[1,"col-lg-6"],[1,"form-icon"],["type","text","placeholder","Select",1,"form-control","timepicker",3,"click","value"],[1,"cus-icon"],[1,"feather","icon-clock","feather-clock"],[1,"custom-timepicker",3,"ngModelChange","ngModelOptions","ngModel"],["type","text","placeholder","Select",1,"form-control","timepicker1",3,"click","value"],[1,"modal-footer-btn"],["type","button","data-bs-dismiss","modal",1,"btn","btn-cancel","me-2"],["type","submit",1,"btn","btn-submit"],["id","edit-units",1,"modal","fade"],["type","text","placeholder","09:15 AM",1,"form-control","timepicker3",3,"click","value"],["type","text","placeholder","07:30 PM",1,"form-control","timepicker4",3,"click","value"],["id","delete-units",1,"modal","fade"],[1,"modal-deletecontent"],[1,"feather","icon-x-circle","feather-xcircircle"],[1,"modal-footer-btn","delete"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-cancel","me-2"],[1,"btn","btn-submit",3,"routerLink"],[3,"value"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"userimgname"],["href","javascript:void(0);",1,"product-img"],["alt","product",3,"src"],["href","javascript:void(0);"],[1,"emp-team"],[1,"badges","status-badge"],[1,"action-table-data"],[1,"edit-delete-action"],["href","javascript:void(0);",1,"me-2","p-2"],[1,"feather","icon-eye","feather-eye"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#edit-units",1,"me-2","p-2"],[1,"feather","icon-edit","feather-edit"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete-units",1,"me-0","p-2"],[1,"feather","icon-trash-2","feather-trash-2"]],template:function(o,t){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4"),e.EFF(4,"Attendance"),e.k0s(),e.j41(5,"h6"),e.EFF(6,"Manage your Attendance"),e.k0s()()(),e.j41(7,"ul",3)(8,"li")(9,"a",4),e.nrm(10,"img",5),e.k0s()(),e.j41(11,"li")(12,"a",6),e.nrm(13,"img",7),e.k0s()(),e.j41(14,"li")(15,"a",8),e.nrm(16,"i",9),e.k0s()(),e.j41(17,"li")(18,"a",10),e.nrm(19,"i",11),e.k0s()(),e.j41(20,"li")(21,"a",12),e.bIt("click",function(){return t.toggleCollapse()}),e.DNE(22,w,1,0,"i",13)(23,V,1,0,"i",14),e.k0s()(),e.nrm(24,"li"),e.k0s(),e.j41(25,"div",15)(26,"a",16),e.nrm(27,"i",17),e.EFF(28,"Add New Attendance"),e.k0s()()(),e.j41(29,"div",18)(30,"div",19)(31,"div",20)(32,"div",21)(33,"div",22)(34,"a",23),e.nrm(35,"i",24),e.k0s(),e.j41(36,"div",25)(37,"label"),e.nrm(38,"input",26),e.k0s()()()(),e.j41(39,"div",27)(40,"div",28)(41,"a",29),e.bIt("click",function(){return t.openFilter()}),e.nrm(42,"i",30),e.j41(43,"span"),e.nrm(44,"img",31),e.k0s()(),e.j41(45,"div",32),e.bIt("click",function(){return t.toggleBox()}),e.j41(46,"a",33),e.nrm(47,"i",34),e.k0s(),e.j41(48,"div",35)(49,"div",36)(50,"h5"),e.EFF(51,"Want to manage datatable?"),e.k0s(),e.j41(52,"p"),e.EFF(53," Please drag and drop your column to reorder your table and enable see option as you want. "),e.k0s()(),e.j41(54,"ul")(55,"li")(56,"div",37)(57,"span",38),e.nrm(58,"i",39),e.EFF(59,"Shop"),e.k0s(),e.nrm(60,"input",40)(61,"label",41),e.k0s()(),e.j41(62,"li")(63,"div",37)(64,"span",38),e.nrm(65,"i",39),e.EFF(66,"Product"),e.k0s(),e.nrm(67,"input",42)(68,"label",43),e.k0s()(),e.j41(69,"li")(70,"div",37)(71,"span",38),e.nrm(72,"i",39),e.EFF(73,"Reference No"),e.k0s(),e.nrm(74,"input",44)(75,"label",45),e.k0s()(),e.j41(76,"li")(77,"div",37)(78,"span",38),e.nrm(79,"i",39),e.EFF(80,"Date"),e.k0s(),e.nrm(81,"input",46)(82,"label",47),e.k0s()(),e.j41(83,"li")(84,"div",37)(85,"span",38),e.nrm(86,"i",39),e.EFF(87,"Responsible Person"),e.k0s(),e.nrm(88,"input",48)(89,"label",49),e.k0s()(),e.j41(90,"li")(91,"div",37)(92,"span",38),e.nrm(93,"i",39),e.EFF(94,"Notes"),e.k0s(),e.nrm(95,"input",50)(96,"label",51),e.k0s()(),e.j41(97,"li")(98,"div",37)(99,"span",38),e.nrm(100,"i",39),e.EFF(101,"Quantity"),e.k0s(),e.nrm(102,"input",52)(103,"label",53),e.k0s()(),e.j41(104,"li")(105,"div",37)(106,"span",38),e.nrm(107,"i",39),e.EFF(108,"Actions"),e.k0s(),e.nrm(109,"input",54)(110,"label",55),e.k0s()()()()(),e.j41(111,"a",56),e.nrm(112,"i",57),e.k0s()(),e.j41(113,"div",58),e.nrm(114,"i",59),e.j41(115,"mat-select",60),e.mxI("ngModelChange",function(i){return e.DH7(t.selectedValue1,i)||(t.selectedValue1=i),i}),e.Z7z(116,I,2,2,"mat-option",null,e.fX1),e.k0s()()()(),e.j41(118,"div",61)(119,"div",19)(120,"div",62)(121,"div",63)(122,"div",64),e.nrm(123,"i",65),e.j41(124,"mat-select",66),e.mxI("ngModelChange",function(i){return e.DH7(t.selectedValue2,i)||(t.selectedValue2=i),i}),e.Z7z(125,$,2,2,"mat-option",null,e.fX1),e.k0s()()(),e.j41(127,"div",63)(128,"div",64),e.nrm(129,"i",67),e.j41(130,"mat-select",68),e.mxI("ngModelChange",function(i){return e.DH7(t.selectedValue2,i)||(t.selectedValue2=i),i}),e.Z7z(131,P,2,2,"mat-option",null,e.fX1),e.k0s()()(),e.j41(133,"div",69)(134,"div",64)(135,"a",70),e.nrm(136,"i",24),e.EFF(137," Search "),e.k0s()()()()()(),e.j41(138,"div",71)(139,"table",72),e.bIt("matSortChange",function(i){return t.sortData(i)}),e.j41(140,"thead")(141,"tr")(142,"th",73)(143,"label",74),e.bIt("click",function(){return t.selectAll(t.initChecked)}),e.j41(144,"input",75),e.mxI("ngModelChange",function(i){return e.DH7(t.initChecked,i)||(t.initChecked=i),i}),e.k0s(),e.nrm(145,"span",76),e.k0s()(),e.j41(146,"th",77),e.EFF(147,"Emp Name"),e.k0s(),e.j41(148,"th",78),e.EFF(149,"Emp Id"),e.k0s(),e.j41(150,"th",79),e.EFF(151,"Date"),e.k0s(),e.j41(152,"th",80),e.EFF(153,"Shift"),e.k0s(),e.j41(154,"th",81),e.EFF(155,"Clock In"),e.k0s(),e.j41(156,"th",82),e.EFF(157,"Production"),e.k0s(),e.j41(158,"th",83),e.EFF(159,"Overtime"),e.k0s(),e.j41(160,"th",84),e.EFF(161,"Total Hours"),e.k0s(),e.j41(162,"th",85),e.EFF(163,"Approval"),e.k0s(),e.j41(164,"th",73),e.EFF(165,"Action"),e.k0s()()(),e.j41(166,"tbody"),e.Z7z(167,G,39,11,"tr",null,e.fX1),e.k0s()()(),e.nrm(169,"app-custom-pagination"),e.k0s()(),e.j41(170,"div",86)(171,"div",87)(172,"div",88)(173,"div",89)(174,"div",90)(175,"div",91)(176,"div",2)(177,"h4"),e.EFF(178,"Add Attendance"),e.k0s()(),e.j41(179,"button",92)(180,"span",93),e.EFF(181,"\xd7"),e.k0s()()(),e.j41(182,"div",94)(183,"form")(184,"div",62)(185,"div",95)(186,"div",96)(187,"label",97),e.EFF(188,"Employee Name"),e.k0s(),e.j41(189,"mat-select",98),e.mxI("ngModelChange",function(i){return e.DH7(t.selectedValue2,i)||(t.selectedValue2=i),i}),e.Z7z(190,B,2,2,"mat-option",null,e.fX1),e.k0s()()(),e.j41(192,"div",99)(193,"div",64)(194,"label"),e.EFF(195,"Clock In"),e.k0s(),e.j41(196,"div",100)(197,"input",101),e.bIt("click",function(){return t.toggleTimePicker("time1")}),e.k0s(),e.j41(198,"span",102),e.nrm(199,"i",103),e.j41(200,"timepicker",104),e.mxI("ngModelChange",function(i){return e.DH7(t.time1,i)||(t.time1=i),i}),e.k0s()()()()(),e.j41(201,"div",99)(202,"div",64)(203,"label"),e.EFF(204,"Clock Out"),e.k0s(),e.j41(205,"div",100)(206,"input",105),e.bIt("click",function(){return t.toggleTimePicker("time2")}),e.k0s(),e.j41(207,"span",102),e.nrm(208,"i",103),e.j41(209,"timepicker",104),e.mxI("ngModelChange",function(i){return e.DH7(t.time2,i)||(t.time2=i),i}),e.k0s()()()()()(),e.j41(210,"div",106)(211,"button",107),e.EFF(212," Cancel "),e.k0s(),e.j41(213,"button",108),e.EFF(214,"Submit"),e.k0s()()()()()()()()(),e.j41(215,"div",109)(216,"div",87)(217,"div",88)(218,"div",89)(219,"div",90)(220,"div",91)(221,"div",2)(222,"h4"),e.EFF(223,"Edit Attendance"),e.k0s()(),e.j41(224,"button",92)(225,"span",93),e.EFF(226,"\xd7"),e.k0s()()(),e.j41(227,"div",94)(228,"form")(229,"div",62)(230,"div",95)(231,"div",64)(232,"label"),e.EFF(233,"Employee Name"),e.k0s(),e.j41(234,"mat-select",98),e.mxI("ngModelChange",function(i){return e.DH7(t.selectedValue3,i)||(t.selectedValue3=i),i}),e.Z7z(235,J,2,2,"mat-option",null,e.fX1),e.k0s()()(),e.j41(237,"div",99)(238,"div",64)(239,"label"),e.EFF(240,"Clock In"),e.k0s(),e.j41(241,"div",100)(242,"input",110),e.bIt("click",function(){return t.toggleTimePicker("time3")}),e.k0s(),e.j41(243,"span",102),e.nrm(244,"i",103),e.j41(245,"timepicker",104),e.mxI("ngModelChange",function(i){return e.DH7(t.time3,i)||(t.time3=i),i}),e.k0s()()()()(),e.j41(246,"div",99)(247,"div",64)(248,"label"),e.EFF(249,"Clock Out"),e.k0s(),e.j41(250,"div",100)(251,"input",111),e.bIt("click",function(){return t.toggleTimePicker("time4")}),e.k0s(),e.j41(252,"span",102),e.nrm(253,"i",103),e.j41(254,"timepicker",104),e.mxI("ngModelChange",function(i){return e.DH7(t.time4,i)||(t.time4=i),i}),e.k0s()()()()()(),e.j41(255,"div",106)(256,"button",107),e.EFF(257," Cancel "),e.k0s(),e.j41(258,"button",108),e.EFF(259," Save Changes "),e.k0s()()()()()()()()(),e.j41(260,"div",112)(261,"div",87)(262,"div",88)(263,"div",89)(264,"div",90)(265,"div",113),e.nrm(266,"i",114),e.j41(267,"h4"),e.EFF(268,"Are You Sure?"),e.k0s(),e.j41(269,"p"),e.EFF(270," Do you really want to delete this item, This process cannot be undone. "),e.k0s(),e.j41(271,"div",115)(272,"a",116),e.EFF(273,"Cancel"),e.k0s(),e.j41(274,"a",117),e.EFF(275,"Delete"),e.k0s()()()()()()()()),2&o&&(e.R7$(22),e.vxM(22,t.isCollapsed?-1:22),e.R7$(),e.vxM(23,t.isCollapsed?23:-1),e.R7$(18),e.Y8G("ngClass",e.eq3(40,T,!0===t.filter)),e.R7$(4),e.AVh("layout-hide-box",!t.showBox)("layout-show-box",t.showBox),e.R7$(70),e.R50("ngModel",t.selectedValue1),e.Y8G("ngModelOptions",e.lJ4(42,d)),e.R7$(),e.Dyx(t.selectedList1),e.R7$(2),e.Y8G("ngClass",e.l_i(43,S,t.filter,!t.filter)),e.R7$(6),e.R50("ngModel",t.selectedValue2),e.Y8G("ngModelOptions",e.lJ4(46,d)),e.R7$(),e.Dyx(t.selectedList2),e.R7$(5),e.R50("ngModel",t.selectedValue2),e.Y8G("ngModelOptions",e.lJ4(47,d)),e.R7$(),e.Dyx(t.selectedList2),e.R7$(13),e.R50("ngModel",t.initChecked),e.R7$(23),e.Dyx(t.tableData),e.R7$(22),e.R50("ngModel",t.selectedValue2),e.Y8G("ngModelOptions",e.lJ4(48,d)),e.R7$(),e.Dyx(t.selectedList2),e.R7$(7),e.Y8G("value",t.formatTime(t.time1)),e.R7$(3),e.AVh("d-block","time1"===t.showTimePicker[0]),e.Y8G("ngModelOptions",e.lJ4(49,d)),e.R50("ngModel",t.time1),e.R7$(6),e.Y8G("value",t.formatTime(t.time2)),e.R7$(3),e.AVh("d-block","time2"===t.showTimePicker[0]),e.Y8G("ngModelOptions",e.lJ4(50,d)),e.R50("ngModel",t.time2),e.R7$(25),e.R50("ngModel",t.selectedValue3),e.Y8G("ngModelOptions",e.lJ4(51,d)),e.R7$(),e.Dyx(t.selectedList3),e.R7$(7),e.Y8G("value",t.formatTime(t.time3)),e.R7$(3),e.AVh("d-block","time3"===t.showTimePicker[0]),e.Y8G("ngModelOptions",e.lJ4(52,d)),e.R50("ngModel",t.time3),e.R7$(6),e.Y8G("value",t.formatTime(t.time4)),e.R7$(3),e.AVh("d-block","time4"===t.showTimePicker[0]),e.Y8G("ngModelOptions",e.lJ4(53,d)),e.R50("ngModel",t.time4),e.R7$(20),e.Y8G("routerLink",t.routes.attendanceAdmin))},dependencies:[h.YU,p.Wk,u.B4,u.aE,j.VO,C.wT,r.qT,r.Zm,r.BC,r.cb,r.vS,r.cV,_.B,E.oV,M.nV]})}return n})();var A=c(339);const Y=n=>({setclose:n}),y=()=>({standalone:!0}),O=(n,s)=>({"d-block":n,"d-none":s}),H=(n,s,a)=>({"badge-linesuccess":n,"badges-inactive":s,"badges-inactive-violet":a});function X(n,s){1&n&&e.nrm(0,"i",7)}function z(n,s){1&n&&e.nrm(0,"i",8)}function x(n,s){if(1&n&&(e.j41(0,"mat-option",101),e.EFF(1),e.k0s()),2&n){const a=s.$implicit;e.Y8G("value",a.value),e.R7$(),e.SpI(" ",a.value," ")}}function L(n,s){if(1&n&&(e.j41(0,"mat-option",101),e.EFF(1),e.k0s()),2&n){const a=s.$implicit;e.Y8G("value",a.value),e.R7$(),e.SpI(" ",a.value," ")}}function U(n,s){if(1&n){const a=e.RV6();e.j41(0,"tr")(1,"td")(2,"label",90),e.bIt("click",function(){e.eBV(a);const t=e.XpG();return e.Njj(t.selectAll(t.initChecked))}),e.j41(3,"input",102),e.mxI("ngModelChange",function(t){e.eBV(a);const l=e.XpG();return e.DH7(l.initChecked,t)||(l.initChecked=t),e.Njj(t)}),e.k0s(),e.nrm(4,"span",92),e.k0s()(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.k0s(),e.j41(11,"td"),e.EFF(12),e.k0s(),e.j41(13,"td"),e.EFF(14),e.k0s(),e.j41(15,"td"),e.EFF(16),e.k0s(),e.j41(17,"td")(18,"div",103),e.nrm(19,"div",104)(20,"div",105)(21,"div",106),e.k0s()(),e.j41(22,"td")(23,"span",107),e.EFF(24),e.k0s()(),e.j41(25,"td"),e.EFF(26),e.k0s()()}if(2&n){const a=s.$implicit,o=e.XpG();e.R7$(3),e.R50("ngModel",o.initChecked),e.R7$(3),e.JRh(a.date),e.R7$(2),e.JRh(a.clockIn),e.R7$(2),e.JRh(a.clockOut),e.R7$(2),e.JRh(a.production),e.R7$(2),e.JRh(a.break),e.R7$(2),e.JRh(a.overTime),e.R7$(7),e.Y8G("ngClass",e.sMw(10,H,"Present"===a.status,"Absent"===a.status,"Holiday"===a.status)),e.R7$(),e.JRh(a.status),e.R7$(2),e.JRh(a.totalHours)}}const Z=[{path:"",component:R,children:[{path:"attendance-admin",component:N},{path:"attendance-employee",component:(()=>{class n{constructor(a,o,t,l){this.data=a,this.pagination=o,this.router=t,this.sidebar=l,this.initChecked=!1,this.selectedValue1="",this.selectedValue2="",this.selectedList1=[{value:"Sort by Datee"},{value:"Newest"},{value:"Oldest"}],this.selectedList2=[{value:"Choose Status"},{value:"Present"},{value:"Absent"},{value:"Holiday"}],this.routes=b.J,this.tableData=[],this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.filter=!1,this.isCollapsed=!1,this.showBox=!1,this.data.getDataTable().subscribe(i=>{this.totalData=i.totalData,this.pagination.tablePageSize.subscribe(m=>{this.router.url==this.routes.attendanceEmployee&&(this.getTableData({skip:m.skip,limit:this.totalData}),this.pageSize=m.pageSize)})})}getTableData(a){this.data.getAttendanceEmployee().subscribe(o=>{this.tableData=[],this.serialNumberArray=[],this.totalData=o.totalData,o.data.map((t,l)=>{const i=l+1;l>=a.skip&&i<=a.limit&&(t.sNo=i,this.tableData.push(t),this.serialNumberArray.push(i))}),this.dataSource=new k.I6(this.tableData),this.pagination.calculatePageSize.next({totalData:this.totalData,pageSize:this.pageSize,tableData:this.tableData,serialNumberArray:this.serialNumberArray})})}sortData(a){const o=this.tableData.slice();this.tableData=a.active&&""!==a.direction?o.sort((t,l)=>(t[a.active]<l[a.active]?-1:1)*("asc"===a.direction?1:-1)):o}openFilter(){this.filter=!this.filter}toggleCollapse(){this.sidebar.toggleCollapse(),this.isCollapsed=!this.isCollapsed}toggleBox(){this.showBox=!this.showBox}selectAll(a){this.tableData.forEach(a?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(f.u),e.rXU(v.m),e.rXU(p.Ix),e.rXU(F.o))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-attendance-employee"]],decls:231,vars:20,consts:[[1,"attendance-header"],[1,"attendance-content"],["src","./assets/img/icons/hand01.svg","alt","img",1,"hand-img"],[1,"table-top-head","employe"],["data-bs-toggle","tooltip","data-bs-placement","top","matTooltip","Refresh","matTooltipPosition","above","title","Refresh"],[1,"feather","icon-rotate-ccw","feather-rotate-ccw"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Collapse","matTooltip","Collapse","matTooltipPosition","above","id","collapse-header",3,"click"],[1,"feather","icon-chevron-up","feather-chevron-up"],[1,"feather","icon-chevron-down","feather-chevron-down"],[1,"attendance-widget"],[1,"row"],[1,"col-xl-4","col-lg-12","col-md-4","d-flex"],[1,"card","w-100"],[1,"card-body"],[1,"card","attendance"],["src","./assets/img/icons/time-big.svg","alt","time-img"],[1,"modal-attendance-btn","flex-column","flex-lg-row"],["href","javascript:void(0);",1,"btn","btn-submit","w-100"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-cancel","me-2","w-100"],[1,"col-xl-8","col-lg-12","col-md-8","d-flex"],[1,"widget-attend"],[1,"box-attend"],[1,"warming-card"],[1,"danger-card"],[1,"light-card"],[1,"success-card"],[1,"page-header"],[1,"add-item","d-flex"],[1,"page-title"],[1,"table-top-head"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Pdf","matTooltip","Pdf","matTooltipPosition","above"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Excel","matTooltip","Excel","matTooltipPosition","above"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Print","matTooltip","Print","matTooltipPosition","above"],[1,"feather","icon-printer","feather-rotate-ccw"],[1,"card","table-list-card"],[1,"card-body","pb-0"],[1,"table-top"],[1,"input-blocks","search-set","mb-0"],[1,"search-input"],["href","javascript:void(0);",1,"btn","btn-searchset"],[1,"feather","icon-search","feather-search"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control"],[1,"search-path"],[1,"d-flex","align-items-center"],["id","filter_search",1,"btn","btn-filter",3,"click","ngClass"],[1,"feather","icon-filter","filter-icon"],["src","assets/img/icons/closes.svg","alt","img"],[3,"click"],["href","javascript:void(0);",1,"me-3","layout-box"],[1,"feather","icon-layout","feather-search"],[1,"layout-drop-item","card"],[1,"drop-item-head"],[1,"status-toggle","modal-status","d-flex","justify-content-between","align-items-center"],[1,"status-label"],[1,"feather","icon-menu","feather-menu"],["type","checkbox","id","option1","checked","",1,"check"],["for","option1",1,"checktoggle"],["type","checkbox","id","option2","checked","",1,"check"],["for","option2",1,"checktoggle"],["type","checkbox","id","option3","checked","",1,"check"],["for","option3",1,"checktoggle"],["type","checkbox","id","option4","checked","",1,"check"],["for","option4",1,"checktoggle"],["type","checkbox","id","option5","checked","",1,"check"],["for","option5",1,"checktoggle"],["type","checkbox","id","option6","checked","",1,"check"],["for","option6",1,"checktoggle"],["type","checkbox","id","option7","checked","",1,"check"],["for","option7",1,"checktoggle"],["type","checkbox","id","option8","checked","",1,"check"],["for","option8",1,"checktoggle"],[1,"form-sort"],[1,"feather","icon-sliders","info-img"],["placeholder","Sort by Date",1,"select","space-select",3,"ngModelChange","ngModel","ngModelOptions"],["id","filter_inputs",1,"card",3,"ngClass"],[1,"col-lg-4","col-sm-6","col-12"],[1,"input-blocks"],[1,"feather","icon-calendar","info-img"],[1,"input-groupicon"],["type","text","bsDatepicker","","container",".date-input2","placeholder","Choose Date",1,"datetimepicker"],[1,"feather","icon-stop-circle","info-img"],["placeholder","Choose Status",1,"space-select","select",3,"ngModelChange","ngModel","ngModelOptions"],[1,"col-lg-4","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],[1,"table-responsive"],["matSort","","matSortActive","Sno","matSortDirection","asc","matSortDisableClear","",1,"table","datanew",3,"matSortChange"],[1,"no-sort"],[1,"checkboxs",3,"click"],["type","checkbox","id","select-all",3,"ngModelChange","ngModel"],[1,"checkmarks"],["mat-sort-header","date"],["mat-sort-header","clockin"],["mat-sort-header","clockout"],["mat-sort-header","production"],["mat-sort-header","break"],["mat-sort-header","overtime"],["mat-sort-header","progress"],["mat-sort-header","status"],[3,"value"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"progress","attendance"],["role","progressbar",1,"progress-bar","progress-bar-success",2,"width","78%"],["role","progressbar",1,"progress-bar","progress-bar-warning",2,"width","55%"],["role","progressbar",1,"progress-bar","progress-bar-danger",2,"width","15%"],[3,"ngClass"]],template:function(o,t){1&o&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"img",2),e.j41(3,"h3"),e.EFF(4,"Good Morning, "),e.j41(5,"span"),e.EFF(6,"Franco Glovasa"),e.k0s()()(),e.j41(7,"div")(8,"ul",3)(9,"li")(10,"a",4),e.nrm(11,"i",5),e.k0s()(),e.j41(12,"li")(13,"a",6),e.bIt("click",function(){return t.toggleCollapse()}),e.DNE(14,X,1,0,"i",7)(15,z,1,0,"i",8),e.k0s()()()()(),e.j41(16,"div",9)(17,"div",10)(18,"div",11)(19,"div",12)(20,"div",13)(21,"h5"),e.EFF(22,"Attendance"),e.j41(23,"span"),e.EFF(24,"22 Aug 2023"),e.k0s()(),e.j41(25,"div",14)(26,"div"),e.nrm(27,"img",15),e.k0s(),e.j41(28,"div")(29,"h2"),e.EFF(30,"05:45:22"),e.k0s(),e.j41(31,"p"),e.EFF(32,"Current Time"),e.k0s()()(),e.j41(33,"div",16)(34,"a",17),e.EFF(35,"Clock Out"),e.k0s(),e.j41(36,"a",18),e.EFF(37,"Break"),e.k0s()()()()(),e.j41(38,"div",19)(39,"div",12)(40,"div",13)(41,"h5"),e.EFF(42,"Days Overview This Month"),e.k0s(),e.j41(43,"ul",20)(44,"li",21)(45,"div",22)(46,"h4"),e.EFF(47,"31"),e.k0s(),e.j41(48,"h6"),e.EFF(49,"Total Working Days"),e.k0s()()(),e.j41(50,"li",21)(51,"div",23)(52,"h4"),e.EFF(53,"05"),e.k0s(),e.j41(54,"h6"),e.EFF(55,"Abesent Days"),e.k0s()()(),e.j41(56,"li",21)(57,"div",24)(58,"h4"),e.EFF(59,"28"),e.k0s(),e.j41(60,"h6"),e.EFF(61,"Present Days"),e.k0s()()(),e.j41(62,"li",21)(63,"div",22)(64,"h4"),e.EFF(65,"02"),e.k0s(),e.j41(66,"h6"),e.EFF(67,"Half Days"),e.k0s()()(),e.j41(68,"li",21)(69,"div",22)(70,"h4"),e.EFF(71,"01"),e.k0s(),e.j41(72,"h6"),e.EFF(73,"Late Days"),e.k0s()()(),e.j41(74,"li",21)(75,"div",25)(76,"h4"),e.EFF(77,"02"),e.k0s(),e.j41(78,"h6"),e.EFF(79,"Holidays"),e.k0s()()()()()()()()(),e.j41(80,"div",26)(81,"div",27)(82,"div",28)(83,"h4"),e.EFF(84,"Attendance"),e.k0s()()(),e.j41(85,"ul",29)(86,"li")(87,"a",30),e.nrm(88,"img",31),e.k0s()(),e.j41(89,"li")(90,"a",32),e.nrm(91,"img",33),e.k0s()(),e.j41(92,"li")(93,"a",34),e.nrm(94,"i",35),e.k0s()()()(),e.j41(95,"div",36)(96,"div",37)(97,"div",38)(98,"div",39)(99,"div",40)(100,"a",41),e.nrm(101,"i",42),e.k0s(),e.j41(102,"div",43)(103,"label"),e.nrm(104,"input",44),e.k0s()()()(),e.j41(105,"div",45)(106,"div",46)(107,"a",47),e.bIt("click",function(){return t.openFilter()}),e.nrm(108,"i",48),e.j41(109,"span"),e.nrm(110,"img",49),e.k0s()(),e.j41(111,"div",50),e.bIt("click",function(){return t.toggleBox()}),e.j41(112,"a",51),e.nrm(113,"i",52),e.k0s(),e.j41(114,"div",53)(115,"div",54)(116,"h5"),e.EFF(117,"Want to manage datatable?"),e.k0s(),e.j41(118,"p"),e.EFF(119," Please drag and drop your column to reorder your table and enable see option as you want. "),e.k0s()(),e.j41(120,"ul")(121,"li")(122,"div",55)(123,"span",56),e.nrm(124,"i",57),e.EFF(125,"Shop"),e.k0s(),e.nrm(126,"input",58)(127,"label",59),e.k0s()(),e.j41(128,"li")(129,"div",55)(130,"span",56),e.nrm(131,"i",57),e.EFF(132,"Product"),e.k0s(),e.nrm(133,"input",60)(134,"label",61),e.k0s()(),e.j41(135,"li")(136,"div",55)(137,"span",56),e.nrm(138,"i",57),e.EFF(139,"Reference No"),e.k0s(),e.nrm(140,"input",62)(141,"label",63),e.k0s()(),e.j41(142,"li")(143,"div",55)(144,"span",56),e.nrm(145,"i",57),e.EFF(146,"Date"),e.k0s(),e.nrm(147,"input",64)(148,"label",65),e.k0s()(),e.j41(149,"li")(150,"div",55)(151,"span",56),e.nrm(152,"i",57),e.EFF(153,"Responsible Person"),e.k0s(),e.nrm(154,"input",66)(155,"label",67),e.k0s()(),e.j41(156,"li")(157,"div",55)(158,"span",56),e.nrm(159,"i",57),e.EFF(160,"Notes"),e.k0s(),e.nrm(161,"input",68)(162,"label",69),e.k0s()(),e.j41(163,"li")(164,"div",55)(165,"span",56),e.nrm(166,"i",57),e.EFF(167,"Quantity"),e.k0s(),e.nrm(168,"input",70)(169,"label",71),e.k0s()(),e.j41(170,"li")(171,"div",55)(172,"span",56),e.nrm(173,"i",57),e.EFF(174,"Actions"),e.k0s(),e.nrm(175,"input",72)(176,"label",73),e.k0s()()()()()()(),e.j41(177,"div",74),e.nrm(178,"i",75),e.j41(179,"mat-select",76),e.mxI("ngModelChange",function(i){return e.DH7(t.selectedValue1,i)||(t.selectedValue1=i),i}),e.Z7z(180,x,2,2,"mat-option",null,e.fX1),e.k0s()()(),e.j41(182,"div",77)(183,"div",37)(184,"div",10)(185,"div",78)(186,"div",79),e.nrm(187,"i",80),e.j41(188,"div",81),e.nrm(189,"input",82),e.k0s()()(),e.j41(190,"div",78)(191,"div",79),e.nrm(192,"i",83),e.j41(193,"mat-select",84),e.mxI("ngModelChange",function(i){return e.DH7(t.selectedValue2,i)||(t.selectedValue2=i),i}),e.Z7z(194,L,2,2,"mat-option",null,e.fX1),e.k0s()()(),e.j41(196,"div",85)(197,"div",79)(198,"a",86),e.nrm(199,"i",42),e.EFF(200," Search "),e.k0s()()()()()(),e.j41(201,"div",87)(202,"table",88),e.bIt("matSortChange",function(i){return t.sortData(i)}),e.j41(203,"thead")(204,"tr")(205,"th",89)(206,"label",90),e.bIt("click",function(){return t.selectAll(t.initChecked)}),e.j41(207,"input",91),e.mxI("ngModelChange",function(i){return e.DH7(t.initChecked,i)||(t.initChecked=i),i}),e.k0s(),e.nrm(208,"span",92),e.k0s()(),e.j41(209,"th",93),e.EFF(210,"Date"),e.k0s(),e.j41(211,"th",94),e.EFF(212,"Clock In"),e.k0s(),e.j41(213,"th",95),e.EFF(214,"Clock Out"),e.k0s(),e.j41(215,"th",96),e.EFF(216,"Production"),e.k0s(),e.j41(217,"th",97),e.EFF(218,"Break"),e.k0s(),e.j41(219,"th",98),e.EFF(220,"Overtime"),e.k0s(),e.j41(221,"th",99),e.EFF(222,"Progress"),e.k0s(),e.j41(223,"th",100),e.EFF(224,"Status"),e.k0s(),e.j41(225,"th"),e.EFF(226,"Total Hours"),e.k0s()()(),e.j41(227,"tbody"),e.Z7z(228,U,27,14,"tr",null,e.fX1),e.k0s()()(),e.nrm(230,"app-custom-pagination"),e.k0s()()),2&o&&(e.R7$(14),e.vxM(14,t.isCollapsed?-1:14),e.R7$(),e.vxM(15,t.isCollapsed?15:-1),e.R7$(92),e.Y8G("ngClass",e.eq3(13,Y,!0===t.filter)),e.R7$(4),e.AVh("layout-hide-box",!t.showBox)("layout-show-box",t.showBox),e.R7$(68),e.R50("ngModel",t.selectedValue1),e.Y8G("ngModelOptions",e.lJ4(15,y)),e.R7$(),e.Dyx(t.selectedList1),e.R7$(2),e.Y8G("ngClass",e.l_i(16,O,t.filter,!t.filter)),e.R7$(11),e.R50("ngModel",t.selectedValue2),e.Y8G("ngModelOptions",e.lJ4(19,y)),e.R7$(),e.Dyx(t.selectedList2),e.R7$(13),e.R50("ngModel",t.initChecked),e.R7$(21),e.Dyx(t.tableData))},dependencies:[h.YU,u.B4,u.aE,j.VO,C.wT,r.Zm,r.BC,r.vS,_.B,E.oV,A.pc,A.p0]})}return n})()}]}];let W=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.$C({type:n});static#a=this.\u0275inj=e.G2t({imports:[p.iI.forChild(Z),p.iI]})}return n})();var Q=c(3994);let K=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.$C({type:n});static#a=this.\u0275inj=e.G2t({imports:[h.MD,W,Q.E]})}return n})()}}]);