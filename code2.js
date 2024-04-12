gdjs.Select_32Car_32MenuCode = {};
gdjs.Select_32Car_32MenuCode.GDMenuObjects1= [];
gdjs.Select_32Car_32MenuCode.GDMenuObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBlueCarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBlueCarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDRedCarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDRedCarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDSelectorObjects1= [];
gdjs.Select_32Car_32MenuCode.GDSelectorObjects2= [];
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1= [];
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects2= [];
gdjs.Select_32Car_32MenuCode.GDGreenCarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDGreenCarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects1= [];
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects2= [];
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects2= [];
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1= [];
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects2= [];
gdjs.Select_32Car_32MenuCode.GDCatObjects1= [];
gdjs.Select_32Car_32MenuCode.GDCatObjects2= [];


gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDSelectorObjects1Objects = Hashtable.newFrom({"Selector": gdjs.Select_32Car_32MenuCode.GDSelectorObjects1});
gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDRed_95959595CarObjects1Objects = Hashtable.newFrom({"Red_Car": gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1});
gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDBlue_95959595CarObjects1Objects = Hashtable.newFrom({"Blue_Car": gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1});
gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDGreen_95959595CarObjects1Objects = Hashtable.newFrom({"Green_Car": gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1});
gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1});
gdjs.Select_32Car_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("CenterPoint"), gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1);
gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1[i].activateBehavior("SmoothCamera", false);
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1[i].activateBehavior("SmoothCamera", false);
}
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1[i].activateBehavior("SmoothCamera", false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1.length !== 0 ? gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDSelectorObjects1Objects, (( gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1[0].getCenterXInScene()), (( gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].setZOrder(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDRed_95959595CarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15126412);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Select_32Car_32MenuCode.GDSelectorObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Selection", (( gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1[0].getCenterXInScene()), "easeInOutQuart", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDBlue_95959595CarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15127788);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Select_32Car_32MenuCode.GDSelectorObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Selection", (( gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1.length === 0 ) ? 0 :gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1[0].getCenterXInScene()), "easeInOutQuart", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDGreen_95959595CarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15127988);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.Select_32Car_32MenuCode.GDSelectorObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Select_32Car_32MenuCode.GDSelectorObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Selection", (( gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1.length === 0 ) ? 0 :gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1[0].getCenterXInScene()), "easeInOutQuart", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32Car_32MenuCode.mapOfGDgdjs_9546Select_959532Car_959532MenuCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15130468);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Main Menu");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Select_32Car_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Select_32Car_32MenuCode.GDMenuObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDMenuObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBlueCarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBlueCarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDRedCarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDRedCarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDSelectorObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDSelectorObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDCenterPointObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDGreenCarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDGreenCarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackgroundMountain1Objects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBackButtonObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDRed_9595CarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDBlue_9595CarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDGreen_9595CarObjects2.length = 0;
gdjs.Select_32Car_32MenuCode.GDCatObjects1.length = 0;
gdjs.Select_32Car_32MenuCode.GDCatObjects2.length = 0;

gdjs.Select_32Car_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Select_32Car_32MenuCode'] = gdjs.Select_32Car_32MenuCode;
