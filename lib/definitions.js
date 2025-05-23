/*
An ignorance a sunset
confer upon the eye
of territory-color
circumference-decay

its amber revelation
exhilirate-debase
omnipotence' inspection
of our inferior face

and when the solemn features 
confirm in victory
we start as if detected  
in immortality 
*/

// GUN DEFINITIONS
const combineStats = function(arr) {
    try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
        for (let i=0; i<data.length; i++) {
            data[i] = data[i] * component[i];
        }
    });
    return { 
        reload:     data[0], 
        recoil:     data[1],   
        shudder:    data[2],
        size:       data[3],
        health:     data[4], 
        damage:     data[5],
        pen:        data[6],
        speed:      data[7],
        maxSpeed:   data[8],
        range:      data[9], 
        density:    data[10], 
        spray:      data[11],
        resist:     data[12],
    }; 
    } catch(err) {
        console.log(err);
        console.log(JSON.stringify(arr));
    }
};
const skillSet = (() => {
    let config = require('../config.json');
    let skcnv = {
        rld: 0,
        pen: 1,
        str: 2,
        dam: 3,
        spd: 4,
    
        shi: 5,
        atk: 6,
        hlt: 7,
        rgn: 8,
        mob: 9,
    }; 
    return args => {
        let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let s in args) {
            if (!args.hasOwnProperty(s)) continue;
            skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
        }
        return skills;
    };  
})();
const g = { // Gun info here 
    trap:               [36,    1,     0.25,   0.6,    1,      0.75,   1,      5,      1,      1,      1,      15,     3], 
    swarm:              [18,    0.25,  0.05,   0.4,    1,      0.75,   1,      4,      1,      1,      1,      5,      1],  
    drone:              [50,    0.25,  0.1,    0.6,    1,      1,      1,      2,      1,      1,      1,      0.1,    1], 
    factory:            [60,    1,     0.1,    0.7,    1,      0.75,   1,      3,      1,      1,      1,      0.1,    1], 
    basic:              [18,    1.4,   0.1,    1,      1,      0.75,   1,      4.5,    1,      1,      1,      15,     1],  
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    blank:              [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
  
    aaaaa:              [1.4,   1,     1,      1,      1,      1,      1,      1.15,   1.2,    1,      1,      1,      1],
    aaaab:              [20,    1,     1,      2,      1000,   0.01,   50,     1,      1,      2,      1,      1,      10],
    aaaac:              [35,    1,     1,      1,      1000,   1000,   1000,   20,     20,     1000,   1000,   0.0001, 1000],
    aaaad:              [1.2,   0,     1,      1,      1,      1,      1,      0.9,    1,      1,      1,      1,      1],
    aaaae:              [0.8,   1,     1,      1,      1,      1.8,    0.6,    1.3,    1.25,   1.5,    1,      360,    1],
    aaaaf:              [0.1,   1,     1,      1,      1,      1.5,    1,      0.8,    1,      1.5,    1,      2.5,    1],
    aaaag:              [0.8,   0.2,   1,      1.1,    2,      3,      10,     1.2,    1.2,    1,      1.5,    1.01,   1.1],
    aaaah:              [0.2,   4,     1,      0.5,    1,      1.5,    5,      1.5,    1.5,    1.5,    1,      1,      1],
    aaaai:              [1.6,   1.2,   1,      1.3,    2,      2.5,    3.5,    1.8,    2,      1.5,    1.8,    1,      1],
    aaaaj:              [4,     0.5,   1,      1.1,    1e30,  1e308,  1e30,    5.3,    5.5,    1,      1e30,   5,      1e30],
    aaaak:              [1,     1,     1,      1,      1,      15,     1,      3,      1,      1,      1,      1,      1],
    aaaal:              [1.3,   3,     1,      1,      1,      1,      0.8,    1,      1,      1,      1,      2,      1],
    aaaam:              [1,     1,     1,      0.5,    1,      1,      1,      1,      1,      1,      1,      1,      1],
    aaaan:              [4,     1,     1,      3,      5,      1,      1,      3.5,    1,      3,      1,      1,      1],
    aaaao:              [1,     3,     1,      3,      1,      0,      1,      0,      1,      0.1,    1,      1,      1],
    blast:              [0.8,   0.9,   1.1,    0.9,    0.9,    1,      1,      1.05,   1,      0.95,   1,      1.1,    1],
    block:              [1.1,   2,     0.1,    1.5,    2,      1,      1.25,   1.5,    2.5,    1.25,   1,      1,      1.25],
    chain:              [1.25,  1.33,  0.8,    1,      0.8,    1,      1.1,    1.25,   1.25,   1.1,    1.25,   0.5,    1.1],
    churn:              [1.6,   0.8,   0.9,    1,      0.8,    0.7,    0.9,    1,      1,      1,      1,      0.0001, 1],
    crazy:              [0.5,   1,     1,      1.3,    1,      0.7,    1,      2,      1.5,    1,      1,      10,      1],
    decim:              [1.15,  1.2,   1,      1.32,   1.2,    1.1,    1.1,    1,      1,      1.05,   1.2,    1,      1],
    dieof:              [61,    0.01,  1,      18,     1,      1,      1,      0,      1,      1.3,    1,      1,      1],
    flame:              [0.9,   0.9,   1.2,    0.8,    0.8,    0.75,   1,      0.8,    0.8,    0.45,   1,      1.3,    1],
    flank:              [1,     1.2,   1,      1,      1.02,   1,      1,      1,      0.85,   1,      1.2,    1,      1],
    ifgtj:              [10,    0.55,  1,      1.4,    1,      2,      1,      3,      1,      0.7,    1,      2.5,      1],
    indfk:              [1.3,   1.5,   1,      1,      2,      2,      2,      4,      1,      2,      1.4,    0.1,    1.1],
    joefv:              [1,     0,     1,      10,     2,      1,      1,      1,      1,      1,      1,      1,      1],
    minin:              [1.25,  0.6,   1,      0.8,    1,      1.4,    1.25,   1.33,   1.5,    1,      1.25,   0.00001, 1.1],
    ojrkf:              [2,     3.75,  1,      1.2,    1.5,    2.6,    1.3,    1,      1,      1,      1,      1.4,    1],
    pound:              [2,     1.6,   1,      1,      1,      2,      1,      0.85,   0.8,    1,      1.5,    1,      1.15],
    power:              [1,     1,     0.6,    1.2,    1,      1,      1.25,   2,      1.7,    1,      2,      0.5,    1.5], 
    ppppp:              [0.05,  0,     0.01,   0,      2,      2,      2,   0.01,      0.8,    0.09,   1.5,    1.5,      1],
    preda:              [13,    1,     1,      0.8,    1.5,    1.4,    1.2,    1.3,    1.5,    1,      1,      1,      1.2],
    psstf:              [1,     -1,    1,      1,      1,      1.8e308,10,     1,      1,      1,      1,      1.5,      1],
    qftlm:              [1,     1,     1,      1,      50,     1,      1,      1,      1,     50,      1,      1,      1],
    quint:              [1.5,   0.667, 0.9,    1,      1,      1,      0.9,    1,      1,      1,      1.1,    0.9,    0.95], 
    rcnnn:              [22,    1,     1.5,    1,      2,      5,      1,      0,      1,      0.2,    1,      0.1,    1],
    rcnno:              [22,    1,     1.5,    1,      2,      5,      1,      1,      1,      1,      1,      0.1,    1],
    remds:              [15,    10,    1,      1,      5,      5,      5,      5,      1,      1,      1,      0.01,   2],
    rifle:              [0.8,   0.8,   1.5,    1,      0.8,    0.8,    0.9,    1,      1,      1,      1,      2,      1], 
    snake:              [0.4,   1,     4,      1,      1.5,    0.9,    1.2,    0.2,    0.35,   1,      3,      6,      0.5], 
    swwww:              [15,    7,     2,      1.5,    5,      1,      2,      1.8,    1,      3,      2,      1,      1.2], 
    swwwx:              [2,     3,     1,      1.1,    1,      1,      1,      0,      1,      1,      1,      3,      1],
    swwwy:              [2,     3,     1,      0.6,    1,      1,      1,      0,      1,      1,      1,      3,      1],
    tujsl:              [1,     1,     1,      2,      1,      0,      2,      0,      1,      0.06,   1,      0.1,    1],
    tujsm:              [1,     8,     1,      2,      1,      0,      2,      0,      1,      0.06,   1,      0.1,    1],
    tujsn:              [1,     4,     1,      2,      1,      0,      2,      0,      1,      0.06,   1,      0.1,    1],
    uudhu:              [1.5,   2,     1,      0.8,    5,      3,      0.1,    2.8,    1,      2,      1.5,    0.01,   1.2],
    zrjeg:              [1,     0,     1,      1,      0.03,   1,      4,      8,      1,      1,      1,      0.1,    1.2],
    zrjeh:              [1,     8,     1,      1,      0.03,   1,      4,      8,      1,      1,      1,      0.1,    1.2],
    zrjei:              [1,     4,     1,      1,      0.03,   1,      4,      8,      1,      1,      1,      0.1,    1.2],
    zzzzi:              [1.75,  1.25,  1,      0.6,    2,      1.25,   2.25,   1,      1.5,    1.5,    1.25,    1,      1],
    zzzzq:              [3.5,   1,     2,      1.5,    2,      2,      2,      2,      1,      1,      1,      1,      1.25],
  
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    nospray:            [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      360,    1],
    fullspray:          [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      0.0001, 1],
    lilspray:           [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      2,      1],
    healing:            [1,     1,     1,      1,      1,      -2,     1,      1,      1,      1,      1,      1,      1],
    boombaby:           [1,     -5,    1,      1.5,    1,      0.001,  0,      3,      3,      10,     1000,   1,      100],
        spam:           [1.1,   1,     1,      1.05,   1,      1.1,    1,      0.9,    0.7,    1,      1,      1,      1.05],      
        minion:         [1,     1,     2,      1,      0.4,    0.4,    1.2,    1,      1,      0.75,   1,      2,      1],      
        single:         [0.8,   1,     1,      1,      1,      2,      0.3,    1.5,    1,      1,      1,      1,      1],  
    sniper:             [1.35,  1,     0.25,   1,      1,      0.8,    1.1,    1.5,    1.5,    1,      1.5,    0.2,    1.15], 
        assass:         [1.65,  1,     0.25,   1,      1.15,   1,      1.1,    1.18,   1.18,   1,      3,      1,      1.3],
        knockb:         [1.5,   1,     0.25,   1,      1.15,   0.7,    0.1,    2,      2.5,    1.4,    100,    0.01,   25],
        knockb7:        [1,     1,     0.25,   1,      1,      0.7,    0.05,   1,      1,      1,      10,     0.01,   1],
        hunter:         [1.5,   0.7,   1,      0.95,   1,      0.9,    1,      1.1,    0.8,    1,      1.2,    1,      1.15], 
            hunter2:    [1,     1,     1,      0.9,    2,      0.5,    1.5,    1,      1,      1,      1.2,    1,      1.1], 
            sidewind:   [1.5,   2,     1,      1,      1.5,    0.9,    1,      0.15,   0.5,    1,      1,      1,      1],  
            snakeskin:  [0.6,   1,     2,      1,      0.5,    0.5,    1,      1,      0.2,    0.4,    1,      5,      1],
    mach:               [0.5,   0.8,   1.7,    1,      0.7,    0.7,    1,      1,      0.8,    1,      1,      2.5,    1],
        blaster:        [1,     1.2,   1.25,   1.1,    1.5,    1,      0.6,    0.8,    0.33,   0.6,    0.5,    1.5,    0.8], 
        mini:           [1.25,  0.6,   1,      0.8,    0.55,   0.45,   1.25,   1.33,   1,      1,      1.25,   0.5,    1.1], 
            stream:     [1.1,   0.6,   1,      1,      1,      0.65,   1,      1.24,   1,      1,      1,      1,      1],    
        shotgun:        [7.25,  0.6,   1,      1.5,    1,      0.4,    0.8,    1.8,    0.6,    1,      1.2,    1,      1], 
    flankcopy:          [1,     0.1,   1,      1,      1.02,   1.5,    1.5,    1.8,      0.85,   1,      1.2,    1,      1.25],
        tri:            [1,     0.9,   1,      1,      0.9,    1,      1,      0.8,    0.8,    0.6,    1,      1,      1],  
            trifront:   [1.5,     0.2, 1,      1,      2,      1.7,    2,      2,      1.1,    1.5,    1,      0.1,      1.6],  
            thruster:   [1,     1.5,   2,      0.7,    0.5,    0.5,    0.7,    1,      1,      1,      1,      0.5,    0.7], 
        auto: /*pure*/  [1.8,   0.75,  0.5,    0.8,    0.9,    0.6,    1.2,    1.1,    1,      0.8,    1.3,    1,      1.25],
        attack:         [2,     0.75,  0.5,    0.9,    0.7,    0.4,    1.1,    1.2,    1.1,    0.7,    1.25,   1,      1.2],
            five:       [1.15,  1,     1,      1,      1,      1,      1,      1.05,   1.05,   1.1,    2,      1,      1],   
            autosnipe:  [1,     1,     1,      1.4,    2,      1,      1,      1,      1,      1,      1,      1,      1],   
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */  
        destroy:        [2.2,   1.8,   0.5,    1,      2,      2,      1.2,    0.65,   0.5,    1,      2,      1,      3],
            anni:       [0.85,  1.25,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
            hive:       [1.5,   0.8,   1,      0.8,    0.7,    0.3,    1,      1,      0.6,    1,      1,      1,      1],
        arty:           [1.2,   0.7,   1,      0.9,    1,      1,      1,      1.15,   1.1,    1,      1.5,    1,      1], 
            mortar:     [1.2,   1,     1,      1,      1.1,    1,      1,      0.8,    0.8,    1,      1,      1,      1],   
            spreadmain: [0.78125, 0.25, 0.5,   1,      0.5,    1,      1,   1.5/0.78, 0.9/0.78,1,      1,      1,      1], 
            spread:     [1.5,   1,     0.25,   1,      1,      1,      1,      0.7,    0.7,    1,      1,      0.25,   1],   
            skim:       [1.33,  0.8,   0.8,    0.9,    1.35,   0.8,    2,      0.3,    0.3,    1,      1,      1,      1.1],   
    twin:               [1,     0.5,   0.9,    1,      0.9,    0.7,    1,      1,      1,      1,      1,      1.2,    1],
        pack:           [1.5,   1,     1,      1,      1,      1,      0.9,    0.9,    0.9,    1,      1,      0.0001, 1.5],
        whip:           [1.2,   1,     1,      1,      0.9,    0.9,    0.9,    1.2,    1.2,    1,      1,      0.0001, 1],
        bent:           [1.1,   1,     0.8,    1,      0.9,    1,      0.8,    1,      1,      1,      0.8,    0.5,    1],    
        triple:         [1.4,   0.5,   0.9,    1.3,    1.5,    1.5,    1.5,    1.5,    1,      1.5,    1.5,    0.1,    1],
            dual:       [2,     1,     0.8,    1,      1.5,    1,      1,      1.3,    1.1,    1,      1,      1,      1.25], 
        double:         [1,     1,     1,      1,      1,      0.9,    1,      1,      1,      1,      1,      1,      1],
            hewn:       [1.25,  1.5,   1,      1,      0.9,    0.85,   1,      1,      0.9,    1,      1,      1,      1],
        puregunner:     [1,     0.25,  1.5,    1.2,    1.35,   0.25,   1.25,   0.8,    0.65,   1,      1.5,    1.5,    1.2],
            machgun:    [0.66,  1,     2,      1,      1,      0.8,   1,       0.8,    1,      1,      1,      2.6,    1], 
    gunner:             [1.25,  0.25,  1.5,    1.1,    1,      0.35,   1.35,   0.9,    0.8,    1,      1.5,    1.5,    1.2],
            nail:       [0.85,  2.5,   1,      0.8,    1,      0.7,    1,      1,      1,      1,      2,      1,      1],       
        fast:           [1,     1,     1,      1,      1,      1,      1,      1.2,    1,      1,      1,      1,      1],
      faster:           [1,     1,     1,      1,      1,      1,      1,      2,      1,      1,      1,      1,      1], 
    fastest:            [1,     1,     1,      1,      1,      1,      1,      4,      1,      1,      1,      1,      1],
    turret:             [2,     1,     1,      1,      0.8,    0.6,    0.7,    1,      1,      1,      0.1,    1,      1], 
    buff:               [0.9,   0.8,   1,      1,      1.4,    1.75,   1.8,    1.3,    1.5,    1,      2,      0.5,    1.1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    battle:             [1,     1,     1,      1,      1.25,   1.15,   1,      1,      0.85,   1,      1,      1,      1.1],
        bees:           [1.3,   1,     1,      1.4,    1,      1.5,    0.5,    3,      1.5,    1,      0.25,   1,      1],   
        carrier:        [1.5,   1,     1,      1,      2,      1.8,    1.6,    1.4,    1.2,    1,      1,      1,      1],
    hexatrap:           [1.3,   1,     1.25,   1,      1,      1,      1,      0.8,    1,      0.5,    1,      1,      1],     
        construct:      [1.3,   1,     1,      0.9,    1,      1,      1,      1,      1.1,    1,      1,      1,      1], 
        boomerang:      [0.8,   1,     1,      1,      0.5,    0.5,    1,      0.75,   0.75,   1.333,  1,      1,      1], 
    over:               [1.25,  1,     1,      0.85,   0.7,    0.8,    1,      1,      0.9,    1,      2,      1,      1], 
        meta:           [1.333, 1,     1,      1,      1,      0.667,  1,      1,      1,      1,      1,      1,      1],   
        weak:           [2,     1,     1,      1,      0.6,    0.6,    0.8,    0.5,    0.7,    0.25,   0.3,    1,      1],
        weaker:         [1.5,   1,     1,      1,      0.5,    0.3,    0.5,    1,      1,      0.5,    1,      1.5,     1],
        master:         [3,     1,     1,      0.7,    0.4,    0.7,    1,      1,      1,      0.1,    0.5,    1,      1], 
        sunchip:        [5,     1,     1,      1.4,    0.5,    0.4,    0.6,    1,      1,      1,      0.8,    1,      1],     
    babyfactory:        [1.5,   1,     1,      1,      1,      1,      1,      1,      1.35,   1,      1,      1,      1], 
    lowpower:           [1,     1,     2,      1,      0.5,    0.5,    0.7,    1,      1,      1,      1,      0.5,    0.7], 
    halfrecoil:         [1,     0.5,   1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    morerecoil:         [1,     1.15,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    muchmorerecoil:     [1,     1.35,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    lotsmorerecoil:     [1,     1.8,   1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    tonsmorrecoil:      [1,     4,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    special:            [0.7,   1,     1,      1,      1,      1,      1,      0.5,    1,      1,      1,      3,      1], 
    triplerecoil:       [1,     3,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    midgrdrecoil:       [1,     2.25,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], //midgrd is meant to abbreviate "middle ground" 
    doublereload:       [0.5,   1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],  
    morereload:         [0.75,  1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    halfreload:         [2,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    badreloadfr:        [12,    1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    ccknockback:        [1,     0.5,   1,      1,      1,      0.8,    0.5,    2,      2,      1,      3,      0.1,    2],
    lessreload:         [1.5,   1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    threequartersrof:   [1.333, 1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    morespeed:          [1,     1,     1,      1,      1,      1,      1,      1.3,    1.3,    1,      1,      1,      1], 
    bitlessspeed:       [1,     1,     1,      1,      1,      1,      1,      0.93,   0.93,   1,      1,      1,      1],  
    slow:               [1,     1,     1,      1,      1,      1,      1,      0.7,    0.7,    1,      1,      1,      1], 
    slower:             [1,     1,     1,      1,      1,      1,      1,      0.4,    0.4,    1,      1,      1,      1], 
    morespray:          [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      2,      1],
    halfspeed:          [1,     1,     1,      1,      1,      1,      1,      0.5,    0.5,    1,      1,      1,      1],
    notdense:           [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      0.1,    1,      1],
    halfrange:          [1,     1,     1,      1,      1,      1,      1,      1,      1,      0.5,    1,      1,      1], 
    morerange:          [1,     1,     1,      1,      1,      1,      1,      1,      1,      1.5,    1,      1,      1], 
    fucktonofrange:     [1,     1,     1,      1,      1,      1,      1,      1,      1,      30943,  1,      1,      1], 
    gnuuer:             [0.25,  0.2,   1,      1,      1,      1.5,    2,      1,      1,      30,     1.2,    1.2,    1], 
    fake:               [1,     1,     1,   0.00001, 0.0001,   1,      1,   0.00001,   2,      0,      1,      1,      1], 
    fake3:               [1,     1,     1,   0.00001, 0.0001,   1,      1,   0.00001,   2,      1,      1,      1,      1], 
    fake999:            [1,     1,     1,   0.00001, 0.0001,   1,      1,     100,     2,      1,      1,      1,      1], 
    fake2:              [1,     1,     1,   0.00001, 0.0001,   1,      1,   0.00001,   2,      9,      1,      1,      1],
    V:                  [1.1,   4,     1,      1,      2,      3.2,    2,      2.6,    2,      1,      1,      0.1,     1.5],
    S2:                 [0.4,   1.1,   1,      1,      1,      0.2,    0.2,    2,      1,      1,      1,      1.7,     1],
    SM:                 [1.2,   0.01,  1,      1.5,    5,      3.5,      4,      0.5,    1,      0.6,    1,      3,       1],
    SB:                 [6,     5,     1,      2.5,    10,     2.5,    4,      0.01,   1,      5,      1,      5,       1],
    EE:                 [0.2,   0.3,   1,      1,      2,      2,      0.5,    1.8,    1,      3,      1.5,    0.01,    1],
    EE2:                [35,     8,     1,      1,      1,      1,      1,      0.1,   1,      1,      1,      20,      1],
    R:                  [32,    100,    1,      1,      5,      10,     20,     4,     1,      1,      1,      1,       1],
    RB:                 [19.5,    1,    1,      1,      10,    0.2,      1,     1,     1,      0.2,    6,     1,      1],
    EX:                 [1,     100,      1,      40,      1,   20,      0.2,    0,  1,    0.25,  1.5,     1,      1],
    NFAE:               [4.5,   1,      1,      1,      2,      3.6,      1,      1.7,     1,      1,      1,       1,      1],
    B:                  [1,     2,      1,      2,      1,      2,      2,      0.5,     1,      20,      1,       3,      1],
    B13:                [1,     1,      1,      6,      1,      1,      1,      3,     1,      2,      1,       1,      1],
    C13:                [0.6,   2,      1,    9,  1,     20,     3,      1.2,     1,      0.11,      1,       360, 1],
    EX9:                [1,     9,      1,      15,      1,     5,    15,    0.01,      1,    0.02,    1,     10,     2],
    B9:                 [1,     0,      1,      1,      1,     1,    1,    1,      1,    1,    1,     1,     1],
    EXT:                [15,     0.01,   1,      10,      1,     2,    5,    0.01,      1,   0.02,    1,     0.01,      2],
    XET:                [8,     0.01,   1,      120,      1,     2.5,    5,    0.01,      1,    0.4,      2,   0.1,      2],
    TRT:                [4,     0,      0.01,   0.45,      20,     40,  0.15,      0.18,     1,    1,     1,     2,      2],
    T:                  [1,     1,      1,      5000,      20,     1,    1,       0,      1,    1,     1,     1,      2],
    RT:                 [1,     1,      1,      25,      20,     2,    1,       0,      1,    1,     1,     1,      2],
    ST18:               [5.5,    1,      1,      0.7,      3,     2,    10,    4,      1,     0.5,     2,     0.1,    2],
    AT19:               [1,     0.1,      1,     1,      2,     5,    5,       4,      1,      1,      2,     1,      1],
    D21:                [1,     1,      1,     1.5,      2,     1,     2,      3,      1,      1,     1.4,    1,      1],
    BL:                 [1,     1,      1,     4,      2,     2,     1,      1.15,      1,     1,      1,     1,      1],
    BR:                 [3,     1,      1,     1.25,      2,     2,     2,      3,         1,    1,    1,     1,      1],
    F:                  [1,   1,      1,       4,      250,    0.1,   3,      2.5,       1,   0.6,     1,     1.4,    1],
    RK:                 [24,   2,      1,       7,      0.5,    1,   1,       7,       1,      1,      1,     4,      1],
    DH:                 [1.2,   1.5,      1,    1.15,     1.3,    2.8,   1.5,    3,  1,      1,     1.5,    1,      1.1],
    CH:                 [30,    2,      1,      2,      2,    2,       1,       0,      1,     1,      1,     1,      1],
    XL:                 [1,    1,      1,     20,      1,    1,       1,       1,       1,     1,      1,     1,      1],
    BOG:                [1,    1,      1,       1,      2,    1,       2,       0.2,    1,    0.4,   1,     360,    1],
    SOG:                [1,    2,      1,       1,      2,    1,       2,       1,      1,    0.1,    1,     360,    1],
    R6:                 [1,    0.8,    1,       1,      1.4,  1.2,     1.3,     1.4,    1,    1,    1,     0.1,    1],
    SG:                 [3.75,    1.7,   1,       1.4,    2.15, 2.75,    4.5,    1.5,    1.5,    1.5,    1.9,    2,      1],
    BET:                [1,     2,     1,       1.5,    1,      1,       1,    0.8,    1,      1,       1,    1.5,      1],
    SP:                 [1,     1,     1,       2.5,    4,      2.5,    1.5,    3,      1,      2,       1.5,    0.1,      1.9],
    DIV:                [1,     1,     1,       1,      4,      2,    1.5,      0.9,    1,      2,    1,        1,   1.3],
    PY:                 [0.5,   3,     1,       0.5,    1,      1,    1,      1.5,    1,      0.3,    1,        1.5,   1],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    op:                 [0.5,   1.3,   1,      1,      4,      4,      4,      3,      2,      1,      5,      2,      1],
    op2:                 [0.5,   1.3,   1,      5,      4,      6655665,      4,      3,      2,      1,      5,      2,      1],
    META:               [0.6,   1,     1,      1,      25,     3,      1,      4.5,    5,      10,     30,     0.01,   9],
    shghgjkssfgdfgs:    [1,     2,     1,      1.2,    1,      1,      1,      0.9,    1,      1,      1,      0.01,   1],      
    protectorswarm:     [5,  0.000001, 1,      1,      100,    1,      1,      1,      1,     0.5,     5,      1,      10], 
};

const dfltskl = 8; 

// NAMES
const statnames = {
    smasher: 1,
    drone: 2,
    necro: 3,
    swarm: 4,
    trap: 5,
    generic: 6, 
};
const gunCalcNames = {
    default: 0,
    bullet: 1,
    drone: 2,
    swarm: 3,
    fixedReload: 4,
    thruster: 5,
    sustained: 6,
    necro: 7,
    trap: 8,
};

// ENTITY DEFINITIONS
exports.genericEntity = {   
    NAME: '',
    LABEL: 'Unknown Entity',
    TYPE: 'unknown',
    DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0, 
    COLOR: 16,    
    INDEPENDENT: false,
    CONTROLLERS: ['doNothing'],    
    HAS_NO_MASTER: false,
    MOTION_TYPE: 'glide', // motor, swarm, chase
    FACING_TYPE: 'toTarget', // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: 'normal', // hard, repel, never, hardWithBuffer
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    AUTO_UPGRADE: 'none',
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [], 
    UPGRADES_TIER_4: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: [dfltskl, dfltskl, 0, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
    GUNS: [],
    MAX_CHILDREN: 0,
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,

        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,        
        HETERO: 2,
    },    
    FOOD: {
        LEVEL: -1,
    },
};
exports.absolutelyFUCKINGNOTHING = {
    NAME: '',
    LABEL: '',
    TYPE: 'unknown',
    DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: 0,    
    INDEPENDENT: false,
    CONTROLLERS: ['doNothing'],    
    HAS_NO_MASTER: false,
    MOTION_TYPE: 'glide', // motor, swarm, chase
    FACING_TYPE: 'toTarget', // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: 'normal', // hard, repel, never, hardWithBuffer
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    AUTO_UPGRADE: 'none',
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    UPGRADES_TIER_4: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
    GUNS: [],
    MAX_CHILDREN: 0,
    BODY: {
        ACCELERATION: 0,
        SPEED: 0,
        HEALTH: 0,
        RESIST: 0,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 0,
        PENETRATION: 0,

        RANGE: 0,
        FOV: 0,
        DENSITY: 0,
        STEALTH: 0,
        PUSHABILITY: 0,        
        HETERO: 0,
    },    
    FOOD: {
        LEVEL: -1,
    },
};

// FOOD
exports.food = {
    TYPE: 'food',
    DAMAGE_CLASS: 1,
    CONTROLLERS: ['moveInCircles'],
    HITS_OWN_TYPE: 'repel',
    MOTION_TYPE: 'drift',
    FACING_TYPE: 'turnWithSpeed',
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,
    HEALTH_WITH_LEVEL: false,
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.hugePentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5,
    },
    LABEL: 'Alpha Pentagon',
    VALUE: 15000,
    SHAPE: -5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 4,
    },
    LABEL: 'Beta Pentagon',
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.hexagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Hexagon',
    VALUE: 1150,
    SHAPE: 6,
    SIZE: 25,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.pentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 3,
    },
    LABEL: 'Pentagon',
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};

exports.triangle = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 2,
    },
    LABEL: 'Triangle',
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.square = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1,
    },
    LABEL: 'Square',
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.skwer = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1,
    },
    LABEL: 'buff ass square',
    VALUE: 300000,
    SHAPE: 4,
    SIZE: 100,
    COLOR: 13,
    BODY: {
        DAMAGE: 20 * basePolygonDamage,
        DENSITY: 300,
        HEALTH: 1200 * basePolygonHealth,
        RESIST: Math.pow(2, 2),
        SHIELD: 200 * basePolygonHealth,
        REGEN: 0.5,
    },
    SPEED: 0,
    ACCELERATION: 0,
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.egg = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 1,
    },
    LABEL: 'Class Zero',
    VALUE: 10,
    SHAPE: 0,
    SIZE: 7,
    COLOR: 0,
    BODY: {
        DAMAGE: 2,
        DENSITY: 2,
        HEALTH: 10,
        PUSHABILITY: 1,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

exports.greenpentagon = {
    PARENT: [exports.food],
    LABEL: 'Pentagon',
    VALUE: 30000,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
        DAMAGE: 3,
        DENSITY: 8,
        HEALTH: 200,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.greentriangle = {
    PARENT: [exports.food],
    LABEL: 'Triangle',
    VALUE: 7000,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 60,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.greensquare = {
    PARENT: [exports.food],
    LABEL: 'Square',
    VALUE: 2000,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
        DAMAGE: 0.5,
        DENSITY: 4,
        HEALTH: 20,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};

exports.gem = {
    PARENT: [exports.food],
    LABEL: 'Gem',
    VALUE: 2000,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage/4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.obstacle = {
    TYPE: 'wall',
    DAMAGE_CLASS: 1,
    LABEL: 'Rock',
    FACING_TYPE: 'turnWithSpeed',
    SHAPE: -9,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
    },
    VALUE: 0,
    SIZE: 100,
    COLOR: 16,
    VARIES_IN_SIZE: true,
    GIVE_KILL_MESSAGE: true,
    ACCEPTS_SCORE: false,
};
    exports.babyObstacle = {
        PARENT: [exports.obstacle],
        SIZE: 45,
        SHAPE: -7,
        LABEL: "Gravel",
    };

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.warnflash5 = {
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 0,
        RANGE: 20,
        DENSITY: 1.25,
        HEALTH: 0.001,
        DAMAGE: 0,
        PUSHABILITY: 1,
    },
    SIZE: 40,
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    DIE_AT_RANGE: true,
};
exports.bullegt = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 900,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.thr = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    SHAPE: [[0.425,-0.907],[0.502,-0.867],[0.573,-0.818],[0.643,-0.768],[0.708,-0.707],[0.767,-0.643],[0.822,-0.573],[0.87,-0.492],[0.91,-0.422],[0.94,-0.343],[0.965,-0.26],[0.987,-0.177],[0.997,-0.085],[1.003,0],[0.998,0.087],[0.987,0.175],[0.968,0.26],[0.942,0.343],[0.907,0.42],[0.868,0.5],[0.82,0.577],[0.767,0.642],[0.707,0.708],[0.643,0.767],[0.575,0.82],[0.503,0.868],[0.423,0.907],[0.343,0.94],[0.258,0.967],[0.173,0.985],[0.085,0.997],[0,1],[-0.087,0.996],[-0.179,0.993],[-0.302,0.961],[-0.472,0.905],[-2.496,0.214],[-1.996,0],[-2.504,-0.226],[-0.85,-0.81],[0,-1],[0.088,-0.998],[0.17,-0.987],[0.258,-0.967],[0.34,-0.942]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 5,
        RANGE: 60,
        DENSITY: 1.25,
        HEALTH: 0.01 * wepHealthFactor,
        DAMAGE: 0 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.yttr = {
    LABEL: '',
    COLOR: 16,
    SHAPE: [[1.247,0.133],[1.03,0.193],[1.22,0.3],[1.127,0.41],[0.91,0.86],[-0.02,1.02],[-0.53,0.933],[-1.08,0.933],[-1.15,0.633],[-1.19,0.2],[-0.98,-0.32],[-0.77,-0.91],[-0.23,-1.15],[0.607,-0.94],[1.14,-0.96],[1.22,-0.73],[1.13,-0.447],[1.28,-0.067]],
  INDEPENDENT: true,
};
exports.yttrium = {
    LABEL: 'Yttrium',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: [[1.247,0.133],[1.03,0.193],[1.22,0.3],[1.127,0.41],[0.91,0.86],[-0.02,1.02],[-0.53,0.933],[-1.08,0.933],[-1.15,0.633],[-1.19,0.2],[-0.98,-0.32],[-0.77,-0.91],[-0.23,-1.15],[0.607,-0.94],[1.14,-0.96],[1.22,-0.73],[1.13,-0.447],[1.28,-0.067]],
    BODY: {
        PENETRATION: 2,
        SPEED: 0,
        RANGE: 200,
        DENSITY: 2,
        HEALTH: 4 * wepHealthFactor,
        DAMAGE: 1.5 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.yttr,
                        },
              ],
};
exports.bog0 = {
    LABEL: '',
    COLOR: 148,
SHAPE: 0,
  INDEPENDENT: true,
};
exports.bulletbog = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.bog0,
                        },
              ],
};
exports.bullet35 = {
    LABEL: 'Bullet',
    TYPE: 'trap', 
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
  //  FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.red0 = {
    LABEL: '',
    COLOR: 12,
SHAPE: 0,
  INDEPENDENT: true,
};
exports.redbullet = {
    LABEL: 'Warning',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25, 
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
  //  FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.red0,
                        },
              ],
};
exports.IHonestlyDontKnowWhatToNameTheseLikeCanSomeoneSuggestAGoodNamingSchemeOrSomethingSoThisIsntSoAwkwardAllTheTime = {
    LABEL: '',
    COLOR: 17,
SHAPE: [[-0.7,0.6],[0.6,0.6],[0.6,-0.6],[-0.6,-0.6],[-0.6,0.6],[-0.7,0.6],[-0.7,-0.7],[0.7,-0.7],[0.7,0.7],[-0.7,0.7]],
  INDEPENDENT: true,
};
exports.shieldbarrier = {
    LABEL: 'Barrier',
    TYPE: 'bullet',
SHAPE: [[-0.7,0.6],[0.6,0.6],[0.6,-0.6],[-0.6,-0.6],[-0.6,0.6],[-0.7,0.6],[-0.7,-0.7],[0.7,-0.7],[0.7,0.7],[-0.7,0.7]],
  ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 0.25,
        SPEED: 0,
        RANGE: 235,
        DENSITY: 1.25,
        HEALTH: 5000 * wepHealthFactor,
        DAMAGE: 1 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.IHonestlyDontKnowWhatToNameTheseLikeCanSomeoneSuggestAGoodNamingSchemeOrSomethingSoThisIsntSoAwkwardAllTheTime,
                        },
              ],
};
exports.chainA = {
    LABEL: '',
    COLOR: 19,
SHAPE: [[0,0.4],[1.6,0.4],[1.6,0],[2.4,0],[2.4,0.4],[4,0.4],[4,0],[4.8,0],[4.8,0.4],[6.4,0.4],[6.4,0],[7.2,0],[7.2,0.4],[8.8,0.4],[8.8,0],[9.6,0],[9.6,0.4],[11.2,0.4],[11.2,0],[12,0],[12,0.4],[13.6,0.4],[13.6,0],[14.4,0],[14.4,0.4],[16,0.4],[16,0],[16.8,0],[16.8,0.4],[18,0.4],[18,0],[17.2,0],[17.2,-0.4],[18,-0.4],[18,0.4],[18.4,0.4],[18.4,0],[19.2,0],[19.2,0.4],[20.4,0.4],[20.4,0],[19.6,0],[19.6,-0.4],[20.4,-0.4],[20.4,0.4],[20.8,0.4],[20.8,0],[21.6,0],[21.6,0.4],[22.8,0.4],[22.8,0],[22,0],[22,-0.4],[22.8,-0.4],[22.8,0.4],[23.2,0.4],[23.2,0],[24,0],[24,0.4],[25.2,0.4],[25.2,0],[24.4,0],[24.4,-0.4],[25.2,-0.4],[25.2,0.4],[25.6,0.4],[25.6,0],[26.4,0],[26.4,0.4],[27.6,0.4],[27.6,0],[26.8,0],[26.8,-0.4],[27.6,-0.4],[27.6,0.4],[28,0.4],[28,0],[28.8,0],[28.8,0.4],[30,0.4],[30,0],[29.2,0],[29.2,-0.4],[30,-0.4],[30,0.4],[30.4,0.4],[30.4,0],[31.2,0],[31.2,0.4],[32.4,0.4],[32.4,0],[31.6,0],[31.6,-0.4],[32.4,-0.4],[32.4,0.4],[32.8,0.4],[32.8,0],[33.6,0],[33.6,0.4],[34.8,0.4],[34.8,0],[34,0],[34,-0.4],[34.8,-0.4],[34.8,0.4],[35.2,0.4],[35.2,0],[36,0],[36,0.4],[37.2,0.4],[37.2,0],[36.4,0],[36.4,-0.4],[37.2,-0.4],[37.2,0.4],[37.6,0.4],[37.6,0],[38.4,0],[38.4,0.4],[39.6,0.4],[39.6,0],[38.8,0],[38.8,-0.4],[39.6,-0.4],[39.6,0.4],[40,0.4],[40,0],[40.8,0],[40.8,0.4],[42,0.4],[42,0],[41.2,0],[41.2,-0.4],[42,-0.4],[42,0.4],[42.4,0.4],[42.4,0],[43.2,0],[43.2,0.4],[44.4,0.4],[44.4,0],[43.6,0],[43.6,-0.4],[44.4,-0.4],[44.4,0.4],[44.8,0.4],[44.8,0],[45.6,0],[45.6,0.4],[46.8,0.4],[46.8,0],[46,0],[46,-0.4],[46.8,-0.4],[46.8,0.4],[47.2,0.4],[47.2,0],[48,0],[48,0.4],[49.2,0.4],[49.2,0],[48.4,0],[48.4,-0.4],[49.2,-0.4],[49.2,0.4],[49.6,0.4],[49.6,0],[50.4,0],[50.4,0.4],[51.6,0.4],[51.6,0],[50.8,0],[50.8,-0.4],[51.6,-0.4],[51.6,0.4],[52,0.4],[52,0],[52.8,0],[52.8,0.4],[54,0.4],[54,0],[53.2,0],[53.2,-0.4],[54,-0.4],[54,0.4],[54.4,0.4],[54.4,0],[55.2,0],[55.2,0.4],[56.4,0.4],[56.4,0],[55.6,0],[55.6,-0.4],[56.4,-0.4],[56.4,0.4],[56.8,0.4],[56.8,-0.8],[55.2,-0.8],[55.2,-0.4],[54.4,-0.4],[54.4,-0.8],[52.8,-0.8],[52.8,-0.4],[52,-0.4],[52,-0.8],[50.4,-0.8],[50.4,-0.4],[49.6,-0.4],[49.6,-0.8],[48,-0.8],[48,-0.4],[47.2,-0.4],[47.2,-0.8],[45.6,-0.8],[45.6,-0.4],[44.8,-0.4],[44.8,-0.8],[43.2,-0.8],[43.2,-0.4],[42.4,-0.4],[42.4,-0.8],[40.8,-0.8],[40.8,-0.4],[40,-0.4],[40,-0.8],[38.4,-0.8],[38.4,-0.4],[37.6,-0.4],[37.6,-0.8],[36,-0.8],[36,-0.4],[35.2,-0.4],[35.2,-0.8],[33.6,-0.8],[33.6,-0.4],[32.8,-0.4],[32.8,-0.8],[31.2,-0.8],[31.2,-0.4],[30.4,-0.4],[30.4,-0.8],[28.8,-0.8],[28.8,-0.4],[28,-0.4],[28,-0.8],[26.4,-0.8],[26.4,-0.4],[25.6,-0.4],[25.6,-0.8],[24,-0.8],[24,-0.4],[23.2,-0.4],[23.2,-0.8],[21.6,-0.8],[21.6,-0.4],[20.8,-0.4],[20.8,-0.8],[19.2,-0.8],[19.2,-0.4],[18.4,-0.4],[18.4,-0.8],[16.8,-0.8],[16.8,-0.4],[16,-0.4],[16,-0.8],[15.6,-0.8],[15.6,0],[14.8,0],[14.8,-0.4],[15.6,-0.4],[15.6,-0.8],[14.4,-0.8],[14.4,-0.4],[13.6,-0.4],[13.6,-0.8],[13.2,-0.8],[13.2,0],[12.4,0],[12.4,-0.4],[13.2,-0.4],[13.2,-0.8],[12,-0.8],[12,-0.4],[11.2,-0.4],[11.2,-0.8],[10.8,-0.8],[10.8,0],[10,0],[10,-0.4],[10.8,-0.4],[10.8,-0.8],[9.6,-0.8],[9.6,-0.4],[8.8,-0.4],[8.8,-0.8],[8,-0.8],[8,-0.4],[8.4,-0.4],[8.4,0],[7.6,0],[7.6,-0.4],[8,-0.4],[8,-0.8],[7.2,-0.8],[7.2,-0.4],[6.4,-0.4],[6.4,-0.8],[5.6,-0.4],[6,-0.4],[6,0],[5.2,0],[5.2,-0.4],[5.6,-0.4],[6.4,-0.8],[4.8,-0.8],[4.8,-0.4],[4,-0.4],[4,-0.8],[3.2,-0.8],[3.2,-0.4],[3.6,-0.4],[3.6,0],[2.8,0],[2.8,-0.4],[3.2,-0.4],[3.2,-0.8],[2.4,-0.8],[2.4,-0.4],[1.6,-0.4],[1.6,-0.8],[0.8,-0.8],[0.8,-0.4],[1.2,-0.4],[1.2,0],[0.4,0],[0.4,-0.4],[0.8,-0.4],[0.8,-0.8],[0,-0.8]],    
  INDEPENDENT: true,
};
exports.chain = {
    LABEL: 'Chain',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
   SHAPE: [[0,0.4],[1.6,0.4],[1.6,0],[2.4,0],[2.4,0.4],[4,0.4],[4,0],[4.8,0],[4.8,0.4],[6.4,0.4],[6.4,0],[7.2,0],[7.2,0.4],[8.8,0.4],[8.8,0],[9.6,0],[9.6,0.4],[11.2,0.4],[11.2,0],[12,0],[12,0.4],[13.6,0.4],[13.6,0],[14.4,0],[14.4,0.4],[16,0.4],[16,0],[16.8,0],[16.8,0.4],[18,0.4],[18,0],[17.2,0],[17.2,-0.4],[18,-0.4],[18,0.4],[18.4,0.4],[18.4,0],[19.2,0],[19.2,0.4],[20.4,0.4],[20.4,0],[19.6,0],[19.6,-0.4],[20.4,-0.4],[20.4,0.4],[20.8,0.4],[20.8,0],[21.6,0],[21.6,0.4],[22.8,0.4],[22.8,0],[22,0],[22,-0.4],[22.8,-0.4],[22.8,0.4],[23.2,0.4],[23.2,0],[24,0],[24,0.4],[25.2,0.4],[25.2,0],[24.4,0],[24.4,-0.4],[25.2,-0.4],[25.2,0.4],[25.6,0.4],[25.6,0],[26.4,0],[26.4,0.4],[27.6,0.4],[27.6,0],[26.8,0],[26.8,-0.4],[27.6,-0.4],[27.6,0.4],[28,0.4],[28,0],[28.8,0],[28.8,0.4],[30,0.4],[30,0],[29.2,0],[29.2,-0.4],[30,-0.4],[30,0.4],[30.4,0.4],[30.4,0],[31.2,0],[31.2,0.4],[32.4,0.4],[32.4,0],[31.6,0],[31.6,-0.4],[32.4,-0.4],[32.4,0.4],[32.8,0.4],[32.8,0],[33.6,0],[33.6,0.4],[34.8,0.4],[34.8,0],[34,0],[34,-0.4],[34.8,-0.4],[34.8,0.4],[35.2,0.4],[35.2,0],[36,0],[36,0.4],[37.2,0.4],[37.2,0],[36.4,0],[36.4,-0.4],[37.2,-0.4],[37.2,0.4],[37.6,0.4],[37.6,0],[38.4,0],[38.4,0.4],[39.6,0.4],[39.6,0],[38.8,0],[38.8,-0.4],[39.6,-0.4],[39.6,0.4],[40,0.4],[40,0],[40.8,0],[40.8,0.4],[42,0.4],[42,0],[41.2,0],[41.2,-0.4],[42,-0.4],[42,0.4],[42.4,0.4],[42.4,0],[43.2,0],[43.2,0.4],[44.4,0.4],[44.4,0],[43.6,0],[43.6,-0.4],[44.4,-0.4],[44.4,0.4],[44.8,0.4],[44.8,0],[45.6,0],[45.6,0.4],[46.8,0.4],[46.8,0],[46,0],[46,-0.4],[46.8,-0.4],[46.8,0.4],[47.2,0.4],[47.2,0],[48,0],[48,0.4],[49.2,0.4],[49.2,0],[48.4,0],[48.4,-0.4],[49.2,-0.4],[49.2,0.4],[49.6,0.4],[49.6,0],[50.4,0],[50.4,0.4],[51.6,0.4],[51.6,0],[50.8,0],[50.8,-0.4],[51.6,-0.4],[51.6,0.4],[52,0.4],[52,0],[52.8,0],[52.8,0.4],[54,0.4],[54,0],[53.2,0],[53.2,-0.4],[54,-0.4],[54,0.4],[54.4,0.4],[54.4,0],[55.2,0],[55.2,0.4],[56.4,0.4],[56.4,0],[55.6,0],[55.6,-0.4],[56.4,-0.4],[56.4,0.4],[56.8,0.4],[56.8,-0.8],[55.2,-0.8],[55.2,-0.4],[54.4,-0.4],[54.4,-0.8],[52.8,-0.8],[52.8,-0.4],[52,-0.4],[52,-0.8],[50.4,-0.8],[50.4,-0.4],[49.6,-0.4],[49.6,-0.8],[48,-0.8],[48,-0.4],[47.2,-0.4],[47.2,-0.8],[45.6,-0.8],[45.6,-0.4],[44.8,-0.4],[44.8,-0.8],[43.2,-0.8],[43.2,-0.4],[42.4,-0.4],[42.4,-0.8],[40.8,-0.8],[40.8,-0.4],[40,-0.4],[40,-0.8],[38.4,-0.8],[38.4,-0.4],[37.6,-0.4],[37.6,-0.8],[36,-0.8],[36,-0.4],[35.2,-0.4],[35.2,-0.8],[33.6,-0.8],[33.6,-0.4],[32.8,-0.4],[32.8,-0.8],[31.2,-0.8],[31.2,-0.4],[30.4,-0.4],[30.4,-0.8],[28.8,-0.8],[28.8,-0.4],[28,-0.4],[28,-0.8],[26.4,-0.8],[26.4,-0.4],[25.6,-0.4],[25.6,-0.8],[24,-0.8],[24,-0.4],[23.2,-0.4],[23.2,-0.8],[21.6,-0.8],[21.6,-0.4],[20.8,-0.4],[20.8,-0.8],[19.2,-0.8],[19.2,-0.4],[18.4,-0.4],[18.4,-0.8],[16.8,-0.8],[16.8,-0.4],[16,-0.4],[16,-0.8],[15.6,-0.8],[15.6,0],[14.8,0],[14.8,-0.4],[15.6,-0.4],[15.6,-0.8],[14.4,-0.8],[14.4,-0.4],[13.6,-0.4],[13.6,-0.8],[13.2,-0.8],[13.2,0],[12.4,0],[12.4,-0.4],[13.2,-0.4],[13.2,-0.8],[12,-0.8],[12,-0.4],[11.2,-0.4],[11.2,-0.8],[10.8,-0.8],[10.8,0],[10,0],[10,-0.4],[10.8,-0.4],[10.8,-0.8],[9.6,-0.8],[9.6,-0.4],[8.8,-0.4],[8.8,-0.8],[8,-0.8],[8,-0.4],[8.4,-0.4],[8.4,0],[7.6,0],[7.6,-0.4],[8,-0.4],[8,-0.8],[7.2,-0.8],[7.2,-0.4],[6.4,-0.4],[6.4,-0.8],[5.6,-0.4],[6,-0.4],[6,0],[5.2,0],[5.2,-0.4],[5.6,-0.4],[6.4,-0.8],[4.8,-0.8],[4.8,-0.4],[4,-0.4],[4,-0.8],[3.2,-0.8],[3.2,-0.4],[3.6,-0.4],[3.6,0],[2.8,0],[2.8,-0.4],[3.2,-0.4],[3.2,-0.8],[2.4,-0.8],[2.4,-0.4],[1.6,-0.4],[1.6,-0.8],[0.8,-0.8],[0.8,-0.4],[1.2,-0.4],[1.2,0],[0.4,0],[0.4,-0.4],[0.8,-0.4],[0.8,-0.8],[0,-0.8]],
    BODY: {
        PENETRATION: 0.05,
        SPEED: 1,
        RANGE: 650,
        DENSITY: 2,
        HEALTH: 20 * wepHealthFactor,
        DAMAGE: 6 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.chainA,
                        },
              ],


};
exports.beam = {
    LABEL: 'Beam',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: [[0,-0.05],[150,-0.05],[150,0.05],[0,0.05]],
    BODY: {
        PENETRATION: 0.05,
        SPEED: 1,
        RANGE: 500000000000000,
        DENSITY: 2,
        HEALTH: 20 * wepHealthFactor,
        DAMAGE: 6 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.scissorsA = {
    LABEL: '',
    COLOR: 233,
    SHAPE: [[0.504,0.88],[0.493,0.74],[0.278,0.717],[0.14,0.615],[0.138,0.36],[0.33,0.226],[0.667,0.326],[0.741,0.527],[0.653,0.687],[0.504,0.742],[0.493,0.758],[0.507,0.871],[0.778,0.77],[0.875,0.5],[0.75,0.2],[0.317,0.078],[0.284,-0.08],[0.124,-0.206],[0.15,-0.364],[0.287,-0.48],[0.466,-0.5],[0.725,-0.353],[0.838,-0.12],[0.708,0.06],[0.29,-0.08],[0.311,0.078],[0.741,0.2],[0.877,0.138],[0.992,-0.165],[0.794,-0.477],[0.469,-0.67],[0.154,-0.58],[0.003,-0.397],[-0.32,0.04],[-0.333,0.064],[-0.33,0.08],[-0.254,0.27],[0,-0.1],[0.31,0.075],[0,0.3],[-0.26,0.278],[-0.324,0.08],[-1.25,-0.69],[-1.48,-0.728],[-0.43,0.315],[-1.45,0.704],[-1.74,1.02],[-0.89,0.68],[-0.3,0.4],[0,0.65],[0.226,0.86]],
    INDEPENDENT: true,
};
exports.scissors = {
    LABEL: 'Scissors',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
      SHAPE: [[0.504,0.88],[0.493,0.74],[0.278,0.717],[0.14,0.615],[0.138,0.36],[0.33,0.226],[0.667,0.326],[0.741,0.527],[0.653,0.687],[0.504,0.742],[0.493,0.758],[0.507,0.871],[0.778,0.77],[0.875,0.5],[0.75,0.2],[0.317,0.078],[0.284,-0.08],[0.124,-0.206],[0.15,-0.364],[0.287,-0.48],[0.466,-0.5],[0.725,-0.353],[0.838,-0.12],[0.708,0.06],[0.29,-0.08],[0.311,0.078],[0.741,0.2],[0.877,0.138],[0.992,-0.165],[0.794,-0.477],[0.469,-0.67],[0.154,-0.58],[0.003,-0.397],[-0.32,0.04],[-0.333,0.064],[-0.33,0.08],[-0.254,0.27],[0,-0.1],[0.31,0.075],[0,0.3],[-0.26,0.278],[-0.324,0.08],[-1.25,-0.69],[-1.48,-0.728],[-0.43,0.315],[-1.45,0.704],[-1.74,1.02],[-0.89,0.68],[-0.3,0.4],[0,0.65],[0.226,0.86]],
    BODY: {
        PENETRATION: 2,
        SPEED: 7,
        RANGE: 90,
        DENSITY: 1.5,
        HEALTH: 5 * wepHealthFactor,
        DAMAGE: 30 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.scissorsA,
                        },
              ],

};
exports.paperA = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[-1,0.5],[1,0.5],[1,-0.5],[-1,-0.5]],
    INDEPENDENT: true,
};
exports.paper = {
    LABEL: 'Paper',
    TYPE: 'bullet',
    SHAPE: [[-1,0.5],[1,0.5],[1,-0.5],[-1,-0.5]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 5,
        RANGE: 120,
        DENSITY: 0.4,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.paperA,
                        },
              ],
};
exports.rockbullet = {
    LABEL: 'Rock',
    TYPE: 'bullet',
    SHAPE: -7,
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 2,
        SPEED: 6,
        RANGE: 120,
        DENSITY: 2,
        HEALTH: 0.2 * wepHealthFactor,
        DAMAGE: 15 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.fire1a = {
    LABEL: '',
    COLOR: 197,
    SHAPE: [[-1,-0.6],[-0.614,0.14],[0.06,0.245],[0.25,-0.13],[1.28,-0.23],[0.176,-0.595],[-0.17,-0.85]],
    INDEPENDENT: true,
};
exports.fire2a = {
    LABEL: '',
    COLOR: 197,
    SHAPE: [[-0.96,-0.04],[-0.734,0.446],[-0.1,0.24],[0.346,0.465],[1.42,0.277],[0.666,0.11],[0.02,-0.21]],
    INDEPENDENT: true,
};
exports.fire3a = {
    LABEL: '',
    COLOR: 197,
    SHAPE: [[-0.96,-0.04],[-0.734,0.446],[-0.43,0.365],[-0.03,0.804],[0.546,0.227],[1.44,0.176],[0.81,-0.02],[0.3,-0.445],[-0.28,-0.05],[-0.79,-0.6]],
    INDEPENDENT: true,
};
exports.fire4a = {
    LABEL: '',
    COLOR: 197,
    SHAPE: [[-1.135,-0.445],[-0.99,-0.056],[-0.54,0.597],[0.78,0.8],[1.506,0.3],[0.51,0.57],[0.21,0.434],[1.15,0.17],[0.716,0.076],[0.14,0.126],[1.036,-0.14],[1.695,-0.18],[1.375,-0.395],[0.68,-0.23],[0.24,-0.31],[0.68,-0.4],[0.383,-0.48],[1.124,-0.55],[1.5,-0.69],[0.8,-0.715],[0.55,-0.89],[0.29,-0.81],[-0.075,-0.69],[-0.38,-0.76],[-0.815,-0.7]],
    INDEPENDENT: true,                                                                                                                                                                                                                                                                                                                                                                
};
exports.fire1 = {
    PARENT: [exports.bullet],
  SHAPE: [[-1,-0.6],[-0.614,0.14],[0.06,0.245],[0.25,-0.13],[1.28,-0.23],[0.176,-0.595],[-0.17,-0.85]],
   TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.fire1a,
                        },
              ],
};
exports.fire2 = {
    PARENT: [exports.bullet],
  SHAPE: [[-0.96,-0.04],[-0.734,0.446],[-0.1,0.24],[0.346,0.465],[1.42,0.277],[0.666,0.11],[0.02,-0.21]],
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.fire2a,
                        },
              ],
};
exports.fire3 = {
    PARENT: [exports.bullet],
  SHAPE: [[-0.96,-0.04],[-0.734,0.446],[-0.43,0.365],[-0.03,0.804],[0.546,0.227],[1.44,0.176],[0.81,-0.02],[0.3,-0.445],[-0.28,-0.05],[-0.79,-0.6]],
TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.fire3a,
                        },
              ],
};
exports.fire4 = {
    PARENT: [exports.bullet],
SHAPE: [[-1.135,-0.445],[-0.99,-0.056],[-0.54,0.597],[0.78,0.8],[1.506,0.3],[0.51,0.57],[0.21,0.434],[1.15,0.17],[0.716,0.076],[0.14,0.126],[1.036,-0.14],[1.695,-0.18],[1.375,-0.395],[0.68,-0.23],[0.24,-0.31],[0.68,-0.4],[0.383,-0.48],[1.124,-0.55],[1.5,-0.69],[0.8,-0.715],[0.55,-0.89],[0.29,-0.81],[-0.075,-0.69],[-0.38,-0.76],[-0.815,-0.7]],
TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.fire4a,
                        },
              ],
};
                                                                                                                                                                                                                                                                                                                                                                                   

exports.lightning = {
    LABEL: '',
    COLOR: 3,
    SHAPE: [[-1,0],[-0.2,0.2],[0.1,-0.4],[1,0],[0.2,-0.2],[0,0.4]],
    INDEPENDENT: false,
};
exports.bulletlightning = {
    LABEL: 'Lightning Bolt',
    TYPE: 'bullet',
    SHAPE: [[-1,0],[-0.2,0.2],[0.1,-0.4],[1,0],[0.2,-0.2],[0,0.4]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 0.03,
        SPEED: 15,
        RANGE: 170,
        DENSITY: 2,
        HEALTH: 0.5 * wepHealthFactor,
        DAMAGE: 6 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'hardWithBuffer',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.lightning,
                        },
              ],
};
exports.bull2t = {
    LABEL: 'Number Two',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: [[1.2,1],[1.6,1],[2,0.6],[2,-0.6],[1.6,-1],[1,-1],[1,-0.6],[1.5,-0.6],[1.5,0.6],[-0.6,-1],[-1,-1],[-1,1],[-0.6,1],[-0.6,-0.4]],
    BODY: {
        PENETRATION: 1.22,
        SPEED: 5,
        RANGE: 222,
        DENSITY: 2.2,
        HEALTH: 2.2 * wepHealthFactor,
        DAMAGE: 2.2 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.fuckitweball = {
    LABEL: '',
    COLOR: 9,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.thinglol = {
    TYPE: 'indicator',
    LABEL: '',
    COLOR: 3,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.ti84plusce = {
    TYPE: 'indicator',
    RANGE: 90,
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.thinglol,
                        },
              ],
};

exports.colonthree = {
    LABEL: '',
    COLOR: 8,
SHAPE: [[0,0.6],[0,0.8],[-0.8,1],[-1,0.8],[-0.8,0],[-1,-0.8],[-0.8,-1],[0,-0.8],[0,-0.6],[-0.8,-0.8],[-0.6,-0.12],[-0.167,-0.053],[-0.17,0.05],[-0.6,0.12],[-0.8,0.8]],
  INDEPENDENT: true,
};
exports.grayballP = {
    LABEL: '',
    COLOR: 16,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.redballP = {
    LABEL: '',
    COLOR: 27,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.shard = {
    LABEL: '',
    COLOR: 1125,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.bulletblack = {
    LABEL: 'Smoke Cloud',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.fuckitweball,
                        },
              ],
};
exports.bulletgrow = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    VALUE: 26302,
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletgrowex = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 10 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    VALUE: 26302,
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletgrowbog = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    VALUE: 26302,
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.bog0,
                        },
              ],
};
exports.shockwave = {
    LABEL: 'Shockwave',
    TYPE: 'shockwave',
    COLOR: 3,
    SHAPE: 'M 0,-1 A 1,1 0 0 0 -1,0 1,1 0 0 0 0,1 1,1 0 0 0 1,0 1,1 0 0 0 0,-1 Z m 0,0.14079064 A 0.85921057,0.85921057 0 0 1 0.85921166,0 0.85921057,0.85921057 0 0 1 0,0.85921166 0.85921057,0.85921057 0 0 1 -0.85921166,0 0.85921057,0.85921057 0 0 1 0,-0.85921166 Z',
    ACCEPTS_SCORE: false,
    CONTINUALLY_INCREASE_SIZE: 45,
    BODY: {
        PENETRATION: 0.01,
        SPEED: 0,
        RANGE: 60,
        DENSITY: 10, 
        HEALTH: 100 * wepHealthFactor,
        DAMAGE: 0.6 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.shockwaveten = {
    LABEL: 'Shockwave',
    TYPE: 'shockwave',
    COLOR: 3,
    SHAPE: [[0.966,0.257],[1,0],[0.8,0],[0.775,0.209],[0.694,0.404],[0.565,0.568],[0.4,0.695],[0.204,0.774],[0,0.8],[-0.209,0.774],[-0.402,0.692],[-0.568,0.569],[-0.696,0.399],[-0.773,0.209],[-0.8,0],[-0.775,-0.209],[-0.694,-0.403],[-0.568,-0.567],[-0.401,-0.697],[-0.2,-0.774],[0,-0.8],[0.207,-0.774],[0.399,-0.694],[0.565,-0.567],[0.692,-0.4],[0.773,-0.209],[0.8,0],[1,0],[0.964,-0.259],[0.865,-0.5],[0.708,-0.706],[0.5,-0.867],[0.259,-0.966],[0,-1],[-0.259,-0.968],[-0.5,-0.867],[-0.71,-0.707],[-0.867,-0.501],[-0.969,-0.26],[-1,0],[-0.97,0.256],[-0.868,0.5],[-0.709,0.708],[-0.5,0.864],[-0.26,0.967],[0,1],[0.258,0.968],[0.5,0.867],[0.706,0.709],[0.864,0.5]],
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 0.01,
        SPEED: 0,
        RANGE: 20,
        DENSITY: 1.25, 
        HEALTH: 3948994 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        PUSHABILITY: 0.01,
    },
    VALUE: 1e10,
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet2 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: 4,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullett = {
    LABEL: 'Bullett',
    TYPE: 'tank',
    DANGER: 9,
    ACCEPTS_SCORE: true,
    COLOR: 16,
    BODY: {
        PENETRATION: 1,
        SPEED: 3,
        RANGE: 4269,
        DENSITY: 1.25,
        HEALTH: 0.9 * wepHealthFactor, 
        DAMAGE: 1.333 * wepDamageFactor,
        PUSHABILITY: 0,
    },
    VALUE: 69,
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
    CAN_BE_ON_LEADERBOARD: true,
};
exports.lmaogetrektnoob = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1000,
        HEALTH: 6000 * wepHealthFactor,
        DAMAGE: 0.01 * wepDamageFactor,
        PUSHABILITY: 0, 
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,   
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.tsbullet = {
    LABEL: 'B̸̗̰͈͕͈̰̜̯͇̥̀̚u̶̡̖̲̘̻͔͇͔̰̻̤͐l̴̝̟̦̖̬̜̹͕̖͇̟̝̳͇̏̽͋̿̑̿͝l̷̨͉̩͉̼͙̭͙̻̏̔̽̈́̎͑̑̃̽̿͌̈́̕͜e̵̲̻͆̀t̴̤̻̮͔̖̻̠̜̻̙̯̦͖̤̽͐̈́̈̔̇̀͐̔͘ͅ',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletbutitsfuckingstupidashell = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
  SHAPE: [[0.5,-0.15],[1.05,-0.1],[1.85,0.2],[0.45,0.2],[-1,0.2],[-1,-0.2],[0.45,-0.2]],
    BODY: {
        PENETRATION: 10,
        SPEED: 3,
        RANGE: 140,
        DENSITY: 3,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 6 * wepDamageFactor,
        PUSHABILITY: 0.6,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
    exports.casing = {
        PARENT: [exports.bullet],
        LABEL: 'Shell',
        TYPE: 'swarm',
    };

exports.swarm = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
        FOV: 50,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.uswarm = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'withMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 1,
        SPEED: 18,
        ACCELERATION: 15,
        RANGE: 200,
        DENSITY: 1.25,
        HEALTH: 46 * wepHealthFactor,
        DAMAGE: 30 * wepDamageFactor,
        PUSHABILITY: 1,
        FOV: 5000,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.spikeBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -4,
    INDEPENDENT: true,
};
    exports.spikeBody1 = {
        LABEL: '',
        CONTROLLERS: ['fastspin'], 
        COLOR: 9,
        SHAPE: 3,
        INDEPENDENT: true,
    };
    exports.spikeBody2 = {
        LABEL: '',
        CONTROLLERS: ['reversespin'], 
        COLOR: 9,
        SHAPE: 3,
        INDEPENDENT: true,
    };
exports.aBody = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 18,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.aBody2 = {
    LABEL: '',
    CONTROLLERS: ['fastspin'], 
    COLOR: 18,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.iCameISawISpiked = {
    LABEL: 'Spike',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 3,
        SPEED: 6,
        ACCELERATION: 2,
        RANGE: 200,
        DENSITY: 2,
        HEALTH: 4 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 1,
        FOV: 50,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
TURRETS: [ { /*** SIZE X Y ANGLE ARC */
        POSITION: [  21.5,  0,   0,    180,   360,   0,], 
        TYPE: exports.aBody,
        
        }, {
        POSITION: [  21.5,  0,   0,    90,   360,   0,], 
        TYPE: exports.aBody2,
        
        }, ],
};
exports.swarmlightning = {
    PARENT: [exports.swarm],
    LABEL: 'Lightning Bolt',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: [[-1,0],[-0.2,0.2],[0.1,-0.4],[1,0],[0.2,-0.2],[0,0.4]],
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 0.03,
        SPEED: 15,
        RANGE: 170,
        DENSITY: 2,
        HEALTH: 0.5 * wepHealthFactor,
        DAMAGE: 6 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.lightning,
                        },
              ], 
};
exports.swa2m = {
    LABEL: 'Two Swarmer',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: [[1.2,1],[1.6,1],[2,0.6],[2,-0.6],[1.6,-1],[1,-1],[1,-0.6],[1.5,-0.6],[1.5,0.6],[-0.6,-1],[-1,-1],[-1,1],[-0.6,1],[-0.6,-0.4]],
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 1.22,
        SPEED: 10,
        RANGE: 222,
        DENSITY: 2.2,
        HEALTH: 2.2 * wepHealthFactor,
        DAMAGE: 2.2 * wepDamageFactor,
        PUSHABILITY: 1,
        FOV: 22,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.swarmzalgo = {
    LABEL: 'S̷̨̩͂͒̀w̸̲̱͑̄̐̒͊̈̀̽â̵̪̗̗͓̹̱̞̈́̒͊̔ͅr̷̨̝͛͛͘ͅm̷̨͎̪͓̦̳̥̊̃̏͜ ̴̢̡͈̯̣̬̥͊̒D̶̼̹̥̳̩̫͚̪̽̐r̶̖̦̰̾̅̏̓̔̏̾̚o̶̠̪̻̫̪̞͋͂ñ̵̨̧̳͍̭̥̬̞͆é̵̲͕̒̈́̔͋́͘͘͜',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: [[-0.5,-0.1],[-1,-0.5],[-1,0.5],[-0.5,0.1],[-0.4,0.1],[-0.2,0.4],[0,0.1],[1,0],[0,-0.1],[-0.2,-0.5],[-0.4,-0.1]],
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 3,
        SPEED: 6,
        RANGE: 180,
        DENSITY: 1.5,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 13 * wepDamageFactor,
        PUSHABILITY: 0.3,
        FOV: 50,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.swarmdumb = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 4,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    BODY: {
        PENETRATION: 4,
        SPEED: 7,
        ACCELERATION: 0.4,
        RANGE: 220,
        DENSITY: 2,
        HEALTH: 1.5 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
        FOV: 5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.millieswarm = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 1,
        SPEED: 3,
        RANGE: 100,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
        FOV: 2,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.metaswarm = {
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * wepHealthFactor,
        DAMAGE: 1.5 * wepDamageFactor,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.swarm2 = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: true,
    SHAPE: [[-1,0.4],[-1,-0.4],[1.8,0]],
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 3,
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 5 * wepDamageFactor,
        SPEED: 10,
        RESIST: 1.6,
        RANGE: 90,
        DENSITY: 33,
        PUSHABILITY: 0.1,
        FOV: 9,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
    exports.bee = {
        PARENT: [exports.swarm],
        PERSISTS_AFTER_DEATH: true, 
        SHAPE: 4, 
        LABEL: 'Drone',
        HITS_OWN_TYPE: 'hardWithBuffer',
    };
    exports.autoswarm = {
        PARENT: [exports.swarm],
        AI: { FARMER: true, },
        INDEPENDENT: true,
    };
    exports.autoswarm2 = {
        PARENT: [exports.swarm2],
        BODY: {
          SPEED: 7,
          ACCELERATION: 5,
        },
        AI: { FARMER: true, },
        INDEPENDENT: true,
    };

exports.trap = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
        PUSHABILITY: 2,
    },
};
    exports.block = {
        LABEL: 'Set Trap',
        PARENT: [exports.trap],
        SHAPE: -4,
        MOTION_TYPE: 'motor',    
        CONTROLLERS: ['goToMasterTarget'],
        BODY: {
            SPEED: 1,
            DENSITY: 5,
        },
    };
    exports.boomerang = {
        LABEL: 'Boomerang',
        PARENT: [exports.trap],
        CONTROLLERS: ['boomerang'],
        MOTION_TYPE: 'motor',  
        HITS_OWN_TYPE: 'never',
        SHAPE: -5,
        BODY: {
            SPEED: 1.25,
            RANGE: 120,
        },
    };
  exports.boomerang = {
        LABEL: 'Boomerang',
        PARENT: [exports.trap],
        CONTROLLERS: ['boomerang'],
        MOTION_TYPE: 'motor',  
        HITS_OWN_TYPE: 'never',
        SHAPE: -5,
        BODY: {
            SPEED: 1.25,
            RANGE: 120,
        },
    };exports.boomerang = {
        LABEL: 'Boomerang',
        PARENT: [exports.trap],
        CONTROLLERS: ['boomerang'],
        MOTION_TYPE: 'motor',  
        HITS_OWN_TYPE: 'never',
        SHAPE: -5,
        BODY: {
            SPEED: 1.25,
            RANGE: 120,
        },
    };exports.boomerang = {
        LABEL: 'Boomerang',
        PARENT: [exports.trap],
        CONTROLLERS: ['boomerang'],
        MOTION_TYPE: 'motor',  
        HITS_OWN_TYPE: 'never',
        SHAPE: -5,
        BODY: {
            SPEED: 1.25,
            RANGE: 120,
        },
    };
exports.boomerang6 = {
        LABEL: 'Boomerang',
        PARENT: [exports.trap],
        CONTROLLERS: ['boomerang'],
        FACING_TYPE: 'autospin2',
        MOTION_TYPE: 'motor',  
        HITS_OWN_TYPE: 'never',
        SHAPE: [[-0.4,-1.8],[0,-1.6],[1,0],[0,1.6],[-0.4,1.8],[0.4,0]],
        BODY: {
            SPEED: 1.25,
            RANGE: 120,
        },
    };
    exports.broomerang = {
        LABEL: 'Broomerang',
        PARENT: [exports.trap],
        CONTROLLERS: ['broomerang'],
        MOTION_TYPE: 'motor',  
        HITS_OWN_TYPE: 'never',
        SHAPE: -5,
        BODY: {
            SPEED: 5,
            RANGE: 250, 
            DAMAGE: 48,
            HEALTH: 2000,
        },
    };

exports.drone = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 1,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.udrone = {
    PARENT: [exports.drone],
    SHOOT_ON_DEATH: 3,
    BODY: {
        PENETRATION: 0.5,
        PUSHABILITY: 1,
        ACCELERATION: 0.4,
        HEALTH: 8 * wepHealthFactor,
        DAMAGE: 4.5 * wepDamageFactor,
        SPEED: 5.5,
        DENSITY: 0.3,
        RESIST: 2,
    },
};
exports.skulleye = {
    LABEL: '',
    COLOR: 30,    
SHAPE: [[0.4,0.8],[0.42,0.39],[0.4,0],[0.5,-0.4],[-0.1,-0.3],[-0.3,0.2],[-0.2,0.6]],
  INDEPENDENT: true,
};
exports.skullnose = {
    LABEL: '',
    COLOR: 30,
    SHAPE: [[-0.2,0.2],[0.5,0],[-0.2,-0.2]],
    INDEPENDENT: true,
};
exports.skullmouth = {
    LABEL: '',
    COLOR: 30,
SHAPE: [[-0.7,0.5],[-0.6,1],[-0.4,1],[0.2,1],[-0.5,0.8],[-0.5,-0.4],[0.3,-0.6],[-0.4,-0.6],[-0.6,-0.6],[-0.7,-0.1]],
    INDEPENDENT: true,
};
exports.skullA = {
    LABEL: '',
    COLOR: 9,
    SHAPE: [[-0.3,1],[0.6,1],[1,0.6],[1,-0.6],[0.5,-1],[-0.3,-1],[-0.5,-1.1],[-0.7,-1],[-0.8,-0.8],[-1.5,-0.5],[-1.47,0.02],[-1.5,0.5],[-0.8,0.8],[-0.7,1],[-0.5,1.1]],
    INDEPENDENT: true,
};
exports.skull = {
    LABEL: 'Skull',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 4,
    CONTROL_RANGE: 0,
    SHAPE: [[-0.3,1],[0.6,1],[1,0.6],[1,-0.6],[0.5,-1],[-0.3,-1],[-0.5,-1.1],[-0.7,-1],[-0.8,-0.8],[-1.5,-0.5],[-1.47,0.02],[-1.5,0.5],[-0.8,0.8],[-0.7,1],[-0.5,1.1]],
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 0.1,
        PUSHABILITY: 1,
        ACCELERATION: 0.05,
        HEALTH: 100 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        SPEED: 10,
        RANGE: 100000,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 1.5,
    }, 
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
    TURRETS: [{ /*            SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.skullA,
                        }, {
                POSITION: [  10,     4,      4,      0,     0,  1], 
                    TYPE: exports.skulleye,
                        }, {
                POSITION: [  10,     4,     -5,     0,    0,  1], 
                    TYPE: exports.skulleye,
                        }, {
                POSITION: [  10,     -2,      0,     0,    0,  1], 
                    TYPE: exports.skullnose,
                        }, {
                POSITION: [  18,     -7,      -2,     0,    0,  1], 
                    TYPE: exports.skullmouth,
                        },
            ],
};
exports.dronefast = {
    PARENT: [exports.drone],
    BODY: {
        PENETRATION: 1.5,
        SPEED: 10,
        FOV: 10,
    },
};
exports.drone8 = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    SHAPE: 3,
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 1,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    BUFF_VS_FOOD: true,
};
    exports.sunchip = {
        PARENT: [exports.drone],
        SHAPE: 4,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.6,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
    };
    exports.sunchip2 = {
        PARENT: [exports.drone],
        SHAPE: 3,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.8,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
        INDEPENDENT: true,
    };
    exports.sunchip3 = {
        PARENT: [exports.drone],
        SHAPE: 0,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.5,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
        INDEPENDENT: true,
    };
    exports.sunchip4 = {
        PARENT: [exports.drone],
        SHAPE: 5,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 1,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
        INDEPENDENT: true,
    };
    exports.autosunchip = {
        PARENT: [exports.sunchip],
        AI: {
            BLIND: true,
            FARMER: true,
        },
        INDEPENDENT: true,
    };
    exports.gunchip = {
        PARENT: [exports.drone],
        SHAPE: -2,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.5,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
    };

exports.missile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },  
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     6,      1,      0,     -2,     130,     0,   ], 
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
                TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            }, }, {
        POSITION: [  14,     6,      1,      0,      2,     230,     0,  ], 
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
                TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.thruster,    
            }, }, 
    ],
}; 
exports.ext = {
    LABEL: '',
    COLOR: 1125,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.explosion0 = {
    PARENT: [exports.bullet],
    CONTINUALLY_INCREASE_SIZE: 50,
    CONTROLLERS: ['alwaysFire'],
    BODY: {
      RANGE: 30,
      HEALTH: 150,
      DAMAGE: 125,
      PENETRATION: 5,
      SPEED: 0, 
      DENSITY: 5,
      PUSHABILITY: 0,
    },
    SIZE: 105,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  0,     6,      1,      0,     0,     0,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     5,      1,      0,     0,     20,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     4,      1,      0,     0,     35,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster,g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     6,      1,      0,     0,     60,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     7,      1,      0,     0,     80,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     5,      1,      0,     0,     110,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     6,      1,      0,     0,     120,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     7,      1,      0,     0,     125,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     3,      1,      0,     0,     160,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     7,      1,      0,     0,     175,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster,g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     8,      1,      0,     0,     205,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     4,      1,      0,     0,     215,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     5,      1,      0,     0,     245,     0,   ], 
            PROPERTIES: { 
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     5,      1,      0,     0,     260,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     4,      1,      0,     0,     280,     0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster,g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, }, {
        POSITION: [  0,     8,      1,      0,     0,     325,     0,   ], 
            PROPERTIES: { 
                SHOOT_SETTINGS: combineStats([g.trap, g.faster, g.faster, g.faster, g.TRT]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            }, },
    ],
};
exports.explosion2 = {
    PARENT: [exports.bullet],
    BODY: {
      RANGE: 10,
      HEALTH: 150,
      DAMAGE: 125,
      PENETRATION: 5,
      SPEED: 0, 
      DENSITY: 5,
      PUSHABILITY: 0,
    },
    SIZE: 150,
    };
exports.explosivetrap = {
    PARENT: [exports.trap],
    LABEL: 'Explosive Trap',
    INDEPENDENT: true,
    SHAPE: -3, 
    SHOOT_ON_DEATH: 1,
    SYNCS_SKILLS: true,
    BODY: { 
        FOV: 0,
        RANGE: 125,
        SPEED: 0,
        ACCELERATION: 0,
        PENETRATION: 1,
        HEALTH: 100000,
        DAMAGE: 0.001,
    },   
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  10,     0,      0,      0,     0,  1], 
                    TYPE: exports.ext,
                        }, 
              ],
};
    exports.hypermissile = {
        PARENT: [exports.missile],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,     6,      1,      0,     -2,     150,     0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                    STAT_CALCULATOR: gunCalcNames.thruster,
                }, }, {
            POSITION: [  14,     6,      1,      0,      2,     210,     0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                    STAT_CALCULATOR: gunCalcNames.thruster,
                }, }, {        
            POSITION: [  14,     6,      1,      0,     -2,      90,    0.5,  ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, }, {
            POSITION: [  14,     6,      1,      0,      2,     270,    0.5,  ],  
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, },
        ],
    };
    exports.snake = {
        PARENT: [exports.bullet],
        LABEL: 'Snake',
        INDEPENDENT: true,
        BODY: {
            RANGE: 120,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,    12,     1.4,     8,      0,     180,    0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin,
                    ]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, }, {
            POSITION: [  10,    12,     0.8,     8,      0,     180,   0.5,  ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    NEGATIVE_RECOIL: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.sniper, g.hunter, g.hunter2, g.snake,
                    ]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, },
        ],
    };
    exports.hive = {
        PARENT: [exports.bullet],
        LABEL: 'Hive',
        BODY: {
            RANGE: 90,
            FOV: 0.5,
        },  
        FACING_TYPE: 'turnWithSpeed',
        INDEPENDENT: true,
        CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
        AI: { NO_LEAD: true, },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   7,    9.5,    0.6,     7,      0,      108,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      180,    0.2,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      252,    0.4,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      324,    0.6,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      36,     0.8,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, 
        ],
    };

// TANK CLASSES
const base = {
    ACCEL: 1.5,
    SPEED: 12,
    HEALTH: 20,
    DAMAGE: 3,
    RESIST: 1,
    PENETRATION: 1.05,
    SHIELD: 8,
    REGEN: 0.025,
    FOV: 1,
    DENSITY: 0.5,
};
const standard = {
    ACCEL: 1.5,
    SPEED: 5,
    HEALTH: 30,
    DAMAGE: 3,
    RESIST: 1,
    PENETRATION: 1.05,
    SHIELD: 8,
    REGEN: 0.025,
    FOV: 1,
    DENSITY: 0.5,
}
exports.nfaedrone = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
    BODY: {
        PENETRATION: 0.5, 
        SPEED: 5,
        RANGE: 180,
        DENSITY: 1,
        HEALTH: 0.75 * wepHealthFactor,
        DAMAGE: 12 * wepDamageFactor,
        PUSHABILITY: 4,
        FOV: 1,
        ACCELRATION : base.ACCEL * 0.007,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.genericTank = {
    LABEL: 'Unknown Class',
    TYPE: 'tank',
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'toTarget',
    SIZE: 12,
    MAX_CHILDREN: 0,   
    DAMAGE_EFFECTS: false,
    BODY: { // def
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: standard.HEALTH, 
        DAMAGE: base.DAMAGE, 
        PENETRATION: base.PENETRATION, 
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 0.9,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
};
exports.genericTankWithoutSpeed = {
    PENIS: 0,
};
exports.genericTankWithoutSpeedLO = {
    LABEL: 'Unknown Class',
    TYPE: 'tank',
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'toTarget',
    SIZE: 12,
    MAX_CHILDREN: 0,   
    DAMAGE_EFFECTS: false,
    BODY: { // def
        ACCELERATION: base.ACCEL,
        HEALTH: standard.HEALTH, 
        DAMAGE: base.DAMAGE, 
        PENETRATION: base.PENETRATION, 
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 0.9,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
};
exports.spectatorDef = {
    LABEL: 'Unknown Class',
    TYPE: 'spec',
    DAMAGE_CLASS: 2,
    DANGER: 0,
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'toTarget',
    SIZE: 12,
    MAX_CHILDREN: 0,   
    DAMAGE_EFFECTS: false,
    BODY: { // def
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH, 
        DAMAGE: base.DAMAGE, 
        PENETRATION: base.PENETRATION, 
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 0.9,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
};

let gun = { };

exports.autoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.c34_BODY1 = {
    PARENT: [exports.genericTank],
    LABEL: '1 Body',
    BODY: {
        FOV: 4,
    },
    COLOR: 34,
    FACING_TYPE: 'autospin',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  10,    12,    -0.5,     9,      0,      0,      0,  ], 
                        }, {
       POSITION: [  17,    13,      1,      0,      0,      0,      1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload]),
                            TYPE: exports.missile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, }, {
        POSITION: [  10,    12,    -0.5,     9,      0,      72,      0,  ], 
                        }, {
       POSITION: [  17,    13,      1,      0,      0,      72,      1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload]),
                            TYPE: exports.missile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, }, {
        POSITION: [  10,    12,    -0.5,     9,      0,      144,      0,  ], 
                        }, {
       POSITION: [  17,    13,      1,      0,      0,      144,      1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload]),
                            TYPE: exports.missile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, }, {
        POSITION: [  10,    12,    -0.5,     9,      0,      216,      0,  ], 
                        }, {
       POSITION: [  17,    13,      1,      0,      0,      216,      1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload]),
                            TYPE: exports.missile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, }, {
        POSITION: [  10,    12,    -0.5,     9,      0,      288,     0,  ], 
                        }, {
       POSITION: [  17,    13,      1,      0,      0,      288,      1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim, g.halfreload]),
                            TYPE: exports.missile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
    ],
};
exports.c34_BODY2 = {
    PARENT: [exports.genericTank],
    LABEL: '2 Body',
    BODY: {
        FOV: 4,
    },
    COLOR: 34,
    FACING_TYPE: 'autospin',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ {             /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                   POSITION: [   7,    7.5,    0.6,     7,      0,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     0,     45,     0.125,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     0,     90,     0.25,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     0,     135,    0.375,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      0,     180,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     0,     225,     0.625,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     0,     270,     0.75,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     0,     315,    0.875,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.faster, g.halfreload, g.halfreload, g.morerange]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, },
    ],
};
exports.c34_BODY3 = {
    PARENT: [exports.genericTank],
    LABEL: '3 Body',
    BODY: {
        FOV: 4,
    },
    COLOR: 34,
    FACING_TYPE: 'locksFacing',
    GUNS: [ {             /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  17,     12,      1,      0,      0,     90,     0,   ],
                        }, {
        POSITION: [   4,     12,     1.5,    17,      0,     90,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.lessreload]),
                            TYPE: exports.explosivetrap, STAT_CALCULATOR: gunCalcNames.trap,
                            SYNCS_SKILLS: true,  
                        }, },
    ],
};
exports.barrierturret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 3,
    },
    FACING_TYPE: 'nothing',
    COLOR: 2250,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  0,     17,      0,      0,    0,     0,      1,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.dieof]), 
                    TYPE: exports.shieldbarrier,
                    AUTOFIRE: true,
                }, }, 
        ],
};


exports.autoTurretA409 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 2,
    },
    COLOR: 16,
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  26,    9,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.indfk]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.GIANT_FUCKING_ROCK_CANNON = {
    PARENT: [exports.genericTank],
    LABEL: 'GIANT FUCKING ROCK CANNON',
    FACING_TYPE: 'locksFacing',
    BODY: {
        FOV: 25,
    },
    COLOR: 222,
    SHAPE: [[-2,-0.6],[-2,0.6],[-1,0.6],[-1,0.4],[-0.8,0.4],[-0.6,0.6],[2,0.6],[1.8,0.8],[2.4,0.6],[2.6,0.4],[2.6,-0.4],[2.4,-0.6],[1.8,-0.8],[2,-0.6],[-0.6,-0.6],[-0.8,-0.4],[-1,-0.4],[-1,-0.6]],
    //CONTROLLERS: ['nearestDifferentMaster'],
};
exports.sworduiereruio = {
    PARENT: [exports.genericTank],
    LABEL: 'sword..........smachine?? ULTRAKILL REFERENCE???',
    CONTROLLERS: ['doNothing'],
    BODY: {
      FOV: 0,
    },
    COLOR: 18,
SHAPE: [[-2,-0.1],[-2,0.1],[-1.5,0.1],[-1.5,0.5],[-1.4,0.5],[-1.395,0.2],[2,0.2],[1.5,-0.2],[-1.4,-0.2],[-1.4,-0.5],[-1.5,-0.5],[-1.5,-0.1]],    //CONTROLLERS: ['nearestDifferentMaster'],
};
exports.rockshooter = {
    PARENT: [exports.genericTank],
    LABEL: 'rock shooter',
    FACING_TYPE: 'locksFacing',
    BODY: {
        FOV: 25,
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.01,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.02,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.03,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.04,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.05,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.06,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.07,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.08,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.09,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.11,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.12,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.13,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.14,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.15,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.16,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.17,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.18,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, }, {
        POSITION: [  22,    10,      1,      0,      0,      0,      0.19,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.RK]),
                TYPE: exports.rockbullet,
            }, },
    ],
};
exports.fireeyeturret = {
    PARENT: [exports.genericTank],
    LABEL: 'Sans Eye',
    FACING_TYPE: 'locksFacing',
    BODY: {
        FOV: 25,
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      1.5,      0,      0.21,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.lessreload, g.F]),
                TYPE: exports.fire1,
            }, }, {
         POSITION: [  22,    10,      1,      0,      -1,      0,      0.67,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.lessreload, g.F]),
                TYPE: exports.fire2,
            }, }, {
         POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.F]),
                TYPE: exports.fire3,
            }, }, {
         POSITION: [  22,    10,      1,      0,      -2,      0,      0.33,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.lessreload, g.F]),
                TYPE: exports.fire4,
            }, },
    ],
};
exports.snipeturret18 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 18,
    },
    COLOR: 6,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  32,    8.5,     1,      0,      0,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.ST18]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                    },
    ],
};
exports.bigassthing19 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 19,
    },
    COLOR: 9,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
       POSITION: [  25,     19,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.AT19]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  23,     19,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.AT19]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,     19,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.AT19]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  19,     19,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.AT19]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  17,     19,      1,      0,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.AT19]),
                            TYPE: exports.bullet,
                        }, },
    ],
};
exports.boosterauto = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.lotsmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.lotsmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
    ],
};
exports.rfturret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    FACING_TYPE: 'autospin2',  
    INDEPENDENT: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  35,    7,      1,      0,      0,      0,      1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.R]),
                TYPE: exports.bullet,
                AUTOFIRE: true,
            }, },
    ],
};
    exports.machineAutoTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Turret',
        COLOR: 16,
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,    11,     1.3,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.slow]),
                    TYPE: exports.bullet,
                }, },
        ],
    };
    exports.autoSmasherTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Turret', 
        COLOR: 16,
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     6,      1,      0,      5,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, }, {
            POSITION: [  20,     6,      1,      0,     -5,      0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, },
        ],
    };
    exports.oldAutoSmasherTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Turret',
        COLOR: 16,
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     7,      1,      0,    -5.75,    0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorerecoil, g.morereload]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, }, {            
            POSITION: [  20,     7,      1,      0,     5.75,    0,     0.5,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorerecoil, g.morereload]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, },
        ],
    };

exports.auto3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};

exports.cruiserauto = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 35,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   7,    7.5,    0.6,     7,      4,      0,      0,   ], 
          PROPERTIES: {
              SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lessreload]),
                  TYPE: exports.millieswarm,
                  STAT_CALCULATOR: gunCalcNames.swarm,  
                  AUTOFIRE: true,
        }, }, {
        POSITION: [   7,    7.5,    0.6,     7,     -4,      0,     0.5,  ], 
          PROPERTIES: {
               SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lessreload]),
                  TYPE: exports.millieswarm,
                  STAT_CALCULATOR: gunCalcNames.swarm, 
                  AUTOFIRE: true, 
        }, },
            ],
        };
exports.metagunauto = {
    PARENT: [exports.genericTank],
    LABEL: "I'M SO META",
    BODY: {
        FOV: 30,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.META]),
                TYPE: exports.metaswarm,
            }, }
    ],
};
    exports.auto5gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 3,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,    11,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.heavy3gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
            SPEED: 0.9,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  22,    14,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.attackergun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 1, 
            SPEED: 0.9,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 8,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  30,    5,      1,      0,      3.5,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.attack, g.fast, g.fast]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  30,    5,      1,      0,      -3.5,      0,      0.5,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.attack, g.fast, g.fast]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  3.7,    13.8,      1,      20.5,      0,      0,      0,   ], 
                },
        ],
    };
    exports.masterGun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 3,
        },
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 16,
        MAX_CHILDREN: 6,
        AI: {
            NO_LEAD: true,
            SKYNET: true,
            FULL_VIEW: true,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   8,     14,    1.3,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.master]),
                    TYPE: exports.drone,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
    exports.sniper3gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 5,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  27,     9,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [   5,     9,     -1.5,    8,      0,      0,      0,   ], 
            },
        ],
    };
    exports.sniper4gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 3.5,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 17,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  27,     9,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.slow, g.power, g.aaaad]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [   5,     9,     -1.5,    8,      0,      0,      0,   ], 
            },
        ],
    };
    exports.bansheegun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        INDEPENDENT: true,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  26,    10,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.whiteball = {
        PARENT: [exports.genericTank],
        LABEL: '',
        COLOR: 8,
        INDEPENDENT: true,
        GUNS: [],                
          };
exports.controllerbutton1 = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 259,
        INDEPENDENT: true,
        GUNS: [],                
          };
exports.controllerbutton2 = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 260,
        INDEPENDENT: true,
        GUNS: [],
};
  exports.controllerbutton3 = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 261,
        INDEPENDENT: true,
        GUNS: [],
  };
          exports.controllerbutton4 = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 262,
        INDEPENDENT: true,
        GUNS: [],
          };
exports.auto4gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,     4,      1,      0,    -3.5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     4,      1,      0,     3.5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.bigauto4gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,     5,      1,      0,    -4.5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,     4.5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     5,      1,      0,      0,      0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.cutecatsgun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        FOV: 2,
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 17,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  17,     7,      1,      0,    5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  17,     7,      1,      0,     -5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  19,     7,      1,      0,      0,      0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.pbgun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        FOV: 2.5,
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 9,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  17,     7,      1,      0,    5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  17,     7,      1,      0,     -5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  19,     7,      1,      0,      0,      0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.overlordauto = {
        PARENT: [exports.genericTank],
        LABEL: '', 
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 17,
        MAX_CHILDREN: 16,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     12,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, },
                ],
            };
    exports.bigauto44gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 18,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  12,     5,      1,      0,    -6.5,     0,      0.667,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  12,     5,      1,      0,     6.5,     0,     0.667,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,    -4.5,     0,      0.333,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,     4.5,     0,     0.333,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     5,      1,      0,      0,      0,     0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.bigauto43gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 3,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  12,     5,      1,      0,    -6.5,     0,      0.667,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  12,     5,      1,      0,     6.5,     0,     0.667,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,    -4.5,     0,      0.333,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,     4.5,     0,     0.333,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     5,      1,      0,      0,      0,     0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.bigauto46gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 18,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  12,     5,      1,      0,    -6.5,     0,      0.667,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  12,     5,      1,      0,     6.5,     0,     0.667,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,    -4.5,     0,      0.333,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,     4.5,     0,     0.333,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.lessreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     10,      1,      0,      0,      0,     0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.morereload, g.fast, g.fast, g.fast]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.bigauto56gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 8,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  15,     10,      1,      0,    -6.5,     0,      0.667,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.morereload, g.fast, g.fast, g.fast]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  15,     10,      1,      0,     6.5,     0,     0.667,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.morereload, g.fast, g.fast, g.fast]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  17,     10,      1,      0,    -4.5,     0,      0.333,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.morereload, g.fast, g.fast, g.fast]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  17,     10,      1,      0,     4.5,     0,     0.333,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.morereload, g.fast, g.fast, g.fast]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  19,     10,      1,      0,      0,      0,     0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.morereload, g.fast, g.fast, g.fast]),
                    TYPE: exports.trap,
                }, }
        ],
    };
exports.bigauto0gun = { 
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 13,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     19,      1,      0,    0,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op, g.machgun]),
                    TYPE: exports.bullet,
                }, }, 
        ],
    };
exports.tritrapgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  20,    16,      1,      0,      0,      0,      0,   ], 
        }, {
        POSITION: [   2,    16,     1.1,     20,     0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
                TYPE: exports.block,
            }, },
    ],
};
exports.smasherBody = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.fuckitweball = {
    LABEL: '',
    COLOR: 9,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.blueA = {
    LABEL: '',
    COLOR: 264,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.whiteA = {
    LABEL: '',
    COLOR: 8,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.pinkA = {
    LABEL: '',
    COLOR: 5,
    SHAPE: 0,
    INDEPENDENT: true,
};
   exports.casingpink = {
        PARENT: [exports.bullet],
        LABEL: 'Shell',
        TYPE: 'swarm',
        COLOR: 5,
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.pinkA,
                        },
              ],
    };
    exports.casingwhite = {
        PARENT: [exports.bullet],
        LABEL: 'Shell',
        TYPE: 'swarm',
        COLOR: 8,
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.whiteA,
                        },
              ],
    };
    exports.casingblue = {
        PARENT: [exports.bullet],
        LABEL: 'Shell',
        TYPE: 'swarm',
        COLOR: 264,
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     0,      0,      0,     0,  1], 
                    TYPE: exports.blueA,
                        },
              ],
    };
exports.sword = {
  LABEL: '',
  COLOR: 18,
  SHAPE: [[-2,-0.1],[-2,0.1],[-1.5,0.1],[-1.5,0.5],[-1.4,0.5],[-1.395,0.2],[2,0.2],[1.5,-0.2],[-1.4,-0.2],[-1.4,-0.5],[-1.5,-0.5],[-1.5,-0.1]],   
  INDEPENDENT: true,                                                                                                                                                             
}
exports.eye = {
    LABEL: '',
    COLOR: 120,
    SHAPE: [[-0.6,-0.6],[0,-0.8],[0.8,-1],[0.8,1],[0,0.8],[-0.6,0.6],[-1,0.4],[-1.2,0],[-1,-0.4]],
    INDEPENDENT: true,
};
exports.eyeleft = {
    LABEL: '',
    COLOR: 119,
    SHAPE: [[-0.6,-0.6],[0,-0.8],[0.8,-1],[0.8,1],[0,0.8],[-0.6,0.6],[-1,0.4],[-1.2,0],[-1,-0.4]],
    INDEPENDENT: true,
};
exports.eyebrow = {
    LABEL: '',
    COLOR: 19,
    SHAPE: [[0.8,0],[0.6,-1],[1,-0.8],[1,0.8],[0.6,1]],
    INDEPENDENT: true,
};
exports.pupil = {
    LABEL: '',
    COLOR: 222,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.numberTwo = {
    LABEL: 'Two',
    COLOR: 32,
    SHAPE: [[1.2,1],[1.6,1],[2,0.6],[2,-0.6],[1.6,-1],[1,-1],[1,-0.6],[1.5,-0.6],[1.5,0.6],[-0.6,-1],[-1,-1],[-1,1],[-0.6,1],[-0.6,-0.4]],
    INDEPENDENT: true,
}
exports.eleventhing = {
    COLOR: 11,
    LABEL: 'Outer Segment',
    SHAPE: [[-0.2,-1],[-0.2,1],[0.2,1],[0.2,-1]],
    INDEPENDENT: true,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   5,    3,    1,     0,      -7,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray, g.lilspray, g.weaker]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [   5,    3,    1,     0,      7,      0,      0.5,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray, g.lilspray, g.weaker]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [   5,    3,    1,     0,      -7,      180,      0.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray, g.lilspray, g.weaker]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [   5,    3,    1,     0,      7,      180,      0.75,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray, g.lilspray, g.weaker]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, 
           ],
}
exports.divthing = {
    LABEL: '',
    COLOR: 3,
    SHAPE: [[0,-1],[0.2,-0.2],[1,0],[0.2,0.2],[0,1],[-0.2,0.2],[-1,-0.01],[-0.2,-0.2]],
    INDEPENDENT: false,
};
exports.healgunthing = {
    LABEL: '',
    COLOR: 5,
    SHAPE: [[-1.01,-0.4],[1,-0.4],[1,0.4],[-1,0.4]],
    INDEPENDENT: false,
};
exports.thingy = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 9,
    SHAPE: [[0.18,-0.9],[1.593,-0.75],[1.11,1.36],[1,0.5],[-1.22,-0.09],[-0.527,0.45],[-2.1,0.87],[-2.99,-0.05],[-0.33,-1.86],[1.83,-1.33]],
    INDEPENDENT: true,
};
exports.spikeBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -4,
    INDEPENDENT: true,
};
    exports.spikeBody1 = {
        LABEL: '',
        CONTROLLERS: ['fastspin'], 
        COLOR: 9,
        SHAPE: 3,
        INDEPENDENT: true,
    };
    exports.spikeBody2 = {
        LABEL: '',
        CONTROLLERS: ['reversespin'], 
        COLOR: 9,
        SHAPE: 3,
        INDEPENDENT: true,
    };
exports.megasmashBody = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 9,
    SHAPE: -6,
    INDEPENDENT: true,
};
exports.dominationBody = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'], 
    COLOR: 9,
    SHAPE: 8,
    INDEPENDENT: true,
};
    exports.baseSwarmTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Protector',
        COLOR: 16,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['nearestDifferentMaster'], 
        AI: {
            NO_LEAD: true,
            LIKES_SHAPES: true,
        },
        INDEPENDENT: true,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   5,    4.5,    0.6,     7,      2,      0,     0.15, ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                    TYPE: exports.swarm,
                    STAT_CALCULATOR: gunCalcNames.swarm,          
                }, }, {
            POSITION: [   5,    4.5,    0.6,     7,     -2,      0,     0.15, ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                    TYPE: exports.swarm,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   5,    4.5,    0.6,    7.5,     0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                    TYPE: [exports.swarm, { INDEPENDENT: true, AI: { LIKES_SHAPES: true, }, }, ],
                    STAT_CALCULATOR: gunCalcNames.swarm,  
            }, }
        ],
    };
    exports.baseGunTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Protector',
        BODY: {
            FOV: 5,
        },
        ACCEPTS_SCORE: false,
        CONTROLLERS: ['nearestDifferentMaster'], 
        INDEPENDENT: true,
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  12,    12,     1,       6,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
                    TYPE: exports.bullet,          
                }, }, {
            POSITION: [  11,    13,     1,       6,      0,      0,     0.1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
                    TYPE: exports.bullet,          
                }, }, {
            POSITION: [   7,    13,    -1.3,     6,      0,      0,      0,   ],
                }
        ],
    };
        exports.baseProtector = {
            PARENT: [exports.genericTank],
            LABEL: 'Base',
            SIZE: 64,
            DAMAGE_CLASS: 0,
            ACCEPTS_SCORE: false,
            SKILL: skillSet({ 
                rld: 1,
                dam: 1,
                pen: 1,
                spd: 1,
                str: 1,
            }),
            BODY: { // def
                SPEED: 0,
                HEALTH: 10000, 
                DAMAGE: 10, 
                PENETRATION: 0.25, 
                SHIELD: 1000,
                REGEN: 100,
                FOV: 1,
                PUSHABILITY: 0,
                HETERO: 0,
            },
            //CONTROLLERS: ['nearestDifferentMaster'],
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.dominationBody,
                        }, {
                POSITION: [  12,     7,      0,      45,     100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        }, {
                POSITION: [  12,     7,      0,     135,    100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        }, {
                POSITION: [  12,     7,      0,     225,    100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        }, {
                POSITION: [  12,     7,      0,     315,    100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        },
            ],
            GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,      45,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     135,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     225,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     315,     0,   ], }, {
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,      45,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     135,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     225,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     315,     0,   ], }, 
            ],
        };

exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  17,     9,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, }, 
    ],
};
exports.python1 = {
    PARENT: [exports.genericTank],
    LABEL: '0.1', 
    TYPE: 'swarm',
    MOTION_TYPE: 'swarm',
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'locksFacing',
    CRAVES_ATTENTION: true,
    BODY: {
        FOV: 2,
        SPEED: 6,
        ACCELERATION: 8,
        HEALTH: 10,
        SHIELD: 0.5,
        DAMAGE: 5,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
        RANGE: 1200,
    },
    DRAW_HEALTH: true,
    DIE_AT_RANGE: true,
    INDEPENDENT: true,
    BUFF_VS_FOOD: true,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'hangOutNearMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {  
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
                ],
            };
exports.python2 = {
    PARENT: [exports.genericTank],
    LABEL: '0.1', 
    TYPE: 'swarm',
    MOTION_TYPE: 'swarm',
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'locksFacing',
    CRAVES_ATTENTION: true,
    BODY: {
        FOV: 2,
        SPEED: 4,
        ACCELERATION: 2,
        HEALTH: 6,
        SHIELD: 0,
        DAMAGE: 3,
        RESIST: 1, 
        PENETRATION: 1,
        DENSITY: 0.4,
        RANGE: 1200,
    },
    DRAW_HEALTH: true,
    DIE_AT_RANGE: true,
    INDEPENDENT: true,
    BUFF_VS_FOOD: true,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'hangOutNearMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                     POSITION: [  18,    10,      1,      0,      5,      0,     0,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,    10,      1,      0,     -5,      0,     0,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  21,    10,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, {
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
exports.pinpointer = {
    PARENT: [exports.genericTank],
    LABEL: 'Pinpointer', 
    TYPE: 'clone',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    SHAPE: 4,
    BODY: {
        FOV: 0.5,
        SPEED: 0.01,
        ACCELERATION: 0.05,
        HEALTH: 12,
        SHIELD: 8,
        DAMAGE: 2,
        RESIST: 1,
        PENETRATION: 0.5,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  0,     15,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.CH, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
            TYPE: exports.beam,
        }, }, {
    POSITION: [    0,         8,      1,      0,      0,     0,     0.5,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.remds]),
                            TYPE: exports.bullet,
                    }, }, 
    ],
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  15,     0,      0,      0,     0,  1], 
                    TYPE: exports.grayballP,
                        }, {
                POSITION: [  6,     0,      0,      0,     0,  1], 
                    TYPE: exports.redballP,
                        },
              ],
};
exports.minion267 = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion', 
    TYPE: 'minion',
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'locksFacing',
    BODY: {
        FOV: 3,
        SPEED: 3.5,
        ACCELERATION: 2,
        HEALTH: 14, 
        SHIELD: 1.2,
        DAMAGE: 1.9,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    GIVE_KILL_MESSAGE: true,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'mapTargetToGoal', 'hangOutNearMaster'],
    GUNS: [],
};
exports.smasherBody12 = {
    LABEL: '',
    CONTROLLERS: ['steroidspin'], 
    COLOR: 225,
    SHAPE: -5,
    INDEPENDENT: true,
};
let smshskl = 12; //13;
exports.accelerm = { 
            PARENT: [exports.minion267],
            CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
            LABEL: 'hahaha',
            DANGER: 1,
            BODY: {
                FOV: base.FOV * 1.05,
                DENSITY: base.DENSITY * 2,
                ACCELERATION: base.ACCEL * 3,
                DAMAGE: base.DAMAGE * 40,
                HEALTH: 3,
            },
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  21.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody12,
            }],
            IS_SMASHER: true,
            SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
            STAT_NAMES: statnames.smasher,
        };
exports.pillboxTurret = {
    PARENT: [exports.genericTank], 
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    11,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.pillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',    
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true, 
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360,  1], 
            TYPE: exports.pillboxTurret,
        }
    ]
};
exports.skimturret = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 2,
    },
    COLOR: 2,
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    LABEL: '',
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  10,    14,    -0.5,     9,      0,      0,      0,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
                TYPE: exports.hypermissile,
            }, }, {
        POSITION: [  17,    15,      1,      0,      0,      0,      0,  ], 
            },
    ],
};
    exports.skimboss = {
        PARENT: [exports.genericTank],
        BODY: {
            HEALTH: 300,
            DAMAGE: 2,
            SHIELD: 200,
        },
        SHAPE: 3, 
        COLOR: 2,
        FACING_TYPE: 'autospin',
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [  15,     5,      0,     60,     170, 0], 
                TYPE: exports.skimturret,
                    }, {
            POSITION: [  15,     5,      0,     180,    170, 0], 
                TYPE: exports.skimturret,
                    }, {
            POSITION: [  15,     5,      0,     300,    170, 0], 
                TYPE: exports.skimturret,
                    },
        ],
    };

function makeAuto(type, name = -1, options = {}) {
    let turret = { type: exports.autoTurret, size: 10, independent: true, };
    if (options.type != null) { turret.type = options.type; }
    if (options.size != null) { turret.size = options.size; }
    if (options.independent != null) { turret.independent = options.independent; }
    
    let output = JSON.parse(JSON.stringify(type));
    let autogun = {
        /*********  SIZE               X       Y     ANGLE    ARC */
        POSITION: [  turret.size,     0,      0,     180,    360,  1,], 
        TYPE: [turret.type, { CONTROLLERS: ['nearestDifferentMaster'], INDEPENDENT: turret.independent, }],
    };
    if (type.GUNS != null) { output.GUNS = type.GUNS; }
    if (type.TURRETS == null) { output.TURRETS = [autogun]; }
    else { output.TURRETS = [...type.TURRETS, autogun]; }
    if (name == -1) { output.LABEL = 'Auto-' + type.LABEL; } else { output.LABEL = name; }
    output.DANGER = type.DANGER + 1;
    return output;
}
function shutUpAndMakeMeSomeLasagaJon_NoIveHadItWithYouGarfielfYouStupidLazyFatFelineImNotMakingYouLAsaganYouCreepyAsshole(type, name = -1, options = {}) {
    let turret = { type: exports.autoTurretA409, size: 10, independent: true, };
    if (options.type != null) { turret.type = options.type; }
    if (options.size != null) { turret.size = options.size; }
    if (options.independent != null) { turret.independent = options.independent; }
    
    let output = JSON.parse(JSON.stringify(type));
    let autogun = {
        /*********  SIZE               X       Y     ANGLE    ARC */
        POSITION: [  turret.size,     0,      0,     180,    360,  1,], 
        TYPE: [turret.type, { CONTROLLERS: ['nearestDifferentMaster'], INDEPENDENT: turret.independent, }],
    };
    if (type.GUNS != null) { output.GUNS = type.GUNS; }
    if (type.TURRETS == null) { output.TURRETS = [autogun]; }
    else { output.TURRETS = [...type.TURRETS, autogun]; }
    if (name == -1) { output.LABEL = 'Auto-' + type.LABEL; } else { output.LABEL = name; }
    output.DANGER = type.DANGER + 1;
    return output;
}
function makeHybrid(type, name = -1) {
    let output = JSON.parse(JSON.stringify(type));
    let spawner = { 
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   7,     12,    1.2,     8,      0,     180,     0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
            TYPE: [exports.drone, { INDEPENDENT: true, }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,    
            MAX_CHILDREN: 3,
        }, };
    if (type.TURRETS != null) { output.TURRETS = type.TURRETS; }
    if (type.GUNS == null) { output.GUNS = [spawner]; }
    else { output.GUNS = [...type.GUNS, spawner]; }
    if (name == -1) { output.LABEL = 'Hybrid ' + type.LABEL; } else { output.LABEL = name; }
    return output;
}
exports.autopentagon = makeAuto(exports.pentagon);
exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '',                  // def
            STAT_CALCULATOR: 0,         // def
            WAIT_TO_CYCLE: false,       // def
            AUTOFIRE: false,            // def
            SYNCS_SKILLS: false,        // def         
            MAX_CHILDREN: 0,            // def  
            ALT_FIRE: false,            // def 
            NEGATIVE_RECOIL: false,     // def
        }, }, 
    ],
}; 
exports.basic34 = {
    PARENT: [exports.genericTank],
    LABEL: 'B a s i c',
    BODY: {
FOV: 3,
SPEED: base.SPEED * 10
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     14,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op2]),
            TYPE: exports.bullet,
            
        }, }, 
    ],
}; 
exports.spectator = {
            PARENT: [exports.spectatorDef],
            LABEL: 'Spectator',
            RESET_UPGRADES: true,
            DANGER: 1,
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
            LEVEL: -1,
            INVISIBLUH: [1, 2],
            BODY: { // def 
                SHIELD: 100000,
                REGEN: 1000000,
                HEALTH: 100000, 
                DAMAGE: 0,
                DENSITY: 0,
                PUSHABILITY: 0,
                FOV: 4,
                SPEED: base.SPEED * 15,
                ACCELERATION: base.ACCEL * 2.5,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [],
            INTANGIBLE: true,
            LIKES_SHAPES: true,
        },
  exports.spectator2 = {
            PARENT: [exports.spectatorDef],
            LABEL: 'mapwide fov',
            RESET_UPGRADES: true,
            DANGER: 1,
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
            LEVEL: -1,
            INVISIBLUH: [1, 2],
            BODY: { // def 
                SHIELD: 100000,
                REGEN: 1000000,
                HEALTH: 1000000, 
                DAMAGE: 0,
                DENSITY: 0,
                PUSHABILITY: 0,
                FOV: 80,
                SPEED: base.SPEED * 15,
                ACCELERATION: base.ACCEL * 2.5,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [],
            INTANGIBLE: true,
            LIKES_SHAPES: true,
        },
  exports.spectator3 = {
            PARENT: [exports.spectatorDef],
            LABEL: 'higher speed',
            RESET_UPGRADES: true,
            DANGER: 1,
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
            LEVEL: -1,
            INVISIBLUH: [1, 2],
            BODY: { // def 
                SHIELD: 100000,
                REGEN: 1000000,
                HEALTH: 1000000, 
                DAMAGE: 0,
                DENSITY: 0,
                PUSHABILITY: 0,
                FOV: 5,
                SPEED: base.SPEED * 40,
                ACCELERATION: base.ACCEL * 20,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [],
            INTANGIBLE: true,
            LIKES_SHAPES: true,
        },
  exports.pagetwo = {
    PARENT: [exports.genericTank],
    LABEL: 'Page Two',
    BODY: {
      SPEED: base.SPEED * 4,
      ACCELERATION: base.ACCEL * 2,
      DENSITY: base.DENSITY * 5,
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.aaaal]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [  16,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.aaaal]),
            TYPE: exports.bullet,
        }, }, 
    ],
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  10,    0,      0,      180,     0,  1], 
            TYPE: exports.numberTwo,
    },
                ],
}; 
 exports.scrapped = {
    PARENT: [exports.genericTank],
    LABEL: 'Scrapped Tanks',
    BODY: {
      SPEED: base.SPEED * 4,
      ACCELERATION: base.ACCEL * 2,
      DENSITY: base.DENSITY * 5,
    },
    //CONTROLLERS: ['nearestDap human geoifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.aaaal]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.aaaal]),
            TYPE: exports.bullet,
        }, }, 
    ],
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  10,    0,      0,      180,     0,  1], 
            TYPE: exports.numberTwo,
    },
                ],
}; 
        exports.testbed = {
            PARENT: [exports.genericTank],
            LABEL: 'TESTBED',
            RESET_UPGRADES: true,
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
            LEVEL: -1,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 2,
            },
            SHAPE: [
              [-1, -0.8],
              [-0.8, -1],
              [0.8, -1],
              [1, -0.8],
              [0.2, 0],
              [1, 0.8],
              [0.8, 1],
              [-0.8, 1],
              [-1, 0.8],
            ],
            VALUE: 10000,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
exports.number1W = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[0.7,-0.1],[0.7,-0.4],[1,-0.4],[1,0.2],[-1,0.2],[-1,-0.1]],
    INDEPENDENT: true,
};
exports.number2W = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[0.7,-0.8],[1,-0.8],[1,0.2],[0,0.2],[0,-0.5],[-0.7,-0.5],[-0.7,0.2],[-1,0.2],[-1,-0.8],[0.3,-0.8],[0.3,-0.1],[0.7,-0.1]],
    INDEPENDENT: true,
};
exports.number3W = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[0.7,-0.8],[1,-0.8],[1,0.2],[-1,0.2],[-1,-0.8],[-0.7,-0.8],[-0.7,-0.1],[-0.1,-0.1],[-0.1,-0.8],[0.2,-0.8],[0.2,-0.1],[0.7,-0.1]],
    INDEPENDENT: true,
};
exports.number3Y = {
    LABEL: '',
    COLOR: 35,
    SHAPE: [[0.7,-0.8],[1,-0.8],[1,0.2],[-1,0.2],[-1,-0.8],[-0.7,-0.8],[-0.7,-0.1],[-0.1,-0.1],[-0.1,-0.8],[0.2,-0.8],[0.2,-0.1],[0.7,-0.1]],
    INDEPENDENT: true,
};
exports.number4W = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[0.2,-0.1],[1,-0.1],[1,0.2],[-1,0.2],[-1,-0.1],[-0.1,-0.1],[-0.1,-0.8],[1,-0.8],[1,-0.5],[0.2,-0.5]],
    INDEPENDENT: true,
};
exports.number5W = { 
    LABEL: '',
    COLOR: 8,
    SHAPE: [[0.7,0.8],[1,0.8],[1,-0.2],[0,-0.2],[0,0.5],[-0.7,0.5],[-0.7,-0.2],[-1,-0.2],[-1,0.8],[0.3,0.8],[0.3,0.1],[0.7,0.1]],
    INDEPENDENT: true,
};
exports.number6W = { 
    LABEL: '',
    COLOR: 8,
SHAPE: [[0.7,0.3],[0.7,-0.5],[0.2,-0.5],[0.2,0],[-0.1,0],[-0.1,-0.5],[-0.7,-0.5],[-0.7,0],[0.2,0],[0.2,0.3],[-1,0.3],[-1,-0.8],[1,-0.8],[1,0.3]],
  INDEPENDENT: true,
};
exports.number7W = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[0.7,-0.5],[0.4,-0.5],[0.4,-0.8],[1,-0.8],[1,0.2],[-1,0.2],[-1,-0.1],[0.7,-0.1]],
    INDEPENDENT: true,
};
exports.number8W = {
    LABEL: '',
    COLOR: 8,
SHAPE: [[0.7,-0.3],[0.7,0.5],[0.2,0.5],[0.2,0],[-0.1,0],[-0.1,0.5],[-0.7,0.5],[-0.7,0],[0.7,0],[0.7,-0.3],[-1,-0.3],[-1,0.8],[1,0.8],[1,-0.3]],
  INDEPENDENT: true,
};
exports.number9W = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[-0.697,-0.3],[-0.7,0.5],[-0.2,0.5],[-0.2,0],[0.1,0],[0.1,0.5],[0.7,0.5],[0.7,0],[-0.2,0],[-0.2,-0.3],[1,-0.3],[1,0.8],[-1,0.8],[-1,-0.3]],
    INDEPENDENT: true,
};
exports.number0W = {
    LABEL: '',
    COLOR: 8,
    SHAPE: [[0.7,-0.3],[0.7,0.5],[-0.7,0.5],[-0.7,0],[0.7,0],[0.7,-0.3],[-1,-0.3],[-1,0.8],[1,0.8],[1,-0.3]],
    INDEPENDENT: true,
};
exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.3,
        HEALTH: 10,
        SHIELD: 0.5,
        DAMAGE: 1.05,
        RESIST: 1,
        PENETRATION: 1.3,
        DENSITY: 1,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  17,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, }, ],
};
        let frbgrefernjneigrnegigtjng = 99999999999;
        exports.smash = {
            PARENT: [exports.genericTank],
            LABEL: 'Smasher',
            DANGER: 6,
            BODY: {
                FOV: base.FOV * 1.05,
                DENSITY: base.DENSITY * 2,
            },
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  21.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody,
            }],
            IS_SMASHER: true,
            SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
            STAT_NAMES: statnames.smasher,
        };
      exports.acceler = {
            PARENT: [exports.genericTank],
            LABEL: 'hahaha',
            DANGER: 1,
            BODY: {
                FOV: base.FOV * 1.05,
                DENSITY: base.DENSITY * 2,
                ACCELERATION: base.ACCEL * 3,
                DAMAGE: base.DAMAGE * 50,
                HEALTH: 3,
            },
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  21.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody12,
            }],
            IS_SMASHER: true,
            SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
            STAT_NAMES: statnames.smasher,
        };
        exports.smash2 = {
            PARENT: [exports.genericTank],
            LABEL: 'SmasherrrrrrrrrrRRRRRRRRRRRRRRRRRrrrr',
            DANGER: 2,
            BODY: {
                FOV: base.FOV * 1.6,
                DENSITY: base.DENSITY * 2.5,
                SPEED: base.SPEED * 10,
                ACCELERATION: base.ACCEL * 0.003,
                DAMAGE: base.DAMAGE * 5,  
                PUSHABILITY: 5,
            },
            SIZE: 4,
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  21.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody,
            }],
            IS_SMASHER: true,
            SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
            STAT_NAMES: statnames.smasher, 
        };
        exports.wptrg98 = {
            PARENT: [exports.genericTank],
            LABEL: 'gorg',
            DANGER: 10,
            BODY: {
                FOV: base.FOV * 1.37,
                DENSITY: base.DENSITY * 20, 
                REGEN: base.REGEN * 4,
            },
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  23,   0,      0,      0,     360,  0,], 
                TYPE: exports.thingy,
            }],
            IS_SMASHER: true,
            SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
            STAT_NAMES: statnames.smasher,
        };
            exports.megasmash = {
                PARENT: [exports.genericTank],
                LABEL: 'Mega-Smasher',
                DANGER: 7,
                BODY: {
                    SPEED: base.speed * 1.05,
                    FOV: base.FOV * 1.1,
                    DENSITY: base.DENSITY * 4,
                },
                IS_SMASHER: true,
                SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
                STAT_NAMES: statnames.smasher,
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  24,     0,      0,      0,     360,  0,], 
                    TYPE: exports.megasmashBody,
                }],
            };
            exports.spike = {
                PARENT: [exports.genericTank],
                LABEL: 'Spike',
                DANGER: 7,
                BODY: {
                    SPEED: base.speed*0.9,
                    DAMAGE: base.DAMAGE * 1.1,
                    FOV: base.FOV * 1.05,
                    DENSITY: base.DENSITY * 2,
                },
                IS_SMASHER: true,
                SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
                STAT_NAMES: statnames.smasher,
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.spikeBody,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     120,    360,  0,], 
                    TYPE: exports.spikeBody,
                    }, {
                    POSITION: [ 20.5,    0,      0,     240,    360,  0,], 
                    TYPE: exports.spikeBody,
                }],
            };     
            exports.weirdspike = {
                PARENT: [exports.genericTank],
                LABEL: 'Spike',
                DANGER: 7,
                BODY: {
                    DAMAGE: base.DAMAGE * 1.15,
                    FOV: base.FOV * 1.05,
                    DENSITY: base.DENSITY * 1.5,
                },
                IS_SMASHER: true,
                SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
                STAT_NAMES: statnames.smasher,
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.spikeBody1,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     180,    360,  0,], 
                    TYPE: exports.spikeBody2,
                }],
            };       
            exports.autosmash = makeAuto(exports.smash, 'Auto-Smasher', { type: exports.autoSmasherTurret, size: 11, });
            exports.autosmash.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl,];

    exports.twin = {
        PARENT: [exports.genericTank],
        LABEL: 'Twin',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            }, }, 
        ],
    };
        exports.gunner = {
            PARENT: [exports.genericTank],
            LABEL: 'Gunner',
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  12,    3.5,     1,      0,     7.25,    0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  12,    3.5,     1,      0,    -7.25,    0,     0.75, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,     3.75,    0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,    -3.75,    0,     0.25, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
        };
            exports.machinegunner = {
                PARENT: [exports.genericTank],
                LABEL: 'Machine Gunner',
                DANGER: 6,
                BODY: {
                    SPEED: base.SPEED * 0.9,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     3,     4.0,    -3,      5,      0,     0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  14,     3,     4.0,    -3,     -5,      0,     0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  14,     3,     4.0,     0,     2.5,     0,     0.4,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  14,     3,     4.0,     0,    -2.5,     0,     0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  14,     3,     4.0,     3,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, 
                ]
            };
            exports.autogunner = makeAuto(exports.gunner); 
            exports.nailgun = {
                PARENT: [exports.genericTank],
                LABEL: 'Nailgun',
                DANGER: 7,
                BODY: {
                    FOV: base.FOV * 1.1,
                    SPEED: base.SPEED * 0.9,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     2,      1,      0,    -2.5,     0,     0.25, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     2,      1,      0,     2.5,     0,     0.75, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     2,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],
                        },
                ],
            };
        exports.double = {
            PARENT: [exports.genericTank],
            LABEL: 'Double Twin',
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  20,     8,      1,      0,     5.5,    180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  20,     8,      1,      0,    -5.5,    180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
        };
            exports.tripletwin = {
                PARENT: [exports.genericTank],
                LABEL: 'Triple Twin',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    120,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    120,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    240,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    240,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };
            exports.tripletwin = {
                PARENT: [exports.genericTank],
                LABEL: 'Triple Twin',
                SHAPE: 4,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    120,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    120,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    240,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    240,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };
            exports.autodouble = makeAuto(exports.double, 'Auto-Double');
            exports.split = {
                PARENT: [exports.genericTank],
                LABEL: 'Hewn Double',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     8,      1,      0,     5.5,     25,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,    -5.5,    -25,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };
        exports.bent = {
            PARENT: [exports.genericTank],
            LABEL: 'Triple Shot',
            DANGER: 6,
            BODY: {
                SPEED: base.SPEED * 0.9,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  19,     8,      1,      0,     -2,    -20,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  19,     8,      1,      0,      2,     20,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  22,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
            exports.bentdouble = {
                PARENT: [exports.genericTank],
                LABEL: 'Bent Double',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     8,      1,      0,     -1,     -25,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      1,      25,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,     -1,     155,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      1,    -155,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
            exports.penta = {
                PARENT: [exports.genericTank],
                LABEL: 'Penta Shot',
                DANGER: 7,
                BODY: {
                    SPEED: base.SPEED * 0.85,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  16,     8,      1,      0,     -3,    -30,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      3,     30,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,     -2,    -15,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      2,     15,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
            exports.benthybrid = makeHybrid(exports.bent, 'Bent Hybrid');
        exports.triple = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            BODY: {
                FOV: base.FOV * 1.05,
            },
            LABEL: 'Triplet',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,      1,      0,      5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,    10,      1,      0,     -5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  21,    10,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
        };
            exports.dual = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                BODY: {
                    ACCEL: base.ACCEL * 0.8,
                    FOV: base.FOV * 1.1,
                },
                LABEL: '',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     7,      1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                            TYPE: exports.bullet,
                            LABEL: 'Small',
                        }, }, { 
                    POSITION: [  18,     7,      1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                            TYPE: exports.bullet,
                            LABEL: 'Small',
                        }, }, { 
                    POSITION: [  16,    8.5,     1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  16,    8.5,     1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };

    exports.sniper = {
        PARENT: [exports.genericTank],
        LABEL: 'Sniper',
        BODY: {
            ACCELERATION: base.ACCEL * 0.7, 
            FOV: base.FOV * 1.2,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: exports.bullet,
            }, },
        ],
    };
            exports.rifle = {
                PARENT: [exports.genericTank],
                LABEL: 'Rifle',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7, 
                    FOV: base.FOV * 1.25,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */                       
                    POSITION: [  20,    10.5,    1,      0,      0,      0,      0,   ], 
                        }, {
                    POSITION: [  24,     7,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
        exports.musket = {
                PARENT: [exports.genericTank],
                LABEL: 'Musket',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7, 
                    FOV: base.FOV * 1.25,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */                       
                    POSITION: [  18,    19.5,    1,      0,      0,      0,      0,   ], 
                        }, {
                    POSITION: [  22,     7,      1,      0,      4.15,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     7,      1,      0,      -4.15,      0,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
        exports.assassin = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Assassin',
            BODY: {
                ACCELERATION: base.ACCEL * 0.6,
                SPEED: base.SPEED * 0.85,
                FOV: base.FOV * 1.4,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                },
            ],
        };
            exports.ranger = {
                PARENT: [exports.genericTank],
                LABEL: 'Ranger',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.5,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  32,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                    },
                ],
            };
            exports.stRangerdanger = {
                PARENT: [exports.genericTank],
                LABEL: '(Stream) Sniper',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.5,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  32,    8,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.halfreload, g.fast, g.fast, g.fast, g.fast]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   5,    8,    -1.6,    8,      0,      0,      0,   ], 
                    },
                ],
            };
            exports.autoass = makeAuto(exports.assassin, "");
        exports.hunter = {
            PARENT: [exports.genericTank],
            LABEL: 'Hunter',
            DANGER: 6,
            BODY: {
                ACCELERATION: base.ACCEL * 0.7,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.25,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  24,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  21,    12,      1,      0,      0,      0,     0.25, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
            exports.preda = {
                PARENT: [exports.genericTank],
                LABEL: 'Predator',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.85,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,    12,      1,      0,      0,      0,     0.15, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  18,    16,      1,   0,  0, 0,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
            exports.rifle = {
                PARENT: [exports.genericTank],
                LABEL: 'Rifle',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7, 
                    FOV: base.FOV * 1.225,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */                       
                    POSITION: [  20,    10.5,    1,      0,      0,      0,      0,   ], 
                        }, {
                    POSITION: [  24,     7,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
            exports.poach = makeHybrid(exports.hunter, 'Poacher');
            exports.sidewind = {
                PARENT: [exports.genericTank],
                LABEL: 'Sidewinder',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  10,    11,    -0.5,    14,      0,      0,      0,  ], 
                        }, {
                    POSITION: [  21,    12,    -1.1,     0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.snake,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                ],
            };

    exports.director = {
        PARENT: [exports.genericTank],
        LABEL: 'Director',  
        STAT_NAMES: statnames.drone,
        DANGER: 5,
        BODY: {
            ACCELERATION: base.ACCEL * 0.75,
            FOV: base.FOV * 1.1,
        },
        MAX_CHILDREN: 5,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                    TYPE: exports.drone,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
            exports.master = {
                PARENT: [exports.genericTank],
                LABEL: '',  
                STAT_NAMES: statnames.drone,
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    FOV: base.FOV * 1.15,
                },
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  16,     1,      0,      0,      0, 0], 
                        TYPE: exports.masterGun,
                            }, {
                    POSITION: [  16,     1,      0,     120,     0, 0], 
                        TYPE: [exports.masterGun, { INDEPENDENT: true, }],
                            }, {
                    POSITION: [  16,     1,      0,     240,     0, 0], 
                        TYPE: [exports.masterGun, { INDEPENDENT: true, }],
                            },
                ],
            };

        exports.overseer = {
            PARENT: [exports.genericTank],
            LABEL: 'Overseer',  
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.1,
            },
            MAX_CHILDREN: 8,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   6,     12,    1.2,     8,      0,     90,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                        TYPE: exports.drone,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.drone,
                        WAIT_TO_CYCLE: true,     
                    }, }, {
                POSITION: [   6,     12,    1.2,     8,      0,    270,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                        TYPE: exports.drone,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.drone,
                        WAIT_TO_CYCLE: true,     
                    }, },
            ],
        };
            exports.overlord = {
                PARENT: [exports.genericTank],
                LABEL: 'Overlord',
                DANGER: 7,
                STAT_NAMES: statnames.drone,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.1,
                },
                MAX_CHILDREN: 8,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     12,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, },
                ],
            };
            exports.overtrap = {
                PARENT: [exports.genericTank],
                LABEL: 'Overtrapper',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.6,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     11,    1.2,     8,      0,     125,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,  
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     235,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [  14,     8,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   4,     8,     1.5,    14,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };
            exports.banshee = {
                PARENT: [exports.genericTank],
                LABEL: '',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.1,
                },
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  10,     8,      0,      0,      80, 0], 
                        TYPE: exports.bansheegun,
                            }, {
                    POSITION: [  10,     8,      0,     120,     80, 0], 
                        TYPE: exports.bansheegun,
                            }, {
                    POSITION: [  10,     8,      0,     240,     80, 0], 
                        TYPE: exports.bansheegun,
                            },
                ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     11,    1.2,     8,      0,      60,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,  
                            MAX_CHILDREN: 2,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 2,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     300,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 2,   
                        }, }, 
                    ]
            };
            exports.autoover = makeAuto(exports.overseer, "");
            exports.overgunner = {
                PARENT: [exports.genericTank],
                LABEL: 'Overgunner',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.SPEED * 0.9,
                    FOV: base.FOV * 1.1,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     11,    1.2,     8,      0,     125,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,  
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     235,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [  19,     2,      1,      0,    -2.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     2,      1,      0,     2.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  12,    11,      1,      0,      0,      0,      0,   ],
                        },
                ],
            };
        
        function makeSwarmSpawner(guntype) {
            return {
                PARENT: [exports.genericTank],
                LABEL: '',
                BODY: {
                    FOV: 2,
                },
                CONTROLLERS: ['nearestDifferentMaster'], 
                COLOR: 16,
                AI: {
                    NO_LEAD: true,
                    SKYNET: true,
                    FULL_VIEW: true,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     15,    0.6,    14,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: guntype,
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }
                ],
            };
        }
        exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
        exports.cruiser = {
            PARENT: [exports.genericTank],
            LABEL: 'Cruiser',
            DANGER: 6,
            FACING_TYPE: 'locksFacing',
            STAT_NAMES: statnames.swarm,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
                FOV: base.FOV * 1.2,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   7,    7.5,    0.6,     7,      4,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.swarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,               
                    }, }, {
                POSITION: [   7,    7.5,    0.6,     7,     -4,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.swarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,         
                    }, },
            ],
        };
            exports.battleship = {
                PARENT: [exports.genericTank],
                LABEL: 'Battleship',
                DANGER: 7,
                STAT_NAMES: statnames.swarm,
                FACING_TYPE: 'locksFacing',
                BODY: {
                    ACCELERATION: base.ACCEL,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      4,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -4,     90,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.autoswarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Autonomous',        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      4,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.autoswarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Autonomous',         
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -4,     270,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, },
                ],
            };
            exports.carrier = {
                PARENT: [exports.genericTank],
                LABEL: 'Carrier',
                DANGER: 7,
                STAT_NAMES: statnames.swarm,
                FACING_TYPE: 'locksFacing',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      2,      40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -2,     -40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }
                ],
            };
            exports.autocruiser = makeAuto(exports.cruiser, "");
            exports.fortress = {
                PARENT: [exports.genericTank],
                LABEL: 'Fortress', //'Palisade',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm, { CONTROLLERS: ['canRepel'] }],
                            STAT_CALCULATOR: gunCalcNames.swarm,   
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      0,     120,    1/3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm, { CONTROLLERS: ['canRepel'] }],
                            STAT_CALCULATOR: gunCalcNames.swarm,   
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      0,     240,    2/3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm, { CONTROLLERS: ['canRepel'] }],
                            STAT_CALCULATOR: gunCalcNames.swarm,   
                        }, }, {
                    POSITION: [  14,     9,      1,      0,      0,     60,      0,   ],
                        }, {
                    POSITION: [   4,     9,     1.5,    14,      0,     60,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {                            
                    POSITION: [  14,     9,      1,      0,      0,     180,     0,   ],
                        }, {
                    POSITION: [   4,     9,     1.5,    14,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {                            
                    POSITION: [  14,     9,      1,      0,      0,     300,     0,   ],
                        }, {
                    POSITION: [   4,     9,     1.5,    14,      0,     300,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };

        exports.underseer = {
            PARENT: [exports.genericTank],
            LABEL: 'Underseer',
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                ACCELERATION: base.ACCEL * 0.7,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.1,
            },
            SHAPE: 4,
            MAX_CHILDREN: 14,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   5,     12,    1.2,     8,      0,     90,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                        TYPE: exports.sunchip,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.necro,
                    }, }, {
                POSITION: [   5,     12,    1.2,     8,      0,     270,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                        TYPE: exports.sunchip,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.necro,
                    }, },
                ],
        };
            exports.necromancer = {
                PARENT: [exports.genericTank],
                LABEL: 'Necromancer',
                DANGER: 7,
                STAT_NAMES: statnames.necro,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                SHAPE: 4,
                MAX_CHILDREN: 14,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,     12,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.sunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,     270,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.sunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,      0,     0.25, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
                            TYPE: exports.autosunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            MAX_CHILDREN: 4,
                            STAT_CALCULATOR: gunCalcNames.necro,
                            LABEL: 'Guard',
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,     180,    0.75  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
                            TYPE: exports.autosunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            MAX_CHILDREN: 4,
                            STAT_CALCULATOR: gunCalcNames.necro,
                            LABEL: 'Guard', 
                        }, },
                    ],
            };

        exports.lilfact = {
            PARENT: [exports.genericTank],
            LABEL: '',
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                SPEED: base.SPEED * 0.8,
                ACCELERATION: base.ACCEL * 0.5,
                FOV: 1.1,
            },
            GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  4.5,    10,      1,     10.5,    0,      0,      0,   ], 
                }, {
                POSITION: [   1,     12,      1,      15,     0,      0,      0,   ], 
                PROPERTIES: {          
                    MAX_CHILDREN: 4,
                    SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                    TYPE: exports.minion,
                    STAT_CALCULATOR: gunCalcNames.drone,                        
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,  
                }, }, {                        
                    POSITION: [  3.5,    12,      1,      8,      0,      0,      0,   ], 
                }
            ],
        };
        exports.autospawn = makeAuto(exports.lilfact);
            exports.factory = {
                PARENT: [exports.genericTank],
                LABEL: 'Factory',
                DANGER: 7,
                STAT_NAMES: statnames.drone,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: 1.1,
                },
                MAX_CHILDREN: 6,
                GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,     11,      1,      10.5,   0,      0,      0,   ], 
                        }, {
                    POSITION: [   2,     14,      1,      15.5,   0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.factory]),
                            TYPE: exports.minion,
                            STAT_CALCULATOR: gunCalcNames.drone,                        
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,   
                        }, }, {                        
                    POSITION: [   4,     14,      1,      8,      0,      0,      0,   ], 
                    }
                ],
            };
    exports.machine = {
        PARENT: [exports.genericTank],
        LABEL: 'Machine Gun',
        GUNS: [ {    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: exports.bullet,
            }, },
        ],   
    };
            exports.spray = {
                PARENT: [exports.genericTank],
                LABEL: 'Sprayer',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  23,     7,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil]),
                        TYPE: exports.bullet,
                    }, }, {
                    POSITION: [  12,    10,     1.4,     8,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                        TYPE: exports.bullet,
                    }, },
                ],
            };
   
        exports.mini = {
            PARENT: [exports.genericTank],
            LABEL: 'Minigun',
            DANGER: 6,
            BODY: {
                FOV: 1.2,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  22,     8,      1,      0,      0,      0,      0, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  20,     8,      1,      0,      0,      0,    0.333, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,     8,      1,      0,      0,      0,    0.667, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
            exports.stream = {
                PARENT: [exports.genericTank],
                LABEL: 'Streamliner',
                DANGER: 7,
                BODY: {
                    FOV: 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  25,     8,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  23,     8,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,     8,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  19,     8,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  17,     8,      1,      0,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
            exports.hybridmini = makeHybrid(exports.mini, "");
            exports.minitrap = {
                PARENT: [exports.genericTank],
                DANGER: 6,
                LABEL: '',
                STAT_NAMES: statnames.trap,
                BODY: {
                    FOV: 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ 
                    POSITION: [  24,     8,      1,      0,      0,      0,      0, ], 
                            }, {
                    POSITION: [   4,     8,     1.3,     22,     0,      0,      0, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, { 
                    POSITION: [   4,     8,     1.3,     18,     0,      0,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, { 
                    POSITION: [   4,     8,     1.3,     14,     0,      0,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };
    
    exports.pound = {
        PARENT: [exports.genericTank],
        DANGER: 5,
        BODY: {
            ACCELERATION: base.ACCEL * 0.8,
        },
        LABEL: 'Pounder',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,    12,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            }, },
        ],
    };
        exports.destroy = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
            },
            LABEL: 'Destroyer',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  21,    14,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                    TYPE: exports.bullet,
                }, },
            ],
        };
            exports.anni = {
                PARENT: [exports.genericTank],
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                },
                LABEL: 'Annihilator',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [ 20.5,  19.5,     1,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                        TYPE: exports.bullet,
                    }, },
                ],
            };
            exports.hiveshooter = {
                PARENT: [exports.genericTank],
                DANGER: 6,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.speed * 0.8,
                },
                LABEL: '',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,    14,     -1.2,    5,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                            TYPE: exports.hive,
                        }, }, {
                    POSITION: [  15,    12,      1,      5,      0,      0,      0,   ], 
                    }
                ],
            };
            exports.hybrid = makeHybrid(exports.destroy, 'Hybrid');
            exports.shotgun2 = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Shotgun',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                },
                GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                    POSITION: [  4,      3,      1,     11,     -3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      3,      1,     11,      3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      4,      1,     13,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      4,      1,     12,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      4,      1,     11,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {                
                    POSITION: [  1,      3,      1,     13,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  1,      3,      1,     13,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,      2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,     -2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [ 15,     14,      1,     6,       0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  8,     14,    -1.3,    4,       0,      0,      0,   ], }
                ],
            };
exports.transShotgun = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Eight-Fourty',
                BODY: {
                    ACCELERATION: base.ACCEL * 1.5,
                    SPEED: base.SPEED * 1.5,
                    FOV: base.FOV * 1.2,
                },
                ACCEPTS_SCORE: false,
                GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                    POSITION: [  4,      4,      1,     11,     -2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingblue,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      5,      1,     11,      2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingpink,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      6,      1,     13,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingwhite,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      5,      1,     12,     -1.5,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingblue,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      4,      1,     10,      3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingpink,
                            ALT_FIRE: true,
                        }, }, {  
                    POSITION: [  4,      3,      1,     11,     -3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingblue,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      3,      1,     11,      3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingblue,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      4,      1,     13,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingpink,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      4,      1,     12,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingblue,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      4,      1,     11,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingwhite,
                          ALT_FIRE: true,
                        }, }, {                
                    POSITION: [  1,      3,      1,     13,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingpink,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      3,      1,     13,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingwhite,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,      2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingpink,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,     -2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.aaaai]),
                            TYPE: exports.casingwhite,
                          ALT_FIRE: true,
        //2                  
                        }, }, {
                    POSITION: [  4,      4,      1,     11,     -2,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingblue,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      5,      1,     11,      2,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingblue,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      6,      1,     13,      1,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingwhite,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      5,      1,     12,     -1.5,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingblue,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      4,      1,     10,      3,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingpink,
                            ALT_FIRE: true,
                        }, }, {  
                    POSITION: [  4,      3,      1,     11,     -3,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingblue,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      3,      1,     11,      3,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingblue,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  4,      4,      1,     13,      0,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingpink,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      4,      1,     12,     -1,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingblue,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      4,      1,     11,      1,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingwhite,
                          ALT_FIRE: true,
                        }, }, {                
                    POSITION: [  1,      3,      1,     13,     -1,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingpink,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      3,      1,     13,      1,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingwhite,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,      2,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingpink,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,     -2,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fast, g.fast, g.SG]),
                            TYPE: exports.casingwhite,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  17,     12,    1,    6,       0,      0,      0,   ], },
                          {
                    POSITION: [ 15,     15,      1,     6,       0,      0,      0,   ], 
                        PROPERTIES: { 
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, g.aaaai]),
                            TYPE: exports.casingblue,
                          ALT_FIRE: true,
                        }, }, {
                    POSITION: [  8,     15,    -1.3,    4,       0,      0,      0,   ], 
                        },  {
                    POSITION: [  13,     5,      1,      0,     -3,     135,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil, g.morereload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     5,      1,      0,      3,     225,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.midgrdrecoil, g.morereload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  15,     5,      1,      0,      -4,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.midgrdrecoil, g.morereload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  15,     5,      1,      0,      4,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil, g.morereload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
        exports.builder = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Trapper',
            STAT_NAMES: statnames.trap,
            BODY: {
                SPEED: base.SPEED * 0.8,
                FOV: base.FOV * 1.15,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    12,      1,      0,      0,      0,      0,   ], 
                }, {
                POSITION: [   2,    12,     1.1,     18,     0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                        TYPE: exports.block,
                    }, },
            ],
        };
            exports.engineer = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Engineer',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.75,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,    11,      1,     10.5,     0,      0,      0,   ], 
                    }, {
                    POSITION: [   3,    14,      1,     15.5,     0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    14,     1.3,     18,      0,      0,      0,   ], 
                        PROPERTIES: {
                            MAX_CHILDREN: 6,
                            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                            TYPE: exports.pillbox,        
                            SYNCS_SKILLS: true,   
                        }, }, {                            
                    POSITION: [   4,    14,      1,      8,      0,      0,      0,   ]
                    }
                ],
            };
            exports.construct = {
                PARENT: [exports.genericTank],
                LABEL: 'Mega Trapper',
                STAT_NAMES: statnames.trap,
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.7,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,    18,      1,      0,      0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    18,     1.2,     18,     0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                            TYPE: exports.block,
                        }, }, 
                ],
            };
            exports.autobuilder = makeAuto(exports.builder);
            exports.conq = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'shitty tank',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  21,    14,      1,      0,      0,     180,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                        TYPE: exports.bullet,
                    }, }, {
                    POSITION: [  18,    14,      1,      0,      0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    14,     1.1,     18,     0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                            TYPE: exports.block,
                        }, },
                ],
            };
            exports.bentboomer = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Boomer',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   8,    10,      1,      8,     -2,     -35,     0,   ],
                        }, {
                    POSITION: [   8,    10,      1,      8,      2,      35,     0,   ],
                        }, {
                    POSITION: [   2,    10,     1.3,     16,    -2,     -35,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                            TYPE: exports.boomerang,
                        }, }, {
                    POSITION: [   2,    10,     1.3,     16,     2,      35,    0.5,  ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                            TYPE: exports.boomerang,
                        }, },
                ],
            };
            
            exports.boomer = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Boomer',
                STAT_NAMES: statnames.trap,
                FACING_TYPE: 'locksFacing',
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,    10,      1,      14,     0,      0,      0,   ],
                        }, {
                    POSITION: [   6,    10,    -1.5,      7,     0,      0,      0,   ],
                        }, {
                    //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
                    //    }, {
                    POSITION: [   2,    10,     1.3,     18,     0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                            TYPE: exports.boomerang,
                        }, },
                ],
            };
          exports.broomer = {
                PARENT: [exports.genericTank], 
                DANGER: 7,
                LABEL: 'D the No the Yes the Hey HEY HEY STOP RIGHT THERE FUCKER',
                STAT_NAMES: statnames.trap,
                FACING_TYPE: 'locksFacing',
                BODY: { 
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,    10,      1,      14,     0,      0,      0,   ],
                        }, {
                    POSITION: [   6,    10,    -1.5,      7,     0,      0,      0,   ],
                        }, {
                    //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
                    //    }, {
                    POSITION: [   2,    10,     1.3,     18,     0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.halfreload]),
                            TYPE: exports.broomerang,
                        }, },
                ],
            };
            exports.breaker = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Breaker',
                STAT_NAMES: statnames.trap,
                FACING_TYPE: 'locksFacing', 
                BODY: { 
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,    10,      1,      14,     0,      0,      0,   ],
                        }, {
                    POSITION: [   6,    10,    -1.5,      7,     0,      0,      0,   ],
                        }, {
                    //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
                    //    }, {
                    POSITION: [   2,    10,     1.3,     18,     0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.halfreload]),
                            TYPE: exports.broomerang,
                        }, },
                ],
            };
            exports.quadtrapper = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Quad-Trapper',
                STAT_NAMES: statnames.trap, 
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     6,      1,      0,      0,     90,      0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, }, {
                    POSITION: [  14,     6,      1,      0,      0,     180,     0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, }, {
                    POSITION: [  14,     6,      1,      0,      0,     270,     0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, }, {
                    POSITION: [  14,     6,      1,      0,      0,     0,     0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     0,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, },
                ],
            };
        

        exports.artillery = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Artillery',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  17,     3,      1,      0,     -6,     -7,     0.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  17,     3,      1,      0,      6,      7,     0.75,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  19,     12,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Heavy',
                    }, },
            ],
        };
        exports.yrellitra = {
            PARENT: [exports.genericTank],
            DANGER: 7,
            LABEL: 'yrellitrA',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  17,     12,      1,      0,     -6,     -7,     0.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  17,     12,      1,      0,      6,      7,     0.75,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  19,     3,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Heavy',
                    }, },
            ],
        };
            exports.mortar = {
                PARENT: [exports.genericTank],
                LABEL: 'Mortar',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  13,     3,      1,      0,     -8,     -7,     0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  13,     3,      1,      0,      8,      7,     0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  17,     3,      1,      0,     -6,     -7,     0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  17,     3,      1,      0,      6,      7,     0.4,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  19,     12,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                            TYPE: exports.bullet,
                            LABEL: 'Heavy',
                        }, },
                ],
            };
            exports.skimmer = {
                PARENT: [exports.genericTank],
                BODY: {
                    FOV: base.FOV * 1.15,
                },
                LABEL: 'Skimmer',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  10,    14,    -0.5,     9,      0,      0,      0,  ], 
                        }, {
                    POSITION: [  17,    15,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
                            TYPE: exports.missile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                ],
            };
            
            exports.spread = {
                PARENT: [exports.genericTank],
                LABEL: 'Spreadshot',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  13,     4,      1,      0,    -0.8,    -75,    5/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 14.5,    4,      1,      0,    -1.0,    -60,    4/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  16,     4,      1,      0,    -1.6,    -45,    3/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 17.5,    4,      1,      0,    -2.4,    -30,    2/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  19,     4,      1,      0,    -3.0,    -15,    1/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {                    
                    POSITION: [  13,     4,      1,      0,     0.8,     75,    5/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 14.5,    4,      1,      0,     1.0,     60,    4/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  16,     4,      1,      0,     1.6,     45,    3/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 17.5,    4,      1,      0,     2.4,     30,    2/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  19,     4,      1,      0,     3.0,     15,    1/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  13,    10,     1.3,     8,      0,      0,      0,     ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Pounder',
                        }, },
                ],
            };

    exports.flank = {
        PARENT: [exports.genericTank],
        LABEL: 'Flank Guard',
        BODY: {
            SPEED: base.SPEED * 1.1,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  18,     8,      1,      0,      0,     120,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  18,     8,      1,      0,      0,     240,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                    TYPE: exports.bullet,
                }, },
        ],
    };
        exports.hexa = {
            PARENT: [exports.genericTank],
            LABEL: 'Hexa Tank',
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,      60,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     300,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
            exports.octo = {
                PARENT: [exports.genericTank],
                LABEL: 'Octo Tank',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      45,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     135,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     225,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     315,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
              exports.trihectahexacontagon = {
                PARENT: [exports.genericTank],
                LABEL: 'Trihectahexaconta Tank',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      1,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      2,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     3,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     4,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      5,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     6,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     7,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     8,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      9,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      10,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     11,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     12,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      13,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     14,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     15,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     16,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      17,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      18,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     19,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     20,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      21,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     22,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     23,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     24,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      25,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      26,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     27,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     28,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      29,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     30,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     31,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     32,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      33,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      34,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     35,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     36,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      37,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     38,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     39,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     40,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      41,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      42,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     43,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     44,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      45,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     46,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     47,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     48,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      49,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      50,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     51,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     52,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      53,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     54,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     55,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     56,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      57,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      58,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     59,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     60,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      61,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     62,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     63,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     64,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      65,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      66,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,    67,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     68,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      69,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     70,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     71,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     72,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      73,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      74,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     75,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     76,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      77,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     78,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     79,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     80,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      81,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      82,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     83,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     84,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      85,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     86,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     87,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     88,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      89,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     91,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     92,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      93,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     94,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     95,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     96,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      97,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      98,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     99,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     100,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      101,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     102,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     103,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     104,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      105,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      106,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     107,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     108,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      109,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     110,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     111,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     112,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      113,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      114,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     115,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     116,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      117,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     118,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     119,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     120,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      121,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      122,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     123,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     124,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      125,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     126,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     127,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     128,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      129,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      130,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     131,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     132,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      133,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     134,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     135,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     136,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      137,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      138,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     139,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     140,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      141,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     142,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     143,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     144,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      145,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      146,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     147,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     148,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      149,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     150,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     151,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     152,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      153,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      154,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     155,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     156,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      157,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     158,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     159,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     160,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      161,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      162,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     163,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     164,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      165,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     166,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     167,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     168,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      169,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      170,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     171,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     172,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      173,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     174,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     175,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     176,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      177,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      178,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     179,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      181,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     182,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     183,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     184,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      185,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      186,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     187,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     188,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      189,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     190,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     191,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     192,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      193,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      194,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     195,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     196,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      197,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     198,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     199,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     200,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      201,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      202,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     203,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     204,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      205,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     206,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     207,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     208,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      209,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      210,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     211,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,    212,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      213,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     214,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     215,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     216,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      217,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      218,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     219,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     220,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      221,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     222,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     223,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     224,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      225,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      226,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     227,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     228,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      229,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     230,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     231,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     232,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      233,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      234,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     235,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     236,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      237,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     238,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     239,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     240,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      241,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      242,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     243,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     244,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      245,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     246,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     247,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     248,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      249,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      250,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     251,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     252,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      253,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     254,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     255,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     256,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      257,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      258,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     259,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     260,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      261,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     262,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     263,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     264,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      265,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      266,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     267,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     268,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      269,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     270,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     271,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     272,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      273,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      274,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     275,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     276,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      277,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     278,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     279,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     280,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      281,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      282,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     283,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     284,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      285,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     286,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     287,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     288,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      289,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      290,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     291,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     292,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      293,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     294,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     295,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     296,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      297,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      298,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     299,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     300,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      301,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     302,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     303,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     304,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      305,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      306,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     307,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     308,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      309,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     310,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     311,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     312,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      313,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      314,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     315,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     316,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      317,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     318,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     319,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     320,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      321,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      322,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     323,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     324,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      325,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     326,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     327,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     328,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      329,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      330,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     331,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     332,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      333,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     334,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     335,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     336,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      337,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      338,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     339,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     340,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      341,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     342,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     343,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     344,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      345,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      346,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     347,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     348,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      349,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     350,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     351,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     352,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,      353,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      354,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     355,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     356,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      357,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     358,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     359,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     360,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };
            exports.heptatrap = (() => {
                let a = 360/7, d = 1/7;
                return {
                    PARENT: [exports.genericTank],
                    LABEL: 'Hepta-Trapper',
                    DANGER: 7,
                    BODY: {
                        SPEED: base.SPEED * 0.8, 
                    },
                    STAT_NAMES: statnames.trap, 
                    HAS_NO_RECOIL: true,
                    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                        POSITION: [  15,     7,      1,      0,      0,      0,      0,   ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,      0,      0,   ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,      a,     4*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,      a,     4*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     2*a,    1*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     2*a,    1*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     3*a,    5*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     3*a,    5*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     4*a,    2*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     4*a,    2*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     5*a,    6*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     5*a,    6*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     6*a,    3*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     6*a,    3*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, },
                    ],
                };
            })();
            exports.trapper = {
                PARENT: [exports.genericTank],
                LABEL: 'Trapper',
                DANGER: 5,
                BODY: {
                    SPEED: base.SPEED * 0.9,
                },
                STAT_NAMES: statnames.trap,
                HAS_NO_RECOIL: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     8,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, 
                ],
            }, 
            exports.tritrapper = {
                PARENT: [exports.genericTank],
                LABEL: 'Tri-Trapper',
                DANGER: 6,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                },
                STAT_NAMES: statnames.trap,
                HAS_NO_RECOIL: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     8,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     8,      1,      0,      0,     120,     0.333,  ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,     120,     0.333,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     8,      1,      0,      0,     240,     0.667,   ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,     240,     0.667,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, 
                ],
            }, 
            exports.hexatrap = makeAuto({
                PARENT: [exports.genericTank],
                LABEL: 'Hexa-Trapper',
                DANGER: 7,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                },
                STAT_NAMES: statnames.trap,
                HAS_NO_RECOIL: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     7,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     60,     0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     60,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     120,     0,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     120,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     180,    0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     240,     0,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     240,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     300,    0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     300,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            }, 'Hexa-Trapper');
        exports.sentinel = makeAuto({
                PARENT: [exports.genericTank],
                LABEL: 'Sentinel',
                DANGER: 2,  
                SHAPE: 4,
               // RANGE: 1650,
                //DIE_AT_RANGE: true,
                BODY: {
                    SPEED: 0,  
                    ACCELERATION: 0,
                    DAMAGE: base.DAMAGE * 0.4,
                },
                HAS_NO_RECOIL: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  13.5,     1,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   13.5,     1,     1,    0,      0,     90,     0,   ], 
                         }, {
                    POSITION: [  13.5,     1,      1,      0,      0,     180,    0,  ],
                        }, {
                    POSITION: [   13.5,     1,     1,    0,      0,     270,    0,  ], 
                        }, 
                ],
            }, 'Sentinel', { type: exports.sniper4gun, size: 10, });
        exports.pentatrap = makeAuto({
                PARENT: [exports.genericTank],
                LABEL: 'Penta-Trapper',
                DANGER: 7,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                },
                STAT_NAMES: statnames.trap,
                HAS_NO_RECOIL: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     7,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     72,     0.2,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     72,     0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     144,     0.4,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     144,     0.4,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     216,    0.6,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     216,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     288,     0.8,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     288,     0.8,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, 
                ],
            }, 'Penta-Trapper', { type: exports.bigauto4gun, size: 11, });

        exports.tri = {
            PARENT: [exports.genericTank],
            LABEL: 'Tri-Angle',
            BODY: {
                HEALTH: standard.HEALTH * 0.8,
                SHIELD: base.SHIELD * 0.8,
                DENSITY: base.DENSITY * 0.6,
                FOV: base.FOV * 1.2,
            },
            VALUE: 10000,
            ACCEPTS_SCORE: false,
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
                        TYPE: exports.bullet,
                        LABEL: 'Front',
                    }, }, {   
                POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.thr,
                        LABEL: gunCalcNames.thruster,
                    }, }, {   
                POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.thr,
                        LABEL: gunCalcNames.thruster,
                    }, },
            ],
        };  
            exports.booster = {
                PARENT: [exports.genericTank],
                LABEL: 'Booster',
                BODY: {
                    HEALTH: standard.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                    FOV: base.FOV * 1.2,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {  
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
                ],
            };
        exports.uspawn = {
                PARENT: [exports.genericTank],
                LABEL: 'U-Spawn',
                BODY: {
                    DENSITY: base.DENSITY * 0.2,
                    FOV: base.FOV * 1.52,
                    DAMAGE: base.DAMAGE * 1.6,
                },
                ACCEPTS_SCORE: false,  
                STAT_NAMES: statnames.generic,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  21,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.halfreload]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {  
                    POSITION: [  18,     8,      0.7,      0,     -5,     180,    0.25,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.special]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  18,     8,      0.7,      0,      5,     180,    0.75,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.special]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  6,     12,      1.2,      8,      0,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.faster, g.doublereload, g.morereload, g.triplerecoil]),
                            TYPE: exports.udrone,
                            ALT_FIRE: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            MAX_CHILDREN: 9,
                            SPEED_DEBUFF: true,
                        }, }, 
                ],
            };
    exports.python = {
                PARENT: [exports.genericTank],
                LABEL: '030000000000000004',
                BODY: {
                    FOV: base.FOV,
                    REGEN: base.REGEN * 1.5,
                    SPEED: base.SPEED * 0.3,
                    ACCELERATION: base.ACCEL * 2,
                },
                ACCEPTS_SCORE: false,  
                STAT_NAMES: statnames.generic,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     2,      1,      0,    -2.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.lotsmorerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     2,      1,      0,     2.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.lotsmorerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  12,    11,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   5,     9,      1,      10.5,   0,      135,      0,   ], 
                        }, {
                    POSITION: [   2,     12,      1,      15.5,   0,      135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.factory, g.zzzzq]),
                            TYPE: exports.python1,
                            ALT_FIRE: true,
                            MAX_CHILDREN: 1,
                        }, }, {                        
                    POSITION: [   4,     12,      1,      8,      0,      135,      0,   ], 
                    }, {
                    POSITION: [   5,     9,      1,      10.5,   0,      225,      0,   ], 
                        }, {
                    POSITION: [   2,     12,      1,      15.5,   0,      225,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.factory, g.zzzzq]),
                            TYPE: exports.python2,
                            ALT_FIRE: true,
                            MAX_CHILDREN: 1,
                        }, }, {                        
                    POSITION: [   4,     12,      1,      8,      0,      225,      0,   ], 
                    }, {
                    POSITION: [    13,     11,     1.4,     8,      0,      180,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.tonsmorrecoil, g.PY]),
                TYPE: exports.thr,
            }, },
                ],
            };
    exports.repeller = {
                PARENT: [exports.genericTank],
                LABEL: 'Repeller',
                BODY: {
                    HEALTH: standard.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                    FOV: base.FOV * 1.25,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  0,     4,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.RT]),
                            TYPE: exports.shockwave,
                            ALT_FIRE: true,
                        }, }, {  
                    POSITION: [  28,     6,      1.25,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.machgun, g.doublereload, g.faster, g.faster]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {  
                    POSITION: [  20,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  20,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
                ],
        TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
              POSITION: [  10,     0,      0,       0,    180,   1, ],  
                    TYPE: exports.grayballP,
                    },   
            ],  
            };
      exports.dpsthing = {
                PARENT: [exports.genericTank],
                LABEL: 'DPShands_0 +1 -6',
                BODY: {
                    DAMAGE: base.DAMAGE * 2,
                    FOV: base.FOV * 1.2,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,    7,      0.7,      0,      6,      0,     0.667,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.DH]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,    7,      0.7,      0,     -6,      0,     0.333,  ], 
                     PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.DH]),
                        TYPE: exports.bullet,
                    }, }, {  
                POSITION: [  21,    9,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.DH]),
                        TYPE: exports.bullet,
                    }, }, {
                      POSITION: [  12,     18,      1,      0,      0,     180,    0,  ], 
                        }, {
                    POSITION: [  16,     6,      1,      0,     -1,     145,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.morerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     6,      1,      0,      1,     215,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.morerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
                    
                ],
            };
      exports.bullettt = {
    LABEL: 'Distraction Projectile',
    TYPE: 'tank',
    DANGER: 10000,
    BODY: {
        PENETRATION: 1,            
        SPEED: 3,
        RANGE: 350,
        DENSITY: 1.25,
        HEALTH: 3 * wepHealthFactor, 
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 0,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    CONTROLLERS: ['alwaysFire'],
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   0,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            AUTOFIRE: true,
                        }, }, {
                    POSITION: [   0,    7.5,    0.6,     7,      2,      90,    0.25,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                            AUTOFIRE: true,
                        }, }, {
                    POSITION: [   0,    7.5,    0.6,     7,     -2,     180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                            AUTOFIRE: true,
                        }, }, {
                    POSITION: [   0,    7.5,    0.6,     7,     -2,     270,    0.75,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,  
                            AUTOFIRE: true,
                        }, }
                ],
};
      exports.diversionist2 = {             
                PARENT: [exports.genericTank],
                LABEL: 'Diversionist',
                BODY: { 
                    HEALTH: standard.HEALTH * 0.6, 
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                    FOV: base.FOV * 1.5,
                    ACCELERATION: base.ACCEL * 0.35,
                    SPEED: base.SPEED * 0.35,
                },
                ACCEPTS_SCORE: false,
                DANGER: 9,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    }, {
                      POSITION: [  14,     16,      1,      0,     0,     90,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.slower, g.DIV]),
                            TYPE: exports.bullettt,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  14,     16,      1,      0,     0,     270,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.slower, g.DIV]),
                            TYPE: exports.bullettt,
                            ALT_FIRE: true,
                        }, }, {   
                           POSITION: [  17,    4,    0.01,    0,     0,      35,      0,   ],                         
                    }, {
                       POSITION: [  17,    4,    0.01,    0,     0,      -35,      0,   ],                         
                    }, {
                    POSITION: [  20,     5,      1,      0,     0,     155,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil, g.faster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  20,     5,      1,      0,      0,     205,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.faster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  18,     5,      1,      0,      0,     165,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.faster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  18,     5,      1,      0,      0,     195,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil, g.faster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
      exports.threespeednoscore = {
                PARENT: [exports.genericTank],
                LABEL: 'Threespeed Noscore',
                BODY: {
                    SPEED: base.SPEED * 3,
                },
                ACCEPTS_SCORE: false,
                CAN_BE_ON_LEADERBOARD: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  16,     8,      0.7,      0,     -1,     135,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      0.7,      0,      1,     225,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  20,     8,      1,      0,      0,     145,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  20,     8,      1,      0,      0,     215,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, },
                ],
            };
      exports.nfae = {
                PARENT: [exports.genericTank],
                LABEL: 'The NFAE', //previously, the label also included its full name 'nohfkonjeok faenwefkaj'.
                BODY: {
                    FOV: base.FOV * 1.5,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7, 
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  28,     8,      1,      0,     -1,     145,    0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.lessreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      1,     215,    0.4,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.lessreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     155,    0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil, g.lessreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     205,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.lessreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [   7,    3,    1,     7,      0,      90,     0.36,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      70,     0.24,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                POSITION: [   7,    3,    1,     7,      0,      50,     0.12,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      30,     0,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                POSITION: [   7,    3,    1,     7,      0,      110,     0.48,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      130,     0.6,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                POSITION: [   7,    3,    1,     7,      0,      150,     0.72,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      170,     0.84,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                                    POSITION: [   7,    3,    1,     7,      0,      -90,     0.36,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      -70,     0.24,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                POSITION: [   7,    3,    1,     7,      0,      -50,     0.12,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      -30,     0,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                POSITION: [   7,    3,    1,     7,      0,      -110,     0.48,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      -130,     0.6,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                POSITION: [   7,    3,    1,     7,      0,      -150,     0.72,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
                  POSITION: [   7,    3,    1,     7,      0,      -170,     0.84,   ], 
                  PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.NFAE]),
                    TYPE: exports.nfaedrone,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, 
                ],
            };
      exports.lettermaker = {
                PARENT: [exports.genericTank],
                LABEL: 'Lettermaker',
                BODY: {
                    HEALTH: base.HEALTH * 10,
                    SHIELD: base.SHIELD * 10,
                    DENSITY: base.DENSITY * 0.2,
                    SPEED: base.SPEED * 10,
                    ACCELERATION: base.ACCEL * 5,
                },
                DANGER: 0,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, },
                ],
            };
exports.redball = {
        PARENT: [exports.genericTank],
        COLOR: 12,
        SHAPE: 0,
          };  
exports.intubullet = {
    PARENT: [exports.bullet],
    SHOOT_ON_DEATH: 2,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  23,     0,      0,      0,     360,  1], 
                    TYPE: exports.redball,
                        },
              ],
}; 
      exports.randomizer = {
                PARENT: [exports.genericTank],
                LABEL: 'Intuivujuv Klekjlkov',
                BODY: {
                    HEALTH: standard.HEALTH * 10,
                    SHIELD: base.SHIELD * 2,
                    FOV: base.FOV * 2.5, 
                }, 
                ACCEPTS_SCORE: false,
                DANGER: 1, 
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     6,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.RB]),
                            TYPE: exports.intubullet,
                            LABEL: 'Funny',
                            ALT_FIRE: true,
                            FIRE_ON_RELEASE: true,
                        }, }, 
                ],
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     0,      0,      0,     0, 1], 
                    TYPE: exports.boosterauto,
                        }, 
                          ],
            };
      exports.ranafjava = {
                PARENT: [exports.genericTank],
                LABEL: 'Ranaghsijik Fjavajyk',
                BODY: { 
                    HEALTH: base.HEALTH * 10,
                    SHIELD: base.SHIELD * 2,
                    FOV: base.FOV * 2, 
                },
                ACCEPTS_SCORE: false,
                DANGER: 1,
                FACING_TYPE: 'autospin2',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {    
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.halfreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.halfreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     0,      0,      0,     0, 1], 
                    TYPE: exports.rfturret,
                        }, 
                          ],
            };
          exports.sillymaker = {
                PARENT: [exports.bullet],
                SHAPE: 0,
                TYPE: 'minion',
                DANGER: 10, 
                LABEL: 'Sillymaker',
                STAT_NAMES: statnames.generic, 
                FACING_TYPE: 'autospin', 
                ACCEPTS_SCORE: false,
                DRAW_HEALTH: true,
                BODY: {
                    SPEED: base.SPEED * 0,
                    FOV: base.FOV * 1.15,
                    REGEN: base.REGEN * 0.05,
                    HEALTH: base.HEALTH * 2,
                    SHIELD: base.SHIELD * 2,
                    DAMAGE: base.DAMAGE * 0.3,
                    RANGE: 150,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     8,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.SM]),
                            TYPE: exports.trap,
                            AUTOFIRE: true,
                        }, }, {
                    POSITION: [  15,     8,      1,      0,      0,      90,      0,   ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,      90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.SM]),
                            TYPE: exports.trap,
                            AUTOFIRE: true,
                        }, }, {
                    POSITION: [  15,     8,      1,      0,      0,      180,      0,   ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,      180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.SM]),
                            TYPE: exports.trap,
                            AUTOFIRE: true,
                        }, },  {
                    POSITION: [  15,     8,      1,      0,      0,      270,      0,   ],
                        }, {
                    POSITION: [   3,     8,     1.7,    15,      0,      270,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.SM]),
                            TYPE: exports.trap,
                            AUTOFIRE: true,
                        }, }, 
                ], 
            };
      exports.stippleTwo = { 
                PARENT: [exports.genericTank],
                LABEL: 'stippleTwo',
                BODY: {
                    SHIELD: base.SHIELD * 0.5,
                    FOV: base.FOV * 1.8,
                    ACCELERATION: base.ACCEL * 0.12,
                },
                ACCEPTS_SCORE: false,
                DANGER: 4,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  23,     7,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.SB]),
                            TYPE: exports.sillymaker,
                            LABEL: 'Extra-Goofy',
                            ALT_FIRE: true,
                            MAX_CHILDREN: 4,
                        }, }, {   
                    POSITION: [  9,     9,      1,      20,      0,      0,      0,   ], 
                        }, {
                    POSITION: [  16,     7,      0.4,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.thruster, g.S2]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     7,      0.4,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.thruster, g.S2]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  19,     7,      0.4,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.thruster, g.S2]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  19,     7,      0.4,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.thruster, g.S2]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ], 
            };
      exports.V = { 
                PARENT: [exports.genericTank],
                LABEL: '^V',
                BODY: {
                    HEALTH: standard.HEALTH * 2,
                    FOV: base.FOV * 1.25,
                    ACCELERATION: base.ACCEL * 1.5,
                },
                ACCEPTS_SCORE: false,
                DANGER: 25,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     2,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.halfreload]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  22,     8,      0.8,      0,     -1,     135,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.V]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  22,     8,      0.8,      0,      1,     225,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.V]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  26,     8,      0.8,      0,      0,     145,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.V]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  26,     8,      0.8,      0,      0,     215,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.V]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  0,     0,      0.8,      0,     -1,     -45,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  0,     0,      0.8,      0,      1,     45,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true, 
                        }, }, {   
                    POSITION: [  0,     0,      0.8,      0,      0,     -35,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  0,     0,      0.8,      0,      0,     35,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  13,     8,      1.3,      0,     -1,     135,    0.6,  ], 
                         }, {   
                    POSITION: [  13,     8,      1.3,      0,      1,     225,    0.6,  ], 
                         }, {   
                    POSITION: [  14,     8,      1.3,      0,      0,     145,    0.1,  ], 
                        }, {   
                    POSITION: [  14,     8,      1.3,      0,      0,     215,    0.1,  ], 
                         },
                ],
            };
      exports.ud = {
                PARENT: [exports.genericTank],
                LABEL: 'uncontrollable dumbass',
                BODY: {
                    HEALTH: standard.HEALTH * 0.9,
                    SHIELD: base.SHIELD * 2,
                    DENSITY: base.DENSITY * 0.3, 
                    FOV: base.FOV * 1.2,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  13,     8,      1,      0,      3,     65,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      -3,     295,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {  
                    POSITION: [  14,     8,      1,      0,     2,     55,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  14,     8,      1,      0,      -2,     305,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  15,     8,      1,      0,     1,     45,    0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  15,     8,      1,      0,      -1,     315,    0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     35,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,    325,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, 
                ],
            };
            exports.trans = { 
                PARENT: [exports.genericTank],
                LABEL: '',
                BODY: {
                    HEALTH: standard.HEALTH * 0.5,
                    SHIELD: base.SHIELD * 1.5,
                    FOV: base.FOV * 1.3,
                    ACCELERATION: base.ACCEL * 0.8,
                    SPEED: base.SPEED * 1.1,
                },
                ACCEPTS_SCORE: false,
                DANGER: 20,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     8,      1,      0,      0,      0,      0.15,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  21,    11,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  13,     6,      1,      0,      -3,     150,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  13,     6,      1,      0,      3,     210,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {  
                    POSITION: [  14,     6,      1,      0,     -2,     155,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  14,     6,      1,      0,      2,     205,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  15,     6,      1,      0,     -1,     160,    0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, {   
                    POSITION: [  15,     6,      1,      0,      1,     200,    0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            AUTOFIRE: true,
                        }, }, 
                ],
            };
            exports.ps = {
                PARENT: [exports.genericTank],
                LABEL: "pklohngs schjnqurves",
                BODY: {
                    HEALTH: standard.HEALTH * 0.1,
                    SHIELD: base.SHIELD * 0.1,
                    DENSITY: base.DENSITY * 0.05,
                    SPEED: base.SPEED * 1.05,
                    FOV: base.FOV * 1.4,
                    ACCELERATION: base.ACCEL * 5,
                },
                ACCEPTS_SCORE: false,
                DANGER: 50,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  16,     12,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  16,     12,      1,      0,     0,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfreload, g.tonsmorrecoil, g.halfreload, g.lessreload, g.tonsmorrecoil, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  23,     7,      1,      0,     -2,     160,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.lotsmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  23,     7,      1,      0,     2,     200,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.lotsmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
                ],
            };
            exports.sp = {
                PARENT: [exports.genericTank],
                LABEL: "sevruqunjhsc psgnholkp",
                BODY: {
                    HEALTH: standard.HEALTH * 0.2,
                    SHIELD: base.SHIELD * 0.2,
                    DENSITY: base.DENSITY * 0.1,
                    FOV: base.FOV * 1.5,
                    ACCELERATION: base.ACCEL * 2,
                },
                ACCEPTS_SCORE: false,
                DANGER: 50,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  16,     12,      1,      0,     0,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.SP, g.halfreload, g.lessreload, g.triplerecoil, g.triplerecoil, g.tonsmorrecoil]),
                            TYPE: exports.bullet,                                                                                                                  
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  23,     5.5,      1,      0,     -7.5,     190,    0,  ], 
                        PROPERTIES: {     
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.triplerecoil, g.lessreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  23,     5.5,      1,      0,    7.5,     170,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.triplerecoil, g.lessreload]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
                ],
            };
            exports.thornrunner = {
                PARENT: [exports.genericTank],
                LABEL: "'Thornrunner'",
                BODY: {
                    HEALTH: standard.HEALTH * 0.1,
                    SHIELD: base.SHIELD * 0.1,
                    DENSITY: base.DENSITY * 0.05,
                    SPEED: base.SPEED * 1.2,
                    FOV: base.FOV * 1.5,
                    ACCELERATION: base.ACCEL * 0.3,
                },
                ACCEPTS_SCORE: false,
                DANGER: 50,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     8,      1,      0,     -1,     135,    0.4,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  15,     8,      1,      0,      1,     225,    0.55,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  19,     8,      1,      0,      0,     145,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  19,     8,      1,      0,      0,     215,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  23,     6.5,      1,      0,      0,     145,    0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  23,     6.5,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.lotsmorerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.ripper = {
                PARENT: [exports.genericTank],
                LABEL: "Ripper",
                BODY: {
                    HEALTH: base.HEALTH * 0.3,
                    SHIELD: base.SHIELD * 0.3,
                    DENSITY: base.DENSITY * 0.1,
                    SPEED: base.SPEED * 1.4,
                    FOV: base.FOV * 1.65,
                    ACCELERATION: base.ACCEL * 0.5, 
                },
                ACCEPTS_SCORE: false,
                DANGER: 50,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     10,      0.8,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil, g.op, g.halfreload, g.halfreload]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  15,     8,      1,      0,     -1,     135,    0.9,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  15,     8,      1,      0,      1,     225,    0.55,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  17,     8,      1.2,      0,      0,     145,    0.7,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  17,     8,      1.2,      0,      0,     215,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  22,     6.5,      1,      0,      0,     145,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  22,     6.5,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
             exports.yu = {
                PARENT: [exports.genericTank],
                LABEL: "ylovrgenedk ushaernzaum", // this is literally keyboard mashing gibberish??? it doesnt fucking mean anything stop asking me what it translates to i literally dont know any other languages
                BODY: {
                    HEALTH: standard.HEALTH * 0.5,
                    SHIELD: base.SHIELD * 0.5,
                    DENSITY: base.DENSITY * 0.5,
                    SPEED: base.SPEED * 1.2,
                    FOV: base.FOV * 1.5,
                }, 
                ACCEPTS_SCORE: false,
                DANGER: 8,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  29,     14,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.faster, g.pound, g.ojrkf]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,     -5,     180,    1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      0,     180,    1.01,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      5,     180,    1.015,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      5,     180,    1.05,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     180,    1.06,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      -5,     180,    1.065,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,     -5,     180,    1.08,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      0,     180,    1.09,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      5,     180,    1.095,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      5,     180,    1.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     180,    1.105,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      -5,     180,    1.115,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,     -5,     180,    1.12,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      0,     180,    1.125,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      5,     180,    1.14,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      5,     180,    1.15,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     180,    1.155,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      -5,     180,    1.16,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,     -5,     180,    1.01,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      0,     180,    1.015,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      5,     180,    1.025,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      5,     180,    1.07,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     180,    1.07,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      -5,     180,    1.075,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,     -5,     180,    1.085,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      0,     180,    1.095,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      5,     180,    1.097,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      5,     180,    1.105,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     180,    1.11,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      -5,     180,    1.115,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,     -5,     180,    1.125,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      0,     180,    1.13,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  22,     8,      1,      0,      5,     180,    1.135,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      5,     180,    1.155,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     180,    1.165,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      -5,     180,    1.17,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.ifgtj]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                            ALT_FIRE: true,
                        }, },
                ],
            };
             exports.to = {
                PARENT: [exports.genericTank],
                LABEL: "tyxcwqrem oghjftasdatm",
                BODY: {
                    HEALTH: base.HEALTH * 200,
                    SHIELD: base.SHIELD * 100,
                    DENSITY: base.DENSITY * 100,
                    SPEED: base.SPEED * 3,
                    FOV: base.FOV * 3,
                    ACCELERATION: base.ACCEL * 3,
                    DAMAGE: base.DAMAGE * 100,
                },
                DANGER: 500,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  22,     10,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, },
                ],
            };
          exports.ok = {
                PARENT: [exports.genericTank],
                LABEL: "ogohudbvtedy kjhnmedgk",
                BODY: {
                    HEALTH: base.HEALTH * 1000,
                    SHIELD: base.SHIELD * 1000,
                    DENSITY: base.DENSITY * 1000,
                    SPEED: base.SPEED * 7,
                    FOV: base.FOV * 4,
                    ACCELERATION: base.ACCEL * 7,
                    DAMAGE: base.DAMAGE * 1000,
                },
                DANGER: 0,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  27,     13,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, },
                ],
            };
            exports.fastthing = {
                PARENT: [exports.genericTank],
                LABEL: "fast thing", 
                BODY: {
                    HEALTH: base.HEALTH * 0.05,
                    SHIELD: base.SHIELD * 0,
                    DENSITY: base.DENSITY * 0.1,
                    SPEED: base.SPEED * 2.3,
                    FOV: base.FOV * 2, 
                    ACCELERATION: base.ACCEL * 3,
                },
                DANGER: 335,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  22,     10,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     235,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  19,     6.5,      1,      0,      0,     155,    0.4,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  19,     6.5,      1,      0,      0,     215,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfreload, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.mx = {
                PARENT: [exports.genericTank],
                LABEL: "megaphase xyxwevfjdtuek", 
                BODY: {
                    HEALTH: base.HEALTH * 0.5,
                    SHIELD: base.SHIELD * 0,
                    DENSITY: base.DENSITY * 0.1,
                    SPEED: base.SPEED * 2,
                    FOV: base.FOV * 2,
                    ACCELERATION: base.ACCEL * 10,
                },
                DANGER: 335,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  22,     10,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  23,     3,      1,      0,      0,     180,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  21,     5,      1,      0,      0,     180,    0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  19,     6.5,      1,      0,      0,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfreload, g.tonsmorrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.fighter = {
                PARENT: [exports.genericTank],
                LABEL: 'Fighter',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                    FOV: base.FOV * 1.2,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,     -1,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      1,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.brutalizer = {
                PARENT: [exports.genericTank],
                LABEL: 'Surfer',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                    REGEN: base.REGEN * 2,
                    FOV: base.FOV * 1.2,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [   7,    7.5,    0.6,     7,     -6,      140,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload, g.doublereload, g.faster, g.fast]),
                            TYPE: [exports.autoswarm2],
                            STAT_CALCULATOR: gunCalcNames.swarm,         
                        }, }, {   
                    POSITION: [   7,    7.5,    0.6,     7,      6,     -140,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload, g.doublereload, g.faster, g.fast]),
                            TYPE: [exports.autoswarm2],
                            STAT_CALCULATOR: gunCalcNames.swarm,     
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     6,     -3,      -20,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload, g.faster, g.fast]),
                            TYPE: [exports.autoswarm2],
                            STAT_CALCULATOR: gunCalcNames.swarm,
                            ALT_FIRE: true,
                        }, }, {   
                    POSITION: [   7,    7.5,    0.6,     6,      3,    20,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload, g.faster, g.fast]),
                            TYPE: [exports.autoswarm2],
                            STAT_CALCULATOR: gunCalcNames.swarm,     
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [   7,    6,    1,     7,     -1,      90,     0,   ], 
                         }, {   
                    POSITION: [   7,    6,    1,     7,      1,     -90,     0,   ], 
                         }, {
                    POSITION: [  24,     8.5,      0.7,      0,      -3,     160,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  24,     8.5,      0.7,      0,      3,     200,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.bomber = {
                PARENT: [exports.genericTank],
                LABEL: 'Bomber',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                    FOV: base.FOV * 1.2,
                },
                ACCEPTS_SCORE: false,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  20,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     130,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: 'Wing',
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     230,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: 'Wing',
                        }, }, {
                    POSITION: [  17,     10,      1,      0,      0,     180,     0,   ],
                        }, {
                    POSITION: [   4,     10,     1.5,    17,      0,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.triplerecoil, g.halfreload, g.halfreload, g.halfreload, g.BET]),
                            TYPE: exports.explosivetrap, STAT_CALCULATOR: gunCalcNames.trap,
                            ALT_FIRE: true,
                            SYNCS_SKILLS: true,  
                        }, },
                ],
            };    
            exports.autotri = shutUpAndMakeMeSomeLasagaJon_NoIveHadItWithYouGarfielfYouStupidLazyFatFelineImNotMakingYouLAsaganYouCreepyAsshole(exports.tri);   
            exports.autotri.BODY = {
                SPEED: base.SPEED,
            };   
            exports.falcon = {
                PARENT: [exports.genericTank],
                LABEL: 'Falcon',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.8,
                    FOV: base.FOV * 1.5,
                },
                ACCEPTS_SCORE: false,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.faster, g.uudhu, g.morerange]),
                            TYPE: exports.bullet,
                            LABEL: 'Assassin',
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [   5,    8.5,   -1.6,     8,      0,      0,      0,   ], 
                        }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     180,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  0,     0,      1,      0,      0,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                            TYPE: exports.bullet,
                            ABILITY_FIRE: true,
                            FOV_INCREASE: true,
                        }, },
                ],
            };

        exports.auto3 = { 
            PARENT: [exports.genericTank],
            LABEL: 'Auto-3',
            DANGER: 6,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     8,      0,      0,     190, 0], 
                    TYPE: exports.auto3gun,
                        }, {
                POSITION: [  11,     8,      0,     120,    190, 0], 
                    TYPE: exports.auto3gun,
                        }, {
                POSITION: [  11,     8,      0,     240,    190, 0], 
                    TYPE: exports.auto3gun,
                        },
            ],
        };
        exports.metagun = { 
            PARENT: [exports.genericTank],
            LABEL: 'METAGUN',
            DANGER: 10,
            SIZE: 27,
            BODY: {
            FOV: base.FOV * 4,
            SPEED: base.SPEED * 3,
            },
            FACING_TYPE: 'locksFacing',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  9,     0,      0,      0,     360, 0], 
                    TYPE: exports.metagunauto,
                        }, 
            ],
        };
            exports.auto5 = {
                PARENT: [exports.genericTank],
                LABEL: 'Auto-5',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,      72,    190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,     144,    190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,     216,    190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,     288,    190, 0], 
                        TYPE: exports.auto5gun,
                            },
                ],
            };
            exports.heavy3 = {
                BODY: {
                    SPEED: base.SPEED * 0.95,
                },
                PARENT: [exports.genericTank],
                LABEL: 'Mega-3',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  14,     8,      0,      0,     190, 0], 
                        TYPE: exports.heavy3gun,
                            }, {
                    POSITION: [  14,     8,      0,     120,    190, 0], 
                        TYPE: exports.heavy3gun,
                            }, {
                    POSITION: [  14,     8,      0,     240,    190, 0], 
                        TYPE: exports.heavy3gun,
                            },
                ],
            };
            exports.tritrap = {
                LABEL: '',
                BODY: {
                    SPEED: base.SPEED * 1.1,
                },
                PARENT: [exports.genericTank],
                DANGER: 6,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  12,     8,      0,      0,     190, 0], 
                        TYPE: exports.tritrapgun,
                            }, {
                    POSITION: [  12,     8,      0,     120,    190, 0], 
                        TYPE: exports.tritrapgun,
                            }, {
                    POSITION: [  12,     8,      0,     240,    190, 0], 
                        TYPE: exports.tritrapgun,
                            },
                ],
            };
            exports.sniper3 = { 
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: '',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.6,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.25,
                },
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  13,     8,      0,      0,     170, 0], 
                        TYPE: exports.sniper3gun,
                            }, {
                    POSITION: [  13,     8,      0,     120,    170, 0], 
                        TYPE: exports.sniper3gun,
                            }, {
                    POSITION: [  13,     8,      0,     240,    170, 0], 
                        TYPE: exports.sniper3gun,
                            },
                ],
            };
            exports.auto4 = { 
                PARENT: [exports.genericTank],
                DANGER: 5,
                LABEL: 'Auto-4',
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  13,     6,      0,      45,    160, 0], 
                        TYPE: exports.auto4gun,
                            }, {
                    POSITION: [  13,     6,      0,     135,    160, 0], 
                        TYPE: exports.auto4gun,
                            }, {
                    POSITION: [  13,     6,      0,     225,    160, 0],
                        TYPE: exports.auto4gun,
                            }, {
                    POSITION: [  13,     6,      0,     315,    160, 0],
                        TYPE: exports.auto4gun,
                            },
                ],
            };
            
        exports.flanktrap = {
            PARENT: [exports.genericTank],
            LABEL: 'Trap Guard',
            STAT_NAMES: statnames.generic,
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  20,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  13,     8,      1,      0,      0,     180,     0,   ],
                    }, {
                POSITION: [   4,     8,     1.7,    13,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    }, },
            ],
        };
        exports.fatlard = {
            PARENT: [exports.genericTank],
            LABEL: 'Fat Lard',
            STAT_NAMES: statnames.generic,
            DANGER: 6094839576473589324858538678940,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  20,     30,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.slow, g.slow, g.slow, g.slow]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  13,     30,      1,      0,      0,     180,     0,   ],
                    }, {
                POSITION: [   4,     30,     1.7,    13,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.slow, g.slow, g.slow]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    }, },
            ],
        }; 
            exports.guntrap = {
                PARENT: [exports.genericTank],
                LABEL: 'Gunner Trapper',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    FOV: base.FOV * 1.25,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     2,      1,      0,    -2.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     2,      1,      0,     2.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  12,    11,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [  13,    11,      1,      0,      0,     180,     0,   ],
                        }, {
                    POSITION: [   4,    11,     1.7,    13,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };
            exports.bushwhack = {
                PARENT: [exports.genericTank],
                LABEL: 'Snipe Guard',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7, 
                    FOV: base.FOV * 1.2,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  13,    8.5,     1,      0,      0,     180,     0,   ],
                        }, {
                    POSITION: [   4,    8.5,    1.7,    13,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };

// NPCS:
exports.crasher = {
    TYPE: 'crasher',
    LABEL: 'Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        SPEED: 5,
        ACCEL: 0.01,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.shatterer = {
    TYPE: 'crasher',
    LABEL: 'Shatterer',
    COLOR: 111,
    SHAPE: [[-1,-1],[1,0],[-1,1],[-1,0.2],[-0.6,0.4],[-0.4,-0.01],[-0.6,-0.4],[-1,-0.2]],
    SIZE: 9,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        SPEED: 2.8,
        ACCEL: 0.005,
        HEALTH: 1.5,
        DAMAGE: 8, 
        PENETRATION: 3,
        PUSHABILITY: 0.5,
        DENSITY: 15,
        RESIST: 3,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.thewhiteone = {
    TYPE: 'crasher',
    LABEL: 'Shattere34r',
    COLOR: 6,
    SHAPE: 3,
    SIZE: 9,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        SPEED: 2.8,
        ACCEL: 0.005,
        HEALTH: 1.5,
        DAMAGE: 8, 
        PENETRATION: 3,
        PUSHABILITY: 0.5,
        DENSITY: 15,
        RESIST: 3,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.racer = {
    TYPE: 'crasher',
    LABEL: 'Racer',
    COLOR: 56,
    SHAPE: [[-1.4,0.8],[-1,0.8],[1,0],[-1,-0.8],[-1.4,-0.8],[-1,-0.6],[-1,0.6]],
    SIZE: 4,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        SPEED: 25,
        ACCEL: 0.01,
        HEALTH: 0.3,
        DAMAGE: 7,
        PENETRATION: 1.5,
        PUSHABILITY: 0.5,
        DENSITY: 2,
        RESIST: 3,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.dupe = {
    TYPE: 'crasher',
    LABEL: 'Duplicator',
    COLOR: 56,
    SHAPE: 3,
    SIZE: 7,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        SPEED: 5,
        ACCEL: 0.02,
        HEALTH: 1,
        DAMAGE: 10,
        PENETRATION: 4,
        PUSHABILITY: 1,
        DENSITY: 20,
        RESIST: 4,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GUNS: [{
        POSITION: [    0,    8,    1,     0,     0,    0,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
            TYPE: exports.crasher,
        }, },
           ],
};
exports.chaser = { 
    TYPE: 'crasher',
    LABEL: 'Chaser',
    COLOR: 133,
    SHAPE: [[1,0],[-0.4,-1],[0.2,0],[-0.4,1]],
    SIZE: 7, 
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, }, 
    BODY: {
        SPEED: 10,
        ACCEL: 0.005,
        HEALTH: 2.5,
        DAMAGE: 8,
        PENETRATION: 30,
        PUSHABILITY: 0.04,
        DENSITY: 10,
        RESIST: 2,
        FOV: 0.7,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.pokerold = { 
    TYPE: 'crasher',
    LABEL: 'Chaser',
    COLOR: 166,
    SHAPE: [[2,0],[0.6,0.3],[0.4,0.6],[0,0.4],[-1,0.6],[-0.8,0.2],[-1,0],[-0.8,-0.2],[-1,-0.6],[0,-0.4],[0.4,-0.6],[0.6,-0.3]],
    SIZE: 10, 
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, }, 
    BODY: {
        SPEED: 6,
        ACCEL: 0.03,
        HEALTH: 500,
        DAMAGE: 40,
        PENETRATION: 0.02,
        PUSHABILITY: 0.1,
        DENSITY: 1,
        RESIST: 2,
        FOV: 0.7,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.pain = { 
    TYPE: 'crasher',
    LABEL: 'Poker',
    COLOR: 206,
    SHAPE: [[2,0],[-0.4,0.5],[-1,0],[-0.4,-0.5]],
    SIZE: 9, 
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, }, 
    BODY: {
        SPEED: 6, 
        ACCEL: 0.03,
        HEALTH: 500,
        DAMAGE: 30,
        PENETRATION: 0.02,
        PUSHABILITY: 0.1,
        DENSITY: 1,
        RESIST: 2,
        FOV: 0.7,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Sentry',
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8, 
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,        
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        FOV: 0.5,
        ACCEL: 0.006,
        DAMAGE: base.DAMAGE * 2,
        SPEED: base.SPEED * 0.5,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentry_after_I_detonate_your_testicles = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Fat Fucking Lard',
    DANGER: 56259250158106750,
    COLOR: 17,
    SHAPE: -6,
    SIZE: 15,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8, 
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,        
    }),
    VALUE: 225522,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        FOV: 1.5,
        ACCEL: 0.003,
        DAMAGE: base.DAMAGE * 17,
        SPEED: base.SPEED * 4,
        HEALTH: base.HEALTH * 4,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentry2 = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Retreater',
    DANGER: 2,
    COLOR: 96,
    SHAPE: [[-0.6,-0.2],[-1,-1.01],[1,0],[-1,1],[-0.6,0.2],[-1,0]],
    SIZE: 9,
    HEALTH: base.HEALTH * 1.5,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8, 
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,        
    }),
    VALUE: 2400,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal', 'fleeAtLowHealth'],
    AI: { NO_LEAD: true, },
    BODY: {
        FOV: 0.7,
        ACCEL: 0.008,
        DAMAGE: base.DAMAGE * 1.5,
        SPEED: base.SPEED * 0.65,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentry3 = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Attacker',
    DANGER: 3,
    COLOR: 106,
    SHAPE: [[-1,-1],[1,-0.2],[0.6,0],[1,0.2],[-1,1],[-1,0.6],[-1.4,0],[-1,-0.6]],
    SIZE: 11,
    HEALTH: base.HEALTH * 1.4,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8, 
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,         
    }),
    VALUE: 2750,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    BODY: {
        FOV: 0.9,
        ACCEL: 0.01,
        DAMAGE: base.DAMAGE * 1,
        SPEED: base.SPEED * 0.9,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentry4 = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Tanker',
    DANGER: 4,
    COLOR: 84,
    SHAPE: [[-1,0.2],[-1.2,0],[-1,-0.2],[-1,-1],[-0.2,-0.6],[0.01,-0.8],[0.2,-0.4],[1,0],[0.2,0.4],[0,0.8],[-0.2,0.6],[-1,1]],
    SIZE: 14,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8, 
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,        
    }),
    VALUE: 4265,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        FOV: 0.625,
        ACCEL: 0.0048,
        DAMAGE: base.DAMAGE * 2.7,
        SPEED: base.SPEED * 0.35,
        HEALTH: base.HEALTH * 1.85,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.sentry5 = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Pursuer',
    DANGER: 3,
    COLOR: 124,
    SHAPE: [[-1,-1],[-1,1],[2,0]],
    SIZE: 8,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8, 
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,        
    }),
    VALUE: 2100,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        FOV: 0.7,
        ACCEL: 0.008,
        DAMAGE: base.DAMAGE * 1.9,
        SPEED: base.SPEED * 1.2,
        HEALTH: base.HEALTH * 1.2,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.7,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster', 'canRepel', 'onlyAcceptInArc', 'mapAltToFire',], 
    COLOR: 16, 
    AI: { 
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  16,    14,      1,      0,      0,      0,      0,   ],
            }, {
        POSITION: [   4,    14,     1.8,    16,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
            }, },
    ],
};
exports.sentrySwarm = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [{
        POSITION: [    7,    14,    0.6,     7,     0,    180,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,     
        }, },
    ],
};
exports.sentryGun = makeAuto(exports.sentry, 'Sentry', { type: exports.heavy3gun, size: 12, });
exports.sentryTrap = makeAuto(exports.sentry, 'Sentry', { type: exports.trapTurret, size: 12, });
exports.sentry2Swarm = { 
    PARENT: [exports.sentry2],
    DANGER: 3,
    GUNS: [{
        POSITION: [    7,    14,    0.6,     7,     0,    180,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,     
        }, },
    ],
};
exports.sentryLard = {
            PARENT: [exports.sentry_after_I_detonate_your_testicles],
            LABEL: 'Fat Fucking Lard',
            STAT_NAMES: statnames.generic,
            DANGER: 622222222222222666667,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  20,     30,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.slow, g.slow, g.slow, g.slow]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  13,     30,      1,      0,      0,     180,     0,   ],
                    }, {
                POSITION: [   4,     30,     1.7,    13,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.slow, g.slow, g.slow, g.slow]),
                        TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                    }, },
            ],
        };
exports.sentry2Gun = makeAuto(exports.sentry2, 'Retreater', { type: exports.heavy3gun, size: 8, });
exports.sentry3Gun = makeAuto(exports.sentry3, 'Attacker', { type: exports.attackergun, size: 10, });
exports.sentry2Trap = makeAuto(exports.sentry2, 'Retreater', { type: exports.trapTurret, size: 8, });
exports.sentry4Swarm = { 
    PARENT: [exports.sentry4],
    DANGER: 3,
    GUNS: [{
        POSITION: [    7,    14,    0.6,     7,     0,    180,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,     
        }, },
    ],
};
exports.sentry4Gun = makeAuto(exports.sentry4, 'Tanker', { type: exports.heavy3gun, size: 9, });
exports.sentry4Trap = makeAuto(exports.sentry4, 'Tanker', { type: exports.trapTurret, size: 8, });
exports.sentry5Guns = {
    PARENT: [exports.sentry5],
    GUNS: [{
        POSITION: [    0,    8,    1,     0,     0,    0,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [    0,    8,    1,     0,     0,    45,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [    0,    8,    1,     0,     0,    90,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [    0,    8,    1,     0,     0,    135,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [    0,    8,    1,     0,     0,    180,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [    0,    8,    1,     0,     0,    225,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [    0,    8,    1,     0,     0,    270,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [    0,    8,    1,     0,     0,    315,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {  
        POSITION: [    8,    8,    0.00001,     10,     6,    180,     0,  ], 
         }, {
        POSITION: [    8,    8,    0.00001,     10,     -6,    180,     0,  ], 
         }, {
        POSITION: [    11,    11,    0.00001,     10,     0,    180,     0,  ], 
         }, 
    ],
};
 
exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7, 
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.minibossForPg2 = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: { NO_LEAD: true, },
    GIVE_KILL_MESSAGE: false,
};
exports.minibossForCl1 = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }), 
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: { NO_LEAD: true, },
    GIVE_KILL_MESSAGE: false,
};
exports.greg_dubois_wanna_come_back_he_wanna_come_back_with_a_club_and_attack_he_wanna_take_to_his_guns_and_break_you = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 626756275,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'GREG DUBOIS IS ANGRY AT YOU bUt he cant do anything cuz hes dead lol',
};
exports.i_do_have_a_crush_on_pine_walsh_yes_indeed = { //not anymore bruh ?? most of this weird shit is from like sep 2023 so
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 626756275,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
};
exports.sixteen = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 161616161616161616,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.seventeen = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 17,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    MOTION_TYPE: 'swarm',
    HITS_OWN_TYPE: 'repel',
    CRAVES_ATTENTION: true,
    GIVE_KILL_MESSAGE: false,
};
exports.eighteen = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 1,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 18,
    ACCEPTS_SCORE: false,
    CONTROLLERS: [],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.nineteen = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 100,
    SKILL: skillSet({ 
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 0,
        shi: 0,
        rgn: 0,
        mob: 1,         
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'repel',
    GIVE_KILL_MESSAGE: false,
};
exports.twenty = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 20,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'repel',
    GIVE_KILL_MESSAGE: false,
};
exports.twentyone = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 11,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.twentytwo = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 20,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'chaosspin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.twentythree = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 2.3,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.twentyfour = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 20,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.twentyfive = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 50505050505050505, //we goin back to 505 with this one!!!🗣🗣🔥
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'repel',
    GIVE_KILL_MESSAGE: false,
};
exports.twentysix = {
    PARENT: [exports.genericTank],
    TYPE: 'paper',
    DANGER: 25, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 1,  
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'repel',
    GIVE_KILL_MESSAGE: false,
};
exports.twentyeight = {
    PARENT: [exports.genericTank],
    TYPE: 'scissors',
    DANGER: 25, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'repel',
    GIVE_KILL_MESSAGE: false,
};
exports.twentynine = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 29, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 1,
        atk: 0.3,
        hlt: 1, 
        shi: 0.7,
        rgn: 0.7,
        mob: 0,               
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'repel',
    GIVE_KILL_MESSAGE: false,
};
exports.fiftythree = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 1,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 53,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
  //  BROADCAST_MESSAGE: '▩▩▩53ˉ',
};
exports.fiftyeight = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 8,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 58,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin3',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
 //   BROADCAST_MESSAGE: 'R.I.P You Really Can Run 2023-2024',
};
exports.seventysix = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 76,
    SKILL: skillSet({ 
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 0,
        shi: 0,
        rgn: 1,
        mob: 0.5,        
    }),
    LEVEL: 760,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
 //   BROADCAST_MESSAGE: 'SHAPE: [[-0.75,0.4],[-1,0],[2,0],[2,-1.4],[1.6,-0.4],[-1,0],[2,0],[2,-1.4],[2,0],[2,1.6],[1.4,1.6],[1.8,0.2],[1,0.4],[0.4,1.6],[-1,1],[-1,0],[-0.4,1],[0.6,0.8],[0.2,0.2]]',
};
exports.fifteen = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 0,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    CAN_BE_ON_LEADERBOARD: true,
    GIVE_KILL_MESSAGE: false,
};
exports.three = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 33333333,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 47,
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
  //  BROADCAST_MESSAGE: '3_____________-_________---_--_____________--_____--_--____#',
};
exports.four = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 4,
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
  //  BROADCAST_MESSAGE: '4.',
};
exports.five = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 5,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 5,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.six = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 60,
    CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'spinAtLowHealth'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.seven = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 7,
    SKILL: skillSet({ 
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.eight = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 7,
    SKILL: skillSet({ 
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['targetOwnType', 'mapAltToFire', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.nine = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 394857284533040454583045345467893313485734578345834723534583573447445455, //REALLY FUCKING DANGEROUS !!🤯💥💣🧨💀!
    SKILL: skillSet({ 
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,        
    }),
    LEVEL: 99,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.ten = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 10, 
    SKILL: skillSet({ 
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,    
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    GIVE_KILL_MESSAGE: false,
};
exports.eleven = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 11, 
    SKILL: skillSet({ 
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,    
    }),
    LEVEL: 11,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.twelve = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 1, 
    SKILL: skillSet({ 
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,    
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirteen = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 13, 
    SKILL: skillSet({ 
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,    
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.fourteen = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 4, 
    SKILL: skillSet({ 
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,    
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.twentyseven = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 20,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirty = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 3,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 30,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
//    BROADCAST_MESSAGE: "What's the number that comes after 29? ++++++_++_}{]̸̧͚͇̜̘͎̼͇͙̠̗̘̜̞̠̗̺̭̹̃̎͋͒̈̌́̐͊̔ͅ}{}{{}|]]]]]̵̨̢̥͈̣̞̝̗̬͓͔͖̘̦͔̝̱̼̞͓̱͙͎̱̰̥̹̱̈̈́̍̋̎͛̽́̾̆͆̍̇̽́̍͂̓̚͘͜͝͝͠͝ͅ]̶̨̛̗̲̼̓̃̄̌͗̾̔̐̀̊̂̓̽͑͗̈́̓̂̍̂͌̒̿͘̚̚͝͝]]]]]].̴̧̡̨̧͚͓̝͖̩̠̰͍̤͉̠̹̤͚͔̼̰̪̰̮̀̐͛̂̏̽̄͐͂̊͗̌̈́͊̾͂͌̿͌̋̑̏̄͐̚̚͘͜͠ͅ]̸̡̡̡̢̢̳͇̝̬̗̭̣͚̬̖̯̝̮͇̬͙͎̮͓̲̟͇̫̩̱̽́͑̒̓͊̿̃͌̃͗͌͠͝͝]̸̡͚̩̘̮͔͊̆̏̇͂̑̄̓͐̄͜͝͝ͅ]̴̨̢͖̝̣̱̥̝̳͔̳̮̫͚̲͉͍͕̬̝̙̯̠̠̌͋̅͋̌̅̐̆͐́̋́̚̕̕͜͝͝ͅ]̴̠̟̻̺̦̗̹̞̼̲̬̠̹̖͍͎̭̺͚͚̱͔̯̼̬̬̺̹͇́̒̈̀̆̅̓̉̔́̽̌̔̚̚͜͠]̴̡̛̣̝̘̙͖͍̫͌͊̓̅̊̇̅̊̄̐̃͆̽̕͘͠]̵̥̯̜̌͐̀͒͆̅̌̆̌̃̽̒͊͜]̵̢̪͓̐̽̋̎̇̓]̴̨̨̡̢̡̛̱͉̹̞̲̞̮̣͈̯͊͌̀̾͊́̂͒͗̿̾̈́͛͝]̷̨̢̧̧̪̮̱̥̠͔̪̳̻͖̩͕̲͙̮͕̤̰̭͙̙̭̞̏̿͆̅̏͋͋́̈̈́̔̎̏̌̓͊̅̏͂̾͌̐̕͠͝+̵̙̝̻͇͔̩̞͉̦̀̊̾̔̕P̸̡̢͍͚̟͚̝̯͕̖̻̬̘͉̊̐̾̆͊̍̿̉̽̑̉͋̎͑͒̿̕͠_̴̦̘̻̔́̆͂̄͠_̷̲͓̯͙͍̲̮͈̙̈́͐̈́̈́̿̒͑̓͋͋͋͛̅̏͒͗͂͑̾͒͒́̕͝_̸̰̺̘͔̘̫̫̼̯̦̖̰̻̦͓̣̺̭͚͈̫͖͉̲̰̳̎͆̈́̿̐͜_̴̨̛͉͎͓̦͈̫͍̗̺̳̹̬̋͊͆̉̓͊̓͗͐͋̾͠_̶̡̧̨̱̳͉͓̻̩͚̮̥͉̤̟̘͎̯͒̿͛̓̍̓̓͊̾̈́͊͐̑̌͊̄̃̄̄̈́̀̍̽̈́̈́͐̕͠͝_̸̡̡̧̼̟̖͉̳͖̠̖̺͍͈̭͕̲̯̬͔͈̟͍̭̘͓͚͊̏̀̽̽͐͜͜_̵̢̨̛̞̦̤͇͖͈̯̖͎̘͔͙̱̼̤̳̻͉͙̖̜̩̞̤̃̆͆́̌̉͊̍̅̆͑̒̋̈́̿̀͒̃̃͒̉͘̚̚ͅ)))))_̵̢̫̠̪̂̒̕͘ͅ_̵̲͍͋̈́3_̴̲̮̽́̈́̏͝_̵̛͍͛͂͋_̸̠̟͔̏͜}~~~}~}~__̶͋̒͗̂͆̑̆̽̌̈͌͂͑̉̕ͅ_̵̡̢͕̲̻̞̱̝̦̞̭̘̗͈̯̺̝̠̦̖͓̹͚̈́̉̈́̒͛̍͊̈́̇̾̒̈́̃͗͊̌̓̐̽̔́́͆͜͝~}[0]]}",
};
exports.thirtyone = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 11,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: [],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'nothing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.sixtyone = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 661166116611111666666,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 61,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
  //  BROADCAST_MESSAGE: '𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.𝐈𝐓 𝐖𝐀𝐒 𝐎𝐍𝐂𝐄 𝐊𝐍𝐎𝐖𝐍.',
};
exports.thirtytwo = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 10,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
  //  BROADCAST_MESSAGE: 'Class Thirty-Two Error One',
};
exports.thirtythree = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 3,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirtyfour = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 7,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirtyfive = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 7, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirtysix = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 50, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirtyseven = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 5, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal', 'fleeAtLowHealth'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirtyeight = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 5, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 38,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal', 'fleeAtLowHealth'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.thirtynine = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 8, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.fourty = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 8, 
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
};
exports.sixtyfour = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 20,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 64,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
 //   BROADCAST_MESSAGE: 'Sixty-Three.999999 Error Error X.(null)',
};
exports.fourtysix = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 46,
    SKILL: skillSet({ 
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 0.1,
        shi: 0.1,
        rgn: 0.1,
        mob: 0.2,        
    }),
    LEVEL: 46,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
 //   BROADCAST_MESSAGE: 'PixelPixelPixelPixelPixelPixelPixelPixelPixelPixel(null)',
};
exports.eightyeight = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 88,
    SKILL: skillSet({ 
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 0.1,
        shi: 0.1,
        rgn: 0.1,
        mob: 0.2,        
    }),
    LEVEL: 88,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin2',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
 //   BROADCAST_MESSAGE: '  ',
};
exports.eightyfive = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 848584858485854858485485,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 85,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    GIVE_KILL_MESSAGE: false,
//    BROADCAST_MESSAGE: 'It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85It was Once Long Ago 85v',
};
exports.minibossevt = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    DANGER: 6,
    SKILL: skillSet({ 
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.tdominiboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 0,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A Deadly Octagon has been defeated!',
};
exports.tdominibossevt = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    DANGER: 0,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A Deadly Octagon has been defeated!',
};
exports.ccminiboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.ccminibossevt = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'locksFacing',
    HITS_OWN_TYPE: 'hard',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
    exports.crasherSpawner = {
        PARENT: [exports.genericTank],
        LABEL: 'Spawned',  
        STAT_NAMES: statnames.drone,
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 5, 
        INDEPENDENT: true, 
        AI: { chase: true, },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.drone, { LABEL: 'Crasher', VARIES_IN_SIZE: true, DRAW_HEALTH: true }],
                    SYNCS_SKILLS: true,
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
    exports.crasherSpawner2 = {
        PARENT: [exports.genericTank],
        LABEL: 'Spawned',  
        STAT_NAMES: statnames.drone,
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 5, 
        INDEPENDENT: true, 
        AI: { chase: true, },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
                    TYPE: [exports.drone, { LABEL: 'Crasher', VARIES_IN_SIZE: true, DRAW_HEALTH: true }],
                    SYNCS_SKILLS: true,
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
exports.pagetwo2 = {
    PARENT: [exports.minibossForPg2],
    LABEL: 'Page Two',
    ACCEPTS_SCORE: false,
    COLOR: 12,
    SIZE: 16,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    FACING_TYPE: 'locksFacing',
    BODY: {
      SPEED: base.SPEED * 1.2,
      ACCELERATION: base.ACCEL * 1.6,
      DENSITY: base.DENSITY * 2,
      FOV: base.FOV * 5,
      HEALTH: base.HEALTH * 1.2,      
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.aaaal, g.lessreload]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [  16,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.aaaal, g.lessreload]),
            TYPE: exports.bullet,
        }, }, 
    ],
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  10,    0,      0,      180,     0,  1], 
            TYPE: exports.numberTwo,
    },
                ],
}; 
exports.page2two2 = {
    PARENT: [exports.drone8],
    TYPE: 'drone',
    LABEL: 'Page Two',
    SHAPE: 0,
    COLOR: 12,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    FACING_TYPE: 'locksFacing',
    BODY: {
      SPEED: base.SPEED * 4,
      ACCELERATION: base.ACCEL * 2,
      DENSITY: base.DENSITY * 5,
      FOV: base.FOV * 8,
      HEALTH: base.HEALTH * 2,      
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.aaaal]),
            TYPE: exports.bullet,
        }, }, {
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.aaaal]),
            TYPE: exports.bullet,
        }, }, 
    ],
      TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  10,    0,      0,      180,     0,  1], 
            TYPE: exports.numberTwo,
    },
                ],
}; 
exports.one = { 
    PARENT: [exports.swarm],
    LABEL: 'Clone',
    TYPE: 'clone',
    COLOR: 3,
    SIZE: 5,
    SHAPE: 0,
    DRAW_HEALTH: true,
    BODY: {
      RANGE: 1850,
      SPEED: base.SPEED * 0.8,
      ACCELERATION: base.ACCEL * 0.5,
      FOV: base.FOV * 1.5,
      HEALTH: base.HEALTH * 0.7,      
      SHIELD: base.SHIELD * 0.1,
      REGEN: base.REGEN * 0.2,
      DAMAGE: base.DAMAGE * 0.8,
    },
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,     7,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.halfreload, g.halfreload]),
            TYPE: exports.bullet,
        }, }, 
    ], 
      
}; 
exports.class1 = {
    PARENT: [exports.minibossForCl1],
    LABEL: 'First Class',  
    COLOR: 3, 
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal', 'fleeAtLowHealth'],
    FACING_TYPE: 'locksFacing',
    SIZE: 13,
    ACCEPTS_SCORE: false,
    VALUE: 10000,
    BODY: { 
      SPEED: base.SPEED * 0.7, 
      ACCELERATION: base.ACCEL * 0.3,
      FOV: base.FOV * 3,
      HEALTH: base.HEALTH * 0.5,      
      SHIELD: base.SHIELD * 0.1,
      REGEN: base.REGEN * 1.5,
    },
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,     7,      1,      0,      0,      0,      1,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.slow, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.B]),
            TYPE: exports.one,
            MAX_CHILDREN: 3,
        }, }, {
          POSITION: [  0,     7,      1,      0,      0,      0,      0.9,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.aaaao]),
            TYPE: exports.casingblue,
        }, }, {
        POSITION: [  10,     7,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.halfreload, g.lessreload]),
            TYPE: exports.bullet,
        }, }, 
    ],
}; 
exports.YOU_ARE_CRINGE = {
        PARENT: [exports.miniboss],
        LABEL: '',
        COLOR: 42,
        SHAPE: -3,
        SIZE: 10,
        VARIES_IN_SIZE: true,
        VALUE: 6969696969420040024042040466666666666,
        BODY: {
            FOV: 8000,
            SPEED: base.SPEED * 12.5,
            HEALTH: base.HEALTH * 1,  
            SHIELD: base.SHIELD * 3,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 100,
        },
    };
exports.fiftynine = {
            PARENT: [exports.genericTank],
            LABEL: '',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    20,    10,     -1.3,      0,      0,     0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.op, g.shghgjkssfgdfgs, g.lessreload, g.lessreload, g.lessreload, g.lessreload]),
                        TYPE: exports.bulletbutitsfuckingstupidashell,
                        LABEL: 'sour FUCKING SWITCH BLADE',
                    }, }, 
                   ],
};
exports.fiftyeight7 = {
            PARENT: [exports.YOU_ARE_CRINGE],
            TURRETS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.fiftynine, { INDEPENDENT: false, COLOR: 0, }]
                    },
            ],
        };
function makeCringe(type, name = -1, options = {}) {
    let turret = { type: exports.fiftynine, size: 10, independent: true, };
    if (options.type != null) { turret.type = options.type; }
    if (options.size != null) { turret.size = options.size; }
    if (options.independent != null) { turret.independent = options.independent; }
    
    let output = JSON.parse(JSON.stringify(type));
    let autogun = {
        /*********  SIZE               X       Y     ANGLE    ARC */
        POSITION: [  turret.size,     0,      0,     180,    360,  1,], 
      
      
        TYPE: [turret.type, { CONTROLLERS: ['nearestDifferentMaster'], INDEPENDENT: turret.independent, }],
    };
    if (type.GUNS != null) { output.GUNS = type.GUNS; }
    if (type.TURRETS == null) { output.TURRETS = [autogun]; }
    else { output.TURRETS = [...type.TURRETS, autogun]; }
    if (name == -1) { output.LABEL = 'Auto-' + type.LABEL; } else { output.LABEL = name; }
    output.DANGER = type.DANGER + 1;
    return output;
}
exports.elitaman = makeCringe(exports.basic, 'fuck you');
    exports.elita = {
        PARENT: [exports.miniboss],
        LABEL: 'E-GIGA',
        COLOR: 14,
        SHAPE: 3,
        SIZE: 20,
        VARIES_IN_SIZE: true,
        VALUE: 150000,
        BODY: {
            FOV: 7,
            SPEED: base.SPEED * 0.25,
            HEALTH: base.HEALTH * 1.5,
            SHIELD: base.SHIELD * 1.25,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5, 
        },
    };
    exports.purpleblack0 = {
        PARENT: [exports.miniboss],
        LABEL: 'PB-65',
        FACING_TYPE: 'locksFacing',
        COLOR: 263,
        SHAPE: [[-0.65,-1],[0.4,-0.7],[1,-0.2],[1,0.5],[0.4,1],[-0.6,0.8],[-1,0.2],[-1.12,-0.45],[-1.4,-1.4],[-1.2,-1.2],[-1.35,-1.9]],
        SIZE: 44,
        VARIES_IN_SIZE: false,
        VALUE: 6525625017570,
        BODY: { 
            FOV: 3,
            SPEED: base.SPEED * 0.5,
            ACCELERATION: base.ACCEL * 0.01,
            HEALTH: base.HEALTH * 15,
            SHIELD: base.SHIELD * 12.5,  
            REGEN: base.REGEN, 
            DAMAGE: base.DAMAGE * 25, 
        },
    };
    exports.purpleblack = {
        PARENT: [exports.purpleblack0],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    10,    8,     1,      0,      0,     0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
                        TYPE: exports.bullet,
                    }, }, 
            ], 
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     0,      0,       0,    180,   1, ],  
                    TYPE: exports.cutecatsgun,
                    },   
            ],  
        }; 
    exports.octathing = {
        PARENT: [exports.tdominiboss],
        LABEL: 'The Deadly Octagon',
        COLOR: 8,
        SHAPE: 8,
        SIZE: 8,
        VARIES_IN_SIZE: true,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 8,
        BODY: {
            FOV: 8,
            SPEED: base.SPEED * 8,
            ACCELERATION: base.ACCEL * 8,
            HEALTH: base.HEALTH * 8,
            SHIELD: base.SHIELD * 8,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 8, 
        },
    };exports.tlsat = {
        PARENT: [exports.greg_dubois_wanna_come_back_he_wanna_come_back_with_a_club_and_attack_he_wanna_take_to_his_guns_and_break_you],
        LABEL: 'Tiny little small annoying thing',
        COLOR: 17,
        SHAPE: 3,
        SIZE: 1.5,
        VARIES_IN_SIZE: true,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 3, 
        BODY: {
            FOV: 30,
            SPEED: base.SPEED * 10,
            ACCELERATION: base.ACCEL * 5,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 1,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3, 
        },
    };
    exports.class16 = {
        PARENT: [exports.sixteen],
        LABEL: 'Class Sixteen',
        COLOR: 16,
        SHAPE: [[-0.6,0],[-0.6,0.6],[-1,0.6],[-1,-1],[1,-1],[1,-0.6],[-1,-0.6],[-1,-0.4],[1,-0.4],[1,0.6],[0.2,0.6],[0.2,0.4],[0.6,0.4],[0.6,-0.02],[0.2,0],[0.2,0.6],[-0.2,0.6],[-0.2,0]],        
        SIZE: 7,
        VARIES_IN_SIZE: false,
        VALUE: 1000000000,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 16,
            SPEED: base.SPEED * 8,
            ACCELERATION: base.ACCEL * 12,
            HEALTH: base.HEALTH * 1e16,
            SHIELD: base.SHIELD * 1e16,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 16, 
        },
    };
    exports.class17 = {
        PARENT: [exports.seventeen],
        LABEL: 'Class Seventeen',
        COLOR: 17,
SHAPE: [[0.8,0],[0.75,1],[-1,1],[-1,0.6],[0.8,0],[-1,-0.4],[0.6,-0.4],[0.8,-0.2],[1,-0.4],[0.8,0],[-1,0.6],[0.6,0.8],[0.6,0.4]],        SIZE: 7,
        VARIES_IN_SIZE: false,
        SIZE: 11,
        VALUE: 5000,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 3,
            SPEED: base.SPEED * 3,
            ACCELERATION: base.ACCEL * 4,
            HEALTH: base.HEALTH * 5,
            SHIELD: base.SHIELD * 7,  
            REGEN: base.REGEN,
            PENETRATION: base.PENETRATION * 0.05,
        },
    };
    exports.class18 = {
        PARENT: [exports.eighteen],
        LABEL: 'Class Eighteen',
        COLOR: 18,
        SHAPE: [[0.6,-0.4],[0.6,-0.8],[1,-0.8],[1,0],[1,1],[-1,1],[-1,0.2],[1,0.2],[1,0],[-1,0],[-1,-0.4]],
        VARIES_IN_SIZE: false,
        SIZE: 36,
        VALUE: 10000,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 18,
            SPEED: base.SPEED * 0,
            ACCELERATION: base.ACCEL * 0,
            HEALTH: base.HEALTH * 18,
            SHIELD: base.SHIELD * 9,  
            REGEN: base.REGEN,
            PENETRATION: base.PENETRATION * 0.02,
        },
      TURRETS: [{ 
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6,     4,      7,       0,    360,   1, ],  
                    TYPE: exports.snipeturret18,
                    }, {
                POSITION: [  6,     -4,      7,       0,    360,   1, ],  
                    TYPE: exports.snipeturret18,
                    },
                ],
    };
    exports.class19 = {
        PARENT: [exports.nineteen],
        LABEL: 'Class Nineteen',
        COLOR: 19,
        SHAPE: [[0.6,-0.4],[0.38,-1.46],[1,0.8],[0,-0.8],[1.2,0],[1.8,0.2],[1.6,1.2],[0.8,-1.2],[1.2,0.2],[-0.6,-0.2],[-0.2,1.8],[-0.2,1.4],[0.98,1.3],[-1.24,-0.64],[0.4,1.2],[-0.87,1.6],[-0.6,-0.4],[1.2,-1.4],[1.2,1.4],[1.4,1.4],[1.4,1.6],[0.6,-1],[-1.09,-1.14],[-0.2,1.6],[-1.28,0.74],[0.4,0.8],[-1.41,-0.27],[-0.2,1.8],[-0.8,1.2],[1.47,1.1],[1,-1]],        VARIES_IN_SIZE: false,
        SIZE: 19,
        VALUE: 1,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 38,
            SPEED: base.SPEED * 9,
            ACCELERATION: base.ACCEL * 5,
            HEALTH: base.HEALTH * 0.019,
            SHIELD: base.SHIELD * 0.019,  
            REGEN: base.REGEN * 0.019, 
        },
      TURRETS: [{ 
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  9,     0,      0,       0,    360,   1, ],  
                    TYPE: exports.bigassthing19,
                    }, {
                POSITION: [  4,     -4,      7,       25,    0,   1, ],  
                    TYPE: exports.shard,
                    }, {
                POSITION: [  3,     4,      -9,       0,    0,   1, ],  
                    TYPE: exports.shard,
                    }, {
                POSITION: [  4,     0,     13,       183,    0,   1, ],  
                    TYPE: exports.shard,
                    }, {
                POSITION: [  3,     -2,      2,       66,    0,   1, ],  
                    TYPE: exports.shard,
                    }, {
                POSITION: [  3,     -15,      4,       66,    0,   1, ],  
                    TYPE: exports.shard,
                    },
                ],
    };
    exports.class22 = {
        PARENT: [exports.twentytwo],
        LABEL: 'Class Twenty-Two',
        COLOR: 22,
        SHAPE: 0,
        VARIES_IN_SIZE: true,
        SIZE: 30,
        VALUE: 20000,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 22,
            SPEED: base.SPEED * 2.2,
            ACCELERATION: base.ACCEL * 2.2,
            HEALTH: base.HEALTH * 22,
            SHIELD: base.SHIELD * 22,  
            REGEN: base.REGEN * 2.2, 
            DAMAGE: base.DAMAGE * 2,
        },
      GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    0,    7,     1,      0,      0,     22,     0.22,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic]),
                        TYPE: exports.bull2t,
                    }, }, {
                POSITION: [    0,    11,     1,      0,      0,     102,     0.62,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
                        TYPE: exports.bull2t,
                    }, }, {
                POSITION: [    0,    4,     1,      0,      0,     52,     0.7,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.faster, g.halfreload, g.halfreload, g.lessreload]),
                        TYPE: exports.bull2t,
                    }, }, {
                POSITION: [    0,    6,     1,      0,      0,     44,     0.1,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
                        TYPE: exports.swa2m,
                        STAT_CALCULATOR: gunCalcNames.swarm,
                    }, }, {
                POSITION: [    0,    9,     1,      0,      0,     88,     0.88,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.swa2m,
                        STAT_CALCULATOR: gunCalcNames.swarm,
                    }, }, 
            ], 
      TURRETS: [{ 
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     7,      0,       0,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, {
                POSITION: [  4,     7,      0,      45,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, {
                POSITION: [  4,     7,      0,       90,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, {
                POSITION: [  4,     7,      0,      135,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, {
                POSITION: [  4,     7,      0,       180,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, {
                POSITION: [  4,     7,      0,      225,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, {
                POSITION: [  4,     7,      0,       270,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, {
                POSITION: [  4,     7,      0,      315,    360,   1, ],  
                    TYPE: [exports.numberTwo, { INDEPENDENT: true, COLOR: 21, }],
                    }, 
                ],
    };
    exports.class23 = {
        PARENT: [exports.twentythree],
        LABEL: 'Class Twenty-Three',
        COLOR: 23,
        SHAPE: [[0,0.2],[0.4,0.2],[0.8,0],[0.8,-0.6],[0.6,-0.8],[0.4,-0.8],[0.6,-0.2],[0.4,0],[0.2,0],[-0.4,-0.8],[-0.8,-0.8],[-0.8,0.2],[-0.6,0.2],[-0.8,0.6],[-0.6,1],[0.8,1],[1,0.4],[0.8,0.2],[0.8,0.8],[0.6,0.8],[0.1,0.4],[0,0.4],[0.4,0.8],[-0.6,0.8],[-0.6,-0.6]],
        VARIES_IN_SIZE: false,
        SIZE: 15,
        VALUE: 25000,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 230,
            SPEED: base.SPEED * 3.2,
            ACCELERATION: base.ACCEL * 2.3,
            HEALTH: base.HEALTH * 23,
            SHIELD: base.SHIELD * 13,  
            REGEN: base.REGEN * 2.3, 
        },
       GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [    3,         3,      1,      25,      0,     0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.BL]),
                        TYPE: exports.swarmlightning,
                        STAT_CALCUATOR: gunCalcNames.swarm,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [    3,         3,      1,      25,     0,     72,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.BL]),
                        TYPE: exports.swarmlightning,
                        STAT_CALCUATOR: gunCalcNames.swarm,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [    3,         3,      1,      25,      0,     144,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.BL]),
                        TYPE: exports.swarmlightning,
                        STAT_CALCUATOR: gunCalcNames.swarm,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [    3,         3,      1,      25,      0,     216,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.BL]),
                        TYPE: exports.swarmlightning,
                        STAT_CALCUATOR: gunCalcNames.swarm,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [    3,         3,      1,      25,      0,     288,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.BL]),
                        TYPE: exports.swarmlightning,
                        STAT_CALCUATOR: gunCalcNames.swarm,
                        AUTOFIRE: true,
                    }, },
      ],  
    };
    exports.class24 = {
        PARENT: [exports.twentyfour],
        LABEL: 'Class Twenty-Four',
        COLOR: 24,
        SHAPE: -8,
        VARIES_IN_SIZE: false,
        SIZE: 20.4,
        VALUE: 10000,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 2.4,
            SPEED: base.SPEED * 2.4,
            ACCELERATION: base.ACCEL * 2.4,
            HEALTH: base.HEALTH * 224,
            SHIELD: base.SHIELD * 24,  
            REGEN: base.REGEN * 2.4, 
            DAMAGE: base.DAMAGE * 0.2424,  
        },
       GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [    20,         8,      1,      0,      0,     0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.BR]),
                            TYPE: exports.boomerang6,
                    }, }, {
                POSITION: [    20,         8,      1,      0,     0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.BR]),
                            TYPE: exports.boomerang6,
                    }, }, {
                POSITION: [    20,         8,      1,      0,     0,     240,     0,   ], 
                    PROPERTIES: {
                     SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.BR]),
                            TYPE: exports.boomerang6,
                    }, }, 
      ],  
        TURRETS: [{ 
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  9,     0,      -1,       0,    360,   1, ],  
                    TYPE: exports.number2W,
                    }, {
                POSITION: [  9,     0,      5,       0,    360,   1, ],  
                    TYPE: exports.number4W,
                    },
                  ],
    };
    exports.class25 = {
        PARENT: [exports.twentyfive],
        LABEL: 'CLASS ⭐ TWENTY FIVE',      
        COLOR: 2525,
SHAPE: [[-1,0.6],[-0.6,0],[-0.2,0],[0,0.2],[0,0.6],[0.8,0.8],[0.6,0.4],[1,0],[1,1],[-0.4,0.8],[-0.4,0.2],[-1,1],[-1,-0.6],[-0.6,0],[-0.2,0],[0,-0.2],[0,-0.6],[0.8,-0.8],[0.6,-0.2],[1,0],[1,-1],[-0.4,-0.8],[-0.4,-0.2],[-1,-1],[-1,0.6]],        VARIES_IN_SIZE: false,
        SIZE: 40,
        VALUE: 2500000000000,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 25,
            SPEED: base.SPEED * 2.5,
            ACCELERATION: base.ACCEL * 1.25,
            HEALTH: base.HEALTH * 125,
            SHIELD: base.SHIELD * 50,  
            REGEN: base.REGEN * 0.025, 
            DAMAGE: base.DAMAGE * 0.25,  
        },
        TURRETS: [{ 
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  3,     6,      5,       0,    360,   0, ],  
                    TYPE: exports.fireeyeturret,
                    }, {
                POSITION: [  4,     6,     5,       0,    360,   1, ],  
                    TYPE: exports.eye,
                    }, {
                POSITION: [  4,     6,      5,       0,    360,   1, ],  
                    TYPE: exports.eyebrow,
                    }, {
                POSITION: [  0.7,     6,      5,       0,    360,   1, ],  
                    TYPE: exports.pupil,
                    }, {
                POSITION: [  4,     6,     -5,       0,    360,   1, ],  
                    TYPE: exports.eyeleft,
                    }, {
                POSITION: [  4,     6,      -5,       0,    360,   1, ],  
                    TYPE: exports.eyebrow,
                    }, {
                POSITION: [  0.7,     6,      -5,       0,    360,   1, ],  
                    TYPE: exports.pupil,
                    }, {
                POSITION: [  11,     15,      -8,       -30,    360,   0, ],  
                    TYPE: exports.sword,
                    }, {
                POSITION: [  3,     5,      10,       0,    360,   0, ],  
                    TYPE: exports.rockshooter,
                    }, {
                POSITION: [  17,     0,      14,       0,    360,   0, ],  
                    TYPE: exports.GIANT_FUCKING_ROCK_CANNON,
                    }, 
                  ],
    };
    exports.class26 = {
        PARENT: [exports.twentysix],
        LABEL: 'Class Twenty-Six',
        COLOR: 226,
        SHAPE: [[0,0.2],[0.4,0.2],[0.8,0],[0.8,-0.6],[0.6,-0.8],[0.4,-0.8],[0.6,-0.2],[0.4,0],[0.2,0],[-0.4,-0.8],[-0.8,-0.8],[-0.8,0.2],[-0.6,0.2],[-0.8,0.4],[-0.8,0.8],[-0.6,1],[0.4,1],[0.4,0.4],[0.2,0.5],[0.2,0.8],[0.8,0.8],[0.8,1],[1,0.8],[1,0.4],[0.8,0.4],[0.8,0.8],[-0.6,0.8],[-0.6,0.4],[1,0.4],[0.8,0.2],[-0.6,0.2],[-0.6,-0.6]], 
        VARIES_IN_SIZE: false,
        SIZE: 26,
        VALUE: 10000,
        CONTROLLERS: ['paper', 'minion', 'canRepel'],
        BODY: {
            FOV: 26,
            SPEED: base.SPEED * 10,
            ACCELERATION: base.ACCEL * 2,
            HEALTH: base.HEALTH * 13,
            SHIELD: base.SHIELD * 26,  
            REGEN: base.REGEN * 2.6, 
            DAMAGE: base.DAMAGE * 2,  
        },
       GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [    0,         15,      1,      0,      0,     0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.halfreload, g.lessreload]),
                            TYPE: exports.paper,
                    }, }, 
                  ],
    };
exports.class28 = {
        PARENT: [exports.twentyeight],
        LABEL: 'Class Twenty-Eight',
        COLOR: 128,
        SHAPE: [[0,0.2],[0.4,0.2],[0.8,0],[0.8,-0.6],[0.6,-0.8],[0.4,-0.8],[0.6,-0.2],[0.4,0],[0.2,0],[-0.4,-0.8],[-0.8,-0.8],[-0.8,0.2],[-0.6,0.2],[-0.8,0.4],[-0.8,0.8],[-0.6,1],[0.8,1],[1,0.8],[1,0.4],[0.8,0.2],[0.8,0.8],[0.3,0.8],[0.3,0.4],[0.1,0.4],[0.1,0.8],[-0.6,0.8],[-0.6,0.4],[0.8,0.4],[0.8,0.2],[-0.6,0.2],[-0.6,-0.6]],
        VARIES_IN_SIZE: false, 
        SIZE: 28,
        VALUE: 20000,
        CONTROLLERS: ['scissors', 'minion', 'canRepel'],
        BODY: {
            FOV: 28,
            SPEED: base.SPEED * 2.8,
            ACCELERATION: base.ACCEL * 5,
            HEALTH: base.HEALTH * 28,
            SHIELD: base.SHIELD * 28,  
            REGEN: base.REGEN * 0.28, 
        },
       GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [    0,         17,      1,      0,      0,     0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.halfreload, g.lessreload]),
                            TYPE: exports.scissors,
                    }, }, 
                  ],
    };
exports.class29 = {
        PARENT: [exports.twentynine],
        LABEL: 'Class Twenty-Nine', 
        COLOR: 229,
        SHAPE: [[0,0.2],[0.4,0.2],[0.8,0],[0.8,-0.6],[0.6,-0.8],[0.4,-0.8],[0.6,-0.2],[0.4,0],[0.2,0],[-0.4,-0.8],[-0.8,-0.8],[-0.8,0.2],[-0.6,0.2],[-0.8,0.4],[-0.8,0.8],[-0.6,1],[0.8,1],[1,0.8],[1,0.4],[0.8,0.2],[0.8,0.8],[0.3,0.8],[0.8,0.2],[0.5,0.2],[0.1,0.8],[-0.6,0.8],[-0.6,0.2],[-0.6,0.2],[-0.6,-0.6]],        VARIES_IN_SIZE: false, 
        SIZE: 29,
        VALUE: 25000,
        CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
        BODY: {
            FOV: 290, 
            SPEED: base.SPEED * 6,
            ACCELERATION: base.ACCEL * 3.5,
            HEALTH: base.HEALTH * 29,
            SHIELD: base.SHIELD * 58,  
            REGEN: base.REGEN * 0.5, 
        }, 
       GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [    0,         6,      1,      0,      0,     72,     0.2,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.CH]),
                            TYPE: exports.chain,
                    }, }, {
        POSITION: [    0,         6,      1,      0,      0,     144,     0.22,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.CH]),
                            TYPE: exports.chain,
                    }, }, {
          POSITION: [    0,         6,      1,      0,      0,     216,     0.24,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.CH]),
                            TYPE: exports.chain,
                    }, }, {
          POSITION: [    0,         6,      1,      0,      0,     288,     0.26,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.CH]),
                            TYPE: exports.chain,
                    }, }, {
          POSITION: [    0,         6,      1,      0,      0,     0,     0.28,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.CH]),
                            TYPE: exports.chain,
                    }, }, 
                  ],
    };
    exports.class30 = {
        PARENT: [exports.thirty],
        LABEL: 'Class Thirty', 
        COLOR: 30,
SHAPE: [[0.8,-0.01],[0.8,-1],[1,-1],[1,0.2],[0.6,0.2],[0.4,-0.5],[-0.3,0.2],[0.4,0.2],[0.9,0.3],[0.8,0.5],[0.1,0.4],[-0.7,0.5],[-0.4,0.9],[0.7,0.7],[0.9,0.3],[1,0.59],[0.9,0.9],[-0.5,1.1],[-1,0.65],[-0.75,0.2],[-0.3,0.2],[-1,-0.3],[-0.8,-1],[-0.7,-0.4],[-0.4,-0.1],[0.4,-0.8]],        SIZE: 29, 
        CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
        VALUE: 30000,
        BODY: {
            FOV: 3, 
            SPEED: base.SPEED * 0.3,
            ACCELERATION: base.ACCEL * 3,
            HEALTH: base.HEALTH * 30,
            SHIELD: base.SHIELD * 3,  
            REGEN: base.REGEN * 3,   
            DAMAGE: base.DAMAGE * 2,   
        }, 
        MAX_CHILDREN: 2,
       GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [   0,     2,    1.2,     8,      0,     90,      3,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.XL, g.qftlm]),
                        TYPE: exports.skull,
                        AUTOFIRE: true,
                      //  SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.drone,
                      //  WAIT_TO_CYCLE: true,     
                    }, }, {
                POSITION: [   0,     2,    1.2,     8,      0,    270,      3,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.XL, g.qftlm]),
                        TYPE: exports.skull,
                        AUTOFIRE: true,
                      //  SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.drone,
                      //  WAIT_TO_CYCLE: true,     
                    }, },
            ],
        };
    exports.class31 = {
        PARENT: [exports.thirtyone],
        LABEL: 'Class Thirty-One', 
        COLOR: 31,
        VALUE: 30000,
        SHAPE: [[0.8,-0.01],[1.41,-1],[1.83,-1.01],[1,0.2],[0.6,0.2],[0.39,-0.833],[-0.267,0.2],[-1.25,0.127],[-1.56,0.047],[-1.71,0.247],[-1.93,0.647],[-0.75,0.527],[-0.4,0.9],[0.77,0.96],[0.67,0.01],[1,0.59],[0.99,1.207],[-0.5,1.1],[-1,0.65],[-2.23,0.78],[-1.94,-0.01],[-1,-0.3],[-0.787,-1.24],[-0.7,-0.4],[-0.4,-0.1],[0.393,-0.993]],        CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
        BODY: {
            FOV: 2, 
            SPEED: base.SPEED * 0,
            ACCELERATION: base.ACCEL * 0,
            HEALTH: base.HEALTH * 13, 
            SHIELD: base.SHIELD * 13,  
            REGEN: base.REGEN * 3.1,   
            DAMAGE: base.DAMAGE * 1.3,   
        }, 
        MAX_CHILDREN: 1,
       GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [   0,     2,         1.2,      0,        0,     0,      1,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.joefv]),
                        TYPE: exports.pinpointer,
                        AUTOFIRE: true,
                      //  SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.drone,
                      //  WAIT_TO_CYCLE: true,     
                    }, }, 
            ],
        };
    exports.class15 = {
        PARENT: [exports.fifteen],
        LABEL: 'Class Fifteen',
        COLOR: 15,
        SHAPE: [[-0.6,0],[-0.6,0.6],[-1,0.6],[-1,-1],[1,-1],[1,-0.6],[-1,-0.6],[-1,-0.4],[1,-0.4],[1,0.6],[0.2,0.6],[0.2,0.4],[0.6,0.4],[0.6,-0.02],[0.2,0],[0.2,0.6],[-0.2,0.6],[-0.2,0]],        
        SIZE: 10,
        VARIES_IN_SIZE: false,
        VALUE: 10000,
        BODY: {
            FOV: 15,
            SPEED: base.SPEED * 0.1,
            ACCELERATION: base.ACCEL * 0.1,
            HEALTH: base.HEALTH * 15,
            SHIELD: base.SHIELD * 4,  
            REGEN: base.REGEN, 
            DAMAGE: base.DAMAGE * 2, 
        },
    };
    exports.class53 = {
        PARENT: [exports.fiftythree],
        LABEL: 'CLASSFIFTYTHREE',
        COLOR: 53,
SHAPE: [[1,-1],[1,-1],[1,-1],[1,0],[0.5,1],[-0.6,1],[-1,0],[-0.4,0.8],[-0.2,0.8],[0,0],[0,0.8],[0.4,0.8],[1,0],[0.7,0],[1,-1],[1,-1],[0.5,0],[-0.7,0],[-1,-1],[-0.5,-0.2],[0.3,0],[0.3,0]],        SIZE: 10,
        VARIES_IN_SIZE: false,
        CONTROLLERS: [],
        VALUE: 530000, 
        BODY: {
            FOV: 53,
            SPEED: base.SPEED * 53,
            ACCELERATION: base.ACCEL * 5,
            HEALTH: base.HEALTH * 0.8,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 1.2, 
        },
    };
    exports.class3 = {
        PARENT: [exports.three],
        LABEL: 'Class Three',
        COLOR: 3,
        SHAPE: [[-1,1],[0.9,1],[0.9,-1],[0.6,-1],[0.6,0.7],[0.2,0.7],[0.2,-1],[-0.1,-1],[-0.1,0.7],[-0.7,0.7],[-0.7,-1],[-1,-1]],
        SIZE: 10,
        VARIES_IN_SIZE: false,
        ACCEPTS_SCORE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 10,
            SPEED: base.SPEED * 5,
            ACCELERATION: base.ACCEL * 1,
            HEALTH: base.HEALTH * 0.3,
            SHIELD: base.SHIELD * 9,  
            REGEN: base.REGEN,
            PENETRATION: base.PENETRATION * 0.3,
        },
    };
    exports.class4 = {
        PARENT: [exports.four],
        LABEL: 'Class Four', 
        COLOR: 4,
        SHAPE: [[-0.2,0.2],[-1.4,0.2],[-1.4,0.6],[1,0.6],[1,0.2],[0.2,0.2],[0.2,-0.2],[1,-0.2],[1,-0.6],[-0.2,-0.6]],
        SIZE: 16,
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 20000, 
        ACCEPTS_SCORE: false, 
        THOSE_WHO_DOZE: true,
        BODY: {
            FOV: 18,
            SPEED: this.SPEED, 
            ACCELERATION: base.ACCEL * 5,
            HEALTH: base.HEALTH * 24,
            SHIELD: base.SHIELD * 16,  
            REGEN: base.REGEN * 5,
            DAMAGE: base.DAMAGE * 4,
        },
    };
    exports.class5 = {
        PARENT: [exports.five],
        LABEL: 'Class Five',
        COLOR: 5,
        SHAPE: [[-0.4,1],[0,1],[0.8,-0.6],[1.4,1],[1.4,-1],[0.6,-1],[-0.2,0.2],[-1.2,-1]],
        SIZE: 8,
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal', 'class5'],
        FACING_TYPE: 'locksFacing',
        VALUE: 5000, 
        ACCEPTS_SCORE: false,
        BODY: {
            FOV: 1.5,
            SPEED: base.SPEED * 0,
            ACCELERATION: base.ACCEL * 0,
            HEALTH: base.HEALTH * 3,
            SHIELD: base.SHIELD * 1,  
            REGEN: base.REGEN,
        },
    };
    exports.class27 = {
        PARENT: [exports.twentyseven],
        LABEL: 'Class Twenty-Seven',
        COLOR: 127,
        SHAPE: [[0.6,-1.6],[1,-1.8],[1,0.6],[-0.8,0.6],[-1,0.2],[0.8,0.4],[0.8,-0.15],[0.2,-0.2],[1,-0.4],[1,-0.8],[0,-0.8],[0,-1.5],[-0.8,-1.6],[-0.4,-0.8],[-1,-0.8],[-1,-1.8],[0.4,-1.8],[0.2,-1],[0.8,-1.2]],
        SIZE: 8,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 2500, 
        ACCEPTS_SCORE: false,
        BODY: {
            FOV: 27,
            SPEED: base.SPEED * 2.7,
            ACCELERATION: base.ACCEL * 27,
            HEALTH: base.HEALTH * 2.7,
            SHIELD: base.SHIELD * 5.4,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.7, 
        },
    };
    exports.class61 = {
        PARENT: [exports.sixtyone],
        LABEL: 'Class Sixty-One',
        COLOR: 61,
        SHAPE: [[-0.77,-0.14],[-1.31,0.001],[0.5,1.09],[-0.01,1.285],[-0.61,1.205],[-1.02,1.01],[-1.3,0.55],[-1.6,-0.6],[0,-0.8],[-0.65,-0.34],[0.605,0.33]],
        SIZE: 8,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'minion'],
        VALUE: 60000, 
        BODY: {
            FOV: 0.9,
            SPEED: base.SPEED * 6,
            ACCELERATION: base.ACCEL * 10,
            HEALTH: base.HEALTH * 6,
            SHIELD: base.SHIELD * 6,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 1, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  25,     13,      0,      0,    0,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.psstf]), //make this instakill
                    TYPE: exports.bullet,
                }, }, 
        ],
    };

    exports.class32 = {
        PARENT: [exports.thirtytwo],
        LABEL: 'Class Thirty-Two',
        COLOR: 32,
        VALUE: 30000,
        SHAPE: [[-0.22,-0.59],[-0.58,-0.39],[-0.987,0.593],[-1.02,-0.57],[-0.007,-0.85],[1,-0.6],[0.99,0.58],[0.573,-0.4],[0.23,-0.59],[0.01,0.62]],
        SIZE: 8,
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 10000, 
        ACCEPTS_SCORE: false,
        BODY: {
            FOV: 32,
            SPEED: base.SPEED * 16,
            ACCELERATION: base.ACCEL * 0.6,
            HEALTH: base.HEALTH * 3.2,
            SHIELD: base.SHIELD * 0.8,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3.2, 
        },
    };
exports.rogueturretbody = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0,
    },
    FACING_TYPE: 'autospin',
    COLOR: 33,
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flankcopy, g.lessreload]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flankcopy, g.lessreload]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flankcopy, g.lessreload]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,      60,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flankcopy, g.lessreload]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flankcopy, g.lessreload]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     300,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flankcopy, g.lessreload]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, },
        ],
};
exports.rogueturretcenter = {
    PARENT: [exports.genericTank],
    LABEL: 'Rogue',
    BODY: {
        FOV: 0,
    },
    COLOR: 35,
    FACING_TYPE: 'autospin2',
    CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [
    ],
    TURRETS: [{ /*          SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     19,      0,      0,     360,  0], 
                    TYPE: exports.rogueturretbody,
                        }, {
                POSITION: [  14,     19,      0,      120,     360,  0], 
                    TYPE: exports.rogueturretbody,
                        }, {
                POSITION: [  14,     19,      0,     240,    360,  0], 
                    TYPE: exports.rogueturretbody,
                        },
              ],
};
    exports.class33 = {
        PARENT: [exports.thirtythree],
        LABEL: 'Class Thirty-Three',
        COLOR: 33,
        VALUE: 30000,
        ACCEPTS_SCORE: false,
        SHAPE: [[-1,-1],[-0.2,-0.5],[0.3,-0.9],[0.3,-0.3],[1,0],[0.3,0.3],[0.3,0.9],[-0.2,0.5],[-1,1],[-1,0.3],[-1.5,0],[-1,-0.3]],        
        SIZE: 33,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'autospin',
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 3,
            SPEED: base.SPEED * 0,
            ACCELERATION: base.ACCEL * 0,
            HEALTH: base.HEALTH * 22,
            SHIELD: base.SHIELD * 11,  
            REGEN: base.REGEN * 3,
        },
        GUNS: [ 
        ],
      TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6,     -2,      2.5,       0,    0,   1, ],  
                    TYPE: exports.number3Y,
                    }, {
                POSITION: [  6,     -2,      -2.5,       0,    0,   1, ],  
                    TYPE: exports.number3Y,
                    }, { 
                POSITION: [  6,     55,      0,       0,    0,   0, ],  
                    TYPE: exports.barrierturret,
                    }, {
                POSITION: [  12,     0,      0,       0,    360,   0, ],  
                    TYPE: exports.rogueturretcenter,
                    }, {
                POSITION: [  3.5,     -15,      0,       0,    360,   1, ],  
                    TYPE: exports.cruiserauto,
                    }, {
                POSITION: [  3.5,     4,      9,       0,    360,   1, ],  
                    TYPE: exports.cruiserauto,
                    }, {
                POSITION: [  3.5,     4,      -9,       0,    360,   1, ],  
                    TYPE: exports.cruiserauto,
                    }, 
                ],
    };
    exports.class34 = {
        PARENT: [exports.thirtyfour],
        LABEL: 'Class Thirty-Four',
        COLOR: 34,
        VALUE: 35000,
        ACCEPTS_SCORE: false,
        SHAPE: 0,        
        SIZE: 15,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'autospin',
        BODY: {
            FOV: 4,
            SPEED: base.SPEED * 2.5,
            ACCELERATION: base.ACCEL * 0.4,
            HEALTH: base.HEALTH * 9,
            SHIELD: base.SHIELD * 4,  
            REGEN: base.REGEN * 1.8,
            DAMAGE: base.DAMAGE * 1.2,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  40,     2,      1,      0,      0,      0,      0,   ], 
                 }, {   
            POSITION: [  40,     2,      1,      0,      0,     120,     0,   ], 
                }, {   
            POSITION: [  40,     2,      1,      0,      0,     240,     0,   ], 
                },
        ],
      TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  8,     0,      3.5,       0,    360,   1, ],  
                    TYPE: exports.number4W,
                    },  {
                POSITION: [  8,     0,      -3.5,       0,    360,   1, ],  
                    TYPE: exports.number3W,
                    }, {
                POSITION: [  25,     45,      0,       0,    0,   1, ],  
                    TYPE: exports.c34_BODY1,
                    }, {
                POSITION: [  25,     45,      0,       120,    0,   1, ],  
                    TYPE: exports.c34_BODY2,
                    }, {
                POSITION: [  25,     45,      0,       240,    360,   1, ],  
                    TYPE: exports.c34_BODY3,
                    },
                ],
    };
exports.lightningstrike = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0,0.2],[0,-0.2],[10,-0.2],[20,-1.5],[30,1.5],[50,-0.5],[55,1],[60,-1.5],[75,0.5],[75,1],[60,-1],[55,1.5],[50,0],[30,2],[20,-1],[10,0.2]],
  BODY: {
        PENETRATION: 3,
        SPEED: 1,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.lightningstrike180 = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0,0.2],[0,-0.2],[-10,-0.2],[-20,-1.5],[-30,1.5],[-50,-0.5],[-55,1],[-60,-1.5],[-75,0.5],[-75,1],[-60,-1],[-55,1.5],[-50,0],[-30,2],[-20,-1],[-10,0.2]],
  BODY: {
        PENETRATION: 3,
        SPEED: 1,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.lightningstrike270 = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0.2,0],[-0.2,0],[-0.2,-10],[-1.5,-20],[1.5,-30],[-0.5,-50],[1,-55],[-1.5,-60],[0.5,-75],[1,-75],[-1,-60],[1.5,-55],[0,-50],[2,-30],[-1,-20],[0.2,-10]],
  BODY: {
        PENETRATION: 3,
        SPEED: 1,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.lightningstrike90 = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0.2,0],[-0.2,0],[-0.2,10],[-1.5,20],[1.5,30],[-0.5,50],[1,55],[-1.5,60],[0.5,75],[1,75],[-1,60],[1.5,55],[0,50],[2,30],[-1,20],[0.2,10]],
  BODY: {
        PENETRATION: 3,
        SPEED: 0.00001,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.lightningstrike45 = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0.2,0.2],[-0.2,-0.2],[9.8,-10],[18.5,-20],[31.5,-30],[49.5,-50],[56,-55],[58.5,-60],[75.5,-75],[76,-75],[59,-60],[56.5,-55],[50,-50],[32,-30],[19,-20],[10.2,-10]],
  BODY: {
        PENETRATION: 3,
        SPEED: 1,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.lightningstrike135 = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0.2,-0.2],[-0.2,0.2],[-10,-9.8],[-20,-18.5],[-30,-31.5],[-50,-49.5],[-55,-56],[-60,-58.5],[-75,-75.5],[-75,-76],[-60,-59],[-55,-56.5],[-50,-50],[-30,-32],[-20,-19],[-10,-10.2]],
  BODY: {
        PENETRATION: 3,
        SPEED: 1,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.lightningstrike225 = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0.2,0.2],[-0.2,-0.2],[-10,9.8],[-20,18.5],[-30,31.5],[-50,49.5],[-55,56],[-60,58.5],[-75,75.5],[-75,76],[-60,59],[-55,56.5],[-50,50],[-30,32],[-20,19],[-10,10.2]],
  BODY: {
        PENETRATION: 3,
        SPEED: 1,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.lightningstrike315 = {
    LABEL: 'Lightning Strike',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
SHAPE: [[0.2,-0.2],[-0.2,0.2],[9.8,10],[18.5,20],[31.5,30],[49.5,50],[56,55],[58.5,60],[75.5,75],[76,75],[59,60],[56.5,55],[50,50],[32,30],[19,20],[10.2,10]],
  BODY: {
        PENETRATION: 3,
        SPEED: 1,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        PUSHABILITY: 1,
    },
    FACING_TYPE: 'nothing',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'repel',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
}; 
exports.turjogrnjtke = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  0,     10,      1,      0,      0,      0,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike, 
                        }, },
    ],
};
    exports.class35 = {
        PARENT: [exports.thirtyfive],
        LABEL: 'Class Thirty-Five',
        COLOR: 35,
        VALUE: 35000,
        ACCEPTS_SCORE: false,
        SHAPE: [[0.6,-0.8],[1,-0.8],[1,0.2],[-0.6,0.2],[-0.4,1.2],[0,1],[0,0.2],[1,0.4],[1,1.4],[0.6,1.4],[0.8,0.6],[0.4,0.6],[0.2,1.4],[-0.6,1.4],[-1,0.2],[-1,-0.8],[-0.6,-0.8],[-0.8,0],[-0.1,-0.1],[0,-0.8],[0.4,-0.8],[0.2,-0.1],[0.8,0]],     
        SIZE: 18,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'locksFacing',
        BODY: {
            FOV: 5,
            SPEED: base.SPEED * 3,
            ACCELERATION: base.ACCEL * 1.5,   
            HEALTH: base.HEALTH * 5,
            SHIELD: base.SHIELD * 5,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 1.5, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  0,     0,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.fake2, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                            TYPE: exports.bullet, 
                        }, }, {
            POSITION: [  0,     15,      1,      0,      0,      45,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike315, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      135,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike315, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      225,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike45, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      315,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike45, 
                        }, }, {
           POSITION: [  0,     15,      1,      0,      0,      0,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike270, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      90,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike270, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      180,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      270,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnnn]),
                            TYPE: exports.lightningstrike, 
                        }, },  {
          POSITION: [  0,     5,      1,      0,      0,      45,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjei]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      135,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      225,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      315,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjei]),
                            TYPE: exports.bullet35, 
                        }, }, {
           POSITION: [  0,     5,      1,      0,      0,      0,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeh]),
                            TYPE: exports.bullet35, 
                        }, }, { 
          POSITION: [  0,     5,      1,      0,      0,      90,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      180,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      270,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, },  {
          POSITION: [  0,     5,      1,      0,      0,      45,      0.31,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      135,      0.31,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      225,      0.31,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      315,      0.31,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
           POSITION: [  0,     5,      1,      0,      0,      0,      0.51,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      90,      0.51,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      180,      0.51,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, }, {
          POSITION: [  0,     5,      1,      0,      0,      270,      0.51,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.zrjeg]),
                            TYPE: exports.bullet35, 
                        }, },  {
          POSITION: [  0,     15,      1,      0,      0,      45,      0.25,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsn]),
                            TYPE: exports.redbullet, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      135,      0.25,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsl]),
                            TYPE: exports.redbullet, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      225,      0.25,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsl]),
                            TYPE: exports.redbullet, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      315,      0.25,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsn]),
                            TYPE: exports.redbullet, 
                        }, }, {
           POSITION: [  0,     15,      1,      0,      0,      0,      0.45,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsm]),
                            TYPE: exports.redbullet, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      90,      0.45,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsl]),
                            TYPE: exports.redbullet, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      180,      0.45,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsl]),
                            TYPE: exports.redbullet, 
                        }, }, {
          POSITION: [  0,     15,      1,      0,      0,      270,      0.45,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rcnno, g.tujsl]),
                            TYPE: exports.redbullet, 
                        }, },  
        ],
    };
    exports.class36 = {
        PARENT: [exports.thirtysix],
        LABEL: 'Class Thirty-Six',
        COLOR: 36,
        VALUE: 409000,
        ACCEPTS_SCORE: false,
        SHAPE: 0,
        SIZE: 25,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'locksFacing',
        BODY: {
            FOV: 360,
            SPEED: base.SPEED * 1,
            ACCELERATION: base.ACCEL * 1.5,   
            HEALTH: base.HEALTH * 6,
            SHIELD: base.SHIELD * 6,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 0.6, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.fucktonofrange]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {  
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.triplerecoil]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, },  
        ],
        TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  3,     4,      4.5,       0,    0,   1, ],  
                    TYPE: exports.whiteball,
                    }, {
                POSITION: [  3,     4,      -4.5,       0,    0,   1, ],  
                    TYPE: exports.whiteball,
                    }, {
                POSITION: [  15,     -1,      0,       0,    0,   1, ],  
                    TYPE: exports.colonthree,
                    },
                ],
    };
     exports.class37 = {
        PARENT: [exports.thirtyseven],
        LABEL: 'Class Thirty-Seven',
        COLOR: 37,
        VALUE: 20000,
        ACCEPTS_SCORE: false,
        SHAPE: [[0.6,-1],[0.6,-1],[1,-0.4],[1,0.2],[1,1],[-0.8,1.2],[-1,1],[0.8,0.8],[0.8,0.4],[0.4,0.3],[1,0.2],[-1,0.2],[-1.2,-0.2],[-0.8,-1],[-0.8,0],[-0.1,0],[0.2,-1],[0.2,-1],[0.2,-0.2],[0.8,0]],
        SIZE: 13,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'locksFacing',
        BODY: {
            FOV: 7,
            SPEED: 0,
            ACCELERATION: 0,   
            HEALTH: base.HEALTH * 7,
            SHIELD: base.SHIELD * 3,  
            REGEN: base.REGEN * 3,
            DAMAGE: base.DAMAGE * 1.5, 
            PENETRATION: 3,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [ 0,      0,     1,      0,     0,     115,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.triplerecoil, g.halfreload, g.lessreload, g.fake999]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  0,  0,   1,      0,     0,     235,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.triplerecoil, g.triplerecoil, g.halfreload, g.lessreload, g.fake999]),
                            TYPE: exports.thr,
                            LABEL: gunCalcNames.thruster,
                        }, }, 
        ],
    };
    exports.class38 = {
        PARENT: [exports.thirtyeight],
        LABEL: 'Bog 38',
        COLOR: 138,
        VALUE: 30000,
        ACCEPTS_SCORE: false,
        SHAPE: [[0.7,-0.8],[1,-0.8],[1,1],[0.6,1],[0.2,0.8],[0.6,0.2],[0.2,0.2],[0.2,1],[-0.6,1],[-0.6,0.8],[-0.2,0.8],[-0.2,0.2],[-0.6,0.2],[-0.6,1],[-1,1],[-1,-0.8],[-0.7,-0.8],[-0.7,-0.1],[-0.1,-0.1],[-0.1,-0.8],[0.2,-0.8],[0.2,-0.1],[0.7,-0.1]],
        SIZE: 20,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'locksFacing',
        BODY: {
            FOV: 4,
            SPEED: 6,
            ACCELERATION: 2.8,   
            HEALTH: base.HEALTH * 8,
            SHIELD: base.SHIELD * 5,  
            REGEN: base.REGEN * 2,
            DAMAGE: base.DAMAGE * 2, 
            PENETRATION: 3,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [ 0,      0,     1,      0,     0,     90,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.halfreload, g.lessreload, g.fake999]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  0,  0,   1,      0,     0,     270,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.halfreload, g.lessreload, g.fake999]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
              POSITION: [ 0,      0,     1,      0,     0,     90,    0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.halfreload, g.lessreload, g.fake999]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                    POSITION: [  0,  0,   1,      0,     0,     270,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.tonsmorrecoil, g.tonsmorrecoil, g.halfreload, g.lessreload, g.fake999]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {
                POSITION: [ 0,      8,     1,      0,     0,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.BOG]),
                            TYPE: exports.bulletbog,
                        }, }, {
                    POSITION: [  0,  8,   1,      0,     0,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.BOG]),
                            TYPE: exports.bulletbog,
                        }, }, {
              POSITION: [ 0,      8,     1,      0,     0,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.lessreload, g.BOG]),
                            TYPE: exports.bulletgrowbog,
                        }, }, {
                    POSITION: [  0,  8,   1,      0,     0,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.faster, g.SOG]),
                            TYPE: exports.bulletbog,
                        }, }, 
        ],
    };
    exports.class39 = {
        PARENT: [exports.thirtynine],
        LABEL: 'Yttrium Thirty-Nine',
        COLOR: 39,
        VALUE: 30000,
        ACCEPTS_SCORE: false,
        SHAPE: [[0.8,-0.43],[1,-0.8],[1,1],[0.6,1],[0.6,0.8],[0.8,0.2],[0.2,0.2],[0.2,0.8],[0.6,0.8],[0.6,1],[-0.2,1],[-0.2,0.2],[-0.8,0.4],[-0.6,1],[-1,1],[-1,-0.8],[-0.8,-0.4],[-0.7,-0.1],[-0.1,-0.1],[0,-0.4],[0.2,-0.8],[0.2,-0.1],[0.7,-0.1]],       
        SIZE: 25,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'locksFacing',
        BODY: {
            FOV: 7,
            SPEED: base.SPEED * 0.5,
            ACCELERATION: base.ACCEL * 0.8,   
            HEALTH: base.HEALTH * 9,
            SHIELD: base.SHIELD * 3,  
            REGEN: base.REGEN * 3,
            DAMAGE: base.DAMAGE * 1.5, 
            PENETRATION: 3,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [ 6,      10,     1.4,      15,     11,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.swwww]),
                            TYPE: exports.iCameISawISpiked,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
              POSITION: [  6,  10,   1.4,      15,     -8,     0,    0,  ], 
                         PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.swwww]),
                            TYPE: exports.iCameISawISpiked,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                        }, }, {
              POSITION: [  0,  10,   1.4,      15,     -8,     0,    0,  ], 
                         PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.swwwx]),
                            TYPE: exports.yttrium,
                        }, }, {
              POSITION: [  0,  10,   1.4,      15,     11,     0,    0,  ], 
                         PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.lessreload, g.swwwy]),
                            TYPE: exports.yttrium,
                        }, }, {
              POSITION: [ 20,      10,     1,      -5,     11,     0,    0,  ], 
                        }, {
              POSITION: [  20,  10,   1,      -5,     -8,     0,    0,  ], 
                         }, 
        ],
    };
    exports.class40 = {
        PARENT: [exports.fourty],
        LABEL: 'Class Fourty',
        COLOR: 40,
        VALUE: 40000,
        ACCEPTS_SCORE: false,
        SHAPE: [[0.2,1],[0,0.6],[0,-0.6],[0.2,-1],[-1,-1],[-1,-0.15],[-1,0],[-1,0.8],[-0.8,0.8],[-0.5,0],[-1,0],[-1,-0.2],[-0.2,-0.2],[-0.2,0],[-0.6,1],[-1.2,1],[-1.2,0],[-1.4,0],[-1.4,-0.2],[-1.2,-0.2],[-1.2,-1],[0.2,-1],[0.6,-0.6],[0.2,-0.6],[0.2,0.6],[0.6,0.6],[0.6,-0.6],[0.2,-1],[0.8,-1],[1,-0.6],[1,0.6],[0.8,1]],
        SIZE: 32,                                                                                                                                                                                                                      
        VARIES_IN_SIZE: false,
        FACING_TYPE: 'locksFacing',
        BODY: {
            FOV: 8,
            SPEED: base.SPEED * 3,
            ACCELERATION: base.ACCEL * 0.2,   
            HEALTH: base.HEALTH * 10, 
            SHIELD: base.SHIELD * 20,  
            REGEN: base.REGEN * 1.25,
            DAMAGE: base.DAMAGE * 1.05, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [ 6,      6,    0.001,      10,     0,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.ppppp]),
                            TYPE: exports.bullet,
                        }, }, {
              POSITION: [ 6,      6,    0.001,      10,     4,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.ppppp]),
                            TYPE: exports.bullet,
                        }, }, {
              POSITION: [ 6,      6,    0.001,      10,     -4,     0,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.ppppp]),
                            TYPE: exports.bullet,
                        }, }, {
              POSITION: [ 10,      6,    0.001,      10,     0,     0,    0,  ], 
                         }, {
              POSITION: [ 10,      6,    0.001,      10,     4,     0,    0,  ], 
                         }, {
              POSITION: [ 10,      6,    0.001,      10,     -4,     0,    0,  ], 
                         }, 
             
        ],
    };
    exports.class64def = {
        PARENT: [exports.sixtyfour],
        LABEL: 'Class Sixty-Four',
        COLOR: 64,
        SHAPE: [[-1,-1],[1,-1],[1,1],[-1,1],[-1,0.4],[0.4,0.4],[0.4,-0.4],[-0.4,-0.4],[-0.4,0.4],[-1,0.4]],
        SIZE: 9,
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 6464, 
        BODY: {
            FOV: 20,
            SPEED: base.SPEED * 11,
            ACCELERATION: base.ACCEL * 1.7, 
            HEALTH: base.HEALTH * 1.64,
            SHIELD: base.SHIELD * 0.64,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 64, 
        },
    };
    exports.class46 = {
        PARENT: [exports.fourtysix],
        LABEL: 'Class Fourty-Six',
        COLOR: 46,
        SHAPE: [[1.4,0],[2.6,0],[2.6,-0.4],[2.2,-0.4],[2.2,0],[1.8,0],[1.8,-1.2],[1.4,-1.2],[1.4,-1.6],[1,-1.6],[1,-1.6],[1,-1.2],[1.4,-1.2],[1.4,-0.8],[1.8,-0.8],[1.8,0.8],[2.2,0.8],[2.2,1.2],[1.8,1.2],[1.8,1.6],[2.2,1.6],[2.2,2],[1.8,2],[1.8,0],[1.8,0.4],[-0.6,0.4],[-0.6,1.2],[-0.6,1.6],[-1,1.6],[-1,1.2],[0.2,1.2],[0.2,1.6],[-0.2,1.6],[-0.2,1.2],[-0.2,0.4],[0.2,0.4],[0.2,0.8],[-1,0.8],[-1,0.4],[1.4,0.4]],        SIZE: 9,
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 46000, 
        BODY: {
            FOV: 7,
            SPEED: base.SPEED * 2,
            ACCELERATION: base.ACCEL * 2.5, 
            HEALTH: base.HEALTH * 3,
            SHIELD: base.SHIELD * 1.5,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 46, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   0,    4,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm, g.fast, g.fast, g.fast, g.fast, g.fast, g.halfreload]),
                        TYPE: exports.swarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,               
                    }, }, 
            ],
    }; 
    
     exports.class6 = {
        PARENT: [exports.six],
        LABEL: 'Class Six',
        COLOR: 6,
SHAPE: [[0.7,0.3],[0.7,-0.5],[0.2,-0.5],[0.2,0],[-0.1,0],[-0.1,-0.5],[-0.7,-0.5],[-0.7,0],[0.2,0],[0.2,0.3],[-1,0.3],[-1,-0.8],[1,-0.8],[1,0.3]],
        VARIES_IN_SIZE: false,
        VALUE: 10000, 
         ACCEPTS_SCORE: false,
        BODY: {
            FOV: 6,
            SPEED: base.SPEED * 3,
            ACCELERATION: base.ACCEL * 0.8, 
            HEALTH: base.HEALTH * 6,
            SHIELD: base.SHIELD * 0.2,   
            REGEN: base.REGEN * 2,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   20,    8,    1,     0,      -2,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.triplerecoil, g.fast, g.fast, g.lessreload, g.R6]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
    }; 
    exports.class8 = {
        PARENT: [exports.eight],
        LABEL: 'Class Eight',
        COLOR: 8,
        TEAM: -102,
        SIZE: 18,
        DANGER: 80,
SHAPE: [[0.7,-0.3],[0.7,0.5],[0.2,0.5],[0.2,0],[-0.1,0],[-0.1,0.5],[-0.7,0.5],[-0.7,0],[0.7,0],[0.7,-0.3],[-1,-0.3],[-1,0.8],[1,0.8],[1,-0.3]],
        VARIES_IN_SIZE: true,
        VALUE: 1000, 
        BODY: {
            FOV: 8,
            SPEED: base.SPEED * 3.8,
            ACCELERATION: base.ACCEL * 2, 
            HEALTH: base.HEALTH * 8,
            SHIELD: base.SHIELD * 4,   
            REGEN: base.REGEN * 4,
            DAMAGE: base.DAMAGE * 2,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                 POSITION: [  4,      4,      1,     11,     -2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      5,      1,     11,      2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      6,      1,     13,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  1,      5,      1,     12,     -1.5,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  1,      4,      1,     10,      3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {  
                    POSITION: [  4,      3,      1,     11,     -3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      3,      1,     11,      3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      4,      1,     13,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  1,      4,      1,     12,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      4,      1,     11,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.casing,
                        }, }, {                
                    POSITION: [  1,      3,      1,     13,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      3,      1,     13,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,      2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,     -2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.zzzzi]),
                            TYPE: exports.casing,
                        }, }, {
                   POSITION: [  13.5,     7.5,    1,    8,       2.1,      0,      0,   ], },
                          {
                    POSITION: [ 12,     9,      1,     8,       2.1,      0,      0,   ], 
                        PROPERTIES: { 
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake, g.zzzzi]),
                            TYPE: exports.bullet,
                        }, }, {
                      POSITION: [  4,     9,    -1.3,    10,       2.1,      0,      0,   ], 
                        }, 
            ],
    }; 
    exports.class9 = { 
        PARENT: [exports.nine],
        LABEL: '𝐂𝐋𝐀𝐒𝐒 𝐍𝐈𝐍𝐄', 
        COLOR: 9,
        FACING_TYPE: 'chaosspin',
        SIZE: 15,
        ACCEPTS_SCORE: false,
        SHAPE: [[-0.697,-0.3],[-0.7,0.5],[-0.2,0.5],[-0.2,0],[0.1,0],[0.1,0.5],[0.7,0.5],[0.7,0],[-0.2,0],[-0.2,-0.3],[1,-0.3],[1,0.8],[-1,0.8],[-1,-0.3]],
        VARIES_IN_SIZE: false,
        VALUE: 1000000, 
        BODY: {
            FOV: 9, 
            SPEED: base.SPEED * 4,
            ACCELERATION: base.ACCEL * 0.9, 
            HEALTH: base.HEALTH * 5,
            SHIELD: base.SHIELD * 2,   
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   1,    2.5,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.weak, g.doublereload, g.B9]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [   1,    2.5,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EX9, g.halfreload, g.halfreload]),
                        TYPE: exports.bulletgrow,
                        AUTOFIRE: true,
                    }, }, 
            ],
    }; 
exports.tenturret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0,
    },
    COLOR: 65535,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   0,    2,    1,     5,      0,      180,      0.2,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.T, g.tonsmorrecoil, g.triplerecoil]),
                        TYPE: exports.shockwave,
                        AUTOFIRE: true,
                    }, }, 
            ],
    }; 
    exports.class10 = { 
        PARENT: [exports.ten],
        LABEL: 'Class Ten', 
        COLOR: 10,
        SIZE: 20,
        ACCEPTS_SCORE: false,
        SHAPE: [[1,0],[1,-0.8],[-1,-0.8],[-1,-0.4],[0.6,-0.4],[0.6,0],[-0.4,-0.2],[-1.2,0.8],[-0.4,1.4],[0.8,1.4],[1.2,0.8],[0.2,1.2],[-0.8,0.8],[-0.4,0.2],[0.2,0.2],[1.2,0.8]],        VARIES_IN_SIZE: false,
        VALUE: 10000, 
        FACING_TYPE: 'autospin',
        BODY: {
            FOV: 10, 
            SPEED: base.SPEED * 0.8,
            ACCELERATION: base.ACCEL * 0.4, 
            HEALTH: base.HEALTH * 10,
            SHIELD: base.SHIELD * 10, 
            REGEN: base.REGEN * 5,
        },
       TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  0.1,     5,      0,       0,    0,   0, ],  
                    TYPE: exports.tenturret,
                    }, 
                 ],
    };
    exports.class11 = { 
        PARENT: [exports.eleven], 
        LABEL: 'Class Eleven', 
        COLOR: 11,
        SIZE: 20,
        ACCEPTS_SCORE: false,
        SHAPE: [[-0.2,-0.6],[-0.2,0.6],[0.2,0.6],[0.2,-0.6]],
        FACING_TYPE: 'autospin',
        BODY: {
            FOV: 11, 
            SPEED: base.SPEED * 0.8,
            ACCELERATION: base.ACCEL * 1.6, 
            HEALTH: base.HEALTH * 5,
            SHIELD: base.SHIELD * 8, 
            REGEN: base.REGEN * 3,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   5,    3,    1,     0,      -3,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    3,    1,     0,      3,      0,      0.5,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    3,    1,     0,      -3,      180,      0.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    3,    1,     0,      3,      180,      0.75,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.faster, g.lilspray]),
                        TYPE: exports.bullet,
                    }, }, 
            ], 
      TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  19,     10,      0,       0,    0,   1, ],  
                    TYPE: exports.eleventhing,
                    }, {
                POSITION: [  19,     -10,      0,       0,    0,   1, ],  
                    TYPE: exports.eleventhing,
                    },
                ],
    }; 
    exports.class12 = { 
        PARENT: [exports.twelve],
        LABEL: 'Class Twelve', 
        COLOR: 12,
        SIZE: 50,
        SHAPE: -12,
        FACING_TYPE: 'locksFacing',
        VALUE: 100000,
        ACCEPTS_SCORE: false,
        BODY: {
            FOV: 120, 
            SPEED: base.SPEED * 0.5,
            ACCELERATION: base.ACCEL * 0.8, 
            HEALTH: base.HEALTH * 28,
            SHIELD: base.SHIELD * 12, 
            REGEN: base.REGEN * 0.25, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  24,    8,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lilspray, g.lilspray, g.lilspray, g.halfreload, g.halfreload]),
                        TYPE: exports.block,
                        STAT_CALCULATOR: gunCalcNames.trap,
                    }, }, {
                POSITION: [  22,    8,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lilspray, g.lilspray, g.lilspray, g.halfreload, g.halfreload]),
                        TYPE: exports.block,
                        STAT_CALCULATOR: gunCalcNames.trap,
                    }, }, {
                POSITION: [  20,    8,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lilspray, g.lilspray, g.lilspray, g.halfreload, g.halfreload]),
                        TYPE: exports.block,
                        STAT_CALCULATOR: gunCalcNames.trap,
                    }, }, {
                POSITION: [  18,    8,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lilspray, g.lilspray, g.lilspray, g.halfreload, g.halfreload]),
                        TYPE: exports.block,
                        STAT_CALCULATOR: gunCalcNames.trap,
                    }, }, {
                POSITION: [  16,    8,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lilspray, g.lilspray, g.lilspray, g.halfreload, g.halfreload]),
                        TYPE: exports.block,
                        STAT_CALCULATOR: gunCalcNames.trap,
                    }, }, {
                POSITION: [  14,    8,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lilspray, g.lilspray, g.lilspray, g.halfreload, g.halfreload]),
                        TYPE: exports.block,
                        STAT_CALCULATOR: gunCalcNames.trap,
                    }, }, 
            ],
    }; 
    exports.class13 = { 
        PARENT: [exports.thirteen],
        LABEL: 'Ċ̷̫̖͚̰͎̍͑L̶̢̦͒Ā̷̛͓̪͇̄́́̊̅̄̕͝SS̸̮̳̒̅͗̔̿̓T̸͉̟̝̯̾̅͌H̷̛̝̗̣̦͚͕͖̳͓̜̑̋̑͊̚͘I̶̭̞̝̥̾̕Ṛ̸̛̦̿́͌̃́͌͠T̴̡̺͖̱͙̥̝͍̈́̊̑͜͠ͅȨ̸̲̪̟̞̄̐̊̉̆̿̇͛E̵̛̼̭̗̝̭̟͖̽̀͛̊̎̅̏͝Ň̵̛͔̥̲̂͌̂̇̄͐̚̕', 
        COLOR: 13,
        SIZE: 15,
        SHAPE: [[-1,0.5],[-0.8,0.1],[-0.8,0.8],[-0.1,0.6],[0,0.1],[0.1,0.6],[0.8,0.8],[1,0],[1,-0.7],[0.8,-0.2],[-1,-0.1],[-1,0],[1,0],[1,1],[0,0.7],[-1,1]],
        FACING_TYPE: 'locksFacing',
        VALUE: 13000,
        ACCEPTS_SCORE: false,
        BODY: {
            FOV: 130, 
            SPEED: base.SPEED * 4.8,
            ACCELERATION: base.ACCEL * 2, 
            HEALTH: base.HEALTH * 13,
            SHIELD: base.SHIELD * 13, 
            REGEN: base.REGEN * 1.3, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  0,    6,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.B13]),
                        TYPE: exports.swarmzalgo,
                        STAT_CALCULATOR: gunCalcNames.swarm,
                    }, }, {
                POSITION: [  0,    6,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.C13]),
                        TYPE: exports.bulletblack,
                    }, }, {
                POSITION: [  0,    4,    1,     0,      0,      0,      0.5,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.C13]),
                        TYPE: exports.bulletblack,
                    }, }, 
            ],
    }; 
    exports.class14 = { 
        PARENT: [exports.fourteen],
        LABEL: 'Class Fourteen', 
        COLOR: 14,
        SIZE: 20,
        SHAPE: [[-1,0.6],[0.6,0.6],[-1,0.2],[-1,0],[0.6,0],[-1,-0.2],[0.6,-0.2],[-1,-1],[1,-0.5],[0.8,0.4],[1,1],[-1,1]],
        FACING_TYPE: 'locksFacing',
        VALUE: 10000,
        ACCEPTS_SCORE: false,
        BODY: {
            FOV: 3, 
            SPEED: base.SPEED * 0,
            ACCELERATION: base.ACCEL * 0, 
            HEALTH: base.HEALTH * 14,
            SHIELD: base.SHIELD * 7, 
            REGEN: base.REGEN * 2.8, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  0,    0,    1,     0,      4,      180,      0.15,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake3, g.tonsmorrecoil, g.triplerecoil, g.halfreload, g.halfreload, g.lessreload]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  0,    0,    1,     0,      -4,      180,      0.15,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake3, g.tonsmorrecoil, g.triplerecoil, g.halfreload, g.halfreload, g.lessreload]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  0,    0,    1,     0,      0,      180,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake3, g.triplerecoil, g.triplerecoil, g.halfreload, g.halfreload, g.lessreload]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
    }; 
    exports.class8InfightingTestModelA = {
        PARENT: [exports.eight],
        LABEL: 'Class Eight',
        COLOR: 8,
        TEAM: -103,
        SIZE: 18,
        DANGER: 80,
SHAPE: [[0.7,-0.3],[0.7,0.5],[0.2,0.5],[0.2,0],[-0.1,0],[-0.1,0.5],[-0.7,0.5],[-0.7,0],[0.7,0],[0.7,-0.3],[-1,-0.3],[-1,0.8],[1,0.8],[1,-0.3]],
        VARIES_IN_SIZE: false,
        VALUE: 888,   
        ACCEPTS_SCORE: false,
        BODY: {
            FOV: 8,
            SPEED: base.SPEED * 5, 
            ACCELERATION: base.ACCEL * 2, 
            HEALTH: base.HEALTH * 8,
            SHIELD: base.SHIELD * 4,   
            REGEN: base.REGEN * 4,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   17,    10,    1,     0,      2,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.fast, g.fast]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
    }; 
    exports.class8InfightingTestModelB = {
        PARENT: [exports.eight],
        LABEL: 'Class Eight',
        COLOR: 8,
        TEAM: -104,
        SIZE: 18,
        DANGER: 80,
SHAPE: [[0.7,-0.3],[0.7,0.5],[0.2,0.5],[0.2,0],[-0.1,0],[-0.1,0.5],[-0.7,0.5],[-0.7,0],[0.7,0],[0.7,-0.3],[-1,-0.3],[-1,0.8],[1,0.8],[1,-0.3]],
        VARIES_IN_SIZE: false,
        VALUE: 888, 
        BODY: {
            FOV: 8,
            SPEED: base.SPEED * 5,
            ACCELERATION: base.ACCEL * 2, 
            HEALTH: base.HEALTH * 8,
            SHIELD: base.SHIELD * 4,   
            REGEN: base.REGEN * 4,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   17,    10,    1,     0,      2,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.fast, g.fast]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
    }; 
    exports.class8InfightingTestModelC = {
        PARENT: [exports.eight],
        LABEL: 'Class Eight',
        COLOR: 8,
        TEAM: -105,
        SIZE: 18,
        DANGER: 80,
SHAPE: [[0.7,-0.3],[0.7,0.5],[0.2,0.5],[0.2,0],[-0.1,0],[-0.1,0.5],[-0.7,0.5],[-0.7,0],[0.7,0],[0.7,-0.3],[-1,-0.3],[-1,0.8],[1,0.8],[1,-0.3]],
        VARIES_IN_SIZE: false,
        VALUE: 888, 
        BODY: {
            FOV: 8,
            SPEED: base.SPEED * 5,
            ACCELERATION: base.ACCEL * 2, 
            HEALTH: base.HEALTH * 8,
            SHIELD: base.SHIELD * 4,   
            REGEN: base.REGEN * 4,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   17,    10,    1,     0,      2,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.fast, g.fast]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
    }; 
    exports.class8InfightingTestModelD = {
        PARENT: [exports.eight],
        LABEL: 'Class Eight',
        COLOR: 8,
        TEAM: -106,
        SIZE: 18,
        DANGER: 80,
SHAPE: [[0.7,-0.3],[0.7,0.5],[0.2,0.5],[0.2,0],[-0.1,0],[-0.1,0.5],[-0.7,0.5],[-0.7,0],[0.7,0],[0.7,-0.3],[-1,-0.3],[-1,0.8],[1,0.8],[1,-0.3]],
        VARIES_IN_SIZE: false,
        VALUE: 888, 
        BODY: {
            FOV: 8,
            SPEED: base.SPEED * 5,
            ACCELERATION: base.ACCEL * 2, 
            HEALTH: base.HEALTH * 8,
            SHIELD: base.SHIELD * 4,   
            REGEN: base.REGEN * 4,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   17,    10,    1,     0,      2,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.fast, g.fast]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
    }; 
    exports.class7 = {
        PARENT: [exports.seven],
        LABEL: 'Rhythm Seven', //!!!!
        COLOR: 7,
    SHAPE: [[0.7,-0.5],[0.4,-0.5],[0.4,-0.8],[1,-0.8],[1,0.2],[-1,0.2],[-1,-0.1],[0.7,-0.1]],
        VARIES_IN_SIZE: false,
        SIZE: 15,
        VALUE: 10000, 
        ACCEPTS_SCORE: false,
        BODY: { 
            FOV: 2.7,
            SPEED: base.SPEED * 9.77,
            ACCELERATION: base.ACCEL * 0.49,  
            HEALTH: base.HEALTH * 5,
            SHIELD: base.SHIELD * 3,    
            REGEN: base.REGEN * 0.7,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   5,    3,    1,     10,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fast, g.fast, g.fast, g.fast, g.fast, g.halfreload, g.knockb7]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    3,    1,     10,      -6,      0,      0.5,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.fast, g.fast, g.fast, g.fast, g.fast, g.knockb7]),
                        TYPE: exports.bullet,
                    }, }, 
            ], 
    }; 
     exports.class58 = { 
        PARENT: [exports.fiftyeight],
        LABEL: 'Class Fifty-Eight',
        COLOR: 58,
SHAPE: [[-2,2],[-3,0],[-2,-2],[0,-3],[2,-2],[3,0],[2,2],[0,3],[0,0]],
       VARIES_IN_SIZE: false,
        SIZE: 11,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 580000, 
        FACING_TYPE: 'autospin3',
        BODY: {
            FOV: 2.58,
            SPEED: base.SPEED * 2,
            ACCELERATION: base.ACCEL * 1.4, 
            HEALTH: base.HEALTH * 5,
            SHIELD: base.SHIELD * 4,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 5.8, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   30,    15,    0.7,     0,      0,      112.5,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload, g.doublereload, g.aaaam]),
                        TYPE: exports.swarmdumb,
                        STAT_CALCULATOR: gunCalcNames.swarm,               
                    }, }, 
            ],
    }; 
    exports.class76 = {
        PARENT: [exports.seventysix],
        LABEL: 'Class Seventy-Six',
        COLOR: 76,
SHAPE: [[-0.75,0.4],[-1,0],[2,0],[2,-1.4],[1.6,-0.4],[-1,0],[2,0],[2,-1.4],[2,0],[2,1.6],[1.4,1.6],[1.8,0.2],[1,0.4],[0.4,1.6],[-1,1],[-1,0],[-0.4,1],[0.6,0.8],[0.2,0.2]],        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 76767, 
        BODY: {
            FOV: 76,
            SPEED: base.SPEED * 7.6,
            ACCELERATION: base.ACCEL * 7.6, 
            HEALTH: base.HEALTH * 0.35,
            SHIELD: base.SHIELD * 0.25,  
            REGEN: base.REGEN * 4,
            DAMAGE: base.DAMAGE * 76, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   0,    10,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   0,    10,    1,     0,      0,      45,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   0,    10,    1,     0,      0,      90,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   0,    10,    1,     0,      0,      135,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   0,    10,    1,     0,      0,      180,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   0,    10,    1,     0,      0,      225,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   0,    10,    1,     0,      0,      270,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   0,    10,    1,     0,      0,      315,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.machgun]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
    };
    exports.class88 = {
        PARENT: [exports.eightyeight],
        LABEL: 'Class Eighty-Eight',
        COLOR: 88,
        SHAPE: [[-1.4,0.2],[-1.4,1.6],[-1.4,0.2],[1.4,0.2],[1,0.6],[1,1.2],[0.4,1.2],[0.4,0.6],[1,0.6],[1.4,0.2],[1.4,-0.2],[-1.4,-0.2],[-1.4,-1.6],[-1,-1.2],[-1,-0.6],[-0.4,-0.6],[-0.4,-1.2],[-1,-1.2],[-1.4,-1.6],[1.4,-1.6],[0.4,-1.2],[0.4,-0.6],[1,-0.6],[1,-1.2],[0.4,-1.2],[1.4,-1.6],[1.4,0.2],[-1.4,0.2],[-1.4,1.6],[-1,1.2],[-1,0.6],[-0.4,0.6],[-0.4,1.2],[-1,1.2],[-1.4,1.6],[1.4,1.6],[1.4,0.2]],        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 88888, 
        SIZE: 14.88888888,
        BODY: {
            FOV: 8.8,
            SPEED: base.SPEED * 2.8,
            ACCELERATION: base.ACCEL * 0.8, 
            HEALTH: base.HEALTH * 3,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 88, 
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   0,    3.5,    1,     0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1.05,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1.1,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1.15,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1.2,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1.3,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, {
                POSITION: [   0,    8,    1,     0,      0,      0,      1.35,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.EE2]),
                        TYPE: exports.bullet,
                        AUTOFIRE: true,               
                    }, }, 
            ],
    };
    exports.class85 = {
        PARENT: [exports.eightyfive],
        LABEL: 'Class Eighty-Five',
        COLOR: 85,
        SHAPE: [[-1,-1],[0.994,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1],[0.17,-0.106],[-0.206,-0.26],[-0.63,0.2],[-1.8,0],[-0.8,-0.4],[-1.72,-0.63]],
        SIZE: 8,
        VARIES_IN_SIZE: false,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 8585, 
        BODY: {
            FOV: 20,
            SPEED: base.SPEED * 20,
            ACCELERATION: base.ACCEL * 3, 
            HEALTH: base.HEALTH * 0.5,
            SHIELD: base.SHIELD * 0.3,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 1.4, 
        },
    };
exports.class64 = {
        PARENT: [exports.class64def],
        FACING_TYPE: 'locksFacing', 
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  0,     5,      0,      0,    0,     0,      1,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.aaaak, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.halfreload, g.tonsmorrecoil, g.tonsmorrecoil]),
                    TYPE: exports.bullet,
                    AUTOFIRE: true,
                }, }, 
        ],
    };
    exports.mmft = {
        PARENT: [exports.greg_dubois_wanna_come_back_he_wanna_come_back_with_a_club_and_attack_he_wanna_take_to_his_guns_and_break_you],
        LABEL: 'Miniscule microscopic flying thing',
        COLOR: 8,
        SHAPE: 3,
        SIZE: 1.5,
        VARIES_IN_SIZE: true,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 3,
        BODY: {
            FOV: 40,
            SPEED: base.SPEED * 10,
            ACCELERATION: base.ACCEL * 5,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 1,  
            REGEN: base.REGEN, 
            DAMAGE: base.DAMAGE * 3,  
        },
    };
    exports.l = {
        PARENT: [exports.i_do_have_a_crush_on_pine_walsh_yes_indeed],
        LABEL: 'S̷̛̗̹̯̱̍̂̔̊͂̊́̍̽̀͛̀̋͑̽̉̅͌͑͋́̈̊̓͜͝Ẅ̷̢̡̼͓͕̳͉̺̮̩̼̘̩̫̳̠̟̥̝̮̼̭̻̰́̅͐̌̐̓͐̀̀̐̉̋͗͘̕͝͝͝͠ͅĂ̵̺̤̠͍̣̹͆̂̉̊̃̎̾̐͂̑̽̏̆͐̔̇̈́̾̕̚̕͜͝R̵̨̨̧͚͎̬̪̼̠̮̠͖̺̰̭̥̬̲͈̠̮̺̽̉̇̓͒̕͘͜͝M̶̨̤͈̀̓̋̽̈́̃͐́̅̂̋̔̇̈̏̐̾̔͗̅̀͋̏̔͋̃̚͝͝ ̵̛̳̜̖͐̆̂̀̓̅̏̓̿̈́̐̒͂̎̓͌͌͑͝T̶̡̘̭̰͙̙̪̬͚͓̜̖̬̩͌̊̈́͛͜H̵̢̢̝̟̟̹̣̙̽̔I̸̪̖̺̾͑N̷͇͚̪̟̼̠͎̫̈́̈́̒͗͂͜ͅG̶̡̧̢̛̛͕͓̬̭͚̥͔͚̯̻̱͉̝̹̘̣̩̪͛̿͛̄̅̒̈́̃̈́̾͒̐̏͛͒͒͆̃͗̐͊̎̎̈̽͝͝ͅ',
        COLOR: 36,
        SHAPE: 3,
        SIZE: 1,
        VARIES_IN_SIZE: true,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 30000000000,
        BODY: {
            FOV: 40,
            SPEED: base.SPEED * 10,
            ACCELERATION: base.ACCEL * 5,
            HEALTH: base.HEALTH * 0.1,
            SHIELD: base.SHIELD * 0.1,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 20, 
        },
    };
    exports.elita2 = {
        PARENT: [exports.minibossevt],
        LABEL: 'E-GIGA',
        COLOR: 14,
        SHAPE: 3,
        SIZE: 20,
        VARIES_IN_SIZE: true,
        VALUE: 150000,
        BODY: {
            FOV: 300,
            SPEED: base.SPEED * 0.25,
            HEALTH: base.HEALTH * 1.5,
            SHIELD: base.SHIELD * 1.25,  
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5, 
        }, 
    };
exports.class20 = {
        PARENT: [exports.twenty],
        LABEL: 'Class Twenty',
        COLOR: 20,
        SHAPE: [[0,0.2],[0.4,0.2],[0.8,0],[0.8,-0.6],[0.6,-0.8],[0.4,-0.8],[0.6,-0.2],[0.4,0],[0.2,0],[-0.4,-0.8],[-0.8,-0.8],[-0.8,0.2],[-0.6,0.2],[-0.8,0.4],[-0.8,0.8],[-0.6,1],[0.8,1],[1,0.8],[1,0.4],[0.8,0.2],[0.8,0.8],[-0.6,0.8],[-0.6,0.4],[0.8,0.4],[0.8,0.2],[-0.6,0.2],[-0.6,-0.6]],        SIZE: 30,
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        VALUE: 20000,
        BODY: {
            FOV: 20,
            SPEED: base.SPEED * 2,
            ACCELERATION: base.ACCEL * 2,
            HEALTH: base.HEALTH * 10,
            SHIELD: base.SHIELD * 20,  
            REGEN: base.REGEN * 5, 
        },
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  10,     5,      0,      0,    0,     45,      0,   ], 
                PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.aaaan, g.slow, g.slow, g.slow, g.slow]),
                            TYPE: exports.page2two2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
            POSITION: [  10,     5,      0,      0,    0,     135,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.aaaan, g.slow, g.slow, g.slow, g.slow]),
                            TYPE: exports.page2two2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                }, }, {
            POSITION: [  10,     5,      0,      0,    0,     225,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.aaaan, g.slow, g.slow, g.slow, g.slow]),
                            TYPE: exports.page2two2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                }, }, {
            POSITION: [  10,     5,      0,      0,    0,     315,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.aaaan, g.slow, g.slow, g.slow, g.slow]),
                            TYPE: exports.page2two2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                }, }, 
        ],
    };
exports.class21 = {
        PARENT: [exports.twentyone],
        LABEL: 'Class Twenty-One',
        COLOR: 21,
        SIZE: 21,
        VALUE: 20000,
        ACCEPTS_SCORE: false,
        SHAPE: [[0,0.2],[0.4,0.2],[0.8,0],[0.8,-0.6],[0.6,-0.8],[0.4,-0.8],[0.6,-0.2],[0.4,0],[0.2,0],[-0.4,-0.8],[-0.8,-0.8],[-0.8,0.2],[-0.6,0.2],[-0.6,0.8],[-0.6,1],[0.8,1],[1,0.8],[1,0.6],[0.8,0.4],[0.8,0.8],[-0.6,0.8],[-0.6,-0.6]],        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        BODY: {
            FOV: 2,
            SPEED: base.SPEED * 3.5,
            ACCELERATION: base.ACCEL * 1.5,
            HEALTH: base.HEALTH * 21,
            SHIELD: base.SHIELD * 10.5,  
            REGEN: base.REGEN * 6, 
            DAMAGE: base.DAMAGE * 0.5,  
        },
    MAX_CHILDREN: 21,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     8,    1.2,     8,      0,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   6,     8,    1.2,     8,      0,     45,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     8,    1.2,     8,      0,     90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   6,     8,    1.2,     8,      0,      135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
           POSITION: [   6,     8,    1.2,     8,      0,     180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   6,     8,    1.2,     8,      0,     225,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     8,    1.2,     8,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   6,     8,    1.2,     8,      0,      315,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.D21]),
                            TYPE: exports.dronefast,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, },
        ],
    };
        exports.elite_destroyer = {
            PARENT: [exports.elita],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    5,    16,     1,      6,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                        TYPE: exports.bullet,
                        LABEL: 'Devastator',
                    }, }, {
                POSITION: [    5,    16,     1,      6,      0,      60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                        TYPE: exports.bullet,
                        LABEL: 'Devastator',
                    }, }, {
                POSITION: [    5,    16,     1,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                        TYPE: exports.bullet,
                        LABEL: 'Devastator',
                    }, },
            ],
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     0,      0,     180,    360,   0, ], 
                    TYPE: [exports.crasherSpawner]
                    }, {
                POSITION: [  11,     0,      0,      60,    360,   0, ],  
                    TYPE: [exports.crasherSpawner]
                    }, {
                POSITION: [  11,     0,      0,     -60,    360,   0, ],  
                    TYPE: [exports.crasherSpawner]
                    }, {
                POSITION: [  11,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5, }]
                    },
            ],
        };
        exports.elite_gunner = {
            PARENT: [exports.elita],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  14,    16,      1,      0,      0,     180,     0,   ],
                    }, {
                POSITION: [   4,    16,     1.5,    14,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                        TYPE: [exports.pillbox, { INDEPENDENT: true, }],
                    }, }, {                
                POSITION: [   6,    14,     -2,      2,      0,      60,     0,   ],
                    }, {                
                POSITION: [   6,    14,     -2,      2,      0,     300,     0,   ],
                    }
            ],
            AI: { NO_LEAD: false, },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     8,      0,     60,     180,   0, ], 
                    TYPE: [exports.auto4gun],
                    }, {
                POSITION: [  14,     8,      0,     300,    180,   0, ],
                    TYPE: [exports.auto4gun],
            }],
        };
        exports.elite_sprayer = { 
            PARENT: [exports.elita],
            AI: { NO_LEAD: false, },
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     6,      0,     180,     190, 0], 
                    TYPE: [exports.spray, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     6,      0,      60,    190, 0], 
                    TYPE: [exports.spray, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     6,      0,     -60,    190, 0], 
                    TYPE: [exports.spray, { COLOR: 5, }],
                        },
            ],
        };
exports.gamer = {
        PARENT: [exports.miniboss],
        FACING_TYPE: 'locksFacing',
        LABEL: 'THE GAMER',
        COLOR: 203,
        SHAPE: [[0.6,-0.8],[0,-0.8],[-0.2,-0.6],[-0.2,0.6],[0,0.8],[0.6,0.8],[0.8,1.4],[-1,1.4],[-1.2,0.8],[-1,0.8],[-1.2,0.2],[-1.2,0],[-1,-0.8],[-1.2,-0.8],[-1,-1.4],[0.75,-1.4]],
        SIZE: 45,
        VARIES_IN_SIZE: false,                                                                                                                                                                                                  // a
        VALUE: 2750000000000000,
        BODY: {
            FOV: 10, 
            SPEED: base.SPEED * 1.3,
            HEALTH: base.HEALTH * 3,
            SHIELD: base.SHIELD * 4,  
            REGEN: base.REGEN, 
            DAMAGE: base.DAMAGE * 3, 
        },
    };
exports.gametime = {
            PARENT: [exports.gamer],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    12,    3.5,     1,      1,      11.5,     0,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.fast, g.fast]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [    12,    3.5,     1,      1,      -11.5,      0,     0.5,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.fast, g.fast]),
                        TYPE: exports.bullet,
                    }, }, 
                   ], 
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     -1,      6,       0,    180,   1, ],  
                    TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 203, }] 
                    }, {
                POSITION: [  5,     -1,      -6,       0,    180,   1, ],  
                    TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 203, }] 
                    }, {
                POSITION: [  4,     -7,      0,       0,    360,   1, ],  
                    TYPE: [exports.stRangerdanger, { INDEPENDENT: false, COLOR: 201, }] 
                    }, {
                POSITION: [  4.5,     -7.25,      9,       0,    360,   1, ],  
                    TYPE: [exports.quadtrapper, { INDEPENDENT: false, COLOR: 202, }] 
                    }, {  
                POSITION: [  2,     -9,      -9.75,       0,    360,   1, ],  
                    TYPE: exports.controllerbutton1,  
                    }, {
                POSITION: [  2,     -4,      -9.75,       0,    360,   1, ],  
                    TYPE: exports.controllerbutton2,  
                    }, {
                POSITION: [  2,     -6.5,      -12.25,       0,    360,   1, ],  
                    TYPE: exports.controllerbutton3,  
                    }, {
                POSITION: [  2,     -6.5,      -7.25,       0,    360,   1, ],  
                    TYPE: exports.controllerbutton4,  
                    },
            ],
        };
    exports.palisade = (() => {
        let props = {
            SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
            MAX_CHILDREN: 1,
            SYNCS_SKILLS: true,   
            WAIT_TO_CYCLE: true,
        };
        return {
            PARENT: [exports.miniboss],
            LABEL: 'Rogue Palisade',
            COLOR: 17,
            SHAPE: 6,
            SIZE: 28,
            VALUE: 500000,
            BODY: {
                FOV: 1.3,
                SPEED: base.SPEED * 0.1,
                HEALTH: base.HEALTH * 2,
                SHIELD: base.SHIELD * 2,
                REGEN: base.REGEN,
                DAMAGE: base.DAMAGE * 3,
            },
            GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   4,      6,    -1.6,     8,      0,      0,      0,   ], 
                    PROPERTIES: props, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     60,      0,   ], 
                    PROPERTIES: props, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     120,     0,   ], 
                    PROPERTIES: props, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
                        TYPE: exports.minion,
                        STAT_CALCULATOR: gunCalcNames.drone,                        
                        AUTOFIRE: true,
                        MAX_CHILDREN: 1,
                        SYNCS_SKILLS: true, 
                        WAIT_TO_CYCLE: true,  
                    }, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     240,     0,   ], 
                    PROPERTIES: props, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     300,     0,   ], 
                    PROPERTIES: props, },
            ],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [   5,    10,      0,      30,    110, 0], 
                    TYPE: exports.trapTurret,
                        }, {
                POSITION: [   5,    10,      0,      90,    110, 0], 
                    TYPE: exports.trapTurret,
                        }, {
                POSITION: [   5,    10,      0,     150,    110, 0], 
                    TYPE: exports.trapTurret,
                        }, {
                POSITION: [   5,    10,      0,     210,    110, 0], 
                    TYPE: exports.trapTurret,
                        }, {
                POSITION: [   5,    10,      0,     270,    110, 0], 
                    TYPE: exports.trapTurret,
                        }, {
                POSITION: [   5,    10,      0,     330,    110, 0], 
                    TYPE: exports.trapTurret,
                        },
            ],
        };
    })();
exports.ylosnipedef = {
        PARENT: [exports.miniboss],
        LABEL: '',
        COLOR: 3,
        SHAPE: 0,
        SIZE: 16,
        VARIES_IN_SIZE: false,
        DANGER: 60,
        VALUE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
        BODY: {
            FOV: 2000,
            SPEED: base.SPEED * 5,
            HEALTH: base.HEALTH * 30,
            SHIELD: base.SHIELD * 5,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 100,
        },
    };
    exports.yellowsniper = {
        PARENT: [exports.ylosnipedef],
        LABEL: '🅈𝟛L̸̡̪̦͎͍̆ͅL̷̩͓̤̖̣̫̱̳̓́̾̓̾̏̾̈́͠͝0₩ $𝖓1P̵̨̯̋̈́͒͒͘ǝᏒ',
        FACING_TYPE: 'locksFacing',
        CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.lessreload]),
                TYPE: exports.bullet,
            }, },
        ],
    };
exports.bot = {
    AUTO_UPGRADE: 'random',
    FACING_TYPE: 'looseToTarget',
    BODY: {
        SIZE: 10,
    },
    //COLOR: 17,
    NAME: "EthanInDaBackground",
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
    AI: { STRAFE: true, }, 
};
        exports.tri.UPGRADES_TIER_1 = [exports.booster, exports.falcon, exports.bomber, exports.brutalizer, exports.thornrunner, exports.sp, exports.yu, exports.diversionist2, exports.dpsthing, exports.repeller, exports.V, exports.transShotgun, exports.randomizer, exports.stippleTwo, exports.pagetwo];
        exports.pagetwo.UPGRADES_TIER_1 = [exports.uspawn, exports.spectator, exports.basic34];          
        exports.booster.UPGRADES_TIER_1 = [exports.thornrunner, exports.sp, exports.yu, exports.V];
        exports.falcon.UPGRADES_TIER_1 = [exports.randomizer, exports.yu]; 
        exports.bomber.UPGRADES_TIER_1 = [exports.stippleTwo, exports.transShotgun];
        exports.brutalizer.UPGRADES_TIER_1 = [exports.stippleTwo, exports.diversionist2, exports.uspawn];
        exports.thornrunner.UPGRADES_TIER_1 = [exports.booster, exports.sp];
        exports.sp.UPGRADES_TIER_1 = [exports.V, exports.bomber ]; //intu
        exports.yu.UPGRADES_TIER_1 = [exports.sp, exports.thornrunner, exports.randomizer];
        exports.diversionist2.UPGRADES_TIER_1 = [exports.brutalizer, exports.repeller, exports.uspawn];
        exports.dpsthing.UPGRADES_TIER_1 = [exports.falcon, exports.bomber, exports.brutalizer, exports.V];
        exports.V.UPGRADES_TIER_1 = [exports.dpsthing, exports.falcon];
        exports.randomizer.UPGRADES_TIER_1 = [exports.diversionist2, exports.falcon, exports.transShotgun];
        exports.repeller.UPGRADES_TIER_1 = [exports.randomizer, exports.diversionist2];
        exports.transShotgun.UPGRADES_TIER_1 = [exports.falcon, exports.dpsthing];
