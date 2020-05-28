// Blueprints
const blueprints = {
    firstFloor: {
        name: 'firstFloor',
        image: 'assets/first-floor.png',
        blueprintPoints: ['room', 'aisle', 'mainRoom', 'Kitchen', 'auxiliaryRoom']
    }
};

// Images
const imageNames = {
    room: {
        name: 'Sala',
        image: 'assets/1.jpg',
        blueprint: blueprints.firstFloor
    },
    aisle: {
        name: 'Pasillo',
        blueprint: blueprints.firstFloor
    },
    mainRoom: {
        name: 'Habitación principal',
        blueprint: blueprints.firstFloor
    },
    Kitchen: {
        name: 'Cocina',
        blueprint: blueprints.firstFloor
    },
    auxiliaryRoom: {
        name: 'Cuarto auxiliar',
        blueprint: blueprints.firstFloor
    }
};
let sceneSelected = '';

// Pannellum config
const container = document.getElementById('container');
let viewer = {};

function createViewer() {
    viewer = pannellum.viewer(container, {
        default: {
            firstScene: imageNames.room.name,
            sceneFadeDuration: 2000
        },
        scenes: {
            [imageNames.room.name]: {
                hfov: 100.0,
                type: 'multires',
                maxHfov: 100,
                multiRes: {
                    basePath: './assets/multires/1',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/1/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.room.blueprint,
                gap: 0,
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: 120,
                        type: 'scene',
                        text: imageNames.aisle.name,
                        sceneId: imageNames.aisle.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 222,
                        type: 'scene',
                        text: imageNames.mainRoom.name,
                        sceneId: imageNames.mainRoom.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 270,
                        type: 'scene',
                        text: imageNames.Kitchen.name,
                        sceneId: imageNames.Kitchen.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 140,
                        type: 'scene',
                        text: imageNames.auxiliaryRoom.name,
                        sceneId: imageNames.auxiliaryRoom.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.aisle.name]: {
                hfov: 100.0,
                type: 'multires',
                maxHfov: 100,
                multiRes: {
                    basePath: './assets/multires/2',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/2/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.aisle.blueprint,
                gap: 0,
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: 300,
                        type: 'scene',
                        text: imageNames.room.name,
                        sceneId: imageNames.room.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 252,
                        type: 'scene',
                        text: imageNames.mainRoom.name,
                        sceneId: imageNames.mainRoom.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 180,
                        type: 'scene',
                        text: imageNames.auxiliaryRoom.name,
                        sceneId: imageNames.auxiliaryRoom.name,
                        cssClass: 'hot-spot'
                    },
                ]
            },
            [imageNames.mainRoom.name]: {
                hfov: 100.0,
                type: 'multires',
                maxHfov: 100,
                multiRes: {
                    basePath: './assets/multires/3',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/3/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.mainRoom.blueprint,
                gap: 0,
                hotSpots: [
                    {
                        pitch: 3,
                        yaw: 60,
                        type: 'scene',
                        text: imageNames.room.name,
                        sceneId: imageNames.room.name,
                        cssClass: 'hot-spot'
                    },
                ]
            },
            [imageNames.Kitchen.name]: {
                hfov: 100.0,
                type: 'multires',
                maxHfov: 100,
                multiRes: {
                    basePath: './assets/multires/4',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/4/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.Kitchen.blueprint,
                gap: 0,
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: 90,
                        type: 'scene',
                        text: imageNames.room.name,
                        sceneId: imageNames.room.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.auxiliaryRoom.name]: {
                hfov: 100.0,
                type: 'multires',
                maxHfov: 100,
                multiRes: {
                    basePath: './assets/multires/5',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/5/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.auxiliaryRoom.blueprint,
                gap: 0,
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: 35,
                        type: 'scene',
                        text: imageNames.aisle.name,
                        sceneId: imageNames.aisle.name,
                        cssClass: 'hot-spot'
                    }
                ]
            }
        },
        showControls: false,
        autoLoad: true,
        autoRotate: -5,
        backgroundColor: [255, 255, 255]
    });
    sceneSelected = viewer.getScene();
    viewerEvents();
}

function viewerEvents() {
    viewer.on('load', () => {
        setBlueprintImage();
    });
    viewer.on('animatefinished', (coordinates) => {
        const pause = document.getElementById('pause');
        pause.style.display = 'none';
        const play = document.getElementById('play');
        play.style.display = 'inline-block';
    });
    viewer.on('scenechangefadedone', () => {
        setScene(viewer.getScene());
        autoRotate = true;
        const play = document.getElementById('play');
        play.style.display = 'none';
        const pause = document.getElementById('pause');
        pause.style.display = 'inline-block';

    });
    viewer.on('animateStart', (coordinates) => {
        const path = document.getElementById('svg-guide-path');
        if (path) {
            path.setAttributeNS(null, 'd', generateSvgPath());
        }
    });
    viewer.on('scenechange', () => {
        mobileSetHfov();
    });
}

function generateSvgPath() {
    const d2r = Math.PI / 180;
    const fov = viewer.getHfov();
    let pan = viewer.getYaw();
    const config = viewer.getConfig();
    pan = config.gap + pan;
    let arcX1 = 50 * Math.cos((pan - fov / 2) * d2r);
    let arcY1 = 50 * Math.sin((pan - fov / 2) * d2r);
    let arcX2 = 50 * Math.cos((pan + fov / 2) * d2r);
    let arcY2 = 50 * Math.sin((pan + fov / 2) * d2r);
    arcX1 += 50;
    arcY1 += 50;
    arcX2 += 50;
    arcY2 += 50;
    return 'M50,50 L' + arcX1 + ',' + arcY1 + ' A 50 50 0 0 1 ' + arcX2 + ' ' + arcY2 + ' Z';
}



// CONTROLS FUNCTIONS
function moveUp() {
    viewer.setPitch(viewer.getPitch() + 10);
}
function moveDown() {
    viewer.setPitch(viewer.getPitch() - 10);
}
function moveLeft() {
    viewer.setYaw(viewer.getYaw() - 10);
}
function moveRight() {
    viewer.setYaw(viewer.getYaw() + 10);
}

function zoomIn() {
    viewer.setHfov(viewer.getHfov() - 10);
}
function zoomOut() {
    viewer.setHfov(viewer.getHfov() + 10);
}
function fullscreen() {
    viewer.toggleFullscreen();
}

function toggleControls() {
    const controls = document.getElementById('controls');
    const showControls = document.getElementById('show-controls');
    const banners = document.getElementById('banners');
    const actionButtons = document.getElementById('action-buttons');
    const blueprints = document.getElementById('blueprints');
    if (controls.style.display === 'none') {
        controls.style.display = 'block';
        showControls.style.display = 'none';
        banners.style.display = 'block';
        actionButtons.style.display = 'flex';
    } else {
        controls.style.display = 'none';
        showControls.style.display = 'block';
        banners.style.display = 'none';
        actionButtons.style.display = 'none';
        blueprints.style.display = 'none';
    }
}
function mobileToggleControls() {
    const actionButtons = document.getElementById('action-buttons');
    const showButton = document.getElementById('show-action-container');
    const blueprints = document.getElementById('blueprints');
    const mobileSelect = document.getElementById('mobile-select-screens');
    const cMobileUImage = document.getElementById('container-mobile-urbanization-image');
    if (actionButtons.style.display === 'none') {
        actionButtons.style.display = 'flex';
        showButton.style.display = 'none';
        mobileSelect.style.display = 'block';
        cMobileUImage.style.display = 'block';
    } else {
        actionButtons.style.display = 'none';
        showButton.style.display = 'block';
        blueprints.style.display = 'none';
        mobileSelect.style.display = 'none';
        cMobileUImage.style.display = 'none';
    }
}

function startAutoRotate() {
    viewer.startAutoRotate(-5, viewer.getPitch());
    const play = document.getElementById('play');
    play.style.display = 'none';
    const pause = document.getElementById('pause');
    pause.style.display = 'inline-block';
}
function stopAutoRotate() {
    viewer.stopAutoRotate();
    const pause = document.getElementById('pause');
    pause.style.display = 'none';
    const play = document.getElementById('play');
    play.style.display = 'inline-block';
}


/**
 * SCENE FUNCTIONS
 */
function toggleScreenList() {
    const screensList = document.getElementById('screens-list');
    screensList.style.display = screensList.style.display === 'none' || !screensList.style.display ? 'flow-root' : 'none';
}
function toggleMobileScreenList() {
    const screensList = document.getElementById('mobile-screens-list');
    screensList.style.display = screensList.style.display === 'none' || !screensList.style.display ? 'flow-root' : 'none';
}

function createScreenList() {
    const screensList = document.getElementById('screens-list');
    const mobileScreensList = document.getElementById('mobile-screens-list');
    const currentScene = viewer.getScene();
    for (const image in imageNames) {
        if (imageNames.hasOwnProperty(image)) {
            const element = imageNames[image];
            let div = document.createElement('div');
            div.setAttributeNS(null, 'id', element.name);
            if (currentScene === element.name) {
                div.setAttributeNS(null, 'class', 'screen-item screen-selected');
            } else {
                div.setAttributeNS(null, 'class', 'screen-item');
            }
            if (screen.width > 600) {
                div.addEventListener('click', () => loadScene(element.name) & toggleScreenList());
                screensList.appendChild(div);
            } else {
                div.addEventListener('click', () => loadScene(element.name) & toggleMobileScreenList());
                mobileScreensList.appendChild(div);
            }
            div.innerHTML += element.name;
        }
    }
    document.getElementById('screens-title').innerHTML = currentScene;
    document.getElementById('mobile-screens-title').innerHTML = currentScene;
}
function loadScene(sceneId) {
    if (sceneId !== viewer.getScene()) {
        viewer.loadScene(sceneId);
        setScene(sceneId);
    }
}
function setScene(sceneId) {
    document.getElementById('screens-title').innerHTML = sceneId;
    document.getElementById('mobile-screens-title').innerHTML = sceneId;
    const currentScene = document.getElementById(sceneSelected);
    currentScene.setAttributeNS(null, 'class', 'screen-item');
    document.getElementById(sceneId).setAttributeNS(null, 'class', 'screen-item screen-selected');
    sceneSelected = viewer.getScene();
}

/**
 * BLUEPRINT FUNCTIONS
 */
function createBlueprintImage() {
    const blueprints = document.getElementById('blueprints');
    let img = document.createElement('img');
    img.setAttributeNS(null, 'id', 'blueprint-image');
    blueprints.appendChild(img);
}
function setBlueprintImage() {
    const config = viewer.getConfig();
    const img = document.getElementById('blueprint-image');
    img.setAttributeNS(null, 'src', config.blueprint.image);
    for (const i in blueprints) {
        if (blueprints.hasOwnProperty(i)) {
            const blueprint = blueprints[i];
            if (blueprint.name !== config.blueprint.name) {
                document.getElementById(blueprint.name).style.display = 'none';
            } else {
                document.getElementById(blueprint.name).style.display = 'block';
            }
        }
    }
    const point = document.getElementsByName(viewer.getScene());
    const svgGuide = document.getElementById('svg-rotate-viewer');
    svgGuide.style.left = point[0].offsetLeft - 46 + 'px';
    svgGuide.style.top = point[0].offsetTop - 45 + 'px';
}
function addBlueprintPoints() {
    const divBlueprints = document.getElementById('blueprints');
    for (const i in blueprints) {
        if (blueprints.hasOwnProperty(i)) {
            const blueprint = blueprints[i];
            let container = document.createElement('div');
            container.setAttributeNS(null, 'id', blueprint.name);
            container.style.display = 'none';
            for (const point of blueprint.blueprintPoints) {
                let divPoint = document.createElement('div');
                divPoint.setAttributeNS(null, 'id', point);
                divPoint.setAttributeNS(null, 'name', imageNames[point].name);
                divPoint.setAttributeNS(null, 'class', 'blueprints-button');
                divPoint.addEventListener('click', () => loadScene(imageNames[point].name));
                let label = document.createElement('label');
                label.setAttributeNS(null, 'class', 'blueprints-label');
                label.innerHTML = imageNames[point].name;
                divPoint.appendChild(label);
                container.appendChild(divPoint);
            }
            divBlueprints.appendChild(container);
        }
    }
}
function toggleBlueprints() {
    const blueprints = document.getElementById('blueprints');
    if (blueprints.style.display !== 'block') {
        blueprints.style.display = 'block';
        const point = document.getElementsByName(viewer.getScene());
        const svgGuide = document.getElementById('svg-rotate-viewer');
        svgGuide.style.left = point[0].offsetLeft - 46 + 'px';
        svgGuide.style.top = point[0].offsetTop - 45 + 'px';
        svgGuide.style.visibility = 'visible';
    } else {
        blueprints.style.display = 'none';
    }
}

/**
 * ORIENTATION FUNCTIONS
 */
function isOrientationSupported() {
    // alert(viewer.isOrientationSupported())
    if (viewer.isOrientationSupported()) {
        // document.getElementById('screens-title').innerHTML = sceneId;;
        // play.style.display = 'inline-block';
    }
}
function startOrientation() {
    if (!viewer.isOrientationActive()) {
        viewer.startOrientation();
        const orientationActive = document.getElementById('orientation-active');
        orientationActive.style.display = 'none';
        const orientationStop = document.getElementById('orientation-stop');
        orientationStop.style.display = 'inline-block';
    }
}
function stopOrientation() {
    if (viewer.isOrientationActive()) {
        viewer.stopOrientation();
        const orientationActive = document.getElementById('orientation-active');
        orientationActive.style.display = 'inline-block';
        const orientationStop = document.getElementById('orientation-stop');
        orientationStop.style.display = 'none';
    }
}

/**
 * SH FUNCTIONS
 */
function toggleShButtons() {
    const shButtons = document.getElementById('sh-buttons');
    if (shButtons.style.display !== 'block') {
        shButtons.style.display = 'block';
    } else {
        shButtons.style.display = 'none';
    }
    const blueprints = document.getElementById('blueprints');
    blueprints.style.display = 'none';
}
function shFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
}
function shTwitter() {
    window.open('https://twitter.com/intent/tweet?url=' + location.href);
}

// Bootstrap social tooltip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    // document.getElementById('facebook').setAttributeNS(null, 'href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
    // document.getElementById('twitter').setAttributeNS(null, 'href', 'https://twitter.com/intent/tweet?url=' + window.location.href);
});

// Mobile functions
function mobileSetHfov() {
    const width = document.body.clientWidth;
    if (width < 600) {
        viewer.setHfov(80);
    }
}


createViewer();
createScreenList();
isOrientationSupported();
addBlueprintPoints();
createBlueprintImage();
setBlueprintImage();
mobileSetHfov();


