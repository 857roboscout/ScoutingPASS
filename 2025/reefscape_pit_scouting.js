var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },

    
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "t": "Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Manipulate Algae on Reef",
      "code": "aor",
      "type": "bool"
    },
    { "name": "Score in Processor",
      "code": "prc",
      "type": "bool"
    },
    { "name": "Score on L1",
      "code": "sca",
      "type": "bool"
    },
    { "name": "Score on L2",
      "code": "scb",
      "type": "bool"
    },
    { "name": "Score on L3",
      "code": "scc",
      "type": "bool"
    },
    { "name": "Score on L4",
      "code": "scd",
      "type": "bool"
    },
      
       
    { "name": "Floor pickup Coral",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Floor pickup Algae",
      "code": "fpa",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
