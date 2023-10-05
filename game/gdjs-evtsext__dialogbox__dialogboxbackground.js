
gdjs.evtsExt__DialogBox__DialogBoxBackGround = gdjs.evtsExt__DialogBox__DialogBoxBackGround || {};

/**
 * Behavior generated from Dialog Box
 */
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround = class DialogBoxBackGround extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Interval = behaviorData.Interval !== undefined ? behaviorData.Interval : Number("0.05") || 0;
    this._behaviorData.Se = behaviorData.Se !== undefined ? behaviorData.Se : "";
    this._behaviorData.Tween = "";
    this._behaviorData.Duration = behaviorData.Duration !== undefined ? behaviorData.Duration : Number("250") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Interval !== newBehaviorData.Interval)
      this._behaviorData.Interval = newBehaviorData.Interval;
    if (oldBehaviorData.Se !== newBehaviorData.Se)
      this._behaviorData.Se = newBehaviorData.Se;
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;

    return true;
  }

  // Properties:
  
  _getInterval() {
    return this._behaviorData.Interval !== undefined ? this._behaviorData.Interval : Number("0.05") || 0;
  }
  _setInterval(newValue) {
    this._behaviorData.Interval = newValue;
  }
  _getSe() {
    return this._behaviorData.Se !== undefined ? this._behaviorData.Se : "";
  }
  _setSe(newValue) {
    this._behaviorData.Se = newValue;
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("250") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
}

/**
 * Shared data generated from Dialog Box
 */
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.SharedData = class DialogBoxBackGroundSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DialogBox_DialogBoxBackGroundSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DialogBox_DialogBoxBackGroundSharedData = new gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.SharedData(
      initialData
    );
  }
  return instanceContainer._DialogBox_DialogBoxBackGroundSharedData;
}

// Methods:
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects2= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDNameObjects1= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDNameObjects2= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDImgObjects1= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDImgObjects2= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDTextObjects1= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDTextObjects2= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDArrowObjects1= [];
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDArrowObjects2= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.userFunc0x90c798 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let dbbg = objects[0]._DialogBoxBackGround = {};
dbbg.Bg = {name:objects[0].name, id:objects[0].id};
dbbg.Name = {name:eventsFunctionContext.getObjects("Name")[0].name, id:eventsFunctionContext.getObjects("Name")[0].id};
dbbg.Text = {name:eventsFunctionContext.getObjects("Text")[0].name, id:eventsFunctionContext.getObjects("Text")[0].id};
dbbg.Img = {name:eventsFunctionContext.getObjects("Img")[0].name, id:eventsFunctionContext.getObjects("Img")[0].id};
dbbg.Arrow = {name:eventsFunctionContext.getObjects("Arrow")[0].name, id:eventsFunctionContext.getObjects("Arrow")[0].id};
dbbg.SeName = objects[0].getVariables().get("_DialogBoxBackGround").getChild("Se").getAsString();
dbbg.Interval = objects[0].getVariables().get("_DialogBoxBackGround").getChild("Interval").getAsNumber();
dbbg.Duration = objects[0].getVariables().get("_DialogBoxBackGround").getChild("Duration").getAsNumber();
dbbg.State = "Close";
dbbg.Width = objects[0].getWidth();
dbbg.Height = objects[0].getHeight();
dbbg.TextBuffer = "";
dbbg.Cnt = 0;
dbbg.CntFlag = false;

if (dbbg.SeName != "") {
    //runtimeScene.getSoundManager().loadAudio(dbbg.SeName, false);
    dbbg.Se = runtimeScene.getSoundManager().createHowlerSound(dbbg.SeName, false, 1, false, 1);
}

objects[0].hide(true);
eventsFunctionContext.getObjects("Name")[0].hide(true);
eventsFunctionContext.getObjects("Text")[0].hide(true);
eventsFunctionContext.getObjects("Img")[0].hide(true);
eventsFunctionContext.getObjects("Arrow")[0].hide(true);
objects[0].pauseTimer("_DialogBoxBackGroundInterval");

};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].getVariables().get("_DialogBoxBackGround").getChild("Se")).setString((gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSe()));
}
}{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].getVariables().get("_DialogBoxBackGround").getChild("Interval")).setNumber((gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInterval()));
}
}{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].getVariables().get("_DialogBoxBackGround").getChild("Duration")).setNumber((gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1);
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.userFunc0x90c798(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.Setup = function(Name, Img, Text, Arrow, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Name": Name
, "Img": Img
, "Text": Text
, "Arrow": Arrow
},
  _objectArraysMap: {
"Object": thisObjectList
, "Name": gdjs.objectsListsToArray(Name)
, "Img": gdjs.objectsListsToArray(Img)
, "Text": gdjs.objectsListsToArray(Text)
, "Arrow": gdjs.objectsListsToArray(Arrow)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDNameObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDNameObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDImgObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDImgObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDTextObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDTextObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDArrowObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.GDArrowObjects2.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SetupContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEventsContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {return}
const BgIndex = runtimeScene.getObjects(dbbg.Bg.name).findIndex(v => v.id === dbbg.Bg.id);
const NameIndex = runtimeScene.getObjects(dbbg.Name.name).findIndex(v => v.id === dbbg.Name.id);
const TextIndex = runtimeScene.getObjects(dbbg.Text.name).findIndex(v => v.id === dbbg.Text.id);
const ImgIndex = runtimeScene.getObjects(dbbg.Img.name).findIndex(v => v.id === dbbg.Img.id);
const ArrowIndex = runtimeScene.getObjects(dbbg.Arrow.name).findIndex(v => v.id === dbbg.Arrow.id);
if (BgIndex === -1) {console.warn("Background not found.");return;}
if (NameIndex === -1) {console.warn("Name not found.");return;}
if (TextIndex === -1) {console.warn("Text not found.");return;}
if (ImgIndex === -1) {console.warn("Image not found.");return;}
if (ArrowIndex === -1) {console.warn("Arrow not found.");return;}
const Bg = runtimeScene.getObjects(dbbg.Bg.name)[BgIndex];
const Name = runtimeScene.getObjects(dbbg.Name.name)[NameIndex];
const Text = runtimeScene.getObjects(dbbg.Text.name)[TextIndex];
const Img = runtimeScene.getObjects(dbbg.Img.name)[ImgIndex];
const Arrow = runtimeScene.getObjects(dbbg.Arrow.name)[ArrowIndex];

if (Bg.getBehavior("Tween").hasFinished("_DialogBoxBackGround.OpeningWidth")) {
    Name.hide(false);
    Text.hide(false);
    Img.hide(false);
    dbbg.State = "Typing";
    Bg.resetTimer("_DialogBoxBackGroundInterval");
    Bg.unpauseTimer("_DialogBoxBackGroundInterval");
    Bg.getBehavior("Tween").removeTween("_DialogBoxBackGround.OpeningWidth");
    Bg.getBehavior("Tween").removeTween("_DialogBoxBackGround.OpeningHeight");
    Bg.getBehavior("Tween").removeTween("_DialogBoxBackGround.OpeningOpacity");
}
if (Bg.getBehavior("Tween").hasFinished("_DialogBoxBackGround.ClosingWidth")) {
    Bg.hide(true);
    dbbg.State = "Close";
    Bg.getBehavior("Tween").removeTween("_DialogBoxBackGround.ClosingWidth");
    Bg.getBehavior("Tween").removeTween("_DialogBoxBackGround.ClosingHeight");
    Bg.getBehavior("Tween").removeTween("_DialogBoxBackGround.ClosingOpacity");
}

if (dbbg.State == "Typing") {
    if (Bg.timerElapsedTime("_DialogBoxBackGroundInterval", dbbg.Interval)){
        Text.setBBText(dbbg.TextBuffer.substring(0, Text.getBBText().length + 1));
        Bg.resetTimer("_DialogBoxBackGroundInterval");
        if (dbbg.Se) {
            dbbg.Se.play();
        }
        if (dbbg.TextBuffer.length <= Text.getBBText().length) {
            Bg.pauseTimer("_DialogBoxBackGroundInterval");
            Arrow.hide(false);
            dbbg.State = "Open";
        }
    }
}

if (dbbg.CntFlag) {
    dbbg.Cnt++;
    dbbg.CntFlag = false;
}
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEventsContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.OpenContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.OpenContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.OpenContext.userFunc0x151fb80 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {console.warn("Must be setup first.");return;}
if (dbbg.State != "Close") {return}
const BgIndex = runtimeScene.getObjects(dbbg.Bg.name).findIndex(v => v.id === dbbg.Bg.id);
const NameIndex = runtimeScene.getObjects(dbbg.Name.name).findIndex(v => v.id === dbbg.Name.id);
const TextIndex = runtimeScene.getObjects(dbbg.Text.name).findIndex(v => v.id === dbbg.Text.id);
const ImgIndex = runtimeScene.getObjects(dbbg.Img.name).findIndex(v => v.id === dbbg.Img.id);
const ArrowIndex = runtimeScene.getObjects(dbbg.Arrow.name).findIndex(v => v.id === dbbg.Arrow.id);
if (BgIndex === -1) {console.warn("Background not found.");return;}
if (NameIndex === -1) {console.warn("Name not found.");return;}
if (TextIndex === -1) {console.warn("Text not found.");return;}
if (ImgIndex === -1) {console.warn("Image not found.");return;}
if (ArrowIndex === -1) {console.warn("Arrow not found.");return;}
const Bg = runtimeScene.getObjects(dbbg.Bg.name)[BgIndex];
const Name = runtimeScene.getObjects(dbbg.Name.name)[NameIndex];
const Text = runtimeScene.getObjects(dbbg.Text.name)[TextIndex];
const Img = runtimeScene.getObjects(dbbg.Img.name)[ImgIndex];
const Arrow = runtimeScene.getObjects(dbbg.Arrow.name)[ArrowIndex];

Name.setBBText(eventsFunctionContext.getArgument("Name"));
Text.setBBText("");
Img.setAnimationName(eventsFunctionContext.getArgument("Img"));
dbbg.TextBuffer = eventsFunctionContext.getArgument("Text");

Bg.hide(false);

Bg.setWidth(1);
Bg.setHeight(1);
Bg.setOpacity(0);
Bg.getBehavior("Tween").addObjectWidthTween("_DialogBoxBackGround.OpeningWidth", dbbg.Width, "easeOutCubic", dbbg.Duration, false);
Bg.getBehavior("Tween").addObjectHeightTween("_DialogBoxBackGround.OpeningHeight", dbbg.Height, "easeOutCubic", dbbg.Duration, false);
Bg.getBehavior("Tween").addObjectOpacityTween("_DialogBoxBackGround.OpeningOpacity", 255, "linear", dbbg.Duration, false);
dbbg.State = "Opening";
dbbg.Cnt = 0;
dbbg.CntFlag = false;
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.OpenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.OpenContext.userFunc0x151fb80(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.Open = function(Name, Img, Text, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Name") return Name;
if (argName === "Img") return Img;
if (argName === "Text") return Text;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.OpenContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.OpenContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CloseContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CloseContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CloseContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {console.warn("Must be setup first.");return;}
if (dbbg.State != "Open") {return}
const BgIndex = runtimeScene.getObjects(dbbg.Bg.name).findIndex(v => v.id === dbbg.Bg.id);
const NameIndex = runtimeScene.getObjects(dbbg.Name.name).findIndex(v => v.id === dbbg.Name.id);
const TextIndex = runtimeScene.getObjects(dbbg.Text.name).findIndex(v => v.id === dbbg.Text.id);
const ImgIndex = runtimeScene.getObjects(dbbg.Img.name).findIndex(v => v.id === dbbg.Img.id);
const ArrowIndex = runtimeScene.getObjects(dbbg.Arrow.name).findIndex(v => v.id === dbbg.Arrow.id);
if (BgIndex === -1) {console.warn("Background not found.");return;}
if (NameIndex === -1) {console.warn("Name not found.");return;}
if (TextIndex === -1) {console.warn("Text not found.");return;}
if (ImgIndex === -1) {console.warn("Image not found.");return;}
if (ArrowIndex === -1) {console.warn("Arrow not found.");return;}
const Bg = runtimeScene.getObjects(dbbg.Bg.name)[BgIndex];
const Name = runtimeScene.getObjects(dbbg.Name.name)[NameIndex];
const Text = runtimeScene.getObjects(dbbg.Text.name)[TextIndex];
const Img = runtimeScene.getObjects(dbbg.Img.name)[ImgIndex];
const Arrow = runtimeScene.getObjects(dbbg.Arrow.name)[ArrowIndex];

Name.hide(true);
Text.hide(true);
Img.hide(true);
Arrow.hide(true);

Bg.getBehavior("Tween").addObjectWidthTween("_DialogBoxBackGround.ClosingWidth", 1, "easeInCubic", dbbg.Duration, false);
Bg.getBehavior("Tween").addObjectHeightTween("_DialogBoxBackGround.ClosingHeight", 1, "easeInCubic", dbbg.Duration, false);
Bg.getBehavior("Tween").addObjectOpacityTween("_DialogBoxBackGround.ClosingOpacity", 0, "linear", dbbg.Duration, false);
dbbg.State = "Closing";
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CloseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CloseContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.Close = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CloseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CloseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTextContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTextContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTextContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {console.warn("Must be setup first.");return;}
if (dbbg.State != "Open") {return}
const BgIndex = runtimeScene.getObjects(dbbg.Bg.name).findIndex(v => v.id === dbbg.Bg.id);
const TextIndex = runtimeScene.getObjects(dbbg.Text.name).findIndex(v => v.id === dbbg.Text.id);
if (BgIndex === -1) {console.warn("Background not found.");return;}
if (TextIndex === -1) {console.warn("Text not found.");return;}
const Bg = runtimeScene.getObjects(dbbg.Bg.name)[BgIndex];
const Text = runtimeScene.getObjects(dbbg.Text.name)[TextIndex];

const ArrowIndex = runtimeScene.getObjects(dbbg.Arrow.name).findIndex(v => v.id === dbbg.Arrow.id);
if (ArrowIndex === -1) {console.warn("Arrow not found.");return;}
const Arrow = runtimeScene.getObjects(dbbg.Arrow.name)[ArrowIndex];
Arrow.hide(true);

Text.setBBText("");
dbbg.TextBuffer = eventsFunctionContext.getArgument("Text");
dbbg.State = "Typing";
Bg.resetTimer("_DialogBoxBackGroundInterval");
Bg.unpauseTimer("_DialogBoxBackGroundInterval");
dbbg.CntFlag = true;
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTextContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeText = function(Text, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Text") return Text;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTextContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTextContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageTextContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageTextContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageTextContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {console.warn("Must be setup first.");return;}
if (dbbg.State != "Open") {return}
const BgIndex = runtimeScene.getObjects(dbbg.Bg.name).findIndex(v => v.id === dbbg.Bg.id);
const NameIndex = runtimeScene.getObjects(dbbg.Name.name).findIndex(v => v.id === dbbg.Name.id);
const TextIndex = runtimeScene.getObjects(dbbg.Text.name).findIndex(v => v.id === dbbg.Text.id);
const ImgIndex = runtimeScene.getObjects(dbbg.Img.name).findIndex(v => v.id === dbbg.Img.id);
if (BgIndex === -1) {console.warn("Background not found.");return;}
if (NameIndex === -1) {console.warn("Name not found.");return;}
if (TextIndex === -1) {console.warn("Text not found.");return;}
if (ImgIndex === -1) {console.warn("Image not found.");return;}
const Bg = runtimeScene.getObjects(dbbg.Bg.name)[BgIndex];
const Name = runtimeScene.getObjects(dbbg.Name.name)[NameIndex];
const Text = runtimeScene.getObjects(dbbg.Text.name)[TextIndex];
const Img = runtimeScene.getObjects(dbbg.Img.name)[ImgIndex];

const ArrowIndex = runtimeScene.getObjects(dbbg.Arrow.name).findIndex(v => v.id === dbbg.Arrow.id);
if (ArrowIndex === -1) {console.warn("Arrow not found.");return;}
const Arrow = runtimeScene.getObjects(dbbg.Arrow.name)[ArrowIndex];
Arrow.hide(true);

Name.setBBText(eventsFunctionContext.getArgument("Name"));
Text.setBBText("");
Img.setAnimationName(eventsFunctionContext.getArgument("Img"));
dbbg.TextBuffer = eventsFunctionContext.getArgument("Text");
dbbg.State = "Typing";
Bg.resetTimer("_DialogBoxBackGroundInterval");
Bg.unpauseTimer("_DialogBoxBackGroundInterval");
dbbg.CntFlag = true;
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageTextContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageText = function(Name, Img, Text, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Name") return Name;
if (argName === "Img") return Img;
if (argName === "Text") return Text;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageTextContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeNameImageTextContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSoundContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSoundContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSoundContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {console.warn("Must be setup first.");return;}
//runtimeScene.getSoundManager().unloadAudio()
dbbg.Se = undefined;
if (eventsFunctionContext.getArgument("Se") != "") {
    dbbg.Se = runtimeScene.getSoundManager().createHowlerSound(eventsFunctionContext.getArgument("Se"), false, 1, false, 1);
}
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSoundContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSound = function(Se, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Se") return Se;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSoundContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingSoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingIntervalContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingIntervalContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingIntervalContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {console.warn("Must be setup first.");return;}
dbbg.Interval = eventsFunctionContext.getArgument("Interval");
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingIntervalContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingIntervalContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingInterval = function(Interval, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Interval") return Interval;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingIntervalContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeTypingIntervalContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTypingContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTypingContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTypingContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {console.warn("Must be setup first.");return;}
if (dbbg.State != "Typing") {return}
const TextIndex = runtimeScene.getObjects(dbbg.Text.name).findIndex(v => v.id === dbbg.Text.id);
const ArrowIndex = runtimeScene.getObjects(dbbg.Arrow.name).findIndex(v => v.id === dbbg.Arrow.id);
if (TextIndex === -1) {console.warn("Text not found.");return;}
if (ArrowIndex === -1) {console.warn("Arrow not found.");return;}
const Text = runtimeScene.getObjects(dbbg.Text.name)[TextIndex];
const Arrow = runtimeScene.getObjects(dbbg.Arrow.name)[ArrowIndex];

Arrow.hide(true);

Text.setBBText(dbbg.TextBuffer);
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTypingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTypingContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTyping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTypingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.SkipTypingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpenContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpenContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpenContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {eventsFunctionContext.returnValue = false;return;}
eventsFunctionContext.returnValue = dbbg.State == "Open";
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpenContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpen = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpenContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsOpenContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTypingContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTypingContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTypingContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {eventsFunctionContext.returnValue = false;return;}
eventsFunctionContext.returnValue = dbbg.State == "Typing";
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTypingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTypingContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTyping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTypingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsTypingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsCloseContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsCloseContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsCloseContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {eventsFunctionContext.returnValue = false;return;}
eventsFunctionContext.returnValue = dbbg.State == "Close";
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsCloseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsCloseContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsClose = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsCloseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.IsCloseContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounterContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounterContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounterContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {eventsFunctionContext.returnValue = false;return;}
eventsFunctionContext.returnValue = dbbg.Cnt == eventsFunctionContext.getArgument("Num");
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounterContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounter = function(Num, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Num") return Num;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounterContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.CompareChangeCounterContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounterContext = {};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounterContext.GDObjectObjects1= [];


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounterContext.userFunc0x1510210 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dbbg = eventsFunctionContext.getObjects("Object")[0]._DialogBoxBackGround;
if (!dbbg) {eventsFunctionContext.returnValue = 0;return;}
eventsFunctionContext.returnValue = dbbg.Cnt;
};
gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounterContext.userFunc0x1510210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounter = function(Num, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Num") return Num;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounterContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround.prototype.ChangeCounterContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("DialogBox::DialogBoxBackGround", gdjs.evtsExt__DialogBox__DialogBoxBackGround.DialogBoxBackGround);
