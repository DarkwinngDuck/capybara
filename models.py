from dataclasses import dataclass
from typing import List

@dataclass
class NormalizedHeatCapacityPoint:
    normalised_temperature: float
    normalised_heat_capacity: float

@dataclass
class NormalizedHeatCapacityModel:
   data: List[NormalizedHeatCapacityPoint]
   
@dataclass 
class EditableFittingInput:
    alpha: float
    critical_temperature: float
    sommerfield_coefficient: float

