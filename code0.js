gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects3= [];
gdjs.Main_32MenuCode.GDMenuTitleObjects1= [];
gdjs.Main_32MenuCode.GDMenuTitleObjects2= [];
gdjs.Main_32MenuCode.GDMenuTitleObjects3= [];
gdjs.Main_32MenuCode.GDBackGroundObjects1= [];
gdjs.Main_32MenuCode.GDBackGroundObjects2= [];
gdjs.Main_32MenuCode.GDBackGroundObjects3= [];
gdjs.Main_32MenuCode.GDSelectCarButtonObjects1= [];
gdjs.Main_32MenuCode.GDSelectCarButtonObjects2= [];
gdjs.Main_32MenuCode.GDSelectCarButtonObjects3= [];
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1= [];
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects2= [];
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects3= [];
gdjs.Main_32MenuCode.GDConnectWalletObjects1= [];
gdjs.Main_32MenuCode.GDConnectWalletObjects2= [];
gdjs.Main_32MenuCode.GDConnectWalletObjects3= [];
gdjs.Main_32MenuCode.GDDisconectWalletObjects1= [];
gdjs.Main_32MenuCode.GDDisconectWalletObjects2= [];
gdjs.Main_32MenuCode.GDDisconectWalletObjects3= [];
gdjs.Main_32MenuCode.GDTonWalletObjects1= [];
gdjs.Main_32MenuCode.GDTonWalletObjects2= [];
gdjs.Main_32MenuCode.GDTonWalletObjects3= [];
gdjs.Main_32MenuCode.GDSuiWalletObjects1= [];
gdjs.Main_32MenuCode.GDSuiWalletObjects2= [];
gdjs.Main_32MenuCode.GDSuiWalletObjects3= [];
gdjs.Main_32MenuCode.GDRed_9595CarObjects1= [];
gdjs.Main_32MenuCode.GDRed_9595CarObjects2= [];
gdjs.Main_32MenuCode.GDRed_9595CarObjects3= [];
gdjs.Main_32MenuCode.GDBlue_9595CarObjects1= [];
gdjs.Main_32MenuCode.GDBlue_9595CarObjects2= [];
gdjs.Main_32MenuCode.GDBlue_9595CarObjects3= [];
gdjs.Main_32MenuCode.GDGreen_9595CarObjects1= [];
gdjs.Main_32MenuCode.GDGreen_9595CarObjects2= [];
gdjs.Main_32MenuCode.GDGreen_9595CarObjects3= [];
gdjs.Main_32MenuCode.GDCatObjects1= [];
gdjs.Main_32MenuCode.GDCatObjects2= [];
gdjs.Main_32MenuCode.GDCatObjects3= [];


gdjs.Main_32MenuCode.userFunc0xad7280 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
if(tonConnectUI.connected)
{
    let rawAddress = tonConnectUI.account.address;
    const address = new TonWeb.utils.Address(rawAddress);
    const nonBounceableAddress = address.toString(true, true, false, false);
    runtimeScene.getGame().getVariables().get("WalletAddress").setString(nonBounceableAddress);
}

};
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 0));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "5bf6889c0b81a767e32df186cf8b43e85b322048528a39cdc33512c30b5336e5_26 - super scary cave dragon.aac", 1, false, 50, 1);
}}

}


{


gdjs.Main_32MenuCode.userFunc0xad7280(runtimeScene);

}


};gdjs.Main_32MenuCode.userFunc0xad75e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
tonConnectUI.connectWallet().then(wallet => {
    let rawAddress = wallet.account.address;
    const address = new TonWeb.utils.Address(rawAddress);
    console.log(address.toString(true, true, false, false));
    const nonBounceableAddress = address.toString(true, true, false, false);
    runtimeScene.getGame().getVariables().get("WalletAddress").setString(nonBounceableAddress);
    let object = runtimeScene.getObjects("DisconectWallet")[0];
    object.getVariables().get("Hide").setBoolean(false);
});
};
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0xad75e0(runtimeScene);

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Playing", false);
}}

}


};gdjs.Main_32MenuCode.userFunc0x9a8660 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
tonConnectUI.disconnect().then(()=>{
    runtimeScene.getGame().getVariables().get("WalletAddress").setString("empty");
    let object = runtimeScene.getObjects("DisconectWallet")[0];
    object.getVariables().get("Hide").setBoolean(true);
    object.hide(true);
});
};
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0x9a8660(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) != "empty";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuiWallet"), gdjs.Main_32MenuCode.GDSuiWalletObjects2);
gdjs.copyArray(runtimeScene.getObjects("TonWallet"), gdjs.Main_32MenuCode.GDTonWalletObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDTonWalletObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTonWalletObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSuiWalletObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSuiWalletObjects2[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getFirstVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


};gdjs.Main_32MenuCode.asyncCallback15058348 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getFirstVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sui_api");
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://connect-wallet-web.vercel.app/api/address", "", "GET", "application/json", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback15058348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);
gdjs.copyArray(runtimeScene.getObjects("SuiWallet"), gdjs.Main_32MenuCode.GDSuiWalletObjects1);
gdjs.copyArray(runtimeScene.getObjects("TonWallet"), gdjs.Main_32MenuCode.GDTonWalletObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSuiWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSuiWalletObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDTonWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTonWalletObjects1[i].hide();
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9590188);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SelectCarButton"), gdjs.Main_32MenuCode.GDSelectCarButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSelectCarButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSelectCarButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSelectCarButtonObjects1[k] = gdjs.Main_32MenuCode.GDSelectCarButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSelectCarButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15111252);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select Car Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderBoardButton"), gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1[k] = gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9149772);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeaderBoard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10268540);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDDisconectWalletObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].returnVariable(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8931700);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDDisconectWalletObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].returnVariable(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("empty");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariableNumber(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0)) == 1) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDDisconectWalletObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariableNumber(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0)) == 0) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDDisconectWalletObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ConnectWallet"), gdjs.Main_32MenuCode.GDConnectWalletObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDConnectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDConnectWalletObjects1[i].SetLabelText(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), 0, 6) + "..." + gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2))) - 3, 3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ConnectWallet"), gdjs.Main_32MenuCode.GDConnectWalletObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDConnectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDConnectWalletObjects1[i].SetLabelText("Connect Wallet", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectWallet"), gdjs.Main_32MenuCode.GDConnectWalletObjects1);
gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDConnectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDConnectWalletObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDConnectWalletObjects1[k] = gdjs.Main_32MenuCode.GDConnectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDConnectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariableBoolean(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15057508);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SuiWallet"), gdjs.Main_32MenuCode.GDSuiWalletObjects1);
gdjs.copyArray(runtimeScene.getObjects("TonWallet"), gdjs.Main_32MenuCode.GDTonWalletObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTonWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTonWalletObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSuiWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSuiWalletObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);
gdjs.copyArray(runtimeScene.getObjects("SuiWallet"), gdjs.Main_32MenuCode.GDSuiWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSuiWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSuiWalletObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSuiWalletObjects1[k] = gdjs.Main_32MenuCode.GDSuiWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSuiWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariableBoolean(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15073124);
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://connect-wallet-web.vercel.app/", runtimeScene);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sui_api");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectWallet"), gdjs.Main_32MenuCode.GDConnectWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDConnectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDConnectWalletObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDConnectWalletObjects1[k] = gdjs.Main_32MenuCode.GDConnectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDConnectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15052052);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DisconectWallet"), gdjs.Main_32MenuCode.GDDisconectWalletObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].returnVariable(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0))) + 1, 2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sui_api") >= 0.5;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDMenuTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDMenuTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDMenuTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDSelectCarButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDSelectCarButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSelectCarButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLeaderBoardButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDConnectWalletObjects1.length = 0;
gdjs.Main_32MenuCode.GDConnectWalletObjects2.length = 0;
gdjs.Main_32MenuCode.GDConnectWalletObjects3.length = 0;
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = 0;
gdjs.Main_32MenuCode.GDDisconectWalletObjects2.length = 0;
gdjs.Main_32MenuCode.GDDisconectWalletObjects3.length = 0;
gdjs.Main_32MenuCode.GDTonWalletObjects1.length = 0;
gdjs.Main_32MenuCode.GDTonWalletObjects2.length = 0;
gdjs.Main_32MenuCode.GDTonWalletObjects3.length = 0;
gdjs.Main_32MenuCode.GDSuiWalletObjects1.length = 0;
gdjs.Main_32MenuCode.GDSuiWalletObjects2.length = 0;
gdjs.Main_32MenuCode.GDSuiWalletObjects3.length = 0;
gdjs.Main_32MenuCode.GDRed_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDRed_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDRed_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlue_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlue_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlue_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDGreen_9595CarObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreen_9595CarObjects2.length = 0;
gdjs.Main_32MenuCode.GDGreen_9595CarObjects3.length = 0;
gdjs.Main_32MenuCode.GDCatObjects1.length = 0;
gdjs.Main_32MenuCode.GDCatObjects2.length = 0;
gdjs.Main_32MenuCode.GDCatObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList6(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
