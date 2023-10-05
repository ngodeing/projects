gdjs.FadeSceneCode = {};
gdjs.FadeSceneCode.GDBaselayerOkinesObjects1= [];
gdjs.FadeSceneCode.GDBaselayerOkinesObjects2= [];
gdjs.FadeSceneCode.GDDemoplayerObjects1= [];
gdjs.FadeSceneCode.GDDemoplayerObjects2= [];
gdjs.FadeSceneCode.GDDemoplayer2Objects1= [];
gdjs.FadeSceneCode.GDDemoplayer2Objects2= [];
gdjs.FadeSceneCode.GDBaselayerVortexObjects1= [];
gdjs.FadeSceneCode.GDBaselayerVortexObjects2= [];
gdjs.FadeSceneCode.GDBaselayerVortexGambar2Objects1= [];
gdjs.FadeSceneCode.GDBaselayerVortexGambar2Objects2= [];
gdjs.FadeSceneCode.GDBaselayerVortexGambar1Objects1= [];
gdjs.FadeSceneCode.GDBaselayerVortexGambar1Objects2= [];
gdjs.FadeSceneCode.GDBaselayerVortexGambar3Objects1= [];
gdjs.FadeSceneCode.GDBaselayerVortexGambar3Objects2= [];
gdjs.FadeSceneCode.GDWelcomeObjects1= [];
gdjs.FadeSceneCode.GDWelcomeObjects2= [];
gdjs.FadeSceneCode.GDDeleteEnemyObjects1= [];
gdjs.FadeSceneCode.GDDeleteEnemyObjects2= [];
gdjs.FadeSceneCode.GDStartquestionBegintextObjects1= [];
gdjs.FadeSceneCode.GDStartquestionBegintextObjects2= [];
gdjs.FadeSceneCode.GDInterfaceHeartbarObjects1= [];
gdjs.FadeSceneCode.GDInterfaceHeartbarObjects2= [];
gdjs.FadeSceneCode.GDBaselayerDoorObjects1= [];
gdjs.FadeSceneCode.GDBaselayerDoorObjects2= [];
gdjs.FadeSceneCode.GDMetalRedBarObjects1= [];
gdjs.FadeSceneCode.GDMetalRedBarObjects2= [];
gdjs.FadeSceneCode.GDMetalRedBar2Objects1= [];
gdjs.FadeSceneCode.GDMetalRedBar2Objects2= [];
gdjs.FadeSceneCode.GDNewBBTextObjects1= [];
gdjs.FadeSceneCode.GDNewBBTextObjects2= [];
gdjs.FadeSceneCode.GDNamaPlayer1Objects1= [];
gdjs.FadeSceneCode.GDNamaPlayer1Objects2= [];
gdjs.FadeSceneCode.GDNamaPlayer2Objects1= [];
gdjs.FadeSceneCode.GDNamaPlayer2Objects2= [];
gdjs.FadeSceneCode.GDNamaPlayer3Objects1= [];
gdjs.FadeSceneCode.GDNamaPlayer3Objects2= [];
gdjs.FadeSceneCode.GDNamaPlayer4Objects1= [];
gdjs.FadeSceneCode.GDNamaPlayer4Objects2= [];
gdjs.FadeSceneCode.GDNamaPlayer5Objects1= [];
gdjs.FadeSceneCode.GDNamaPlayer5Objects2= [];
gdjs.FadeSceneCode.GDNamaPlayer6Objects1= [];
gdjs.FadeSceneCode.GDNamaPlayer6Objects2= [];
gdjs.FadeSceneCode.GDNamaPlayer7Objects1= [];
gdjs.FadeSceneCode.GDNamaPlayer7Objects2= [];
gdjs.FadeSceneCode.GDScoreValueObjects1= [];
gdjs.FadeSceneCode.GDScoreValueObjects2= [];
gdjs.FadeSceneCode.GDScoreValue1Objects1= [];
gdjs.FadeSceneCode.GDScoreValue1Objects2= [];
gdjs.FadeSceneCode.GDScoreValue2Objects1= [];
gdjs.FadeSceneCode.GDScoreValue2Objects2= [];
gdjs.FadeSceneCode.GDScoreValue3Objects1= [];
gdjs.FadeSceneCode.GDScoreValue3Objects2= [];
gdjs.FadeSceneCode.GDScoreValue4Objects1= [];
gdjs.FadeSceneCode.GDScoreValue4Objects2= [];
gdjs.FadeSceneCode.GDScoreValue5Objects1= [];
gdjs.FadeSceneCode.GDScoreValue5Objects2= [];
gdjs.FadeSceneCode.GDScoreValue6Objects1= [];
gdjs.FadeSceneCode.GDScoreValue6Objects2= [];
gdjs.FadeSceneCode.GDScoreValue7Objects1= [];
gdjs.FadeSceneCode.GDScoreValue7Objects2= [];
gdjs.FadeSceneCode.GDAObjects1= [];
gdjs.FadeSceneCode.GDAObjects2= [];
gdjs.FadeSceneCode.GDBObjects1= [];
gdjs.FadeSceneCode.GDBObjects2= [];
gdjs.FadeSceneCode.GDNextButtonObjects1= [];
gdjs.FadeSceneCode.GDNextButtonObjects2= [];
gdjs.FadeSceneCode.GDBackButtonObjects1= [];
gdjs.FadeSceneCode.GDBackButtonObjects2= [];
gdjs.FadeSceneCode.GDCObjects1= [];
gdjs.FadeSceneCode.GDCObjects2= [];
gdjs.FadeSceneCode.GDDObjects1= [];
gdjs.FadeSceneCode.GDDObjects2= [];
gdjs.FadeSceneCode.GDTitle1Objects1= [];
gdjs.FadeSceneCode.GDTitle1Objects2= [];
gdjs.FadeSceneCode.GDTitle2Objects1= [];
gdjs.FadeSceneCode.GDTitle2Objects2= [];
gdjs.FadeSceneCode.GDQuestionObjects1= [];
gdjs.FadeSceneCode.GDQuestionObjects2= [];
gdjs.FadeSceneCode.GDBlackSceneObjects1= [];
gdjs.FadeSceneCode.GDBlackSceneObjects2= [];
gdjs.FadeSceneCode.GDStartQuestionObjects1= [];
gdjs.FadeSceneCode.GDStartQuestionObjects2= [];
gdjs.FadeSceneCode.GDNumberQuestionObjects1= [];
gdjs.FadeSceneCode.GDNumberQuestionObjects2= [];


gdjs.FadeSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackScene"), gdjs.FadeSceneCode.GDBlackSceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("NumberQuestion"), gdjs.FadeSceneCode.GDNumberQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartQuestion"), gdjs.FadeSceneCode.GDStartQuestionObjects1);
{for(var i = 0, len = gdjs.FadeSceneCode.GDBlackSceneObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDBlackSceneObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.FadeSceneCode.GDStartQuestionObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDStartQuestionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.FadeSceneCode.GDNumberQuestionObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDNumberQuestionObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{for(var i = 0, len = gdjs.FadeSceneCode.GDNumberQuestionObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDNumberQuestionObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "begin");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "begin") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackScene"), gdjs.FadeSceneCode.GDBlackSceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("NumberQuestion"), gdjs.FadeSceneCode.GDNumberQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartQuestion"), gdjs.FadeSceneCode.GDStartQuestionObjects1);
{for(var i = 0, len = gdjs.FadeSceneCode.GDBlackSceneObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDBlackSceneObjects1[i].setOpacity(gdjs.FadeSceneCode.GDBlackSceneObjects1[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.FadeSceneCode.GDNumberQuestionObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDNumberQuestionObjects1[i].setOpacity(gdjs.FadeSceneCode.GDNumberQuestionObjects1[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.FadeSceneCode.GDStartQuestionObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDStartQuestionObjects1[i].setOpacity(gdjs.FadeSceneCode.GDStartQuestionObjects1[i].getOpacity() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "begin") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25886812);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackScene"), gdjs.FadeSceneCode.GDBlackSceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("NumberQuestion"), gdjs.FadeSceneCode.GDNumberQuestionObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartQuestion"), gdjs.FadeSceneCode.GDStartQuestionObjects1);
{for(var i = 0, len = gdjs.FadeSceneCode.GDBlackSceneObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDBlackSceneObjects1[i].setOpacity(10);
}
}{for(var i = 0, len = gdjs.FadeSceneCode.GDStartQuestionObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDStartQuestionObjects1[i].setOpacity(10);
}
}{for(var i = 0, len = gdjs.FadeSceneCode.GDNumberQuestionObjects1.length ;i < len;++i) {
    gdjs.FadeSceneCode.GDNumberQuestionObjects1[i].setOpacity(10);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "soal1", false);
}}

}


};

gdjs.FadeSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FadeSceneCode.GDBaselayerOkinesObjects1.length = 0;
gdjs.FadeSceneCode.GDBaselayerOkinesObjects2.length = 0;
gdjs.FadeSceneCode.GDDemoplayerObjects1.length = 0;
gdjs.FadeSceneCode.GDDemoplayerObjects2.length = 0;
gdjs.FadeSceneCode.GDDemoplayer2Objects1.length = 0;
gdjs.FadeSceneCode.GDDemoplayer2Objects2.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexObjects1.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexObjects2.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexGambar2Objects1.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexGambar2Objects2.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexGambar1Objects1.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexGambar1Objects2.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexGambar3Objects1.length = 0;
gdjs.FadeSceneCode.GDBaselayerVortexGambar3Objects2.length = 0;
gdjs.FadeSceneCode.GDWelcomeObjects1.length = 0;
gdjs.FadeSceneCode.GDWelcomeObjects2.length = 0;
gdjs.FadeSceneCode.GDDeleteEnemyObjects1.length = 0;
gdjs.FadeSceneCode.GDDeleteEnemyObjects2.length = 0;
gdjs.FadeSceneCode.GDStartquestionBegintextObjects1.length = 0;
gdjs.FadeSceneCode.GDStartquestionBegintextObjects2.length = 0;
gdjs.FadeSceneCode.GDInterfaceHeartbarObjects1.length = 0;
gdjs.FadeSceneCode.GDInterfaceHeartbarObjects2.length = 0;
gdjs.FadeSceneCode.GDBaselayerDoorObjects1.length = 0;
gdjs.FadeSceneCode.GDBaselayerDoorObjects2.length = 0;
gdjs.FadeSceneCode.GDMetalRedBarObjects1.length = 0;
gdjs.FadeSceneCode.GDMetalRedBarObjects2.length = 0;
gdjs.FadeSceneCode.GDMetalRedBar2Objects1.length = 0;
gdjs.FadeSceneCode.GDMetalRedBar2Objects2.length = 0;
gdjs.FadeSceneCode.GDNewBBTextObjects1.length = 0;
gdjs.FadeSceneCode.GDNewBBTextObjects2.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer1Objects1.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer1Objects2.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer2Objects1.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer2Objects2.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer3Objects1.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer3Objects2.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer4Objects1.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer4Objects2.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer5Objects1.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer5Objects2.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer6Objects1.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer6Objects2.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer7Objects1.length = 0;
gdjs.FadeSceneCode.GDNamaPlayer7Objects2.length = 0;
gdjs.FadeSceneCode.GDScoreValueObjects1.length = 0;
gdjs.FadeSceneCode.GDScoreValueObjects2.length = 0;
gdjs.FadeSceneCode.GDScoreValue1Objects1.length = 0;
gdjs.FadeSceneCode.GDScoreValue1Objects2.length = 0;
gdjs.FadeSceneCode.GDScoreValue2Objects1.length = 0;
gdjs.FadeSceneCode.GDScoreValue2Objects2.length = 0;
gdjs.FadeSceneCode.GDScoreValue3Objects1.length = 0;
gdjs.FadeSceneCode.GDScoreValue3Objects2.length = 0;
gdjs.FadeSceneCode.GDScoreValue4Objects1.length = 0;
gdjs.FadeSceneCode.GDScoreValue4Objects2.length = 0;
gdjs.FadeSceneCode.GDScoreValue5Objects1.length = 0;
gdjs.FadeSceneCode.GDScoreValue5Objects2.length = 0;
gdjs.FadeSceneCode.GDScoreValue6Objects1.length = 0;
gdjs.FadeSceneCode.GDScoreValue6Objects2.length = 0;
gdjs.FadeSceneCode.GDScoreValue7Objects1.length = 0;
gdjs.FadeSceneCode.GDScoreValue7Objects2.length = 0;
gdjs.FadeSceneCode.GDAObjects1.length = 0;
gdjs.FadeSceneCode.GDAObjects2.length = 0;
gdjs.FadeSceneCode.GDBObjects1.length = 0;
gdjs.FadeSceneCode.GDBObjects2.length = 0;
gdjs.FadeSceneCode.GDNextButtonObjects1.length = 0;
gdjs.FadeSceneCode.GDNextButtonObjects2.length = 0;
gdjs.FadeSceneCode.GDBackButtonObjects1.length = 0;
gdjs.FadeSceneCode.GDBackButtonObjects2.length = 0;
gdjs.FadeSceneCode.GDCObjects1.length = 0;
gdjs.FadeSceneCode.GDCObjects2.length = 0;
gdjs.FadeSceneCode.GDDObjects1.length = 0;
gdjs.FadeSceneCode.GDDObjects2.length = 0;
gdjs.FadeSceneCode.GDTitle1Objects1.length = 0;
gdjs.FadeSceneCode.GDTitle1Objects2.length = 0;
gdjs.FadeSceneCode.GDTitle2Objects1.length = 0;
gdjs.FadeSceneCode.GDTitle2Objects2.length = 0;
gdjs.FadeSceneCode.GDQuestionObjects1.length = 0;
gdjs.FadeSceneCode.GDQuestionObjects2.length = 0;
gdjs.FadeSceneCode.GDBlackSceneObjects1.length = 0;
gdjs.FadeSceneCode.GDBlackSceneObjects2.length = 0;
gdjs.FadeSceneCode.GDStartQuestionObjects1.length = 0;
gdjs.FadeSceneCode.GDStartQuestionObjects2.length = 0;
gdjs.FadeSceneCode.GDNumberQuestionObjects1.length = 0;
gdjs.FadeSceneCode.GDNumberQuestionObjects2.length = 0;

gdjs.FadeSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['FadeSceneCode'] = gdjs.FadeSceneCode;
