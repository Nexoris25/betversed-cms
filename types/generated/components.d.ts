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
    bestFor: Schema.Attribute.Component<'shared.key-point', true>;
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
    minimumDeposit: Schema.Attribute.String & Schema.Attribute.Required;
    minimumOdds: Schema.Attribute.String;
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
    topBonuses: Schema.Attribute.Component<'shared.bonus-card', true>;
  };
}

export interface CountryTopSiteCard extends Struct.ComponentSchema {
  collectionName: 'components_country_top_site_cards';
  info: {
    displayName: 'topSiteCard';
  };
  attributes: {
    bestFor: Schema.Attribute.Component<'shared.key-point', true>;
    bonusText: Schema.Attribute.String;
    bookmakerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bookmakerName: Schema.Attribute.String;
    CTA: Schema.Attribute.Component<'shared.button-link', false>;
    fullReviewLinkText: Schema.Attribute.Component<'shared.button-link', false>;
    isVerified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    licensingTrust: Schema.Attribute.Component<'shared.key-point', true>;
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

export interface DefaultCons extends Struct.ComponentSchema {
  collectionName: 'components_default_cons';
  info: {
    displayName: 'cons';
  };
  attributes: {
    biggest: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DefaultHowWeHelpYouFindTheBestBettingSites
  extends Struct.ComponentSchema {
  collectionName: 'components_default_how_we_help_you_find_the_best_betting_sites';
  info: {
    displayName: 'How we help you find the best betting sites';
  };
  attributes: {};
}

export interface DefaultLegalFramework extends Struct.ComponentSchema {
  collectionName: 'components_default_legal_frameworks';
  info: {
    displayName: 'Legal Framework';
  };
  attributes: {};
}

export interface DefaultPros extends Struct.ComponentSchema {
  collectionName: 'components_default_pros';
  info: {
    displayName: 'pros';
  };
  attributes: {
    biggest: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    item: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedAuthorBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_author_boxes';
  info: {
    displayName: 'authorBox';
  };
  attributes: {
    bio: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    expertiseTags: Schema.Attribute.Component<'shared.expertise-tag', true>;
    linkedInUrl: Schema.Attribute.String;
    linkToAuthorPage: Schema.Attribute.Component<'shared.button-link', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    twitterUrl: Schema.Attribute.String;
    yearsOfExperience: Schema.Attribute.String;
  };
}

export interface SharedAuthorsBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_authors_blocks';
  info: {
    displayName: 'authorsBlock';
  };
  attributes: {
    authorBox: Schema.Attribute.Component<'shared.author-box', true>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String;
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

export interface SharedBonusCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_bonus_cards';
  info: {
    displayName: 'bonusCard';
  };
  attributes: {
    bonusTerms: Schema.Attribute.String;
    bookmakerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bookmakerName: Schema.Attribute.String;
    CTA: Schema.Attribute.Component<'shared.button-link', false>;
    fullBonusReview: Schema.Attribute.Component<'shared.button-link', false>;
    isEditorsPick: Schema.Attribute.Boolean;
    isVerified: Schema.Attribute.Boolean;
    licensing: Schema.Attribute.String;
    minDeposit: Schema.Attribute.String;
    offerTitle: Schema.Attribute.String;
    offerValue: Schema.Attribute.String;
    promoCode: Schema.Attribute.String;
    prosConsList: Schema.Attribute.Component<'shared.pros-cons', false>;
    testedBy: Schema.Attribute.Component<'shared.key-point', false>;
    validityPeriod: Schema.Attribute.String;
    verdictSummary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    verdictTitle: Schema.Attribute.String;
    wagering: Schema.Attribute.String;
  };
}

export interface SharedBookieOrigin extends Struct.ComponentSchema {
  collectionName: 'components_shared_bookie_origins';
  info: {
    displayName: 'bookieOrigin';
  };
  attributes: {
    bookies: Schema.Attribute.String;
    origin: Schema.Attribute.String;
    prosConsList: Schema.Attribute.Component<'shared.pros-cons', false>;
  };
}

export interface SharedBookmakerComparison extends Struct.ComponentSchema {
  collectionName: 'components_shared_bookmaker_comparisons';
  info: {
    displayName: 'bookmakerComparison';
  };
  attributes: {
    betBuilder: Schema.Attribute.Boolean;
    bookmakerName: Schema.Attribute.String;
    liveBetting: Schema.Attribute.Boolean;
    localLeagueOdds: Schema.Attribute.Boolean;
    minStake: Schema.Attribute.String;
    mobileUXRating: Schema.Attribute.Decimal;
    payoutSpeed: Schema.Attribute.String;
    streaming: Schema.Attribute.Boolean;
    supportSpeed: Schema.Attribute.String;
    wageringRules: Schema.Attribute.String;
    welcomeBonus: Schema.Attribute.String;
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

export interface SharedExpertiseTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_expertise_tags';
  info: {
    displayName: 'expertise-tag';
  };
  attributes: {
    label: Schema.Attribute.String;
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

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'featureCard';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isHighlighted: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
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

export interface SharedKeyPoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_key_points';
  info: {
    displayName: 'keyPoint';
  };
  attributes: {
    keyPoint: Schema.Attribute.String;
  };
}

export interface SharedLocalVsForeign extends Struct.ComponentSchema {
  collectionName: 'components_shared_local_vs_foreigns';
  info: {
    displayName: 'localVsForeign';
  };
  attributes: {
    bookmakerOrigin: Schema.Attribute.Component<'shared.bookie-origin', true>;
    introText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String;
    verdict: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    verdictTitle: Schema.Attribute.String;
  };
}

export interface SharedPlatformLicense extends Struct.ComponentSchema {
  collectionName: 'components_shared_platform_licenses';
  info: {
    displayName: 'platformLicense';
  };
  attributes: {
    countryCode: Schema.Attribute.Enumeration<['NG', 'GH', 'KE', 'ZA']>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    licenseNumber: Schema.Attribute.String & Schema.Attribute.Required;
    licenseType: Schema.Attribute.Enumeration<
      ['Sports', 'Casino', 'Virtual', 'Lottery', 'Other']
    >;
    licenseUrl: Schema.Attribute.String;
    licensingBody: Schema.Attribute.String & Schema.Attribute.Required;
    validFrom: Schema.Attribute.Date;
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

export interface SharedPros extends Struct.ComponentSchema {
  collectionName: 'components_shared_pros';
  info: {
    displayName: 'pros';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedRegistrationStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_registration_steps';
  info: {
    displayName: 'registrationStep';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stepTitle: Schema.Attribute.String;
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
    richText: Schema.Attribute.RichText &
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

export interface SiteReviewBookieLicense extends Struct.ComponentSchema {
  collectionName: 'components_site_review_bookie_licenses';
  info: {
    displayName: 'bookieLicense';
  };
  attributes: {
    licenseInfo: Schema.Attribute.Component<'shared.platform-license', true>;
    registeredName: Schema.Attribute.String;
  };
}

export interface SiteReviewCompareBookies extends Struct.ComponentSchema {
  collectionName: 'components_site_review_compare_bookies';
  info: {
    displayName: 'compareBookies';
  };
  attributes: {
    bookmakers: Schema.Attribute.Component<'shared.bookmaker-comparison', true>;
    notes: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
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

export interface SiteReviewHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_site_review_hero_blocks';
  info: {
    displayName: 'heroBlock';
  };
  attributes: {
    bookmakerLogo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    callToAction: Schema.Attribute.Component<'shared.button-link', true>;
    countryTested: Schema.Attribute.String;
    leadText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    ratingScore: Schema.Attribute.Decimal;
    testingDevices: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SiteReviewPaymentMethods extends Struct.ComponentSchema {
  collectionName: 'components_site_review_payment_methods';
  info: {
    displayName: 'paymentMethods';
  };
  attributes: {
    authorNote: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    deposits: Schema.Attribute.Component<'shared.transaction-item', true>;
    sectionIntro: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String;
    withdrawals: Schema.Attribute.Component<'shared.transaction-item', true>;
  };
}

export interface SiteReviewRegistrationSteps extends Struct.ComponentSchema {
  collectionName: 'components_site_review_registration_steps';
  info: {
    displayName: 'registrationSteps';
  };
  attributes: {
    sectionIntro: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTips: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String;
    step: Schema.Attribute.Component<'shared.registration-step', true>;
  };
}

export interface SiteReviewSectionTitle extends Struct.ComponentSchema {
  collectionName: 'components_site_review_section_titles';
  info: {
    displayName: 'sectionTitle';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.feature-card', true>;
  };
}

export interface SiteReviewSummaryBox extends Struct.ComponentSchema {
  collectionName: 'components_site_review_summary_boxes';
  info: {
    displayName: 'summaryBox';
  };
  attributes: {
    bestFor: Schema.Attribute.Component<'shared.key-point', true>;
    callToAction: Schema.Attribute.Component<'shared.button-link', true>;
    headline: Schema.Attribute.String;
    isVerified: Schema.Attribute.Boolean;
    promoCode: Schema.Attribute.String;
    ProsConsList: Schema.Attribute.Component<'shared.pros-cons', false>;
    summaryScore: Schema.Attribute.Decimal;
    summaryText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    testedBy: Schema.Attribute.Component<'shared.key-point', true>;
    verificationIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    verificationText: Schema.Attribute.String;
  };
}

export interface SiteReviewTestingSnapshot extends Struct.ComponentSchema {
  collectionName: 'components_site_review_testing_snapshots';
  info: {
    displayName: 'testingSnapshot';
  };
  attributes: {
    dateTested: Schema.Attribute.Date;
    devicesUsed: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    loadTimeSeconds: Schema.Attribute.Decimal;
    networkUsed: Schema.Attribute.String;
    observations: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SiteReviewTopFeatures extends Struct.ComponentSchema {
  collectionName: 'components_site_review_top_features';
  info: {
    displayName: 'topFeatures';
  };
  attributes: {
    feature: Schema.Attribute.Component<'shared.feature-card', true>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bonus-review.bonus-offer': BonusReviewBonusOffer;
      'bonus-review.bonus-summary': BonusReviewBonusSummary;
      'country.responsible-gambling': CountryResponsibleGambling;
      'country.top-bonuses-section': CountryTopBonusesSection;
      'country.top-site-card': CountryTopSiteCard;
      'country.top-sites-section': CountryTopSitesSection;
      'default.cons': DefaultCons;
      'default.how-we-help-you-find-the-best-betting-sites': DefaultHowWeHelpYouFindTheBestBettingSites;
      'default.legal-framework': DefaultLegalFramework;
      'default.pros': DefaultPros;
      'shared.affiliate-disclosure': SharedAffiliateDisclosure;
      'shared.author-box': SharedAuthorBox;
      'shared.authors-block': SharedAuthorsBlock;
      'shared.badge-label': SharedBadgeLabel;
      'shared.bonus-card': SharedBonusCard;
      'shared.bookie-origin': SharedBookieOrigin;
      'shared.bookmaker-comparison': SharedBookmakerComparison;
      'shared.button-link': SharedButtonLink;
      'shared.callout-box': SharedCalloutBox;
      'shared.expertise-tag': SharedExpertiseTag;
      'shared.faqs': SharedFaqs;
      'shared.faqs-content': SharedFaqsContent;
      'shared.feature-card': SharedFeatureCard;
      'shared.gambling-support': SharedGamblingSupport;
      'shared.heading': SharedHeading;
      'shared.key-point': SharedKeyPoint;
      'shared.local-vs-foreign': SharedLocalVsForeign;
      'shared.platform-license': SharedPlatformLicense;
      'shared.promo-code': SharedPromoCode;
      'shared.pros': SharedPros;
      'shared.pros-cons': SharedProsCons;
      'shared.pros-cons-item': SharedProsConsItem;
      'shared.publisher-info': SharedPublisherInfo;
      'shared.registration-step': SharedRegistrationStep;
      'shared.responsible-gambling-tools': SharedResponsibleGamblingTools;
      'shared.rich-text': SharedRichText;
      'shared.robots-txt': SharedRobotsTxt;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.source-attribution': SharedSourceAttribution;
      'shared.transaction-item': SharedTransactionItem;
      'shared.verdict-block': SharedVerdictBlock;
      'site-review.bookie-license': SiteReviewBookieLicense;
      'site-review.compare-bookies': SiteReviewCompareBookies;
      'site-review.hero-block': SiteReviewHeroBlock;
      'site-review.payment-methods': SiteReviewPaymentMethods;
      'site-review.registration-steps': SiteReviewRegistrationSteps;
      'site-review.section-title': SiteReviewSectionTitle;
      'site-review.summary-box': SiteReviewSummaryBox;
      'site-review.testing-snapshot': SiteReviewTestingSnapshot;
      'site-review.top-features': SiteReviewTopFeatures;
    }
  }
}
