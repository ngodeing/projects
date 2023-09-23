gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDBaselayerOkinesObjects1= [];
gdjs.LeaderboardCode.GDBaselayerOkinesObjects2= [];
gdjs.LeaderboardCode.GDDemoplayerObjects1= [];
gdjs.LeaderboardCode.GDDemoplayerObjects2= [];
gdjs.LeaderboardCode.GDDemoplayer2Objects1= [];
gdjs.LeaderboardCode.GDDemoplayer2Objects2= [];
gdjs.LeaderboardCode.GDBaselayerVortexObjects1= [];
gdjs.LeaderboardCode.GDBaselayerVortexObjects2= [];
gdjs.LeaderboardCode.GDBaselayerVortexGambar2Objects1= [];
gdjs.LeaderboardCode.GDBaselayerVortexGambar2Objects2= [];
gdjs.LeaderboardCode.GDBaselayerVortexGambar1Objects1= [];
gdjs.LeaderboardCode.GDBaselayerVortexGambar1Objects2= [];
gdjs.LeaderboardCode.GDBaselayerVortexGambar3Objects1= [];
gdjs.LeaderboardCode.GDBaselayerVortexGambar3Objects2= [];
gdjs.LeaderboardCode.GDWelcomeObjects1= [];
gdjs.LeaderboardCode.GDWelcomeObjects2= [];
gdjs.LeaderboardCode.GDDeleteEnemyObjects1= [];
gdjs.LeaderboardCode.GDDeleteEnemyObjects2= [];
gdjs.LeaderboardCode.GDStartquestionBegintextObjects1= [];
gdjs.LeaderboardCode.GDStartquestionBegintextObjects2= [];
gdjs.LeaderboardCode.GDInterfaceHeartbarObjects1= [];
gdjs.LeaderboardCode.GDInterfaceHeartbarObjects2= [];
gdjs.LeaderboardCode.GDBaselayerDoorObjects1= [];
gdjs.LeaderboardCode.GDBaselayerDoorObjects2= [];
gdjs.LeaderboardCode.GDMetalRedBarObjects1= [];
gdjs.LeaderboardCode.GDMetalRedBarObjects2= [];
gdjs.LeaderboardCode.GDMetalRedBar2Objects1= [];
gdjs.LeaderboardCode.GDMetalRedBar2Objects2= [];
gdjs.LeaderboardCode.GDNewBBTextObjects1= [];
gdjs.LeaderboardCode.GDNewBBTextObjects2= [];
gdjs.LeaderboardCode.GDNamaPlayer1Objects1= [];
gdjs.LeaderboardCode.GDNamaPlayer1Objects2= [];
gdjs.LeaderboardCode.GDNamaPlayer2Objects1= [];
gdjs.LeaderboardCode.GDNamaPlayer2Objects2= [];
gdjs.LeaderboardCode.GDNamaPlayer3Objects1= [];
gdjs.LeaderboardCode.GDNamaPlayer3Objects2= [];
gdjs.LeaderboardCode.GDNamaPlayer4Objects1= [];
gdjs.LeaderboardCode.GDNamaPlayer4Objects2= [];
gdjs.LeaderboardCode.GDNamaPlayer5Objects1= [];
gdjs.LeaderboardCode.GDNamaPlayer5Objects2= [];
gdjs.LeaderboardCode.GDNamaPlayer6Objects1= [];
gdjs.LeaderboardCode.GDNamaPlayer6Objects2= [];
gdjs.LeaderboardCode.GDNamaPlayer7Objects1= [];
gdjs.LeaderboardCode.GDNamaPlayer7Objects2= [];
gdjs.LeaderboardCode.GDScoreValueObjects1= [];
gdjs.LeaderboardCode.GDScoreValueObjects2= [];
gdjs.LeaderboardCode.GDScoreValue1Objects1= [];
gdjs.LeaderboardCode.GDScoreValue1Objects2= [];
gdjs.LeaderboardCode.GDScoreValue2Objects1= [];
gdjs.LeaderboardCode.GDScoreValue2Objects2= [];
gdjs.LeaderboardCode.GDScoreValue3Objects1= [];
gdjs.LeaderboardCode.GDScoreValue3Objects2= [];
gdjs.LeaderboardCode.GDScoreValue4Objects1= [];
gdjs.LeaderboardCode.GDScoreValue4Objects2= [];
gdjs.LeaderboardCode.GDScoreValue5Objects1= [];
gdjs.LeaderboardCode.GDScoreValue5Objects2= [];
gdjs.LeaderboardCode.GDScoreValue6Objects1= [];
gdjs.LeaderboardCode.GDScoreValue6Objects2= [];
gdjs.LeaderboardCode.GDScoreValue7Objects1= [];
gdjs.LeaderboardCode.GDScoreValue7Objects2= [];
gdjs.LeaderboardCode.GDAObjects1= [];
gdjs.LeaderboardCode.GDAObjects2= [];
gdjs.LeaderboardCode.GDBObjects1= [];
gdjs.LeaderboardCode.GDBObjects2= [];
gdjs.LeaderboardCode.GDNextButtonObjects1= [];
gdjs.LeaderboardCode.GDNextButtonObjects2= [];
gdjs.LeaderboardCode.GDBackButtonObjects1= [];
gdjs.LeaderboardCode.GDBackButtonObjects2= [];
gdjs.LeaderboardCode.GDCObjects1= [];
gdjs.LeaderboardCode.GDCObjects2= [];
gdjs.LeaderboardCode.GDDObjects1= [];
gdjs.LeaderboardCode.GDDObjects2= [];
gdjs.LeaderboardCode.GDTitle1Objects1= [];
gdjs.LeaderboardCode.GDTitle1Objects2= [];
gdjs.LeaderboardCode.GDTitle2Objects1= [];
gdjs.LeaderboardCode.GDTitle2Objects2= [];
gdjs.LeaderboardCode.GDQuestionObjects1= [];
gdjs.LeaderboardCode.GDQuestionObjects2= [];
gdjs.LeaderboardCode.GDNewTextObjects1= [];
gdjs.LeaderboardCode.GDNewTextObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardObjects2= [];
gdjs.LeaderboardCode.GDNextPlayerObjects1= [];
gdjs.LeaderboardCode.GDNextPlayerObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreValue"), gdjs.LeaderboardCode.GDScoreValueObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValueObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValueObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NamaPlayer1"), gdjs.LeaderboardCode.GDNamaPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NamaPlayer2"), gdjs.LeaderboardCode.GDNamaPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NamaPlayer3"), gdjs.LeaderboardCode.GDNamaPlayer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NamaPlayer4"), gdjs.LeaderboardCode.GDNamaPlayer4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NamaPlayer5"), gdjs.LeaderboardCode.GDNamaPlayer5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NamaPlayer6"), gdjs.LeaderboardCode.GDNamaPlayer6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NamaPlayer7"), gdjs.LeaderboardCode.GDNamaPlayer7Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue1"), gdjs.LeaderboardCode.GDScoreValue1Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue2"), gdjs.LeaderboardCode.GDScoreValue2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue3"), gdjs.LeaderboardCode.GDScoreValue3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue4"), gdjs.LeaderboardCode.GDScoreValue4Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue5"), gdjs.LeaderboardCode.GDScoreValue5Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue6"), gdjs.LeaderboardCode.GDScoreValue6Objects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreValue7"), gdjs.LeaderboardCode.GDScoreValue7Objects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDNamaPlayer1Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNamaPlayer1Objects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16).getChild(0)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDNamaPlayer2Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNamaPlayer2Objects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16).getChild(1)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDNamaPlayer3Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNamaPlayer3Objects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16).getChild(2)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDNamaPlayer4Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNamaPlayer4Objects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16).getChild(3)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDNamaPlayer5Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNamaPlayer5Objects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16).getChild(4)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDNamaPlayer6Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNamaPlayer6Objects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16).getChild(5)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDNamaPlayer7Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNamaPlayer7Objects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16).getChild(6)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValue1Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValue1Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getChild(0))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValue2Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValue2Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getChild(1))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValue3Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValue3Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getChild(2))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValue4Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValue4Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getChild(3))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValue5Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValue5Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getChild(4))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValue6Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValue6Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getChild(5))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreValue7Objects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreValue7Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(17).getChild(6))));
}
}}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


gdjs.LeaderboardCode.eventsList0(runtimeScene);
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

gdjs.copyArray(runtimeScene.getObjects("NextPlayer"), gdjs.LeaderboardCode.GDNextPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDNextPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDNextPlayerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDNextPlayerObjects1[k] = gdjs.LeaderboardCode.GDNextPlayerObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDNextPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BaselayerOkines"), gdjs.LeaderboardCode.GDBaselayerOkinesObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(5);
}{for(var i = 0, len = gdjs.LeaderboardCode.GDBaselayerOkinesObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBaselayerOkinesObjects1[i].getBehavior("Health").SetHealth(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(300);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Demo Level", false);
}}

}


{


gdjs.LeaderboardCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LeaderboardCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDBackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDBackButtonObjects1[k] = gdjs.LeaderboardCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDBaselayerOkinesObjects1.length = 0;
gdjs.LeaderboardCode.GDBaselayerOkinesObjects2.length = 0;
gdjs.LeaderboardCode.GDDemoplayerObjects1.length = 0;
gdjs.LeaderboardCode.GDDemoplayerObjects2.length = 0;
gdjs.LeaderboardCode.GDDemoplayer2Objects1.length = 0;
gdjs.LeaderboardCode.GDDemoplayer2Objects2.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexObjects1.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexObjects2.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexGambar2Objects1.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexGambar2Objects2.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexGambar1Objects1.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexGambar1Objects2.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexGambar3Objects1.length = 0;
gdjs.LeaderboardCode.GDBaselayerVortexGambar3Objects2.length = 0;
gdjs.LeaderboardCode.GDWelcomeObjects1.length = 0;
gdjs.LeaderboardCode.GDWelcomeObjects2.length = 0;
gdjs.LeaderboardCode.GDDeleteEnemyObjects1.length = 0;
gdjs.LeaderboardCode.GDDeleteEnemyObjects2.length = 0;
gdjs.LeaderboardCode.GDStartquestionBegintextObjects1.length = 0;
gdjs.LeaderboardCode.GDStartquestionBegintextObjects2.length = 0;
gdjs.LeaderboardCode.GDInterfaceHeartbarObjects1.length = 0;
gdjs.LeaderboardCode.GDInterfaceHeartbarObjects2.length = 0;
gdjs.LeaderboardCode.GDBaselayerDoorObjects1.length = 0;
gdjs.LeaderboardCode.GDBaselayerDoorObjects2.length = 0;
gdjs.LeaderboardCode.GDMetalRedBarObjects1.length = 0;
gdjs.LeaderboardCode.GDMetalRedBarObjects2.length = 0;
gdjs.LeaderboardCode.GDMetalRedBar2Objects1.length = 0;
gdjs.LeaderboardCode.GDMetalRedBar2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewBBTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewBBTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer1Objects1.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer1Objects2.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer2Objects1.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer2Objects2.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer3Objects1.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer3Objects2.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer4Objects1.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer4Objects2.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer5Objects1.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer5Objects2.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer6Objects1.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer6Objects2.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer7Objects1.length = 0;
gdjs.LeaderboardCode.GDNamaPlayer7Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreValueObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreValueObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreValue1Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreValue1Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreValue2Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreValue2Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreValue3Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreValue3Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreValue4Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreValue4Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreValue5Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreValue5Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreValue6Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreValue6Objects2.length = 0;
gdjs.LeaderboardCode.GDScoreValue7Objects1.length = 0;
gdjs.LeaderboardCode.GDScoreValue7Objects2.length = 0;
gdjs.LeaderboardCode.GDAObjects1.length = 0;
gdjs.LeaderboardCode.GDAObjects2.length = 0;
gdjs.LeaderboardCode.GDBObjects1.length = 0;
gdjs.LeaderboardCode.GDBObjects2.length = 0;
gdjs.LeaderboardCode.GDNextButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDNextButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDBackButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDCObjects1.length = 0;
gdjs.LeaderboardCode.GDCObjects2.length = 0;
gdjs.LeaderboardCode.GDDObjects1.length = 0;
gdjs.LeaderboardCode.GDDObjects2.length = 0;
gdjs.LeaderboardCode.GDTitle1Objects1.length = 0;
gdjs.LeaderboardCode.GDTitle1Objects2.length = 0;
gdjs.LeaderboardCode.GDTitle2Objects1.length = 0;
gdjs.LeaderboardCode.GDTitle2Objects2.length = 0;
gdjs.LeaderboardCode.GDQuestionObjects1.length = 0;
gdjs.LeaderboardCode.GDQuestionObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDNextPlayerObjects1.length = 0;
gdjs.LeaderboardCode.GDNextPlayerObjects2.length = 0;

gdjs.LeaderboardCode.eventsList2(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
