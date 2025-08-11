import type { Schema, Struct } from '@strapi/strapi';

export interface BonusReviewBonusOffer extends Struct.ComponentSchema {
  collectionName: 'components_bonus_review_bonus_offers';
  info: {
    displayName: 'bonusOffer';
  };
  attributes: {
    authorNote: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    bonusFullText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    bonusTitle: Schema.Attribute.String;
    ProsConsList: Schema.Attribute.Component<'shared.pros-cons', false>;
  };
}

export interface BonusReviewBonusSummary extends Struct.ComponentSchema {
  collectionName: 'components_bonus_review_bonus_summaries';
  info: {
    displayName: 'bonusSummary';
  };
  attributes: {
    bonusAmount: Schema.Attribute.String;
    bonusTips: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    bonusTitle: Schema.Attribute.String;
    comboConditions: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'shared.button-link', false>;
    fullReviewLink: Schema.Attribute.Component<'shared.button-link', false>;
    isVerified: Schema.Attribute.Boolean;
    promoCodeNeeded: Schema.Attribute.Boolean;
    summary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    validityPeriod: Schema.Attribute.String;
    wageringRule: Schema.Attribute.String;
  };
}

export interface CountryResponsibleGambling extends Struct.ComponentSchema {
  collectionName: 'components_country_responsible_gamblings';
  info: {
    displayName: 'responsibleGambling';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    responsibleTools: Schema.Attribute.Component<
      'shared.responsible-gambling-tools',
      true
    >;
    sectionTitle: Schema.Attribute.String;
    supportOptions: Schema.Attribute.Component<'shared.gambling-support', true>;
    toolsYouNeed: Schema.Attribute.String;
  };
}

export interface CountryTopBonusesSection extends Struct.ComponentSchema {
  collectionName: 'components_country_top_bonuses_sections';
  info: {
    displayName: 'topBonusesSection';
  };
  attributes: {
    sectionIntro: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface CountryTopSiteCard extends Struct.ComponentSchema {
  collectionName: 'components_country_top_site_cards';
  info: {
    displayName: 'topSiteCard';
  };
  attributes: {
    bonusText: Schema.Attribute.String;
    bookmakerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bookmakerName: Schema.Attribute.String;
    CTA: Schema.Attribute.Component<'shared.button-link', false>;
    fullReviewLinkText: Schema.Attribute.Component<'shared.button-link', false>;
    isVerified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    overallRating: Schema.Attribute.Decimal;
    prosConsList: Schema.Attribute.Component<'shared.pros-cons', false>;
    recommended: Schema.Attribute.Enumeration<
      ['recommended', 'neutral', 'not_recommended']
    >;
    summary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    testedBy: Schema.Attribute.String;
  };
}

export interface CountryTopSitesSection extends Struct.ComponentSchema {
  collectionName: 'components_country_top_sites_sections';
  info: {
    displayName: 'topSitesSection';
  };
  attributes: {
    sectionIntro: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String;
    topSites: Schema.Attribute.Component<'country.top-site-card', true>;
  };
}

export interface SharedAffiliateDisclosure extends Struct.ComponentSchema {
  collectionName: 'components_shared_affiliate_disclosures';
  info: {
    displayName: 'affiliateDisclosure';
  };
  attributes: {
    disclosureText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedBadgeLabel extends Struct.ComponentSchema {
  collectionName: 'components_shared_badge_labels';
  info: {
    displayName: 'badgeLabel';
  };
  attributes: {
    colour: Schema.Attribute.Enumeration<
      ['green', 'orange', 'blue', 'gray', 'red']
    >;
    text: Schema.Attribute.String;
  };
}

export interface SharedBestFor extends Struct.ComponentSchema {
  collectionName: 'components_shared_best_fors';
  info: {
    displayName: 'bestFor';
  };
  attributes: {
    item: Schema.Attribute.Component<'shared.value', true>;
  };
}

export interface SharedButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_links';
  info: {
    displayName: 'buttonLink';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCalloutBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_callout_boxes';
  info: {
    displayName: 'calloutBox';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['info', 'warning', 'tip', 'note', 'editor-pick']
    >;
  };
}

export interface SharedDevicesNetwork extends Struct.ComponentSchema {
  collectionName: 'components_shared_devices_networks';
  info: {
    displayName: 'devicesNetwork';
  };
  attributes: {
    devicesUsed: Schema.Attribute.String & Schema.Attribute.Required;
    Network: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqs extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface SharedFaqsContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs_contents';
  info: {
    displayName: 'faqsContent';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.faqs', true>;
    faqsTitle: Schema.Attribute.String;
  };
}

export interface SharedGamblingSupport extends Struct.ComponentSchema {
  collectionName: 'components_shared_gambling_supports';
  info: {
    displayName: 'gamblingSupport';
  };
  attributes: {
    agencyDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    agencyLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    agencyName: Schema.Attribute.String;
    contactInfo: Schema.Attribute.String;
    supportType: Schema.Attribute.Enumeration<['Helpline', 'NGO', 'Self-ban']>;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    headingLevel: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']> &
      Schema.Attribute.DefaultTo<'h2'>;
    styleVariant: Schema.Attribute.Enumeration<
      ['standard', 'highlight', 'muted']
    > &
      Schema.Attribute.DefaultTo<'standard'>;
  };
}

export interface SharedItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface SharedLicenseInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_license_infos';
  info: {
    displayName: 'licenseInfo';
  };
  attributes: {
    Operator: Schema.Attribute.String;
    Regulator: Schema.Attribute.Component<'shared.regulator', true>;
  };
}

export interface SharedPromoCode extends Struct.ComponentSchema {
  collectionName: 'components_shared_promo_codes';
  info: {
    displayName: 'promoCode';
  };
  attributes: {
    code: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedProsCons extends Struct.ComponentSchema {
  collectionName: 'components_shared_pros_cons';
  info: {
    displayName: 'prosCons';
  };
  attributes: {
    cons: Schema.Attribute.Component<'shared.pros-cons-item', true>;
    pros: Schema.Attribute.Component<'shared.pros-cons-item', true>;
  };
}

export interface SharedProsConsItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_pros_cons_items';
  info: {
    displayName: 'prosConsItem';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface SharedPublisherInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_publisher_infos';
  info: {
    displayName: 'publisherInfo';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publisherName: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

export interface SharedRegulator extends Struct.ComponentSchema {
  collectionName: 'components_shared_regulators';
  info: {
    displayName: 'regulator';
  };
  attributes: {
    casinoLicenseNo: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    sportsbookLicenseNo: Schema.Attribute.String;
  };
}

export interface SharedResponsibleGamblingTools extends Struct.ComponentSchema {
  collectionName: 'components_shared_responsible_gambling_tools';
  info: {
    displayName: 'responsibleGamblingTools';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          maxLengthWords: 150;
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tool: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'richText';
  };
  attributes: {
    RichText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedRobotsTxt extends Struct.ComponentSchema {
  collectionName: 'components_shared_robots_txts';
  info: {
    displayName: 'robotsTxt';
  };
  attributes: {
    robotsTxt: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'noindex, nofollow',
        'index, nofollow',
      ]
    > &
      Schema.Attribute.DefaultTo<'index, follow'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    noFollow: Schema.Attribute.Boolean;
    noIndex: Schema.Attribute.Boolean;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    twitterCardType: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platform: Schema.Attribute.Enumeration<
      [
        'X',
        'LinkedIn',
        'Instagram',
        'YouTube',
        'Facebook',
        'WhatsApp',
        'Telegram',
      ]
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedSourceAttribution extends Struct.ComponentSchema {
  collectionName: 'components_shared_source_attributions';
  info: {
    displayName: 'sourceAttribution';
  };
  attributes: {
    note: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sourceName: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['official', 'forum', 'media', 'internal']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedTestWindow extends Struct.ComponentSchema {
  collectionName: 'components_shared_test_windows';
  info: {
    displayName: 'testWindow';
  };
  attributes: {
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
  };
}

export interface SharedTestedBy extends Struct.ComponentSchema {
  collectionName: 'components_shared_tested_bies';
  info: {
    displayName: 'testedBy';
  };
  attributes: {
    testCountry: Schema.Attribute.String;
    Tester: Schema.Attribute.Component<'shared.item', true>;
  };
}

export interface SharedTransactionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_transaction_items';
  info: {
    displayName: 'transactionItem';
  };
  attributes: {
    amount: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    method: Schema.Attribute.String;
    notes: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    timeframe: Schema.Attribute.String;
    transactionStatus: Schema.Attribute.Enumeration<
      ['success', 'pending', 'failed']
    >;
    transactionType: Schema.Attribute.Enumeration<['deposit', 'withdrawal']>;
  };
}

export interface SharedValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface SharedVerdictBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_verdict_blocks';
  info: {
    displayName: 'verdictBlock';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'shared.button-link', true>;
    closingText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    finalScore: Schema.Attribute.Decimal;
    summary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    verdictTitle: Schema.Attribute.String;
  };
}

export interface SharedVerificationBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_verification_badges';
  info: {
    displayName: 'verificationBadge';
  };
  attributes: {
    verificationDate: Schema.Attribute.Date;
    verifiedBy: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SiteReviewEditorialSummary extends Struct.ComponentSchema {
  collectionName: 'components_site_review_editorial_summaries';
  info: {
    displayName: 'editorialSummary';
  };
  attributes: {
    bestFor: Schema.Attribute.Component<'shared.best-for', false>;
    devicesNetwork: Schema.Attribute.Component<'shared.devices-network', true>;
    editorialSummary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    licenseInfo: Schema.Attribute.Component<'shared.license-info', false>;
    prosConsList: Schema.Attribute.Component<'shared.pros-cons', false>;
    Rating: Schema.Attribute.Decimal & Schema.Attribute.Required;
    testedBy: Schema.Attribute.Component<'shared.tested-by', false>;
    testWindow: Schema.Attribute.Component<'shared.test-window', false>;
    verifiedBy: Schema.Attribute.Component<'shared.verification-badge', false>;
  };
}

export interface SiteReviewHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_site_review_hero_blocks';
  info: {
    displayName: 'heroBlock';
  };
  attributes: {
    bookmakerLogo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    callToAction: Schema.Attribute.Component<'shared.button-link', true>;
    leadText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    promoCode: Schema.Attribute.Component<'shared.promo-code', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bonus-review.bonus-offer': BonusReviewBonusOffer;
      'bonus-review.bonus-summary': BonusReviewBonusSummary;
      'country.responsible-gambling': CountryResponsibleGambling;
      'country.top-bonuses-section': CountryTopBonusesSection;
      'country.top-site-card': CountryTopSiteCard;
      'country.top-sites-section': CountryTopSitesSection;
      'shared.affiliate-disclosure': SharedAffiliateDisclosure;
      'shared.badge-label': SharedBadgeLabel;
      'shared.best-for': SharedBestFor;
      'shared.button-link': SharedButtonLink;
      'shared.callout-box': SharedCalloutBox;
      'shared.devices-network': SharedDevicesNetwork;
      'shared.faqs': SharedFaqs;
      'shared.faqs-content': SharedFaqsContent;
      'shared.gambling-support': SharedGamblingSupport;
      'shared.heading': SharedHeading;
      'shared.item': SharedItem;
      'shared.license-info': SharedLicenseInfo;
      'shared.promo-code': SharedPromoCode;
      'shared.pros-cons': SharedProsCons;
      'shared.pros-cons-item': SharedProsConsItem;
      'shared.publisher-info': SharedPublisherInfo;
      'shared.regulator': SharedRegulator;
      'shared.responsible-gambling-tools': SharedResponsibleGamblingTools;
      'shared.rich-text': SharedRichText;
      'shared.robots-txt': SharedRobotsTxt;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.source-attribution': SharedSourceAttribution;
      'shared.test-window': SharedTestWindow;
      'shared.tested-by': SharedTestedBy;
      'shared.transaction-item': SharedTransactionItem;
      'shared.value': SharedValue;
      'shared.verdict-block': SharedVerdictBlock;
      'shared.verification-badge': SharedVerificationBadge;
      'site-review.editorial-summary': SiteReviewEditorialSummary;
      'site-review.hero-block': SiteReviewHeroBlock;
    }
  }
}
