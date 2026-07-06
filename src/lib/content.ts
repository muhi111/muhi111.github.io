import { z } from "zod";

import articlesJson from "../data/articles.json";
import internshipsJson from "../data/internships.json";
import qualificationsJson from "../data/qualifications.json";
import socialLinksJson from "../data/social-links.json";

const nonEmptyString = z.string().refine((value) => value.trim() !== "", {
  message: "must be a non-empty string",
});

const httpUrl = z.url().refine(
  (value) => {
    const protocol = new URL(value).protocol;
    return protocol === "https:" || protocol === "http:";
  },
  { message: "must be a valid HTTP(S) URL" },
);

const socialLinkSchema = z.object({
  id: nonEmptyString,
  label: nonEmptyString,
  url: httpUrl,
});

const internshipSchema = z.object({
  startDate: nonEmptyString,
  endDate: nonEmptyString.optional(),
  organization: nonEmptyString,
  description: nonEmptyString,
  current: z.boolean(),
});

const qualificationSchema = z.object({
  name: nonEmptyString,
  acquiredAt: nonEmptyString,
  issuer: nonEmptyString,
});

const articleSchema = z.object({
  title: nonEmptyString,
  publishedAt: nonEmptyString,
  url: httpUrl,
  source: nonEmptyString,
});

const socialLinksSchema = socialLinkSchema.array();
const internshipsSchema = internshipSchema.array();
const qualificationsSchema = qualificationSchema.array();
const articlesSchema = articleSchema.array();

export type SocialLink = z.infer<typeof socialLinkSchema>;

function parseContent<T>(
  schema: z.ZodType<T>,
  value: unknown,
  name: string,
): T {
  const result = schema.safeParse(value);

  if (!result.success) {
    throw new Error(`${name} is invalid:\n${z.prettifyError(result.error)}`);
  }

  return result.data;
}

export const profileName = "muhi111";
export const profileLinks = parseContent(
  socialLinksSchema,
  socialLinksJson,
  "social-links",
);
export const internships = parseContent(
  internshipsSchema,
  internshipsJson,
  "internships",
);
export const qualifications = parseContent(
  qualificationsSchema,
  qualificationsJson,
  "qualifications",
);
export const articles = parseContent(articlesSchema, articlesJson, "articles");
