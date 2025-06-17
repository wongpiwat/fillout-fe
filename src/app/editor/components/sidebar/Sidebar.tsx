import React from "react";
import {
  CHOICES_WIDGETS,
  CONTACT_INFO_WIDGETS,
  DISPLAY_TEXT_WIDGETS,
  FREQUENTLY_USED_WIDGETS,
  MEDIA_WIDGETS,
  MISCELLANEOUS_WIDGETS,
  NAVIGATION_LAYOUT_WIDGETS,
  NUMBER_WIDGETS,
  PAGE_FEATURES_WIDGETS,
  RATING_RANKING_WIDGETS,
  TEXT_WIDGETS,
  TIME_WIDGETS,
} from "@/constants/widgets";
import WidgetSection from "./WidgetSection";

const Sidebar = ({}) => {
  return (
    <div className="w-full h-full p-4 overflow-y-scroll">
      <WidgetSection
        title={FREQUENTLY_USED_WIDGETS.title}
        items={FREQUENTLY_USED_WIDGETS.items}
      />
      <WidgetSection
        title={DISPLAY_TEXT_WIDGETS.title}
        items={DISPLAY_TEXT_WIDGETS.items}
      />
      <WidgetSection
        title={CHOICES_WIDGETS.title}
        items={CHOICES_WIDGETS.items}
      />
      <WidgetSection title={TIME_WIDGETS.title} items={TIME_WIDGETS.items} />
      <WidgetSection
        title={RATING_RANKING_WIDGETS.title}
        items={RATING_RANKING_WIDGETS.items}
      />
      <WidgetSection title={TEXT_WIDGETS.title} items={TEXT_WIDGETS.items} />
      <WidgetSection
        title={CONTACT_INFO_WIDGETS.title}
        items={CONTACT_INFO_WIDGETS.items}
      />
      <WidgetSection
        title={NUMBER_WIDGETS.title}
        items={NUMBER_WIDGETS.items}
      />
      <WidgetSection
        title={MISCELLANEOUS_WIDGETS.title}
        items={MISCELLANEOUS_WIDGETS.items}
      />
      <WidgetSection
        title={NAVIGATION_LAYOUT_WIDGETS.title}
        items={NAVIGATION_LAYOUT_WIDGETS.items}
      />
      <WidgetSection title={MEDIA_WIDGETS.title} items={MEDIA_WIDGETS.items} />
      <WidgetSection
        title={PAGE_FEATURES_WIDGETS.title}
        items={PAGE_FEATURES_WIDGETS.items}
      />
    </div>
  );
};

export default Sidebar;
