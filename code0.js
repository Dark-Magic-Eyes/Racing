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


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readStringFromJSONFile("Wallet", "Address", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


};gdjs.Main_32MenuCode.userFunc0x8669d0 = function GDJSInlineCode(runtimeScene) {
"use strict";
tonConnectUI.connectWallet().then(wallet => {
    let rawAddress = wallet.account.address;
    const address = new TonWeb.utils.Address(rawAddress);
    console.log(address.toString(true, true, false, false));
    const nonBounceableAddress = address.toString(true, true, false, false);
    runtimeScene.getGame().getVariables().get("WalletAddress").setString(nonBounceableAddress);
});
};
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0x8669d0(runtimeScene);

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "0";
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
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "0");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Playing", false);
}}

}


};gdjs.Main_32MenuCode.userFunc0x865e58 = function GDJSInlineCode(runtimeScene) {
"use strict";
tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://t.me/MechaCat_bot/Cat_Race'
};
console.log("Hello: " + runtimeScene.getGame().getVariables().get("WalletAddress"));
tonConnectUI.disconnect().then(()=>{
    tonConnectUI.connectWallet().then(wallet => {
        let rawAddress = wallet.account.address;
        const address = new TonWeb.utils.Address(rawAddress);
        console.log(address.toString(true, true, false, false));
        const nonBounceableAddress = address.toString(true, true, false, false);
        runtimeScene.getGame().getVariables().get("WalletAddress").setString(nonBounceableAddress);
    });
})

};
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0x865e58(runtimeScene);

}


};gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

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
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeaderBoard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectWallet"), gdjs.Main_32MenuCode.GDConnectWalletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDConnectWalletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDConnectWalletObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDConnectWalletObjects1[k] = gdjs.Main_32MenuCode.GDConnectWalletObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDConnectWalletObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "0";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "0");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "undefined");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ConnectWallet"), gdjs.Main_32MenuCode.GDConnectWalletObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDConnectWalletObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDConnectWalletObjects1[i].SetLabelText(gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), 0, 6) + "..." + gdjs.evtTools.string.subStr(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2))) - 3, 3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.storage.writeStringInJSONFile("Wallet", "Address", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
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

gdjs.Main_32MenuCode.eventsList4(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
