(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"loading_atlas_1", frames: [[689,697,102,112],[0,811,467,128],[469,925,531,88],[0,607,902,88],[0,697,687,112],[469,811,471,112],[0,0,821,605],[942,0,58,49]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["loading_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(86.8,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,233.5,64);
p.frameBounds = [rect];


(lib.player = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1();
	this.instance.setTransform(0,0,2.2423,2.2423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,130.1,109.9);
p.frameBounds = [rect];


(lib.infoStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(74.15,99.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-9.85,56.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(38.8,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.8,0,451,302.5);
p.frameBounds = [rect];


(lib.bubble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABVCJQgIgGgHgKIgMgSQgcgwgqgmQgqgkg0gZIgVgKQgKgGgHgIQgHgJgCgMQgCgMAEgKQAEgLAJgIQAJgIALgDQATgFAYAKIATALIATAMIAbAPIAYAPQANAJAYAYQAfAeASAUQAZAcAQAcQANAWAAAQQABANgGALQgGAMgLAHQgLAHgNAAQgNAAgKgHg");
	this.shape.setTransform(121.6686,56.6194);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#47B2B2").s().p("AD4EoQg+gCg+ACIg7ABQghAAgagEQhNgMhNg6QgfgXghgiQgYgWgkgnQgogsgQgZQgUgegRgoQgLgbgQgwIgMgpQgFgXgBgTQgBgWAGgUQAGgWAOgPQAXgaAnABQAnAAAWAbQANAPAHAXQADAIAJAjQAXBYA5BLQA4BJBOAvQAfATAXAEQARAEAegBICIgBQAigBANgBIAggHQATgDANAAQAfACAXAZQAXAXACAfQACAfgRAcQgSAbgdAMQgUAJgdABIgJAAIgrgBg");
	this.shape_1.setTransform(80.8085,116.5794);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60EFEF").s().p("AmdGdQiriqAAjzQAAjxCrisQCsirDxAAQDzAACqCrQCsCsAADxQAADzisCqQiqCsjzAAQjxAAisisgABvIFQAmACAOgBQAdgCAUgIQAdgMASgbQASgdgDgeQgCgfgXgXQgWgZgggCQgNAAgSADIghAGQgNACghABIiHAAQgfACgQgEQgYgFgggSQhOgvg4hLQg4hKgYhYQgIgjgEgHQgHgXgNgPQgWgbgngBQgnAAgXAaQgOAPgGAWQgGASABAXQABATAFAWIANAqQAQAwALAbQAQApAUAeQAQAYAoAtQAkAmAYAXQAhAhAgAYQBMA5BOANQAaAEAhAAIA7gBIA2gBIBFABgACYoIQgKADgKAIQgIAIgEALQgEALACALQACAMAHAJQAHAIAKAGIAVAKQA0AZApAlQAsAmAcAwIALATQAIAKAHAFQALAHANAAQANAAALgHQALgHAFgLQAHgMgBgNQgBgQgNgWQgPgcgZgcQgSgVgfgdQgYgZgNgJIgagPIgagPIgTgMIgUgLQgPgHgPAAQgGAAgHACg");
	this.shape_2.setTransform(94.5,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bubble, rect = new cjs.Rectangle(36,36,117,117), [rect]);


(lib.border = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,51,204,0.878)").ss(45,1,1).p("EhLxgxwMCXjAAAMAAABjhMiXjAAAg");
	this.shape.setTransform(484.975,318.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-22.5,1015,682);
p.frameBounds = [rect];


(lib.gameInfo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Button
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(203.2,235.6,1,1,0,0,0,116.8,32);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("ASQAAQAACFlWBdQlWBenkAAQnjAAlWheQlWhdAAiFQAAiEFWhdQFWheHjAAQHkAAFWBeQFWBdAACEg");
	this.shape.setTransform(221.6,145.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.start}]}).to({state:[]},1).to({state:[]},4).wait(10));

	// Info
	this.instance = new lib.infoStart("synched",0);
	this.instance.setTransform(205.2,151.2,1,1,0,0,0,205.2,151.2);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(96.15,114,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},5).to({state:[]},4).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.8,0,451,302.5);
p.frameBounds = [rect, rect=null, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,410.5,302.5), rect, rect, rect, rect=null, rect, rect, rect, rect];


// stage content:
(lib.loading = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let root = this;
		let gamePlaying = false; //Is the game currently active?
		let isHit = false; //Has the player hit a bubble
		let bubbleList = [root.bubble1, root.bubble2, root.bubble3, root.bubble4, root.bubble5, root.bubble6]; //Bubble "storage"
		
		root.gameInfo.start.addEventListener("click", hideInfo); //Game info start button
		createjs.Ticker.on("tick", gameLoop);
		
		function hideInfo() { //Opening window
			root.gameInfo.visible = false;
			console.log("Window hid");
			gamePlaying = true;
		
			if (isHit == true) { //If hit end game
				root.gameInfo.gotoAndPlay("end");
			}
		}
		
		this.player.on("pressmove", moveBear) //For movement
		function moveBear(e) {
			e.currentTarget.x = e.stageX;
			e.currentTarget.y = e.stageY;
		}
		
		function moveBubble() {
			//Get a bubble in the array, then randomize its movement across the screen
			if (gamePlaying == true) { //Start the real game!
				for (let i = 0; i < bubbleList.length; i++) {
					//console.log("got bubble");
					bubbleList[i].y += (Math.random() * 5) + 5;
					if (bubbleList[i].y > 700) { //is it out of Y bounds
						bubbleList[i].y = -200;
						bubbleList[i].x += (Math.random() * 600) + 0; //Change X
					}
					if (bubbleList[i].x > 900) { //is it out of X bounds
						bubbleList[i].x = -200;
						bubbleList[i].y += (Math.random() * 600) + 0; //Change X
					}
				}
			}
		
		}
		function gameLoop() {
			//console.log("tick");
			moveBubble();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.instance = new lib.border("synched",0);
	this.instance.setTransform(485.9,320.45,1,1,0,0,0,484.9,318.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gameInfo
	this.gameInfo = new lib.gameInfo("synched",0);
	this.gameInfo.name = "gameInfo";
	this.gameInfo.setTransform(463.6,326.4,1,1,0,0,0,205.2,151.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("EggDgXnMBAHAAAMAAAAvPMhAHAAAg");
	this.shape.setTransform(463.6,326.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.gameInfo}]}).wait(1));

	// bubbles
	this.bubble2 = new lib.bubble();
	this.bubble2.name = "bubble2";
	this.bubble2.setTransform(1017.9,438.35,1,1,0,0,0,94.5,94.5);

	this.bubble5 = new lib.bubble();
	this.bubble5.name = "bubble5";
	this.bubble5.setTransform(146.95,383.35,1,1,0,0,0,94.5,94.5);

	this.bubble4 = new lib.bubble();
	this.bubble4.name = "bubble4";
	this.bubble4.setTransform(371.95,297.45,1,1,0,0,0,94.5,94.5);

	this.bubble1 = new lib.bubble();
	this.bubble1.name = "bubble1";
	this.bubble1.setTransform(811.5,97.45,1,1,0,0,0,94.5,94.5);

	this.bubble3 = new lib.bubble();
	this.bubble3.name = "bubble3";
	this.bubble3.setTransform(64.5,58.5,1,1,0,0,0,94.5,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bubble3},{t:this.bubble1},{t:this.bubble4},{t:this.bubble5},{t:this.bubble2}]}).wait(1));

	// player
	this.player = new lib.player("synched",0);
	this.player.name = "player";
	this.player.setTransform(495.45,324.9,1,1,0,0,0,65,54.9);

	this.timeline.addTween(cjs.Tween.get(this.player).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(458.5,299.6,1097.9,682);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '3262C5C47311444EB595EDF4EEABE735',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/loading_atlas_1.png", id:"loading_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3262C5C47311444EB595EDF4EEABE735'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;