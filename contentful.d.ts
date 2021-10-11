// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IArticleFields {
  /** Заголовок */
  title: string;

  /** slug */
  slug?: string | undefined;

  /** Описание */
  description?: string | undefined;

  /** Контент */
  content?: Document | undefined;

  /** Текст кнопки */
  button_text?: string | undefined;
}

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "article";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICategoryFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;
}

/** Categories can be applied to Courses and Lessons. Assigning Multiple categories is also possible. */

export interface ICategory extends Entry<ICategoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "category";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICourseFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Image */
  image: Asset;

  /** Short Description */
  shortDescription: string;

  /** Description */
  description: string;

  /** Duration */
  duration?: number | undefined;

  /** Skill Level */
  skillLevel: "beginner" | "intermediate" | "advanced";

  /** Lessons */
  lessons: ILesson[];

  /** Categories */
  categories: ICategory[];
}

/** A series of lessons designed to teach sets of concepts that enable students to master Contentful. */

export interface ICourse extends Entry<ICourseFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "course";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHomeFields {
  /** Заголовок */
  title?: string | undefined;

  /** Описание */
  description?: Document | undefined;

  /** Изображение */
  background?: Asset | undefined;
}

export interface IHome extends Entry<IHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "home";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILayoutFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Content Modules */
  contentModules: (ILayoutCopy | ILayoutHeroImage | ILayoutHighlightedCourse)[];
}

/** A page consisting of freely configurable and rearrangeable content modules. */

export interface ILayout extends Entry<ILayoutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "layout";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILayoutCopyFields {
  /** Title */
  title: string;

  /** Headline */
  headline?: string | undefined;

  /** Copy */
  copy?: string | undefined;

  /** CTA Title */
  ctaTitle?: string | undefined;

  /** CTA Link */
  ctaLink?: string | undefined;

  /** Visual Style */
  visualStyle?: "Default" | "Emphasized" | undefined;
}

/** A block of text with a headline and a call to action to be shown on the landing page. */

export interface ILayoutCopy extends Entry<ILayoutCopyFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "layoutCopy";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILayoutHeroImageFields {
  /** Title */
  title: string;

  /** Headline */
  headline?: string | undefined;

  /** Background Image */
  backgroundImage?: Asset | undefined;
}

/** A hero image and header text. */

export interface ILayoutHeroImage extends Entry<ILayoutHeroImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "layoutHeroImage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILayoutHighlightedCourseFields {
  /** Title */
  title: string;

  /** Course */
  course: ICourse;
}

/** A curated selection of highlighted courses. */

export interface ILayoutHighlightedCourse
  extends Entry<ILayoutHighlightedCourseFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "layoutHighlightedCourse";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILessonFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Modules */
  modules: (ILessonCodeSnippets | ILessonCopy | ILessonImage)[];
}

/** A educational lesson, representing one section of a course. */

export interface ILesson extends Entry<ILessonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "lesson";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILessonCodeSnippetsFields {
  /** Title */
  title: string;

  /** cURL */
  curl?: string | undefined;

  /** DotNet */
  dotNet?: string | undefined;

  /** Javascript */
  javascript?: string | undefined;

  /** Java */
  java?: string | undefined;

  /** Java-android */
  javaAndroid?: string | undefined;

  /** Php */
  php?: string | undefined;

  /** Python */
  python?: string | undefined;

  /** Ruby */
  ruby?: string | undefined;

  /** Swift */
  swift?: string | undefined;
}

/** A code snippet module supporting all platforms to be used in a lesson. */

export interface ILessonCodeSnippets extends Entry<ILessonCodeSnippetsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "lessonCodeSnippets";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILessonCopyFields {
  /** Title */
  title: string;

  /** Copy */
  copy: string;
}

/** A markdown module to be used in a lesson. */

export interface ILessonCopy extends Entry<ILessonCopyFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "lessonCopy";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILessonImageFields {
  /** Title */
  title: string;

  /** Image */
  image: Asset;

  /** Caption */
  caption?: string | undefined;
}

/** An image to be used as a module in a lesson. */

export interface ILessonImage extends Entry<ILessonImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "lessonImage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "article"
  | "category"
  | "course"
  | "home"
  | "layout"
  | "layoutCopy"
  | "layoutHeroImage"
  | "layoutHighlightedCourse"
  | "lesson"
  | "lessonCodeSnippets"
  | "lessonCopy"
  | "lessonImage";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
