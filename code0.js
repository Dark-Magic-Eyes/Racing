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


gdjs.Main_32MenuCode.userFunc0xf21458 = function GDJSInlineCode(runtimeScene) {
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


gdjs.Main_32MenuCode.userFunc0xf21458(runtimeScene);

}


};gdjs.Main_32MenuCode.userFunc0xd2ec10 = function GDJSInlineCode(runtimeScene) {
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


gdjs.Main_32MenuCode.userFunc0xd2ec10(runtimeScene);

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


};gdjs.Main_32MenuCode.userFunc0x1100e78 = function GDJSInlineCode(runtimeScene) {
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


gdjs.Main_32MenuCode.userFunc0x1100e78(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Main_32MenuCode.userFunc0x855dc0 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
tonConnectUI.connectWallet().then(wallet => {
    let rawAddress = wallet.account.address;
    const address = new TonWeb.utils.Address(rawAddress);
    const nonBounceableAddress = address.toString(true, true, false, false);
    runtimeScene.getGame().getVariables().get("WalletAddress").setString(nonBounceableAddress);
    let object = runtimeScene.getObjects("DisconectWallet")[0];
    object.getVariables().get("Hide").setBoolean(false);
})
};
gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0x855dc0(runtimeScene);

}


};gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

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
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].hide();
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9759916);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10368556);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13195124);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15480868);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9114436);
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

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
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "empty");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariableBoolean(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(1), false) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDDisconectWalletObjects1[k] = gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14990180);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDDisconectWalletObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].returnVariable(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.Main_32MenuCode.GDDisconectWalletObjects1[i].getVariables().getFromIndex(0))) + 1, 2));
}
}{gdjs.evtTools.debuggerTools.log(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32MenuCode.GDDisconectWalletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32MenuCode.GDDisconectWalletObjects1[0].getVariables()).getFromIndex(0)))), "info", "");
}}

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

gdjs.Main_32MenuCode.eventsList5(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
