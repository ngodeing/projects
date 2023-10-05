gdjs.FinishCode = {};
gdjs.FinishCode.GDBaselayerOkinesObjects1= [];
gdjs.FinishCode.GDBaselayerOkinesObjects2= [];
gdjs.FinishCode.GDDemoplayerObjects1= [];
gdjs.FinishCode.GDDemoplayerObjects2= [];
gdjs.FinishCode.GDDemoplayer2Objects1= [];
gdjs.FinishCode.GDDemoplayer2Objects2= [];
gdjs.FinishCode.GDBaselayerVortexObjects1= [];
gdjs.FinishCode.GDBaselayerVortexObjects2= [];
gdjs.FinishCode.GDBaselayerVortexGambar2Objects1= [];
gdjs.FinishCode.GDBaselayerVortexGambar2Objects2= [];
gdjs.FinishCode.GDBaselayerVortexGambar1Objects1= [];
gdjs.FinishCode.GDBaselayerVortexGambar1Objects2= [];
gdjs.FinishCode.GDBaselayerVortexGambar3Objects1= [];
gdjs.FinishCode.GDBaselayerVortexGambar3Objects2= [];
gdjs.FinishCode.GDWelcomeObjects1= [];
gdjs.FinishCode.GDWelcomeObjects2= [];
gdjs.FinishCode.GDDeleteEnemyObjects1= [];
gdjs.FinishCode.GDDeleteEnemyObjects2= [];
gdjs.FinishCode.GDStartquestionBegintextObjects1= [];
gdjs.FinishCode.GDStartquestionBegintextObjects2= [];
gdjs.FinishCode.GDInterfaceHeartbarObjects1= [];
gdjs.FinishCode.GDInterfaceHeartbarObjects2= [];
gdjs.FinishCode.GDBaselayerDoorObjects1= [];
gdjs.FinishCode.GDBaselayerDoorObjects2= [];
gdjs.FinishCode.GDMetalRedBarObjects1= [];
gdjs.FinishCode.GDMetalRedBarObjects2= [];
gdjs.FinishCode.GDMetalRedBar2Objects1= [];
gdjs.FinishCode.GDMetalRedBar2Objects2= [];
gdjs.FinishCode.GDNewBBTextObjects1= [];
gdjs.FinishCode.GDNewBBTextObjects2= [];
gdjs.FinishCode.GDNamaPlayer1Objects1= [];
gdjs.FinishCode.GDNamaPlayer1Objects2= [];
gdjs.FinishCode.GDNamaPlayer2Objects1= [];
gdjs.FinishCode.GDNamaPlayer2Objects2= [];
gdjs.FinishCode.GDNamaPlayer3Objects1= [];
gdjs.FinishCode.GDNamaPlayer3Objects2= [];
gdjs.FinishCode.GDNamaPlayer4Objects1= [];
gdjs.FinishCode.GDNamaPlayer4Objects2= [];
gdjs.FinishCode.GDNamaPlayer5Objects1= [];
gdjs.FinishCode.GDNamaPlayer5Objects2= [];
gdjs.FinishCode.GDNamaPlayer6Objects1= [];
gdjs.FinishCode.GDNamaPlayer6Objects2= [];
gdjs.FinishCode.GDNamaPlayer7Objects1= [];
gdjs.FinishCode.GDNamaPlayer7Objects2= [];
gdjs.FinishCode.GDScoreValueObjects1= [];
gdjs.FinishCode.GDScoreValueObjects2= [];
gdjs.FinishCode.GDScoreValue1Objects1= [];
gdjs.FinishCode.GDScoreValue1Objects2= [];
gdjs.FinishCode.GDScoreValue2Objects1= [];
gdjs.FinishCode.GDScoreValue2Objects2= [];
gdjs.FinishCode.GDScoreValue3Objects1= [];
gdjs.FinishCode.GDScoreValue3Objects2= [];
gdjs.FinishCode.GDScoreValue4Objects1= [];
gdjs.FinishCode.GDScoreValue4Objects2= [];
gdjs.FinishCode.GDScoreValue5Objects1= [];
gdjs.FinishCode.GDScoreValue5Objects2= [];
gdjs.FinishCode.GDScoreValue6Objects1= [];
gdjs.FinishCode.GDScoreValue6Objects2= [];
gdjs.FinishCode.GDScoreValue7Objects1= [];
gdjs.FinishCode.GDScoreValue7Objects2= [];
gdjs.FinishCode.GDAObjects1= [];
gdjs.FinishCode.GDAObjects2= [];
gdjs.FinishCode.GDBObjects1= [];
gdjs.FinishCode.GDBObjects2= [];
gdjs.FinishCode.GDNextButtonObjects1= [];
gdjs.FinishCode.GDNextButtonObjects2= [];
gdjs.FinishCode.GDBackButtonObjects1= [];
gdjs.FinishCode.GDBackButtonObjects2= [];
gdjs.FinishCode.GDCObjects1= [];
gdjs.FinishCode.GDCObjects2= [];
gdjs.FinishCode.GDDObjects1= [];
gdjs.FinishCode.GDDObjects2= [];
gdjs.FinishCode.GDTitle1Objects1= [];
gdjs.FinishCode.GDTitle1Objects2= [];
gdjs.FinishCode.GDTitle2Objects1= [];
gdjs.FinishCode.GDTitle2Objects2= [];
gdjs.FinishCode.GDQuestionObjects1= [];
gdjs.FinishCode.GDQuestionObjects2= [];
gdjs.FinishCode.GDNewTextObjects1= [];
gdjs.FinishCode.GDNewTextObjects2= [];
gdjs.FinishCode.GDLeaderboardObjects1= [];
gdjs.FinishCode.GDLeaderboardObjects2= [];
gdjs.FinishCode.GDNextPlayerObjects1= [];
gdjs.FinishCode.GDNextPlayerObjects2= [];


gdjs.FinishCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)) == 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextPlayer"), gdjs.FinishCode.GDNextPlayerObjects1);
{for(var i = 0, len = gdjs.FinishCode.GDNextPlayerObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDNextPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.FinishCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreValue"), gdjs.FinishCode.GDScoreValueObjects1);
{for(var i = 0, len = gdjs.FinishCode.GDScoreValueObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDScoreValueObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}}

}


};gdjs.FinishCode.eventsList2 = function(runtimeScene) {

{


gdjs.FinishCode.eventsList0(runtimeScene);
}


{


gdjs.FinishCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dramatic-flute-140505.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextPlayer"), gdjs.FinishCode.GDNextPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinishCode.GDNextPlayerObjects1.length;i<l;++i) {
    if ( gdjs.FinishCode.GDNextPlayerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinishCode.GDNextPlayerObjects1[k] = gdjs.FinishCode.GDNextPlayerObjects1[i];
        ++k;
    }
}
gdjs.FinishCode.GDNextPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BaselayerOkines"), gdjs.FinishCode.GDBaselayerOkinesObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(5);
}{for(var i = 0, len = gdjs.FinishCode.GDBaselayerOkinesObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDBaselayerOkinesObjects1[i].getBehavior("Health").SetHealth(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(300);
}{runtimeScene.getGame().getVariables().getFromIndex(18).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(3).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(4).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(5).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(6).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(7).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(8).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(9).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(10).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(11).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(12).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(13).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(14).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(15).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(16).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(17).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(18).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(19).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(20).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(21).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(22).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(23).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(24).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(25).getChild("isAnswered"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(26).getChild("isAnswered"), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.FinishCode.GDLeaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinishCode.GDLeaderboardObjects1.length;i<l;++i) {
    if ( gdjs.FinishCode.GDLeaderboardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FinishCode.GDLeaderboardObjects1[k] = gdjs.FinishCode.GDLeaderboardObjects1[i];
        ++k;
    }
}
gdjs.FinishCode.GDLeaderboardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Password Check", false);
}}

}


};

gdjs.FinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinishCode.GDBaselayerOkinesObjects1.length = 0;
gdjs.FinishCode.GDBaselayerOkinesObjects2.length = 0;
gdjs.FinishCode.GDDemoplayerObjects1.length = 0;
gdjs.FinishCode.GDDemoplayerObjects2.length = 0;
gdjs.FinishCode.GDDemoplayer2Objects1.length = 0;
gdjs.FinishCode.GDDemoplayer2Objects2.length = 0;
gdjs.FinishCode.GDBaselayerVortexObjects1.length = 0;
gdjs.FinishCode.GDBaselayerVortexObjects2.length = 0;
gdjs.FinishCode.GDBaselayerVortexGambar2Objects1.length = 0;
gdjs.FinishCode.GDBaselayerVortexGambar2Objects2.length = 0;
gdjs.FinishCode.GDBaselayerVortexGambar1Objects1.length = 0;
gdjs.FinishCode.GDBaselayerVortexGambar1Objects2.length = 0;
gdjs.FinishCode.GDBaselayerVortexGambar3Objects1.length = 0;
gdjs.FinishCode.GDBaselayerVortexGambar3Objects2.length = 0;
gdjs.FinishCode.GDWelcomeObjects1.length = 0;
gdjs.FinishCode.GDWelcomeObjects2.length = 0;
gdjs.FinishCode.GDDeleteEnemyObjects1.length = 0;
gdjs.FinishCode.GDDeleteEnemyObjects2.length = 0;
gdjs.FinishCode.GDStartquestionBegintextObjects1.length = 0;
gdjs.FinishCode.GDStartquestionBegintextObjects2.length = 0;
gdjs.FinishCode.GDInterfaceHeartbarObjects1.length = 0;
gdjs.FinishCode.GDInterfaceHeartbarObjects2.length = 0;
gdjs.FinishCode.GDBaselayerDoorObjects1.length = 0;
gdjs.FinishCode.GDBaselayerDoorObjects2.length = 0;
gdjs.FinishCode.GDMetalRedBarObjects1.length = 0;
gdjs.FinishCode.GDMetalRedBarObjects2.length = 0;
gdjs.FinishCode.GDMetalRedBar2Objects1.length = 0;
gdjs.FinishCode.GDMetalRedBar2Objects2.length = 0;
gdjs.FinishCode.GDNewBBTextObjects1.length = 0;
gdjs.FinishCode.GDNewBBTextObjects2.length = 0;
gdjs.FinishCode.GDNamaPlayer1Objects1.length = 0;
gdjs.FinishCode.GDNamaPlayer1Objects2.length = 0;
gdjs.FinishCode.GDNamaPlayer2Objects1.length = 0;
gdjs.FinishCode.GDNamaPlayer2Objects2.length = 0;
gdjs.FinishCode.GDNamaPlayer3Objects1.length = 0;
gdjs.FinishCode.GDNamaPlayer3Objects2.length = 0;
gdjs.FinishCode.GDNamaPlayer4Objects1.length = 0;
gdjs.FinishCode.GDNamaPlayer4Objects2.length = 0;
gdjs.FinishCode.GDNamaPlayer5Objects1.length = 0;
gdjs.FinishCode.GDNamaPlayer5Objects2.length = 0;
gdjs.FinishCode.GDNamaPlayer6Objects1.length = 0;
gdjs.FinishCode.GDNamaPlayer6Objects2.length = 0;
gdjs.FinishCode.GDNamaPlayer7Objects1.length = 0;
gdjs.FinishCode.GDNamaPlayer7Objects2.length = 0;
gdjs.FinishCode.GDScoreValueObjects1.length = 0;
gdjs.FinishCode.GDScoreValueObjects2.length = 0;
gdjs.FinishCode.GDScoreValue1Objects1.length = 0;
gdjs.FinishCode.GDScoreValue1Objects2.length = 0;
gdjs.FinishCode.GDScoreValue2Objects1.length = 0;
gdjs.FinishCode.GDScoreValue2Objects2.length = 0;
gdjs.FinishCode.GDScoreValue3Objects1.length = 0;
gdjs.FinishCode.GDScoreValue3Objects2.length = 0;
gdjs.FinishCode.GDScoreValue4Objects1.length = 0;
gdjs.FinishCode.GDScoreValue4Objects2.length = 0;
gdjs.FinishCode.GDScoreValue5Objects1.length = 0;
gdjs.FinishCode.GDScoreValue5Objects2.length = 0;
gdjs.FinishCode.GDScoreValue6Objects1.length = 0;
gdjs.FinishCode.GDScoreValue6Objects2.length = 0;
gdjs.FinishCode.GDScoreValue7Objects1.length = 0;
gdjs.FinishCode.GDScoreValue7Objects2.length = 0;
gdjs.FinishCode.GDAObjects1.length = 0;
gdjs.FinishCode.GDAObjects2.length = 0;
gdjs.FinishCode.GDBObjects1.length = 0;
gdjs.FinishCode.GDBObjects2.length = 0;
gdjs.FinishCode.GDNextButtonObjects1.length = 0;
gdjs.FinishCode.GDNextButtonObjects2.length = 0;
gdjs.FinishCode.GDBackButtonObjects1.length = 0;
gdjs.FinishCode.GDBackButtonObjects2.length = 0;
gdjs.FinishCode.GDCObjects1.length = 0;
gdjs.FinishCode.GDCObjects2.length = 0;
gdjs.FinishCode.GDDObjects1.length = 0;
gdjs.FinishCode.GDDObjects2.length = 0;
gdjs.FinishCode.GDTitle1Objects1.length = 0;
gdjs.FinishCode.GDTitle1Objects2.length = 0;
gdjs.FinishCode.GDTitle2Objects1.length = 0;
gdjs.FinishCode.GDTitle2Objects2.length = 0;
gdjs.FinishCode.GDQuestionObjects1.length = 0;
gdjs.FinishCode.GDQuestionObjects2.length = 0;
gdjs.FinishCode.GDNewTextObjects1.length = 0;
gdjs.FinishCode.GDNewTextObjects2.length = 0;
gdjs.FinishCode.GDLeaderboardObjects1.length = 0;
gdjs.FinishCode.GDLeaderboardObjects2.length = 0;
gdjs.FinishCode.GDNextPlayerObjects1.length = 0;
gdjs.FinishCode.GDNextPlayerObjects2.length = 0;

gdjs.FinishCode.eventsList2(runtimeScene);

return;

}

gdjs['FinishCode'] = gdjs.FinishCode;
