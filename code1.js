gdjs.PlayingCode = {};
gdjs.PlayingCode.GDWalkSideObjects1= [];
gdjs.PlayingCode.GDWalkSideObjects2= [];
gdjs.PlayingCode.GDWalkSideObjects3= [];
gdjs.PlayingCode.GDWalkSideObjects4= [];
gdjs.PlayingCode.GDUpRoadTileObjects1= [];
gdjs.PlayingCode.GDUpRoadTileObjects2= [];
gdjs.PlayingCode.GDUpRoadTileObjects3= [];
gdjs.PlayingCode.GDUpRoadTileObjects4= [];
gdjs.PlayingCode.GDCarSpawnerObjects1= [];
gdjs.PlayingCode.GDCarSpawnerObjects2= [];
gdjs.PlayingCode.GDCarSpawnerObjects3= [];
gdjs.PlayingCode.GDCarSpawnerObjects4= [];
gdjs.PlayingCode.GDGreyCarObjects1= [];
gdjs.PlayingCode.GDGreyCarObjects2= [];
gdjs.PlayingCode.GDGreyCarObjects3= [];
gdjs.PlayingCode.GDGreyCarObjects4= [];
gdjs.PlayingCode.GDDownObjects1= [];
gdjs.PlayingCode.GDDownObjects2= [];
gdjs.PlayingCode.GDDownObjects3= [];
gdjs.PlayingCode.GDDownObjects4= [];
gdjs.PlayingCode.GDUpObjects1= [];
gdjs.PlayingCode.GDUpObjects2= [];
gdjs.PlayingCode.GDUpObjects3= [];
gdjs.PlayingCode.GDUpObjects4= [];
gdjs.PlayingCode.GDSpeedObjects1= [];
gdjs.PlayingCode.GDSpeedObjects2= [];
gdjs.PlayingCode.GDSpeedObjects3= [];
gdjs.PlayingCode.GDSpeedObjects4= [];
gdjs.PlayingCode.GDDistanceObjects1= [];
gdjs.PlayingCode.GDDistanceObjects2= [];
gdjs.PlayingCode.GDDistanceObjects3= [];
gdjs.PlayingCode.GDDistanceObjects4= [];
gdjs.PlayingCode.GDBottomRoadTileObjects1= [];
gdjs.PlayingCode.GDBottomRoadTileObjects2= [];
gdjs.PlayingCode.GDBottomRoadTileObjects3= [];
gdjs.PlayingCode.GDBottomRoadTileObjects4= [];
gdjs.PlayingCode.GDHitBoxObjects1= [];
gdjs.PlayingCode.GDHitBoxObjects2= [];
gdjs.PlayingCode.GDHitBoxObjects3= [];
gdjs.PlayingCode.GDHitBoxObjects4= [];
gdjs.PlayingCode.GDBackGroundObjects1= [];
gdjs.PlayingCode.GDBackGroundObjects2= [];
gdjs.PlayingCode.GDBackGroundObjects3= [];
gdjs.PlayingCode.GDBackGroundObjects4= [];
gdjs.PlayingCode.GDNewSpriteObjects1= [];
gdjs.PlayingCode.GDNewSpriteObjects2= [];
gdjs.PlayingCode.GDNewSpriteObjects3= [];
gdjs.PlayingCode.GDNewSpriteObjects4= [];
gdjs.PlayingCode.GDBannerObjects1= [];
gdjs.PlayingCode.GDBannerObjects2= [];
gdjs.PlayingCode.GDBannerObjects3= [];
gdjs.PlayingCode.GDBannerObjects4= [];
gdjs.PlayingCode.GDBackGround_95952Objects1= [];
gdjs.PlayingCode.GDBackGround_95952Objects2= [];
gdjs.PlayingCode.GDBackGround_95952Objects3= [];
gdjs.PlayingCode.GDBackGround_95952Objects4= [];
gdjs.PlayingCode.GDBackGround_95953Objects1= [];
gdjs.PlayingCode.GDBackGround_95953Objects2= [];
gdjs.PlayingCode.GDBackGround_95953Objects3= [];
gdjs.PlayingCode.GDBackGround_95953Objects4= [];
gdjs.PlayingCode.GDRed_9595CarObjects1= [];
gdjs.PlayingCode.GDRed_9595CarObjects2= [];
gdjs.PlayingCode.GDRed_9595CarObjects3= [];
gdjs.PlayingCode.GDRed_9595CarObjects4= [];
gdjs.PlayingCode.GDBlue_9595CarObjects1= [];
gdjs.PlayingCode.GDBlue_9595CarObjects2= [];
gdjs.PlayingCode.GDBlue_9595CarObjects3= [];
gdjs.PlayingCode.GDBlue_9595CarObjects4= [];
gdjs.PlayingCode.GDGreen_9595CarObjects1= [];
gdjs.PlayingCode.GDGreen_9595CarObjects2= [];
gdjs.PlayingCode.GDGreen_9595CarObjects3= [];
gdjs.PlayingCode.GDGreen_9595CarObjects4= [];
gdjs.PlayingCode.GDCatObjects1= [];
gdjs.PlayingCode.GDCatObjects2= [];
gdjs.PlayingCode.GDCatObjects3= [];
gdjs.PlayingCode.GDCatObjects4= [];


gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDRed_95959595CarObjects2Objects = Hashtable.newFrom({"Red_Car": gdjs.PlayingCode.GDRed_9595CarObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDBlue_95959595CarObjects2Objects = Hashtable.newFrom({"Blue_Car": gdjs.PlayingCode.GDBlue_9595CarObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreen_95959595CarObjects1Objects = Hashtable.newFrom({"Green_Car": gdjs.PlayingCode.GDGreen_9595CarObjects1});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDCatObjects1Objects = Hashtable.newFrom({"Cat": gdjs.PlayingCode.GDCatObjects1});
gdjs.PlayingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.PlayingCode.GDRed_9595CarObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDRed_95959595CarObjects2Objects, 0, 335, "");
}{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Resizable").setSize(141, 72);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").addVariableTween3("Speed", gdjs.PlayingCode.GDRed_9595CarObjects2[i].getVariables().getFromIndex(0), 1000, "linear", 10, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDBlue_95959595CarObjects2Objects, 0, 335, "");
}{for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Resizable").setSize(141, 72);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").addVariableTween3("Speed", gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getVariables().getFromIndex(0), 1000, "linear", 10, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.PlayingCode.GDCatObjects1.length = 0;

gdjs.PlayingCode.GDGreen_9595CarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreen_95959595CarObjects1Objects, 0, 335, "");
}{for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getBehavior("Resizable").setSize(141, 72);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDCatObjects1Objects, (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("Cat")), (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointY("Cat")), "");
}{for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getBehavior("Tween").addVariableTween3("Speed", gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getVariables().getFromIndex(0), 1000, "linear", 10, false);
}
}}

}


};gdjs.PlayingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.PlayingCode.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround_2"), gdjs.PlayingCode.GDBackGround_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround_3"), gdjs.PlayingCode.GDBackGround_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Banner"), gdjs.PlayingCode.GDBannerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.PlayingCode.GDBlue_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomRoadTile"), gdjs.PlayingCode.GDBottomRoadTileObjects1);
gdjs.copyArray(runtimeScene.getObjects("CarSpawner"), gdjs.PlayingCode.GDCarSpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.PlayingCode.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.PlayingCode.GDGreen_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.PlayingCode.GDRed_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpRoadTile"), gdjs.PlayingCode.GDUpRoadTileObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkSide"), gdjs.PlayingCode.GDWalkSideObjects1);
{for(var i = 0, len = gdjs.PlayingCode.GDUpRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDUpRoadTileObjects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDWalkSideObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDWalkSideObjects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBottomRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBottomRoadTileObjects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getWidth()) * 2);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDUpRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDUpRoadTileObjects1[i].setXOffset((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDWalkSideObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDWalkSideObjects1[i].setXOffset((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBottomRoadTileObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBottomRoadTileObjects1[i].setXOffset((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) * 2);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGroundObjects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBannerObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBannerObjects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getWidth()) * 2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) - (( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getWidth()) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getWidth()) * 2);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGroundObjects1[i].setXOffset((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) * 0.2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBannerObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBannerObjects1[i].setXOffset((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) * 0.2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects1[i].setXOffset((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) * 0.2);
}
for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects1[i].setXOffset((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) * 0.2);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCarSpawnerObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCarSpawnerObjects1[i].setX((( gdjs.PlayingCode.GDUpRoadTileObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDUpRoadTileObjects1[0].getAABBRight()));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects1[i].setZOrder((gdjs.PlayingCode.GDRed_9595CarObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects1[i].setZOrder((gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects1[i].setZOrder((gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].setZOrder((gdjs.PlayingCode.GDCatObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].setX((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("Cat")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("Cat")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("Cat")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].setY((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointY("Cat")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointY("Cat")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointY("Cat")));
}
}}

}


};gdjs.PlayingCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.PlayingCode.GDBlue_9595CarObjects1, gdjs.PlayingCode.GDBlue_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDGreen_9595CarObjects1, gdjs.PlayingCode.GDGreen_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDRed_9595CarObjects1, gdjs.PlayingCode.GDRed_9595CarObjects2);

{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayingCode.GDRed_9595CarObjects2[i].getVariables().get("CarSpeed"))), 0, 0);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getVariables().get("CarSpeed"))), 0, 0);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getVariables().get("CarSpeed"))), 0, 0);
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBlue_9595CarObjects1, gdjs.PlayingCode.GDBlue_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDGreen_9595CarObjects1, gdjs.PlayingCode.GDGreen_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDRed_9595CarObjects1, gdjs.PlayingCode.GDRed_9595CarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBlue_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDGreen_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDRed_9595CarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Animation").setAnimationName("Moving");
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Animation").setAnimationName("Moving");
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Animation").setAnimationName("Moving");
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBlue_9595CarObjects1, gdjs.PlayingCode.GDBlue_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDGreen_9595CarObjects1, gdjs.PlayingCode.GDGreen_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDRed_9595CarObjects1, gdjs.PlayingCode.GDRed_9595CarObjects2);

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.PlayingCode.GDUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDUpObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDUpObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDUpObjects2[k] = gdjs.PlayingCode.GDUpObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDUpObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDRed_9595CarObjects2[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBlue_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDGreen_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDRed_9595CarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDRed_9595CarObjects2[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBlue_9595CarObjects1, gdjs.PlayingCode.GDBlue_9595CarObjects2);

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.PlayingCode.GDDownObjects2);
gdjs.copyArray(gdjs.PlayingCode.GDGreen_9595CarObjects1, gdjs.PlayingCode.GDGreen_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDRed_9595CarObjects1, gdjs.PlayingCode.GDRed_9595CarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDDownObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDDownObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDDownObjects2[k] = gdjs.PlayingCode.GDDownObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDDownObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDRed_9595CarObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBlue_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDGreen_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDRed_9595CarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDRed_9595CarObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
}}

}


{

gdjs.copyArray(gdjs.PlayingCode.GDBlue_9595CarObjects1, gdjs.PlayingCode.GDBlue_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDGreen_9595CarObjects1, gdjs.PlayingCode.GDGreen_9595CarObjects2);

gdjs.copyArray(gdjs.PlayingCode.GDRed_9595CarObjects1, gdjs.PlayingCode.GDRed_9595CarObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDRed_9595CarObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getY() < 500 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBlue_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDGreen_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDRed_9595CarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDRed_9595CarObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getPointY("")) + 128, "easeInOutQuad", 0.4, false);
}
}}

}


{

/* Reuse gdjs.PlayingCode.GDBlue_9595CarObjects1 */
/* Reuse gdjs.PlayingCode.GDGreen_9595CarObjects1 */
/* Reuse gdjs.PlayingCode.GDRed_9595CarObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDRed_9595CarObjects1[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects1[k] = gdjs.PlayingCode.GDRed_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects1[k] = gdjs.PlayingCode.GDBlue_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getY() > 220 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects1[k] = gdjs.PlayingCode.GDGreen_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDRed_9595CarObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects1[k] = gdjs.PlayingCode.GDRed_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects1[k] = gdjs.PlayingCode.GDBlue_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects1[k] = gdjs.PlayingCode.GDGreen_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBlue_9595CarObjects1 */
/* Reuse gdjs.PlayingCode.GDGreen_9595CarObjects1 */
/* Reuse gdjs.PlayingCode.GDRed_9595CarObjects1 */
{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDRed_9595CarObjects1[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Move", (gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getPointY("")) - 128, "easeInOutQuad", 0.4, false);
}
}}

}


};gdjs.PlayingCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.PlayingCode.GDBlue_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.PlayingCode.GDGreen_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.PlayingCode.GDRed_9595CarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDRed_9595CarObjects1[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects1[k] = gdjs.PlayingCode.GDRed_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects1[k] = gdjs.PlayingCode.GDBlue_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects1[k] = gdjs.PlayingCode.GDGreen_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlayingCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDCarSpawnerObjects2Objects = Hashtable.newFrom({"CarSpawner": gdjs.PlayingCode.GDCarSpawnerObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CarSpawning");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.PlayingCode.GDBlue_9595CarObjects2);
gdjs.copyArray(runtimeScene.getObjects("CarSpawner"), gdjs.PlayingCode.GDCarSpawnerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.PlayingCode.GDGreen_9595CarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.PlayingCode.GDRed_9595CarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDCarSpawnerObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CarSpawning") > (600 / (gdjs.RuntimeObject.getVariableNumber(((gdjs.PlayingCode.GDGreen_9595CarObjects2.length === 0 ) ? ((gdjs.PlayingCode.GDBlue_9595CarObjects2.length === 0 ) ? ((gdjs.PlayingCode.GDRed_9595CarObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PlayingCode.GDRed_9595CarObjects2[0].getVariables()) : gdjs.PlayingCode.GDBlue_9595CarObjects2[0].getVariables()) : gdjs.PlayingCode.GDGreen_9595CarObjects2[0].getVariables()).get("CarSpeed"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDCarSpawnerObjects2 */
gdjs.PlayingCode.GDGreyCarObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, (( gdjs.PlayingCode.GDCarSpawnerObjects2.length === 0 ) ? 0 :gdjs.PlayingCode.GDCarSpawnerObjects2[0].getPointX("")), (( gdjs.PlayingCode.GDCarSpawnerObjects2.length === 0 ) ? 0 :gdjs.PlayingCode.GDCarSpawnerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Resizable").setSize(141, 71);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].setZOrder((gdjs.PlayingCode.GDGreyCarObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].addForce(gdjs.randomInRange(100, 500), 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CarSpawning");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpRoadTile"), gdjs.PlayingCode.GDUpRoadTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreyCarObjects1[i].getX() < (( gdjs.PlayingCode.GDUpRoadTileObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDUpRoadTileObjects1[0].getX()) - 200 ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects1[k] = gdjs.PlayingCode.GDGreyCarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDGreyCarObjects1 */
{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDRed_95959595CarObjects2ObjectsGDgdjs_9546PlayingCode_9546GDBlue_95959595CarObjects2ObjectsGDgdjs_9546PlayingCode_9546GDGreen_95959595CarObjects2Objects = Hashtable.newFrom({"Red_Car": gdjs.PlayingCode.GDRed_9595CarObjects2, "Blue_Car": gdjs.PlayingCode.GDBlue_9595CarObjects2, "Green_Car": gdjs.PlayingCode.GDGreen_9595CarObjects2});
gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects = Hashtable.newFrom({"GreyCar": gdjs.PlayingCode.GDGreyCarObjects2});
gdjs.PlayingCode.asyncCallback14107892 = function (runtimeScene, asyncObjectsList) {
}
gdjs.PlayingCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://api.inz-dev.esollabs.com/v1/dragon-game/point/point", "{\"public_address\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) + "\", \"point\":" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 10)) + "}", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.PlayingCode.asyncCallback14107892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayingCode.asyncCallback14108268 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}
gdjs.PlayingCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PlayingCode.asyncCallback14108268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PlayingCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14107340);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlayingCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.PlayingCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.PlayingCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDGreyCarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDGreyCarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.PlayingCode.GDBlue_9595CarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.PlayingCode.GDGreen_9595CarObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreyCar"), gdjs.PlayingCode.GDGreyCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.PlayingCode.GDRed_9595CarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDRed_95959595CarObjects2ObjectsGDgdjs_9546PlayingCode_9546GDBlue_95959595CarObjects2ObjectsGDgdjs_9546PlayingCode_9546GDGreen_95959595CarObjects2Objects, gdjs.PlayingCode.mapOfGDgdjs_9546PlayingCode_9546GDGreyCarObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects2[k] = gdjs.PlayingCode.GDRed_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects2[k] = gdjs.PlayingCode.GDBlue_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects2[k] = gdjs.PlayingCode.GDGreen_9595CarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreyCarObjects2.length;i<l;++i) {
    if ( !(gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").getAnimationName() == "Death") ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreyCarObjects2[k] = gdjs.PlayingCode.GDGreyCarObjects2[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreyCarObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PlayingCode.GDBlue_9595CarObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.PlayingCode.GDCatObjects2);
/* Reuse gdjs.PlayingCode.GDGreen_9595CarObjects2 */
/* Reuse gdjs.PlayingCode.GDGreyCarObjects2 */
/* Reuse gdjs.PlayingCode.GDRed_9595CarObjects2 */
{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].returnVariable(gdjs.PlayingCode.GDRed_9595CarObjects2[i].getVariables().get("CarSpeed")).setNumber(0);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].returnVariable(gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getVariables().get("CarSpeed")).setNumber(0);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].returnVariable(gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getVariables().get("CarSpeed")).setNumber(0);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayingCode.GDGreyCarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreyCarObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").stopTween("Speed", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").stopTween("Speed", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").stopTween("Speed", false);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDRed_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDRed_9595CarObjects2[i].getBehavior("Tween").stopTween("Move", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDBlue_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBlue_9595CarObjects2[i].getBehavior("Tween").stopTween("Move", false);
}
for(var i = 0, len = gdjs.PlayingCode.GDGreen_9595CarObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDGreen_9595CarObjects2[i].getBehavior("Tween").stopTween("Move", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.PlayingCode.GDBlue_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.PlayingCode.GDGreen_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.PlayingCode.GDRed_9595CarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDRed_9595CarObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects1[k] = gdjs.PlayingCode.GDRed_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects1[k] = gdjs.PlayingCode.GDBlue_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects1[k] = gdjs.PlayingCode.GDGreen_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDRed_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDRed_9595CarObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDRed_9595CarObjects1[k] = gdjs.PlayingCode.GDRed_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDRed_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDBlue_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDBlue_9595CarObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDBlue_9595CarObjects1[k] = gdjs.PlayingCode.GDBlue_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDBlue_9595CarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PlayingCode.GDGreen_9595CarObjects1.length;i<l;++i) {
    if ( gdjs.PlayingCode.GDGreen_9595CarObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.PlayingCode.GDGreen_9595CarObjects1[k] = gdjs.PlayingCode.GDGreen_9595CarObjects1[i];
        ++k;
    }
}
gdjs.PlayingCode.GDGreen_9595CarObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PlayingCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.PlayingCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Blue_Car"), gdjs.PlayingCode.GDBlue_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Distance"), gdjs.PlayingCode.GDDistanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Green_Car"), gdjs.PlayingCode.GDGreen_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red_Car"), gdjs.PlayingCode.GDRed_9595CarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.PlayingCode.GDSpeedObjects1);
{for(var i = 0, len = gdjs.PlayingCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDSpeedObjects1[i].getBehavior("Text").setText("Speed: " + gdjs.evtTools.common.toString(Math.round(((gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? ((gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? ((gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PlayingCode.GDRed_9595CarObjects1[0].getVariables()) : gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getVariables()) : gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getVariables()).get("CarSpeed").getAsNumber())));
}
}{for(var i = 0, len = gdjs.PlayingCode.GDDistanceObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDDistanceObjects1[i].getBehavior("Text").setText("Distance: " + gdjs.evtTools.common.toString(Math.round((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) / 100)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.PlayingCode.GDGreen_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDBlue_9595CarObjects1.length === 0 ) ? (( gdjs.PlayingCode.GDRed_9595CarObjects1.length === 0 ) ? 0 :gdjs.PlayingCode.GDRed_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDBlue_9595CarObjects1[0].getPointX("")) :gdjs.PlayingCode.GDGreen_9595CarObjects1[0].getPointX("")) / 100);
}}

}


};gdjs.PlayingCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}}

}


};gdjs.PlayingCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 100 * runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.debuggerTools.log(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))), "info", "");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}
{ //Subevents
gdjs.PlayingCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.PlayingCode.GDBackGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("BackGround_3"), gdjs.PlayingCode.GDBackGround_95953Objects2);
{for(var i = 0, len = gdjs.PlayingCode.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("ShowBG1", 255, "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects2[i].getBehavior("Tween").addObjectOpacityTween2("HideBG3", 0, "linear", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.PlayingCode.GDBackGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("BackGround_2"), gdjs.PlayingCode.GDBackGround_95952Objects2);
{for(var i = 0, len = gdjs.PlayingCode.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("HideBG1", 0, "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects2[i].getBehavior("Tween").addObjectOpacityTween2("ShowBG2", 255, "linear", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackGround_2"), gdjs.PlayingCode.GDBackGround_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("BackGround_3"), gdjs.PlayingCode.GDBackGround_95953Objects2);
{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects2[i].getBehavior("Tween").addObjectOpacityTween2("HideBG2", 0, "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects2[i].getBehavior("Tween").addObjectOpacityTween2("ShowBG3", 255, "linear", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.PlayingCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackGround_2"), gdjs.PlayingCode.GDBackGround_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround_3"), gdjs.PlayingCode.GDBackGround_95953Objects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "71;88;111");
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95952Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95952Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDBackGround_95953Objects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDBackGround_95953Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.PlayingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.PlayingCode.eventsList1(runtimeScene);
}


{


gdjs.PlayingCode.eventsList3(runtimeScene);
}


{


gdjs.PlayingCode.eventsList4(runtimeScene);
}


{


gdjs.PlayingCode.eventsList8(runtimeScene);
}


{


gdjs.PlayingCode.eventsList9(runtimeScene);
}


{


gdjs.PlayingCode.eventsList11(runtimeScene);
}


};

gdjs.PlayingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayingCode.GDWalkSideObjects1.length = 0;
gdjs.PlayingCode.GDWalkSideObjects2.length = 0;
gdjs.PlayingCode.GDWalkSideObjects3.length = 0;
gdjs.PlayingCode.GDWalkSideObjects4.length = 0;
gdjs.PlayingCode.GDUpRoadTileObjects1.length = 0;
gdjs.PlayingCode.GDUpRoadTileObjects2.length = 0;
gdjs.PlayingCode.GDUpRoadTileObjects3.length = 0;
gdjs.PlayingCode.GDUpRoadTileObjects4.length = 0;
gdjs.PlayingCode.GDCarSpawnerObjects1.length = 0;
gdjs.PlayingCode.GDCarSpawnerObjects2.length = 0;
gdjs.PlayingCode.GDCarSpawnerObjects3.length = 0;
gdjs.PlayingCode.GDCarSpawnerObjects4.length = 0;
gdjs.PlayingCode.GDGreyCarObjects1.length = 0;
gdjs.PlayingCode.GDGreyCarObjects2.length = 0;
gdjs.PlayingCode.GDGreyCarObjects3.length = 0;
gdjs.PlayingCode.GDGreyCarObjects4.length = 0;
gdjs.PlayingCode.GDDownObjects1.length = 0;
gdjs.PlayingCode.GDDownObjects2.length = 0;
gdjs.PlayingCode.GDDownObjects3.length = 0;
gdjs.PlayingCode.GDDownObjects4.length = 0;
gdjs.PlayingCode.GDUpObjects1.length = 0;
gdjs.PlayingCode.GDUpObjects2.length = 0;
gdjs.PlayingCode.GDUpObjects3.length = 0;
gdjs.PlayingCode.GDUpObjects4.length = 0;
gdjs.PlayingCode.GDSpeedObjects1.length = 0;
gdjs.PlayingCode.GDSpeedObjects2.length = 0;
gdjs.PlayingCode.GDSpeedObjects3.length = 0;
gdjs.PlayingCode.GDSpeedObjects4.length = 0;
gdjs.PlayingCode.GDDistanceObjects1.length = 0;
gdjs.PlayingCode.GDDistanceObjects2.length = 0;
gdjs.PlayingCode.GDDistanceObjects3.length = 0;
gdjs.PlayingCode.GDDistanceObjects4.length = 0;
gdjs.PlayingCode.GDBottomRoadTileObjects1.length = 0;
gdjs.PlayingCode.GDBottomRoadTileObjects2.length = 0;
gdjs.PlayingCode.GDBottomRoadTileObjects3.length = 0;
gdjs.PlayingCode.GDBottomRoadTileObjects4.length = 0;
gdjs.PlayingCode.GDHitBoxObjects1.length = 0;
gdjs.PlayingCode.GDHitBoxObjects2.length = 0;
gdjs.PlayingCode.GDHitBoxObjects3.length = 0;
gdjs.PlayingCode.GDHitBoxObjects4.length = 0;
gdjs.PlayingCode.GDBackGroundObjects1.length = 0;
gdjs.PlayingCode.GDBackGroundObjects2.length = 0;
gdjs.PlayingCode.GDBackGroundObjects3.length = 0;
gdjs.PlayingCode.GDBackGroundObjects4.length = 0;
gdjs.PlayingCode.GDNewSpriteObjects1.length = 0;
gdjs.PlayingCode.GDNewSpriteObjects2.length = 0;
gdjs.PlayingCode.GDNewSpriteObjects3.length = 0;
gdjs.PlayingCode.GDNewSpriteObjects4.length = 0;
gdjs.PlayingCode.GDBannerObjects1.length = 0;
gdjs.PlayingCode.GDBannerObjects2.length = 0;
gdjs.PlayingCode.GDBannerObjects3.length = 0;
gdjs.PlayingCode.GDBannerObjects4.length = 0;
gdjs.PlayingCode.GDBackGround_95952Objects1.length = 0;
gdjs.PlayingCode.GDBackGround_95952Objects2.length = 0;
gdjs.PlayingCode.GDBackGround_95952Objects3.length = 0;
gdjs.PlayingCode.GDBackGround_95952Objects4.length = 0;
gdjs.PlayingCode.GDBackGround_95953Objects1.length = 0;
gdjs.PlayingCode.GDBackGround_95953Objects2.length = 0;
gdjs.PlayingCode.GDBackGround_95953Objects3.length = 0;
gdjs.PlayingCode.GDBackGround_95953Objects4.length = 0;
gdjs.PlayingCode.GDRed_9595CarObjects1.length = 0;
gdjs.PlayingCode.GDRed_9595CarObjects2.length = 0;
gdjs.PlayingCode.GDRed_9595CarObjects3.length = 0;
gdjs.PlayingCode.GDRed_9595CarObjects4.length = 0;
gdjs.PlayingCode.GDBlue_9595CarObjects1.length = 0;
gdjs.PlayingCode.GDBlue_9595CarObjects2.length = 0;
gdjs.PlayingCode.GDBlue_9595CarObjects3.length = 0;
gdjs.PlayingCode.GDBlue_9595CarObjects4.length = 0;
gdjs.PlayingCode.GDGreen_9595CarObjects1.length = 0;
gdjs.PlayingCode.GDGreen_9595CarObjects2.length = 0;
gdjs.PlayingCode.GDGreen_9595CarObjects3.length = 0;
gdjs.PlayingCode.GDGreen_9595CarObjects4.length = 0;
gdjs.PlayingCode.GDCatObjects1.length = 0;
gdjs.PlayingCode.GDCatObjects2.length = 0;
gdjs.PlayingCode.GDCatObjects3.length = 0;
gdjs.PlayingCode.GDCatObjects4.length = 0;

gdjs.PlayingCode.eventsList12(runtimeScene);

return;

}

gdjs['PlayingCode'] = gdjs.PlayingCode;
