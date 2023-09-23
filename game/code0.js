gdjs.MenuCode = {};
gdjs.MenuCode.GDBaselayerOkinesObjects1= [];
gdjs.MenuCode.GDBaselayerOkinesObjects2= [];
gdjs.MenuCode.GDDemoplayerObjects1= [];
gdjs.MenuCode.GDDemoplayerObjects2= [];
gdjs.MenuCode.GDDemoplayer2Objects1= [];
gdjs.MenuCode.GDDemoplayer2Objects2= [];
gdjs.MenuCode.GDBaselayerVortexObjects1= [];
gdjs.MenuCode.GDBaselayerVortexObjects2= [];
gdjs.MenuCode.GDBaselayerVortexGambar2Objects1= [];
gdjs.MenuCode.GDBaselayerVortexGambar2Objects2= [];
gdjs.MenuCode.GDBaselayerVortexGambar1Objects1= [];
gdjs.MenuCode.GDBaselayerVortexGambar1Objects2= [];
gdjs.MenuCode.GDBaselayerVortexGambar3Objects1= [];
gdjs.MenuCode.GDBaselayerVortexGambar3Objects2= [];
gdjs.MenuCode.GDWelcomeObjects1= [];
gdjs.MenuCode.GDWelcomeObjects2= [];
gdjs.MenuCode.GDDeleteEnemyObjects1= [];
gdjs.MenuCode.GDDeleteEnemyObjects2= [];
gdjs.MenuCode.GDStartquestionBegintextObjects1= [];
gdjs.MenuCode.GDStartquestionBegintextObjects2= [];
gdjs.MenuCode.GDInterfaceHeartbarObjects1= [];
gdjs.MenuCode.GDInterfaceHeartbarObjects2= [];
gdjs.MenuCode.GDBaselayerDoorObjects1= [];
gdjs.MenuCode.GDBaselayerDoorObjects2= [];
gdjs.MenuCode.GDMetalRedBarObjects1= [];
gdjs.MenuCode.GDMetalRedBarObjects2= [];
gdjs.MenuCode.GDMetalRedBar2Objects1= [];
gdjs.MenuCode.GDMetalRedBar2Objects2= [];
gdjs.MenuCode.GDNewBBTextObjects1= [];
gdjs.MenuCode.GDNewBBTextObjects2= [];
gdjs.MenuCode.GDNamaPlayer1Objects1= [];
gdjs.MenuCode.GDNamaPlayer1Objects2= [];
gdjs.MenuCode.GDNamaPlayer2Objects1= [];
gdjs.MenuCode.GDNamaPlayer2Objects2= [];
gdjs.MenuCode.GDNamaPlayer3Objects1= [];
gdjs.MenuCode.GDNamaPlayer3Objects2= [];
gdjs.MenuCode.GDNamaPlayer4Objects1= [];
gdjs.MenuCode.GDNamaPlayer4Objects2= [];
gdjs.MenuCode.GDNamaPlayer5Objects1= [];
gdjs.MenuCode.GDNamaPlayer5Objects2= [];
gdjs.MenuCode.GDNamaPlayer6Objects1= [];
gdjs.MenuCode.GDNamaPlayer6Objects2= [];
gdjs.MenuCode.GDNamaPlayer7Objects1= [];
gdjs.MenuCode.GDNamaPlayer7Objects2= [];
gdjs.MenuCode.GDScoreValueObjects1= [];
gdjs.MenuCode.GDScoreValueObjects2= [];
gdjs.MenuCode.GDScoreValue1Objects1= [];
gdjs.MenuCode.GDScoreValue1Objects2= [];
gdjs.MenuCode.GDScoreValue2Objects1= [];
gdjs.MenuCode.GDScoreValue2Objects2= [];
gdjs.MenuCode.GDScoreValue3Objects1= [];
gdjs.MenuCode.GDScoreValue3Objects2= [];
gdjs.MenuCode.GDScoreValue4Objects1= [];
gdjs.MenuCode.GDScoreValue4Objects2= [];
gdjs.MenuCode.GDScoreValue5Objects1= [];
gdjs.MenuCode.GDScoreValue5Objects2= [];
gdjs.MenuCode.GDScoreValue6Objects1= [];
gdjs.MenuCode.GDScoreValue6Objects2= [];
gdjs.MenuCode.GDScoreValue7Objects1= [];
gdjs.MenuCode.GDScoreValue7Objects2= [];
gdjs.MenuCode.GDAObjects1= [];
gdjs.MenuCode.GDAObjects2= [];
gdjs.MenuCode.GDBObjects1= [];
gdjs.MenuCode.GDBObjects2= [];
gdjs.MenuCode.GDNextButtonObjects1= [];
gdjs.MenuCode.GDNextButtonObjects2= [];
gdjs.MenuCode.GDBackButtonObjects1= [];
gdjs.MenuCode.GDBackButtonObjects2= [];
gdjs.MenuCode.GDCObjects1= [];
gdjs.MenuCode.GDCObjects2= [];
gdjs.MenuCode.GDDObjects1= [];
gdjs.MenuCode.GDDObjects2= [];
gdjs.MenuCode.GDTitle1Objects1= [];
gdjs.MenuCode.GDTitle1Objects2= [];
gdjs.MenuCode.GDTitle2Objects1= [];
gdjs.MenuCode.GDTitle2Objects2= [];
gdjs.MenuCode.GDQuestionObjects1= [];
gdjs.MenuCode.GDQuestionObjects2= [];
gdjs.MenuCode.GDGoldStarObjects1= [];
gdjs.MenuCode.GDGoldStarObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDInputNameObjects1= [];
gdjs.MenuCode.GDInputNameObjects2= [];
gdjs.MenuCode.GDLoginObjects1= [];
gdjs.MenuCode.GDLoginObjects2= [];
gdjs.MenuCode.GDplayObjects1= [];
gdjs.MenuCode.GDplayObjects2= [];
gdjs.MenuCode.GDAlchemistObjects1= [];
gdjs.MenuCode.GDAlchemistObjects2= [];
gdjs.MenuCode.GDChemicalPotObjects1= [];
gdjs.MenuCode.GDChemicalPotObjects2= [];
gdjs.MenuCode.GDdevNameObjects1= [];
gdjs.MenuCode.GDdevNameObjects2= [];
gdjs.MenuCode.GDcopyrightObjects1= [];
gdjs.MenuCode.GDcopyrightObjects2= [];
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDalertObjects1= [];
gdjs.MenuCode.GDalertObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDalertObjects1Objects = Hashtable.newFrom({"alert": gdjs.MenuCode.GDalertObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "risk-136788.mp3", true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InputName"), gdjs.MenuCode.GDInputNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.MenuCode.GDLoginObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDInputNameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDInputNameObjects1[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDInputNameObjects1[k] = gdjs.MenuCode.GDInputNameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDInputNameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLoginObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLoginObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLoginObjects1[k] = gdjs.MenuCode.GDLoginObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDLoginObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDInputNameObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(14).setString((( gdjs.MenuCode.GDInputNameObjects1.length === 0 ) ? "" :gdjs.MenuCode.GDInputNameObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Demo Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InputName"), gdjs.MenuCode.GDInputNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.MenuCode.GDLoginObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDInputNameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDInputNameObjects1[i].getString() == "" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDInputNameObjects1[k] = gdjs.MenuCode.GDInputNameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDInputNameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLoginObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLoginObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLoginObjects1[k] = gdjs.MenuCode.GDLoginObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDLoginObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(20), false);
}
}
if (isConditionTrue_0) {
gdjs.MenuCode.GDalertObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDalertObjects1Objects, 689, 701, "");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(20), true);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBaselayerOkinesObjects1.length = 0;
gdjs.MenuCode.GDBaselayerOkinesObjects2.length = 0;
gdjs.MenuCode.GDDemoplayerObjects1.length = 0;
gdjs.MenuCode.GDDemoplayerObjects2.length = 0;
gdjs.MenuCode.GDDemoplayer2Objects1.length = 0;
gdjs.MenuCode.GDDemoplayer2Objects2.length = 0;
gdjs.MenuCode.GDBaselayerVortexObjects1.length = 0;
gdjs.MenuCode.GDBaselayerVortexObjects2.length = 0;
gdjs.MenuCode.GDBaselayerVortexGambar2Objects1.length = 0;
gdjs.MenuCode.GDBaselayerVortexGambar2Objects2.length = 0;
gdjs.MenuCode.GDBaselayerVortexGambar1Objects1.length = 0;
gdjs.MenuCode.GDBaselayerVortexGambar1Objects2.length = 0;
gdjs.MenuCode.GDBaselayerVortexGambar3Objects1.length = 0;
gdjs.MenuCode.GDBaselayerVortexGambar3Objects2.length = 0;
gdjs.MenuCode.GDWelcomeObjects1.length = 0;
gdjs.MenuCode.GDWelcomeObjects2.length = 0;
gdjs.MenuCode.GDDeleteEnemyObjects1.length = 0;
gdjs.MenuCode.GDDeleteEnemyObjects2.length = 0;
gdjs.MenuCode.GDStartquestionBegintextObjects1.length = 0;
gdjs.MenuCode.GDStartquestionBegintextObjects2.length = 0;
gdjs.MenuCode.GDInterfaceHeartbarObjects1.length = 0;
gdjs.MenuCode.GDInterfaceHeartbarObjects2.length = 0;
gdjs.MenuCode.GDBaselayerDoorObjects1.length = 0;
gdjs.MenuCode.GDBaselayerDoorObjects2.length = 0;
gdjs.MenuCode.GDMetalRedBarObjects1.length = 0;
gdjs.MenuCode.GDMetalRedBarObjects2.length = 0;
gdjs.MenuCode.GDMetalRedBar2Objects1.length = 0;
gdjs.MenuCode.GDMetalRedBar2Objects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNamaPlayer1Objects1.length = 0;
gdjs.MenuCode.GDNamaPlayer1Objects2.length = 0;
gdjs.MenuCode.GDNamaPlayer2Objects1.length = 0;
gdjs.MenuCode.GDNamaPlayer2Objects2.length = 0;
gdjs.MenuCode.GDNamaPlayer3Objects1.length = 0;
gdjs.MenuCode.GDNamaPlayer3Objects2.length = 0;
gdjs.MenuCode.GDNamaPlayer4Objects1.length = 0;
gdjs.MenuCode.GDNamaPlayer4Objects2.length = 0;
gdjs.MenuCode.GDNamaPlayer5Objects1.length = 0;
gdjs.MenuCode.GDNamaPlayer5Objects2.length = 0;
gdjs.MenuCode.GDNamaPlayer6Objects1.length = 0;
gdjs.MenuCode.GDNamaPlayer6Objects2.length = 0;
gdjs.MenuCode.GDNamaPlayer7Objects1.length = 0;
gdjs.MenuCode.GDNamaPlayer7Objects2.length = 0;
gdjs.MenuCode.GDScoreValueObjects1.length = 0;
gdjs.MenuCode.GDScoreValueObjects2.length = 0;
gdjs.MenuCode.GDScoreValue1Objects1.length = 0;
gdjs.MenuCode.GDScoreValue1Objects2.length = 0;
gdjs.MenuCode.GDScoreValue2Objects1.length = 0;
gdjs.MenuCode.GDScoreValue2Objects2.length = 0;
gdjs.MenuCode.GDScoreValue3Objects1.length = 0;
gdjs.MenuCode.GDScoreValue3Objects2.length = 0;
gdjs.MenuCode.GDScoreValue4Objects1.length = 0;
gdjs.MenuCode.GDScoreValue4Objects2.length = 0;
gdjs.MenuCode.GDScoreValue5Objects1.length = 0;
gdjs.MenuCode.GDScoreValue5Objects2.length = 0;
gdjs.MenuCode.GDScoreValue6Objects1.length = 0;
gdjs.MenuCode.GDScoreValue6Objects2.length = 0;
gdjs.MenuCode.GDScoreValue7Objects1.length = 0;
gdjs.MenuCode.GDScoreValue7Objects2.length = 0;
gdjs.MenuCode.GDAObjects1.length = 0;
gdjs.MenuCode.GDAObjects2.length = 0;
gdjs.MenuCode.GDBObjects1.length = 0;
gdjs.MenuCode.GDBObjects2.length = 0;
gdjs.MenuCode.GDNextButtonObjects1.length = 0;
gdjs.MenuCode.GDNextButtonObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDCObjects1.length = 0;
gdjs.MenuCode.GDCObjects2.length = 0;
gdjs.MenuCode.GDDObjects1.length = 0;
gdjs.MenuCode.GDDObjects2.length = 0;
gdjs.MenuCode.GDTitle1Objects1.length = 0;
gdjs.MenuCode.GDTitle1Objects2.length = 0;
gdjs.MenuCode.GDTitle2Objects1.length = 0;
gdjs.MenuCode.GDTitle2Objects2.length = 0;
gdjs.MenuCode.GDQuestionObjects1.length = 0;
gdjs.MenuCode.GDQuestionObjects2.length = 0;
gdjs.MenuCode.GDGoldStarObjects1.length = 0;
gdjs.MenuCode.GDGoldStarObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDInputNameObjects1.length = 0;
gdjs.MenuCode.GDInputNameObjects2.length = 0;
gdjs.MenuCode.GDLoginObjects1.length = 0;
gdjs.MenuCode.GDLoginObjects2.length = 0;
gdjs.MenuCode.GDplayObjects1.length = 0;
gdjs.MenuCode.GDplayObjects2.length = 0;
gdjs.MenuCode.GDAlchemistObjects1.length = 0;
gdjs.MenuCode.GDAlchemistObjects2.length = 0;
gdjs.MenuCode.GDChemicalPotObjects1.length = 0;
gdjs.MenuCode.GDChemicalPotObjects2.length = 0;
gdjs.MenuCode.GDdevNameObjects1.length = 0;
gdjs.MenuCode.GDdevNameObjects2.length = 0;
gdjs.MenuCode.GDcopyrightObjects1.length = 0;
gdjs.MenuCode.GDcopyrightObjects2.length = 0;
gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDalertObjects1.length = 0;
gdjs.MenuCode.GDalertObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
