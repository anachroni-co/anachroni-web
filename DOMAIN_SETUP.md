# Custom Domain Configuration for anachroni.co

## ✅ Files Configured

1. **public/CNAME** - Contains `anachroni.co`
2. **vite.config.ts** - Base path set to `/` for root domain

## 📋 DNS Configuration Steps

You need to configure these DNS records with your domain provider (GoDaddy, Namecheap, Cloudflare, etc.):

### For Apex Domain (anachroni.co)

Add these **4 A records** pointing to GitHub Pages IPs:

```
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

### For WWW Subdomain (www.anachroni.co)

Add this **CNAME record**:

```
Type   Name  Value
CNAME  www   anachroni-co.github.io
```

## 🔧 GitHub Configuration Steps

### Step 1: Configure Custom Domain in GitHub

1. Go to: https://github.com/anachroni-co/anachroni/settings/pages
2. Under **"Custom domain"**:
   - Enter: `anachroni.co`
   - Click **Save**
3. Wait for DNS check (can take a few minutes to 24 hours)

### Step 2: Enable HTTPS

Once DNS check passes (green checkmark):
1. Check the box: **"Enforce HTTPS"**
2. GitHub will automatically provision an SSL certificate

## 🌐 DNS Providers Quick Links

### Popular DNS Providers Configuration:

#### Cloudflare
1. Dashboard → DNS → Records
2. Add the A and CNAME records above
3. Set Proxy status to "DNS only" (gray cloud) for GitHub Pages
4. TTL: Auto or 1 hour

#### GoDaddy
1. Domain Settings → DNS Management
2. Add the A records (@ = your domain)
3. Add CNAME record (www → anachroni-co.github.io)

#### Namecheap
1. Domain List → Manage → Advanced DNS
2. Add the A records
3. Add CNAME record

#### Google Domains
1. DNS → Custom records
2. Add the A records
3. Add CNAME record

## ⏱️ Propagation Time

- **DNS propagation**: 5 minutes to 48 hours (usually 1-2 hours)
- **GitHub DNS check**: 1-10 minutes after DNS propagates
- **SSL certificate**: Automatic after DNS check passes

## ✅ Verification Steps

### 1. Check DNS Propagation

```bash
# Check A records
dig anachroni.co +short

# Should return GitHub IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME record
dig www.anachroni.co +short

# Should return: anachroni-co.github.io
```

Online tools:
- https://dnschecker.org/
- https://www.whatsmydns.net/

### 2. Test Your Site

Once DNS propagates:
- http://anachroni.co (redirects to HTTPS after setup)
- https://anachroni.co (after HTTPS enabled)
- https://www.anachroni.co (redirects to anachroni.co)

## 🔒 Security & Performance

After setup is complete:

### Recommended Settings:

1. **Enable HTTPS** (enforces secure connections)
2. **Cloudflare (Optional)**:
   - Add Cloudflare as nameserver for:
   - Free SSL
   - DDoS protection
   - CDN caching
   - Better performance

### Cloudflare Setup (Optional):

1. Sign up at https://cloudflare.com
2. Add your domain
3. Update nameservers at your registrar to Cloudflare's
4. Configure Page Rules for caching
5. Enable "Always Use HTTPS"

## 🚨 Troubleshooting

### "Domain is improperly configured"
- Wait longer (DNS can take up to 48h)
- Verify A records point to correct GitHub IPs
- Check CNAME file exists in repository

### "Certificate provisioning failed"
- Ensure DNS is fully propagated
- Try removing and re-adding the domain
- Wait 24 hours and try again

### Site shows 404
- Verify CNAME file contains only `anachroni.co`
- Check GitHub Pages is enabled
- Verify deployment workflow ran successfully

### Mixed content warnings
- Ensure all assets use HTTPS or relative URLs
- Check for hardcoded http:// links

## 📊 Expected Timeline

```
Now          → Push CNAME file (✅ Done)
+5 min       → Deployment completes
+15 min      → Configure DNS records
+1-2 hours   → DNS propagates
+5 min       → Configure in GitHub Settings
+10 min      → DNS check passes
+30 min      → SSL certificate issued
+1 min       → Site live at https://anachroni.co 🎉
```

## 📝 Current Status Checklist

- [x] CNAME file created in repository
- [x] vite.config.ts configured for root path
- [ ] DNS A records configured
- [ ] DNS CNAME record configured
- [ ] Custom domain set in GitHub Settings
- [ ] DNS check passed
- [ ] HTTPS enabled
- [ ] Site accessible at anachroni.co

## 🔗 Useful Links

- GitHub Pages Docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- DNS Check Tool: https://dnschecker.org/
- SSL Test: https://www.ssllabs.com/ssltest/
- Repository Settings: https://github.com/anachroni-co/anachroni/settings/pages
