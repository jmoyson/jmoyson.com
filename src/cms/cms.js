import CMS from "netlify-cms-app";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerPreviewTemplate("home", IndexPagePreview);
CMS.registerPreviewTemplate("acceuil", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("a-propos", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
