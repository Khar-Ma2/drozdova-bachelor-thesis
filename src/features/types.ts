export interface Case {
    number: number;
    initial: string;
    age: number;
    grade: number;
    type: string;
    diagnosis: string;
    specialists: string;
    curriculum: string;
    status_text: string;
    war_text: string;
    cognition_text: string;
    social_text: string;
    alarm_text: string;
    english_text: string;
    stabilization_text: string;
}

export interface RecItem {
    num: number;
    title: string;
    text: string;
}

export interface RecCategory {
    title: string;
    subtitle: string;
    badgeColor: string;
    items: RecItem[];
}

export interface MethodItem {
    id: number;
    category: string;
    title: string;
    goal: string;
    steps: string;
}

export interface MethodGroup {
    title: string;
    items: MethodItem[];
}
