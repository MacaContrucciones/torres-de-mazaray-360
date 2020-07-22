// Blueprints
const blueprints = {
    plane: {
        name: 'plane',
        image: 'assets/plane.png',
        blueprintPoints: ['diningRoom', 'terrace', 'room', 'habPpal1', 'habPpal2', 'girlHab', 'boyHab']
    }
};

// Images
const imageNames = {
    diningRoom: {
        name: 'Comedor',
        stringName: 'Comedor',
        blueprint: blueprints.plane
    },
    terrace: {
        name: 'Balcon terraza',
        stringName: 'Balcon terraza',
        blueprint: blueprints.plane
    },
    room: {
        name: 'Sala',
        stringName: 'Sala',
        blueprint: blueprints.plane
    },
    habPpal1: {
        name: 'Alcoba principal',
        stringName: 'Alcoba principal',
        blueprint: blueprints.plane
    },
    habPpal2: {
        name: 'Alcoba principal 2',
        stringName: 'Alcoba principal',
        blueprint: blueprints.plane
    },
    girlHab: {
        name: 'Alcoba 1',
        stringName: 'Alcoba 1',
        blueprint: blueprints.plane
    },
    boyHab: {
        name: 'Alcoba 2',
        stringName: 'Alcoba 2',
        blueprint: blueprints.plane
    }
};
let sceneSelected = '';

// Pannellum config
const container = document.getElementById('container');
let viewer = {};

function createViewer() {
    viewer = pannellum.viewer(container, {
        default: {
            firstScene: imageNames.diningRoom.name,
            sceneFadeDuration: 2000
        },
        scenes: {
            [imageNames.diningRoom.name]: {
                hfov: 120.0,
                yaw: 315,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/dining-room',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/dining-room/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.diningRoom.blueprint,
                gap: 90,
                hotSpots: [
                    {
                        pitch: -2,
                        yaw: 271,
                        type: 'scene',
                        text: imageNames.room.stringName,
                        sceneId: imageNames.room.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: -2,
                        yaw: 325,
                        type: 'scene',
                        text: imageNames.terrace.stringName,
                        sceneId: imageNames.terrace.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.terrace.name]: {
                hfov: 120.0,
                yaw: 340,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/terrace',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/terrace/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.terrace.blueprint,
                gap: 90,
                hotSpots: [
                    {
                        pitch: 2,
                        yaw: 132,
                        type: 'scene',
                        text: imageNames.diningRoom.stringName,
                        sceneId: imageNames.diningRoom.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 3,
                        yaw: 225,
                        type: 'scene',
                        text: imageNames.room.stringName,
                        sceneId: imageNames.room.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.room.name]: {
                hfov: 120.0,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/room',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/room/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.room.blueprint,
                gap: 90,
                hotSpots: [
                    {
                        pitch: 1,
                        yaw: 50,
                        type: 'scene',
                        text: imageNames.diningRoom.stringName,
                        sceneId: imageNames.diningRoom.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 340,
                        type: 'scene',
                        text: imageNames.terrace.stringName,
                        sceneId: imageNames.terrace.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 228,
                        type: 'scene',
                        text: imageNames.habPpal1.stringName,
                        sceneId: imageNames.habPpal1.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.habPpal1.name]: {
                hfov: 120.0,
                yaw: 210,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/hab-ppal-1',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/hab-ppal-1/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.habPpal1.blueprint,
                gap: 90,
                hotSpots: [
                    {
                        pitch: -3,
                        yaw: 263,
                        type: 'scene',
                        text: imageNames.habPpal2.stringName,
                        sceneId: imageNames.habPpal2.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 15,
                        type: 'scene',
                        text: imageNames.boyHab.stringName,
                        sceneId: imageNames.boyHab.name,
                        cssClass: 'hot-spot'
                    },
                    {
                        pitch: 0,
                        yaw: 40,
                        type: 'scene',
                        text: imageNames.girlHab.stringName,
                        sceneId: imageNames.girlHab.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.habPpal2.name]: {
                hfov: 120.0,
                yaw: 130,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/hab-ppal-2',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/hab-ppal-2/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.habPpal2.blueprint,
                gap: 90,
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: 81,
                        type: 'scene',
                        text: imageNames.habPpal1.stringName,
                        sceneId: imageNames.habPpal1.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.girlHab.name]: {
                hfov: 120.0,
                yaw: 30,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/girl-hab',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/girl-hab/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.girlHab.blueprint,
                gap: 90,
                hotSpots: [
                    {
                        pitch: 3,
                        yaw: 155,
                        type: 'scene',
                        text: imageNames.room.stringName,
                        sceneId: imageNames.room.name,
                        cssClass: 'hot-spot'
                    }
                ]
            },
            [imageNames.boyHab.name]: {
                hfov: 120.0,
                yaw: 340,
                type: 'multires',
                multiRes: {
                    basePath: './assets/multires/boy-hab',
                    path: '/%l/%s%y_%x',
                    fallbackPath: './assets/multires/boy-hab/fallback/%s',
                    extension: 'jpg',
                    tileResolution: 512,
                    maxLevel: 4,
                    cubeResolution: 2600
                },
                blueprint: imageNames.boyHab.blueprint,
                gap: 90,
                hotSpots: [
                    {
                        pitch: -1,
                        yaw: 178,
                        type: 'scene',
                        text: imageNames.habPpal1.stringName,
                        sceneId: imageNames.habPpal1.name,
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
    const shButtons = document.getElementById('sh-buttons');
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
        shButtons.style.display = 'none';
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
    let stringCurrentScene = currentScene;
    for (const image in imageNames) {
        if (imageNames.hasOwnProperty(image)) {
            const element = imageNames[image];
            let div = document.createElement('div');
            div.setAttributeNS(null, 'id', element.name);
            if (currentScene === element.name) {
                stringCurrentScene = element.stringName;
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
            div.innerHTML += element.stringName;
        }
    }
    document.getElementById('screens-title').innerHTML = stringCurrentScene;
    document.getElementById('mobile-screens-title').innerHTML = stringCurrentScene;
}
function loadScene(sceneId) {
    if (sceneId !== viewer.getScene()) {
        viewer.loadScene(sceneId);
        setScene(sceneId);
    }
}
function setScene(sceneId) {
    const currentScene = document.getElementById(sceneSelected);
    currentScene.setAttributeNS(null, 'class', 'screen-item');
    const newScene = document.getElementById(sceneId);
    newScene.setAttributeNS(null, 'class', 'screen-item screen-selected');
    document.getElementById('screens-title').innerHTML = newScene.innerHTML;
    document.getElementById('mobile-screens-title').innerHTML = newScene.innerHTML;
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
                label.innerHTML = imageNames[point].stringName;
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
function openLink(link) {
    window.open(link);
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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.screens-header') && !event.target.matches('.screens-toggle') && !event.target.matches('#screens-title')) {
        const screensList = document.getElementById('screens-list');
        screensList.style.display = 'none';
        const width = document.body.clientWidth;
        if (width < 600 && !event.target.matches('#mobile-screens-title') && !event.target.matches('#mobile-screens-toggle')) {
            const screensList = document.getElementById('mobile-screens-list');
            screensList.style.display = 'none';
        }
    }
    // if (!event.target.matches('#sh-button') && !event.target.matches('#sh-image')) {
    //     const shButtons = document.getElementById('sh-buttons');
    //     if (shButtons.style.display === 'block') {
    //         shButtons.style.display = 'none';
    //     }
    // }
}

createViewer();
createScreenList();
isOrientationSupported();
addBlueprintPoints();
createBlueprintImage();
setBlueprintImage();
mobileSetHfov();


