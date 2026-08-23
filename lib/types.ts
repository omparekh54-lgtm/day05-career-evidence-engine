export type RequirementKind='must'|'preferred'|'responsibility';
export type GapKind='covered'|'evidence_gap'|'keyword_gap'|'learnable_gap'|'hard_blocker';
export interface Requirement{id:string;text:string;kind:RequirementKind;skills:string[];importance:number}
export interface EvidenceMatch{requirement:Requirement;score:number;gap:GapKind;evidence:string[];matchedSkills:string[];missingSkills:string[];reason:string}
export interface Analysis{requirements:Requirement[];matches:EvidenceMatch[];overall:number;mustCoverage:number;preferredCoverage:number;ats:{score:number;issues:string[]};recruiterScan:string[];skillsFound:string[];skillsMissing:string[];portfolioPlan:Array<{skill:string;project:string;proof:string}>}
