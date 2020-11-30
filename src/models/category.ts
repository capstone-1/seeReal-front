import React from "react";
import EmergencyIcon from "../resources/icons/category_emergency.png";
import DisasterIcon from "../resources/icons/category_disaster.png"; 
import ChildrenIcon from "../resources/icons/category_children.png";
import SeniorIcon from "../resources/icons/category_senior.png";
import DisabledIcon from "../resources/icons/category_disabled.png";
import LocalIcon from "../resources/icons/category_local.png";
import MultiCultureIcon from "../resources/icons/category_multi_culture.png";
import EducationIcon from "../resources/icons/category_education.png";
import HealthIcon from "../resources/icons/category_health.png";
import ArtIcon from "../resources/icons/category_culture&art.png";
import EnvironmentIcon from "../resources/icons/category_environment.png";
import EtcIcon from "../resources/icons/category_etc.png";
import AnimalIcon from "../resources/icons/category_animal@2x.png";

const icons = {
    emergency : EmergencyIcon,
    disaster : DisasterIcon,
    children : ChildrenIcon,
    senior : SeniorIcon,
    disabled: DisabledIcon,
    local: LocalIcon,
    multiculture: MultiCultureIcon,
    education: EducationIcon,
    health: HealthIcon,
    art : ArtIcon,
    environment : EnvironmentIcon,
    animal: AnimalIcon,
    etc: EtcIcon 
}

const data = new Map(Object.entries(icons));

export const getIcon = (icon : string) => {
    return data.get(icon);
}