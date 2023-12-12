export const selectItemsStateGeneral = [
  { name: 'Draft', value: 'DRAFT' },
  { name: 'Pending Draft to Aproval', value: 'PENDING_DRFT' },
  { name: 'Aproved', value: 'APPROVED' },
  { name: 'Pending Revision to Aproval', value: 'PENDING_REV' },
  { name: 'Revision', value: 'REVISION' },
  { name: 'Canceled', value: 'CANCELED' },
  { name: 'Obsolete', value: 'OBSOLETE' },
]

export const selectItemsGseUsage = [
  { name: 'Operation', value: 'OPERATION' },
  { name: 'Maintenance', value: 'MAINTENANCE' },
  { name: 'Operation and Maintenance', value: 'OPERATION_MAINTENANCE' }
]

export const selectItemsBasicTechnology = [
  { name: 'Mechanical', value: 'MECHANICAL' },
  { name: 'Eletrical', value: 'ELECTRICAL' },
  { name: 'Software', value: 'SOFTWARE' }
]

export const selectItemsType = [
  { name: 'Special', value: 'SPECIAL' },
  { name: 'COTS', value: 'COTS' }
]

export const selectItemsInterchangeabilityClass = [
  { name: 'One-Way Interchangeable', value: 'ONE_WAY_INTERCHANGEABLE' },
  { name: 'Two-Way Interchangeable', value: 'TWO_WAY_INTERCHANGEABLE' },
  { name: 'Not Interchangeable', value: 'NOT_INTERCHANGEABLE' }
]

export const selectItemsEquivalentType = [
  { name: 'Optional', value: 'OPTIONAL' },
  { name: 'Alternative', value: 'ALTERNATIVE' }
]

export const selectItemsTypeAttachment = [
  { name: 'Design Specification', value: 'DESIGN_SPECIFICATION' },
  { name: 'Data Sheet', value: 'DATA_SHEET' },
  { name: 'Manual', value: 'MANUAL' },
  { name: 'Type Report', value: 'TYPE_REPORT' },
  { name: 'Structural Report', value: 'STRUCTURAL_REPORT' },
  { name: 'Technical File', value: 'TECHNICAL_FILE' },
  { name: 'Tryout Report', value: 'TRYOUT_REPORT' },
  { name: 'Other', value: 'OTHER' }
]

export const selectItemsYesNo = [
  { name: 'Yes', value: 'true' },
  { name: 'No', value: 'false' }
]

export const selectItemsVoltageUnitEnum = [
  { name: 'VAC', value: 'VAC' },
  { name: 'VDC', value: 'VDC' }
]

export const selectItemsGeneral = [
  { name: 'GSE 10001', value: '1' },
  { name: 'GSE 10002', value: '2' },
  { name: 'GSE 10003', value: '3' },
  { name: 'GSE 10004', value: '4' },
  { name: 'GSE 10005', value: '5' }
]

export const selectItensResponsibleCompany = [
  { name: 'C&D', value: '1' },
  { name: 'Aerospace', value: '2' },
  { name: 'Embraer', value: '3' },
  { name: 'Gamesa', value: '4' },
  { name: 'General Electric', value: '5' },
  { name: 'Goodrich', value: '6' },
  { name: 'Hamilton Sundstrand', value: '7' },
  { name: 'Honeywell', value: '8' },
  { name: 'Kawasaki', value: '9' },
  { name: 'Latecoere', value: '10' },
  { name: 'Liebherr', value: '11' },
  { name: 'Martin Baker', value: '12' },
  { name: 'Parker Aerospace', value: '13' },
  { name: 'PPG Industries', value: '14' },
  { name: 'Pratt Witney', value: '15' },
  { name: 'Sonaca', value: '16' },
  { name: 'Trend', value: '17' },
  { name: 'Triunph', value: '18' },
  { name: 'ELEB', value: '19' },
  { name: 'FCC ', value: '20' }
]

export const selectItemsAtaSystem = [
  { name: 'Airworthiness Limitations                             ', value: '4' },
  { name: 'Scheduled/unscheduled maintenance                     ', value: '5' },
  { name: 'Dimensions and areas                                  ', value: '6' },
  { name: 'Lifting, shoring, recovering and transporting         ', value: '7' },
  { name: 'Leveling and weighing                                 ', value: '8' },
  { name: 'Handling and maneuvering                              ', value: '9' },
  { name: 'Parking, mooring, storing and return to service       ', value: '10' },
  { name: 'Placards and markings                                 ', value: '11' },
  { name: 'Servicing                                             ', value: '12' },
  { name: 'Product loading and offloading                        ', value: '14' },
  { name: 'Crew Procedure                                        ', value: '15' },
  { name: 'Vibration and noise analysis                          ', value: '18' },
  { name: 'General operations                                    ', value: '19' },
  { name: 'Standard practices, Airframe systems                  ', value: '20' },
  { name: 'Environmental control                                 ', value: '21' },
  { name: 'Auto flight                                           ', value: '22' },
  { name: 'Communications                                        ', value: '23' },
  { name: 'Electrical Power                                      ', value: '24' },
  { name: 'Equipment/furnishings                                 ', value: '25' },
  { name: 'Fire protection                                       ', value: '26' },
  { name: 'Flight controls                                       ', value: '27' },
  { name: 'Fuel                                                  ', value: '28' },
  { name: 'Hydraulic power                                       ', value: '29' },
  { name: 'Ice and rain protection                               ', value: '30' },
  { name: 'Indicating/recording systems                          ', value: '31' },
  { name: 'Landing gear                                          ', value: '32' },
  { name: 'Lights                                                ', value: '33' },
  { name: 'Navigation                                            ', value: '34' },
  { name: 'Oxygen                                                ', value: '35' },
  { name: 'Pneumatic                                             ', value: '36' },
  { name: 'Vacuum                                                ', value: '37' },
  { name: 'Water/waste                                           ', value: '38' },
  { name: 'Attack system management                              ', value: '39' },
  { name: 'Operational attack functions                          ', value: '40' },
  { name: 'Water ballast                                         ', value: '41' },
  { name: 'Cross-technical attack functions                      ', value: '42' },
  { name: 'Integrated Modular Avionics                           ', value: '42' },
  { name: 'Tactical communications                               ', value: '43' },
  { name: 'Cabin System                                          ', value: '44' },
  { name: 'Central maintenance system (CMS)                      ', value: '45' },
  { name: 'Systems integration and display                       ', value: '46' },
  { name: 'Information system                                    ', value: '46' },
  { name: 'Inert Gas System                                      ', value: '47' },
  { name: 'In-flight refueling tanker                            ', value: '48' },
  { name: 'Airborne auxiliary power                              ', value: '49' },
  { name: 'Cargo and accessory compartment                       ', value: '50' },
  { name: 'Standard practices, Structures                        ', value: '51' },
  { name: 'Doors                                                 ', value: '52' },
  { name: 'Fuselage                                              ', value: '53' },
  { name: 'Nacelles/pylons                                       ', value: '54' },
  { name: 'Stabilizers                                           ', value: '55' },
  { name: 'Windows                                               ', value: '56' },
  { name: 'Wings                                                 ', value: '57' },
  { name: 'Standard practices, Propeller/rotor                   ', value: '60' },
  { name: 'Propellers                                            ', value: '61' },
  { name: 'Main rotors                                           ', value: '62' },
  { name: 'Main rotor drives                                     ', value: '63' },
  { name: 'Tail rotor                                            ', value: '64' },
  { name: 'Tail rotor drive                                      ', value: '65' },
  { name: 'Folding blades/pylon                                  ', value: '66' },
  { name: 'Rotors flight control                                 ', value: '67' },
  { name: 'Integrated flight and propulsion controls (IFPCS)     ', value: '68' },
  { name: 'Standard practices, Engine                            ', value: '70' },
  { name: 'Power plant                                           ', value: '71' },
  { name: 'Engine                                                ', value: '72' },
  { name: 'Engine turbine/turboprop Ducted fan/inducted fan      ', value: '72' },
  { name: 'Engine electric                                       ', value: '72' },
  { name: 'Engine fuel and control                               ', value: '73' },
  { name: 'Ignition                                              ', value: '74' },
  { name: 'Air                                                   ', value: '75' },
  { name: 'Engine controls                                       ', value: '76' },
  { name: 'Engine indicating                                     ', value: '77' },
  { name: 'Exhaust                                               ', value: '78' },
  { name: 'Oil                                                   ', value: '79' },
  { name: 'Starting                                              ', value: '80' },
  { name: 'Turbines                                              ', value: '81' },
  { name: 'Water injection                                       ', value: '82' },
  { name: 'Accessory gearboxes                                   ', value: '83' },
  { name: 'Propulsion augmentation                               ', value: '84' },
  { name: 'Fuel cell system                                      ', value: '85' },
  { name: 'Lift system                                           ', value: '86' },
  { name: 'Propulsion battery                                    ', value: '87' },
  { name: 'Recovery                                              ', value: '90' },
  { name: 'Air vehicle wiring                                    ', value: '91' },
  { name: 'Radar                                                 ', value: '92' },
  { name: 'Surveillance                                          ', value: '93' },
  { name: 'Weapons system                                        ', value: '94' },
  { name: 'Crew escape and safety                                ', value: '95' },
  { name: 'Missiles, drones and telemetry                        ', value: '96' },
  { name: 'Image recording                                       ', value: '97' },
  { name: 'Meteorological and atmospheric research               ', value: '98' },
  { name: 'Electronic warfare                                    ', value: '99' },
  { name: 'Flight simulator systems                              ', value: '115' },
  { name: 'Flight simulator cuing sstems                         ', value: '116' },


]
