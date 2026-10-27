import React from 'react';
import { Image, Linking, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, Path, Polygon, Rect } from 'react-native-svg';
import { colors } from '../theme/colors';
import { s } from '../theme/spacing';

const sans = (weight: '400' | '500' | '600' | '700' | '800') =>
  ({
    '400': 'Inter-Regular',
    '500': 'Inter-Medium',
    '600': 'Inter-SemiBold',
    '700': 'Inter-Bold',
    '800': 'Inter-ExtraBold',
  })[weight];

const mono = (weight: '400' | '500' | '600' | '700') =>
  ({
    '400': 'JetBrainsMono-Regular',
    '500': 'JetBrainsMono-Medium',
    '600': 'JetBrainsMono-SemiBold',
    '700': 'JetBrainsMono-Bold',
  })[weight];

const openLink = (url: string) => {
  Linking.openURL(url).catch(() => undefined);
};

const ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};


export function EmailWrapper() {
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.wrapperContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* HERO */}
        <LinearGradient
          colors={['#ffffff', '#f0f6ff', '#dce9fa', '#e4eefa']}
          locations={[0, 0.3, 0.7, 1]}
          style={styles.hero}
        >
          <View style={styles.heroWaves} pointerEvents="none">
            <Svg width={320} height={180} viewBox="0 0 320 180" fill="none">
              <Path
                d="M320 180 Q260 120 200 150 Q140 180 80 130 Q30 90 0 120 L0 180 Z"
                fill="rgba(14,96,255,0.07)"
              />
              <Path
                d="M320 180 Q280 140 230 165 Q170 195 120 155 Q70 120 0 145 L0 180 Z"
                fill="rgba(14,96,255,0.05)"
              />
              <Path
                d="M320 180 Q300 160 260 175 Q210 195 160 168 Q110 142 60 160 Q30 172 0 160 L0 180 Z"
                fill="rgba(90,138,255,0.06)"
              />
              <Path
                d="M320 100 Q280 70 240 90 Q190 115 150 85 Q100 50 60 80 Q30 100 0 85"
                stroke="rgba(14,96,255,0.12)"
                strokeWidth={1.5}
                fill="none"
              />
              <Path
                d="M320 130 Q270 105 220 122 Q165 142 120 115 Q75 88 30 108 Q15 115 0 110"
                stroke="rgba(56,189,248,0.09)"
                strokeWidth={1}
                fill="none"
              />
            </Svg>
          </View>
          <View style={styles.heroInner}>
            <View style={styles.heroCopy}>
              <View style={styles.heroLogo}>
                <Image
                  source={require('../../assets/logo.png')}
                  style={styles.heroLogoImg}
                  resizeMode="contain"
                  accessibilityLabel="Xccelera AI"
                />
              </View>
              <Text style={styles.heroEyebrow}>AI for what's next.</Text>
              <Text style={styles.heroH1}>
                Transform Enterprise{'\n'}Workflows with <Text style={styles.brand}>XCore</Text>
              </Text>
              <View style={styles.heroLiveLabel}>
                <Text style={styles.liveText}>— You're live.</Text>
              </View>
              <Text style={styles.heroSub}>
                Intelligent agents. Connected systems.{'\n'}Real business outcomes.
              </Text>
            </View>
            <View style={styles.heroRight}>
              <View style={styles.heroPillars}>
                <Text style={styles.heroPillar}>Automate</Text>
                <Text style={styles.heroPillar}>Orchestrate</Text>
                <Text style={styles.heroPillar}>Accelerate</Text>
              </View>
              <LinearGradient
                colors={['#0e60ff', '#5a8aff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.heroRuleH}
              />
              <Text style={styles.heroTagline}>From possibility{'\n'}to progress</Text>
            </View>
          </View>
          <LinearGradient
            colors={['#001ca0', '#0e60ff', '#3b82f6']}
            locations={[0, 0.55, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.statusStrip}
          >
            <View style={styles.statusPulse} />
            <Text style={styles.statusLabel}>
              Organization Onboarding Complete  ·  Team Access Open
            </Text>
          </LinearGradient>
        </LinearGradient>

        {/* INTRO */}
        <View style={styles.intro}>
          <Text style={styles.greeting}>{'Hi {{first_name}},'}</Text>
          <Text style={styles.bodyPara}>
            Congratulations — <Text style={styles.strongDark}>{'{{org_name}}'}</Text> is now live on
            XCore. Your workspace is fully provisioned and your team can join immediately.
          </Text>
          <Text style={[styles.bodyPara, styles.noMarginBottom]}>
            Below is everything your organization gets from day one, along with your unique portal
            link to Share With Your Team.
          </Text>
          <View style={styles.ctaRow}>
            <LinearGradient
              colors={['#002ad7', '#0e60ff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.ctaBtn}
            >
              <Text style={styles.ctaBtnText} onPress={() => openLink('{{portal_url}}')}>
                Open your XCore portal →
              </Text>
            </LinearGradient>
            <Text style={styles.ctaSubTxt}>
              Questions? Write to{' '}
              <Text style={styles.ctaLink} onPress={() => openLink('mailto:support@xccelera.ai')}>
                support@xccelera.ai
              </Text>
            </Text>
          </View>
        </View>

        {/* MID CARD */}
        <View style={styles.midWrap}>
          <View style={styles.midCard}>
            <LinearGradient
              colors={['#e9f5ff', '#e6f1fd', '#eef2fb']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.4, y: 1 }}
              style={styles.capSection}
            >
              <View style={styles.capEyebrow}>
                <LinearGradient
                  colors={['rgba(14,96,255,0.22)', 'rgba(14,96,255,0)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.capLine}
                />
                <Text style={styles.capLabel}>Platform capabilities</Text>
                <LinearGradient
                  colors={['rgba(14,96,255,0)', 'rgba(14,96,255,0.14)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.capLine}
                />
              </View>

              <View style={[styles.capRow, styles.capRowFirst]}>
                <View style={[styles.capIcon, { backgroundColor: 'rgba(14,96,255,0.08)' }]}>
                  <Svg width={17} height={17} {...ICON_PROPS} stroke="#0e60ff" strokeWidth={1.75}>
                    <Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <Circle cx={9} cy={7} r={4} />
                    <Path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </Svg>
                </View>
                <View style={styles.capBody}>
                  <Text style={styles.capTitle}>Team Management</Text>
                  <Text style={styles.capDesc}>
                    Invite members, organize into teams with scoped roles, and manage permissions
                    from a single admin panel.
                  </Text>
                  <Text style={styles.capTag}>Members · Roles · Invites</Text>
                </View>
              </View>

              <View style={styles.capRow}>
                <View style={[styles.capIcon, { backgroundColor: 'rgba(20,184,166,0.08)' }]}>
                  <Svg width={17} height={17} {...ICON_PROPS} stroke="#14b8a6" strokeWidth={1.75}>
                    <Rect x={3} y={7} width={18} height={13} rx={2} />
                    <Path d="M3 7l2-3h5l1.5 2H19a2 2 0 0 1 2 2" />
                  </Svg>
                </View>
                <View style={styles.capBody}>
                  <Text style={styles.capTitle}>Project Workspaces</Text>
                  <Text style={styles.capDesc}>
                    Create isolated environments per project with dedicated agents, repositories,
                    and per-team access controls.
                  </Text>
                  <Text style={styles.capTag}>Projects · Environments · Access control</Text>
                </View>
              </View>

              <View style={styles.capRow}>
                <View style={[styles.capIcon, { backgroundColor: 'rgba(139,92,246,0.08)' }]}>
                  <Svg width={17} height={17} {...ICON_PROPS} stroke="#8b5cf6" strokeWidth={1.75}>
                    <Path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <Path d="M2 17l10 5 10-5" />
                    <Path d="M2 12l10 5 10-5" />
                  </Svg>
                </View>
                <View style={styles.capBody}>
                  <Text style={styles.capTitle}>AI Agents</Text>
                  <Text style={styles.capDesc}>
                    Deploy and orchestrate AI agents across workflows with full audit trails and
                    human-in-the-loop controls.
                  </Text>
                  <Text style={styles.capTag}>Agents · Orchestration · Audit</Text>
                </View>
              </View>

              <View style={[styles.capRow, styles.capRowLast]}>
                <View style={[styles.capIcon, { backgroundColor: 'rgba(56,189,248,0.10)' }]}>
                  <Svg width={17} height={17} {...ICON_PROPS} stroke="#38bdf8" strokeWidth={1.75}>
                    <Circle cx={18} cy={18} r={3} />
                    <Circle cx={6} cy={6} r={3} />
                    <Path d="M13 6h3a2 2 0 0 1 2 2v7" />
                    <Path d="M11 18H8a2 2 0 0 1-2-2V9" />
                  </Svg>
                </View>
                <View style={styles.capBody}>
                  <Text style={styles.capTitle}>Git Integration</Text>
                  <Text style={styles.capDesc}>
                    Connect your GitHub org via App — every member inherits repo access
                    automatically, no personal tokens needed.
                  </Text>
                  <Text style={styles.capTag}>GitHub · Repos · Auto-access</Text>
                </View>
              </View>
            </LinearGradient>

            <View style={styles.orgUrl}>
              <LinearGradient
                colors={['rgba(14,96,255,0.28)', 'rgba(14,96,255,0)']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0.8, y: 0.5 }}
                style={StyleSheet.absoluteFillObject}
                pointerEvents="none"
              />
              <View style={styles.ouEyebrow}>
                <Svg width={16} height={16} {...ICON_PROPS} stroke="#60a5fa" strokeWidth={1.75}>
                  <Path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <Path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </Svg>
                <Text style={styles.ouLabel}>Your organization link</Text>
              </View>
              <Text style={styles.ouTitle}>Share with your team</Text>
              <Text style={styles.ouDesc}>
                Anyone with this link can sign in directly — no individual invite emails needed for
                each member.
              </Text>
              <View style={styles.urlBox}>
                <Text style={styles.urlText}>{'{{org_url}}'}</Text>
                <View style={styles.copyChip}>
                  <Svg width={11} height={11} {...ICON_PROPS} stroke="#93c5fd" strokeWidth={2}>
                    <Rect x={9} y={9} width={13} height={13} rx={2} />
                    <Path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </Svg>
                  <Text style={styles.copyChipText}>Copy</Text>
                </View>
              </View>
              <Text style={styles.ouNote}>
                Link is private to your org. Revoke or regenerate anytime from admin settings.
              </Text>
            </View>
          </View>
        </View>

        {/* NEXT STEPS */}
        <View style={styles.nextSteps}>
          <View style={styles.nsHeader}>
            <Text style={styles.nsTitle}>Recommended next steps</Text>
            <View style={styles.nsLine} />
          </View>
          <View style={styles.stepsGrid}>
            <LinearGradient
              colors={['rgba(14,96,255,0.25)', 'rgba(14,96,255,0.1)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.stepsConnector}
              pointerEvents="none"
            />
            <View style={styles.stepItem}>
              <View style={styles.stepNode}>
                <Text style={styles.stepN}>01</Text>
              </View>
              <Text style={styles.stepTitle}>Invite Your Team</Text>
              <Text style={styles.stepDesc}>
                Share the org link or send invites from the Members panel.
              </Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepNode}>
                <Text style={styles.stepN}>02</Text>
              </View>
              <Text style={styles.stepTitle}>Create Teams</Text>
              <Text style={styles.stepDesc}>Organize by function and assign roles to scope access.</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepNode}>
                <Text style={styles.stepN}>03</Text>
              </View>
              <Text style={styles.stepTitle}>Connect GitHub</Text>
              <Text style={styles.stepDesc}>Link your GitHub org for seamless repo access.</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepNode}>
                <Text style={styles.stepN}>04</Text>
              </View>
              <Text style={styles.stepTitle}>Deploy Agents</Text>
              <Text style={styles.stepDesc}>
                Configure your first AI agents from the Agents tab.
              </Text>
            </View>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.footerTop}>
            <View style={styles.footerBrand}>
              <LinearGradient
                colors={['#002ad7', '#5a8aff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.footerMark}
              >
                <Svg
                  width={13}
                  height={13}
                  {...ICON_PROPS}
                  stroke="rgba(255,255,255,0.92)"
                  strokeWidth={2}
                >
                  <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </Svg>
              </LinearGradient>
              <Text style={styles.footerName}>Xccelera · XCore</Text>
            </View>
            <View style={styles.socialRow}>
              <View
                style={styles.socialLink}
                accessibilityRole="link"
                accessibilityLabel="LinkedIn"
                onTouchEnd={() => openLink('https://linkedin.com/company/xccelera')}
              >
                <Svg width={13} height={13} {...ICON_PROPS} stroke="#0a66c2" strokeWidth={1.75}>
                  <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <Rect x={2} y={9} width={4} height={12} />
                  <Circle cx={4} cy={4} r={2} />
                </Svg>
              </View>
              <View
                style={styles.socialLink}
                accessibilityRole="link"
                accessibilityLabel="X (Twitter)"
                onTouchEnd={() => openLink('https://twitter.com/xccelera')}
              >
                <Svg width={12} height={12} {...ICON_PROPS} stroke="#0f172a" strokeWidth={1.75}>
                  <Path d="M4 4l16 16" />
                  <Path d="M4 20L12 12 20 4" />
                </Svg>
              </View>
              <View
                style={styles.socialLink}
                accessibilityRole="link"
                accessibilityLabel="GitHub"
                onTouchEnd={() => openLink('https://github.com/xccelera')}
              >
                <Svg width={13} height={13} {...ICON_PROPS} stroke="#1b1f23" strokeWidth={1.75}>
                  <Path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </Svg>
              </View>
            </View>
          </View>

          <View style={styles.footerLinks}>
            <Text style={styles.footerLink} onPress={() => openLink('{{portal_url}}')}>
              Portal
            </Text>
            <Text style={styles.footerLink} onPress={() => openLink('https://docs.xccelera.ai')}>
              Docs
            </Text>
            <Text style={styles.footerLink} onPress={() => openLink('https://xccelera.ai/status')}>
              Status
            </Text>
            <Text style={styles.footerLink} onPress={() => openLink('https://xccelera.ai/privacy')}>
              Privacy
            </Text>
            <Text style={styles.footerLink} onPress={() => openLink('https://xccelera.ai/terms')}>
              Terms
            </Text>
            <Text style={styles.footerLink} onPress={() => openLink('{{unsubscribe_url}}')}>
              Unsubscribe
            </Text>
          </View>

          <View style={styles.footerRule} />

          <Text style={styles.footerLegal}>
            You received this because you created an organization on XCore with{' '}
            <Text style={styles.footerStrong}>{'{{admin_email}}'}</Text>. Data is encrypted at rest
            and in transit per our{' '}
            <Text style={styles.footerLegalLink} onPress={() => openLink('https://xccelera.ai/privacy')}>
              Privacy Policy
            </Text>{' '}
            and{' '}
            <Text style={styles.footerLegalLink} onPress={() => openLink('https://xccelera.ai/terms')}>
              Terms
            </Text>
            . If this wasn't you, contact{' '}
            <Text
              style={styles.footerLegalLink}
              onPress={() => openLink('mailto:security@xccelera.ai')}
            >
              security@xccelera.ai
            </Text>
            .  © 2026 Xccelera, Inc. · 548 Market St, San Francisco, CA 94104
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapperContent: {
    paddingTop: s(9),
    paddingHorizontal: s(4),
    paddingBottom: s(12),
  },
  container: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    borderRadius: s(5),
    overflow: 'hidden',
    backgroundColor: colors.surface,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadowColor,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.13,
        shadowRadius: 48,
      },
      android: { elevation: 8 },
      default: {},
    }),
  },

  // hero
  hero: {
    overflow: 'hidden',
  },
  heroWaves: {
    position: 'absolute',
    bottom: 0,
    right: -30,
    width: 320,
    height: 180,
  },
  heroInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: s(9),
    paddingBottom: 42,
    paddingHorizontal: s(6),
    gap: s(5),
  },
  heroCopy: {
    flex: 1,
    minWidth: 0,
  },
  heroLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  heroLogoImg: {
    height: 28,
    width: 140,
  },
  heroEyebrow: {
    textTransform: 'uppercase',
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1.7,
    color: colors.primary,
    marginBottom: 14,
    fontFamily: mono('700'),
    lineHeight: 14,
  },
  heroH1: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
    color: '#07112b',
    marginBottom: s(3),
    letterSpacing: -0.4,
    fontFamily: sans('800'),
  },
  brand: {
    color: colors.primary,
  },
  heroLiveLabel: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(14,96,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(14,96,255,0.22)',
    borderRadius: 999,
    paddingVertical: s(1),
    paddingLeft: s(2),
    paddingRight: s(3),
    marginBottom: 14,
  },
  liveText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
    letterSpacing: 0.55,
    fontFamily: mono('600'),
    lineHeight: 15,
  },
  heroSub: {
    fontSize: 13,
    lineHeight: 22,
    color: '#3d5a80',
    fontFamily: sans('400'),
  },
  heroRight: {
    width: 120,
    borderLeftWidth: 1.5,
    borderLeftColor: 'rgba(14,96,255,0.28)',
    paddingLeft: s(5),
    alignSelf: 'center',
  },
  heroPillars: {
    marginBottom: 14,
  },
  heroPillar: {
    textTransform: 'uppercase',
    paddingVertical: 5,
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: colors.primary,
    fontFamily: mono('700'),
    lineHeight: 14,
  },
  heroRuleH: {
    height: 2,
    width: 32,
    marginBottom: s(3),
    borderRadius: 2,
  },
  heroTagline: {
    textTransform: 'uppercase',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.9,
    color: '#4a6ea8',
    fontFamily: mono('700'),
    lineHeight: 16,
  },
  statusStrip: {
    paddingVertical: 11,
    paddingHorizontal: s(6),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  statusPulse: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
  },
  statusLabel: {
    flex: 1,
    fontSize: 11.5,
    fontWeight: '600',
    color: 'rgba(224,242,254,0.9)',
    letterSpacing: 0.35,
    fontFamily: mono('600'),
    lineHeight: 16,
  },

  // intro
  intro: {
    backgroundColor: colors.surface,
    paddingTop: 38,
    paddingBottom: s(9),
    paddingHorizontal: s(6),
  },
  greeting: {
    fontSize: 15.5,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 10,
    fontFamily: sans('600'),
    lineHeight: 22,
  },
  bodyPara: {
    fontSize: 13.5,
    lineHeight: 24,
    color: '#475569',
    marginBottom: s(5),
    fontFamily: sans('400'),
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  strongDark: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontFamily: sans('700'),
  },
  ctaRow: {
    marginTop: s(6),
    marginBottom: s(5),
    alignItems: 'flex-start',
  },
  ctaBtn: {
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: { elevation: 8 },
      default: {},
    }),
  },
  ctaBtnText: {
    color: colors.textInverse,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.14,
    fontFamily: sans('700'),
    lineHeight: 20,
  },
  ctaSubTxt: {
    fontSize: 12,
    color: colors.textDisabled,
    marginTop: 10,
    fontFamily: sans('400'),
    lineHeight: 17,
  },
  ctaLink: {
    color: colors.primary,
    fontWeight: '600',
    fontFamily: sans('600'),
  },

  // mid
  midWrap: {
    backgroundColor: colors.card,
    paddingTop: s(5),
    paddingHorizontal: s(7),
    paddingBottom: s(6),
  },
  midCard: {
    borderRadius: s(4),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(14,96,255,0.12)',
  },
  capSection: {
    paddingTop: s(7),
    paddingHorizontal: 30,
    paddingBottom: s(6),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14,96,255,0.1)',
  },
  capEyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: s(5),
  },
  capLine: {
    flex: 1,
    height: 1,
  },
  capLabel: {
    textTransform: 'uppercase',
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: colors.info,
    fontFamily: mono('700'),
    lineHeight: 14,
  },
  capRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: s(4),
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14,96,255,0.08)',
  },
  capRowFirst: {
    paddingTop: 0,
  },
  capRowLast: {
    borderBottomWidth: 0,
    paddingBottom: 0,
  },
  capIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  capBody: {
    flex: 1,
  },
  capTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0c1a3a',
    marginBottom: 3,
    fontFamily: sans('700'),
    lineHeight: 18,
  },
  capDesc: {
    fontSize: 12,
    lineHeight: 19,
    color: '#4a6485',
    marginBottom: 5,
    fontFamily: sans('400'),
  },
  capTag: {
    textTransform: 'uppercase',
    fontSize: 9.5,
    fontWeight: '600',
    letterSpacing: 0.76,
    color: 'rgba(59,130,246,0.7)',
    fontFamily: mono('600'),
    lineHeight: 14,
  },

  // org url
  orgUrl: {
    backgroundColor: '#060c1a',
    overflow: 'hidden',
    paddingVertical: s(7),
    paddingHorizontal: 30,
  },
  ouEyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
    marginBottom: s(2),
  },
  ouLabel: {
    textTransform: 'uppercase',
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 1.14,
    color: '#60a5fa',
    fontFamily: mono('700'),
    lineHeight: 14,
  },
  ouTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.border,
    marginBottom: 5,
    fontFamily: sans('700'),
    lineHeight: 20,
  },
  ouDesc: {
    fontSize: 12.5,
    color: '#7b9ec9',
    lineHeight: 20,
    marginBottom: s(4),
    fontFamily: sans('400'),
  },
  urlBox: {
    backgroundColor: 'rgba(14,96,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(90,138,255,0.35)',
    borderRadius: 10,
    paddingVertical: s(3),
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: s(3),
  },
  urlText: {
    flex: 1,
    fontFamily: mono('400'),
    fontSize: 12,
    color: '#93c5fd',
    lineHeight: 18,
  },
  copyChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(14,96,255,0.25)',
    borderWidth: 1,
    borderColor: 'rgba(90,138,255,0.45)',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 11,
  },
  copyChipText: {
    fontSize: 10.5,
    fontWeight: '600',
    color: '#93c5fd',
    fontFamily: mono('600'),
    lineHeight: 15,
  },
  ouNote: {
    fontSize: 11,
    color: '#3d5a7a',
    marginTop: 10,
    lineHeight: 16,
    fontFamily: sans('400'),
  },

  // next steps
  nextSteps: {
    backgroundColor: colors.surface,
    paddingTop: 34,
    paddingBottom: s(9),
    paddingHorizontal: s(6),
  },
  nsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(3),
    marginBottom: 26,
  },
  nsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
    fontFamily: sans('700'),
    lineHeight: 18,
  },
  nsLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  stepsGrid: {
    flexDirection: 'row',
  },
  stepsConnector: {
    position: 'absolute',
    top: 13,
    left: '12.5%',
    right: '12.5%',
    height: 1,
  },
  stepItem: {
    flex: 1,
    paddingRight: s(3),
  },
  stepNode: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: 'rgba(14,96,255,0.3)',
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: s(3),
  },
  stepN: {
    fontSize: 10.5,
    fontWeight: '700',
    color: colors.primary,
    fontFamily: mono('700'),
    lineHeight: 15,
  },
  stepTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: s(1),
    lineHeight: 16,
    fontFamily: sans('700'),
  },
  stepDesc: {
    fontSize: 11,
    lineHeight: 17,
    color: colors.textSecondary,
    fontFamily: sans('400'),
  },

  // footer
  footer: {
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 26,
    paddingHorizontal: s(6),
  },
  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: s(3),
    marginBottom: s(4),
  },
  footerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(2),
  },
  footerMark: {
    width: 26,
    height: 26,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textPrimary,
    fontFamily: sans('700'),
    lineHeight: 18,
  },
  socialRow: {
    flexDirection: 'row',
    gap: s(2),
  },
  socialLink: {
    width: 28,
    height: 28,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#dde4ee',
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: s(4),
    marginBottom: 14,
  },
  footerLink: {
    fontSize: 11.5,
    color: colors.textSecondary,
    fontFamily: sans('400'),
    lineHeight: 16,
  },
  footerRule: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 14,
  },
  footerLegal: {
    fontSize: 10.5,
    color: colors.textDisabled,
    lineHeight: 18,
    fontFamily: sans('400'),
  },
  footerStrong: {
    fontWeight: '700',
    fontFamily: sans('700'),
  },
  footerLegalLink: {
    color: colors.textSecondary,
  },
});
