import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from '../styles/userSettingPagesStyles'

export default function TOS() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Terms of Service</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.sectionTitle}>Effective Date: [7/10/2024]</Text>
                <Text style={styles.sectionTitle}>1. Introduction</Text>
                <Text style={styles.paragraph}>
                    Welcome to Companion (also referenced as 'the App'). These Terms of Service (“Terms”) govern your access to and use of the App, which is owned and operated by [Companion] (“Company,” “we,” “us,” or “our”). By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree with these Terms, you must not use the App.
                </Text>
                <Text style={styles.sectionTitle}>2. Eligibility</Text>
                <Text style={styles.paragraph}>
                    To use the App, you must be at least 18 years old. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                </Text>
                <Text style={styles.sectionTitle}>3. Account Registration</Text>
                <Text style={styles.paragraph}>
                    You must create an account to use the App by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or security breach.
                </Text>
                <Text style={styles.sectionTitle}>4. Use of the App</Text>
                <Text style={styles.paragraph}>
                    The App is a platform to connect users for social purposes. You agree to use the App in compliance with all applicable laws and regulations, and you will not:
                </Text>
                <Text style={styles.paragraph}>
                    - Use the App for any unlawful, harmful, or fraudulent purpose.
                    {"\n"}- Impersonate any person or entity or misrepresent yourself.
                    {"\n"}- Harass, abuse, or harm other users.
                    {"\n"}- Share or post inappropriate, offensive, or illegal content.
                    {"\n"}- Collect or store personal data about other users without their consent.
                </Text>
                <Text style={styles.sectionTitle}>5. User Conduct</Text>
                <Text style={styles.paragraph}>
                    You are solely responsible for your interactions with other users. We do not conduct background checks or verify the identities of users. Companion is not responsible for the actions or conduct of any user. You agree to take reasonable precautions in all interactions with other users, especially if you decide to meet in person.
                </Text>
                <Text style={styles.sectionTitle}>6. User-Generated Content</Text>
                <Text style={styles.paragraph}>
                    You may post, upload, or share content (such as photos, messages, and profile information) on the App (“User Content”). By submitting User Content, you:
                </Text>
                <Text style={styles.paragraph}>
                    - Grant us a non-exclusive, royalty-free, worldwide, transferable license to use, reproduce, distribute, display, and perform the content in connection with the App.
                    {"\n"}- Warrant that you own or have the right to submit the content and that it does not infringe upon any third party’s rights or violate any laws.
                </Text>
                <Text style={styles.paragraph}>
                    We reserve the right to review, remove, or modify any content that violates these Terms or is otherwise inappropriate at our discretion.
                </Text>
                <Text style={styles.sectionTitle}>7. Subscription and Payments</Text>
                <Text style={styles.paragraph}>
                    Some features of the App may require a paid subscription. By purchasing a subscription, you agree to pay the applicable fees. Subscriptions automatically renew unless canceled prior to the renewal date. We may change the subscription fees at any time, but we will notify you before any price change.
                </Text>
                <Text style={styles.sectionTitle}>8. Termination</Text>
                <Text style={styles.paragraph}>
                    We reserve the right to suspend or terminate your account at our discretion if you violate these Terms or engage in any conduct that we deem inappropriate. Upon termination, your access to the App will cease, and any licenses granted to you under these Terms will be revoked.
                </Text>
                <Text style={styles.sectionTitle}>9. Disclaimer of Warranties</Text>
                <Text style={styles.paragraph}>
                    The App is provided on an “as is” and “as available” basis without any warranties, either express or implied. We do not guarantee that the App will be error-free, secure, or available at all times. To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </Text>
                <Text style={styles.sectionTitle}>10. Limitation of Liability</Text>
                <Text style={styles.paragraph}>
                    To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App, including but not limited to damages for loss of data, loss of profits, or emotional distress. Our total liability to you for any claim arising out of or relating to these Terms or your use of the App shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
                </Text>
                <Text style={styles.sectionTitle}>11. Indemnification</Text>
                <Text style={styles.paragraph}>
                    You agree to indemnify and hold harmless [Company Name], its affiliates, and their officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including legal fees, arising out of or in any way related to your use of the App, your violation of these Terms, or your violation of any third-party rights.
                </Text>
                <Text style={styles.sectionTitle}>12. Governing Law</Text>
                <Text style={styles.paragraph}>
                    These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles. Any disputes arising out of or related to these Terms or the App shall be resolved exclusively in the courts located in [Insert Jurisdiction].
                </Text>
                <Text style={styles.sectionTitle}>13. Modifications to Terms</Text>
                <Text style={styles.paragraph}>
                    We may revise these Terms from time to time at our discretion. We will notify you of any material changes by posting the updated Terms on the App. Your continued use of the App after the changes become effective constitutes your acceptance of the revised Terms.
                </Text>
                <Text style={styles.sectionTitle}>14. Contact Us</Text>
                <Text style={styles.paragraph}>
                    If you have any questions or concerns regarding these Terms or the App, please contact us at [Insert Contact Information].
                </Text>
                <Text style={styles.paragraph}>
                    Last Updated: [Insert Date]
                </Text>
            </View>
        </ScrollView>
    );
}