const repoData = [
  {
  "name": "hsd",
  "url": "https://github.com/handshake-org/hsd",
  "description": "Handshake Daemon & Full Node",
  "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hnsd",
    "url": "https://github.com/handshake-org/hnsd",
    "description": "Handshake SPV name resolver",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-client",
    "url": "https://github.com/handshake-org/hs-client",
    "description": "REST, websocket, and RPC client for hsd",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "HIPs",
    "url": "https://github.com/handshake-org/HIPs",
    "description": "Handshake Improvement Proposals",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "handshake-org.github.io",
    "url": "https://github.com/handshake-org/handshake-org.github.io",
    "description": "Handshake developer documentation site",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-airdrop",
    "url": "https://github.com/handshake-org/hs-airdrop",
    "description": "Decentralized airdrop to open source developers",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "handshake-web",
    "url": "https://github.com/handshake-org/handshake-web",
    "description": "Handshake.org static website",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hsd-ledger",
    "url": "https://github.com/handshake-org/hsd-ledger",
    "description": "Javascript client library for the Handshake Ledger application",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "ledger-app-hns",
    "url": "https://github.com/handshake-org/ledger-app-hns",
    "description": "Handshake application for the Ledger Nanos S",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "bfilter",
    "url": "https://github.com/handshake-org/bfilter",
    "description": "Bloom filters for javascript",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "goosig",
    "url": "https://github.com/handshake-org/goosig",
    "description": "Anonymous RSA signatures",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-names",
    "url": "https://github.com/handshake-org/hs-names",
    "description": "Pre-reserved Handshake Names",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "faucet-tool",
    "url": "https://github.com/handshake-org/faucet-tool",
    "description": "A tool to generate mnemonic seeds, keys and addresses for the Handshake Faucet",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-client",
    "url": "https://github.com/handshake-org/hs-client",
    "description": "REST, websocket, and RPC client for hsd",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-names-2023",
    "url": "https://github.com/handshake-org/hs-names-2023",
    "description": "Handshake 2023 soft fork updated locked up names.",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "urkel",
    "url": "https://github.com/handshake-org/urkel",
    "description": "Cryptographically provable database (i.e. an urkel tree)",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-rosetta",
    "url": "https://github.com/handshake-org/hs-rosetta",
    "description": "Handshake integration with Coinbase Rosetta",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-miner",
    "url": "https://github.com/handshake-org/hs-miner",
    "description": "Mining infrastructure for handshake",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "bcfg",
    "url": "https://github.com/handshake-org/bcfg",
    "description": "Config parser for bcoin",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "bns",
    "url": "https://github.com/handshake-org/bns",
    "description": "Recursive DNS server and resolver for node.js",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hs-tree-data",
    "url": "https://github.com/handshake-org/hs-tree-data",
    "description": "Airdrop/faucet merkle trees + encrypted nonces",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "bcuckoo",
    "url": "https://github.com/handshake-org/bcuckoo",
    "description": "Cuckoo Cycle in pure javascript",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hndshkBot",
    "url": "https://github.com/handshake-org/hndshkBot",
    "description": "IRC Bot for developer faucet",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "libhns",
    "url": "https://github.com/handshake-org/libhns",
    "description": "C library for resolving handshake names (fork of c-ares)",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "hsdspv",
    "url": "https://github.com/pinheadmz/hsdspv",
    "description": "A work-in-progress build process for Handshake SPV resolver executables",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "hip2-server",
    "url": "https://github.com/pinheadmz/hip2-server",
    "description": "Derive new receive address from xpub with every request",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "handout",
    "url": "https://github.com/pinheadmz/handout",
    "description": "A combination authoritative nameserver and webserver for Handshake, with DNSSEC and DANE",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "hs-anyone",
    "url": "https://github.com/pinheadmz/hs-anyone",
    "description": "A nodejs package to pay the fee for an \"anyone can\" transaction",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "thenamesdontresolve",
    "url": "https://github.com/pinheadmz/thenamesdontresolve",
    "description": "https://thenamesdontresolveinwhatwecalltheinternet",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "proofofconcept",
    "url": "https://github.com/pinheadmz/proofofconcept",
    "description": "proofofconcept",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "holdmyhand",
    "url": "https://github.com/pinheadmz/holdmyhand",
    "description": "A plugin for hsd that expands the root name server blocklist to protect the user from looking up dangerous top-level domains.",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "pinkie",
    "url": "https://github.com/pinheadmz/pinkie",
    "description": "A decentralized, non-custodial web-wallet for Handshake",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "goshake",
    "url": "https://github.com/pinheadmz/goshake",
    "description": "Handshake (HNS) tools written in Go",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "mobilehsd",
    "url": "https://github.com/pinheadmz/mobilehsd",
    "description": "Run a Handshake SPV node in a web browser",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "cert-auth-test",
    "url": "https://github.com/pinheadmz/cert-auth-test",
    "description": "Generate CA-signed cert for a domain with local authority",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "dnslive-bloghost",
    "url": "https://github.com/pinheadmz/dnslive-bloghost",
    "description": "Cient to post on DNS Live's Blog with only your HNS Name as authentication",
    "author": "Matthew, Zipkin"
  },
  {
    "name": "fistbump",
    "url": "https://github.com/HandshakeAlliance/fistbump",
    "description": "An open source browser extension for the Handshake network",
    "author": "HandshakeAlliance, Alliance"
  },
  {
    "name": "handshakeacademy",
    "url": "https://github.com/HandshakeAlliance/handshakeacademy.org",
    "description": "The all-encompassing learning tool for Handshake",
    "author": "HandshakeAlliance, Alliance"
  },
  {
    "name": "hindexer",
    "url": "https://github.com/HandshakeAlliance/hindexer",
    "description": "Handshake Daemon that allows the user to index the entire chain",
    "author": "HandshakeAlliance, Alliance"
  },
  {
    "name": "nomenclate",
    "url": "https://github.com/HandshakeAlliance/nomenclate",
    "description": "Indexing server for Handshake",
    "author": "HandshakeAlliance, Alliance"
  },
  {
    "name": "hstratum",
    "url": "https://github.com/HandshakeAlliance/hstratum",
    "description": "A segwit-capable stratum server on top of hsd",
    "author": "HandshakeAlliance, Alliance"
  },
  {
    "name": "moniker-js",
    "url": "https://github.com/HandshakeAlliance/moniker-js",
    "description": "A library that provides a wrapper around Handshake domains",
    "author": "HandshakeAlliance, Alliance"
  },
  {
    "name": "testnet-faucet",
    "url": "https://github.com/HandshakeAlliance/testnet-faucet",
    "description": "Basic testnet faucet that distributes tHNS to whoever enters their address",
    "author": "HandshakeAlliance, Alliance"
  },
  {
    "name": "hsd-nethealth-status",
    "url": "https://github.com/nodech/hsd-nethealth-status",
    "description": "Handshake network network status",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hsd-nethealth-web",
    "url": "https://github.com/nodech/hsd-nethealth-web",
    "description": "Handshake network network status",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hsd-utils",
    "url": "https://github.com/nodech/hsd-utils",
    "description": "hsd-utils",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hsd-nethealth",
    "url": "https://github.com/nodech/hsd-nethealth",
    "description": "HSD network health checks",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "go-hsd-utils",
    "url": "https://github.com/nodech/go-hsd-utils",
    "description": "Handshake Golang utilities",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hs-client",
    "url": "https://github.com/nodech/hs-client",
    "description": "REST and RPC clients for handshake",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hs-lockup-names-tmp",
    "url": "https://github.com/nodech/hs-lockup-names-tmp",
    "description": "Handshake reserved names",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hsd-bweb-log",
    "url": "https://github.com/nodech/hsd-bweb-log",
    "description": "Handshake bweb logger",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hs-tools",
    "url": "https://github.com/nodech/hs-tools",
    "description": "hs-tools",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hsd-heapdump",
    "url": "https://github.com/nodech/hsd-heapdump",
    "description": "HSD Heapdump",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "hnsdx",
    "url": "https://github.com/nodech/hnsdx",
    "description": "SPV resolver daemon for the Handshake network",
    "author": "Nodar, Chkuaselidze, Nodech"
  },
  {
    "name": "sdane-proofs",
    "url": "https://github.com/htools-org/sdane-proofs",
    "description": "Serves proofs required for Stateless DANE (HIP-0017)",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "stateless-dane",
    "url": "https://github.com/htools-org/stateless-dane",
    "description": "A library/utility for Stateless DANE certificates (HIP-0017)",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "htools-blog",
    "url": "https://github.com/htools-org/htools-blog",
    "description": "Handshake Tools Blog for guides, articles and how-tos",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "htools-dane-ca",
    "url": "https://github.com/htools-org/htools-dane-ca",
    "description": "Handshake Tools DANE CA",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "htools-website",
    "url": "https://github.com/htools-org/htools-website",
    "description": "A collection of Handshake-related things (apps, services, products, etc.)",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "htools-calendar",
    "url": "https://github.com/htools-org/htools-calendar",
    "description": "HTools Calendar",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "htools-sitecheck",
    "url": "https://github.com/htools-org/htools-sitecheck",
    "description": "Test a handshake domain for issues with DNS, DNSSEC and DANE.",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "fork-explorer",
    "url": "https://github.com/htools-org/fork-explorer",
    "description": "Fork Explorer let's you see the status of a BIP9-style softfork",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "hnsnodes",
    "url": "https://github.com/htools-org/hnsnodes",
    "description": "Hnsnodes is a fork of Bitnodes modified to work with the Handshake network",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "stems-ens",
    "url": "https://github.com/htools-org/stems-ens",
    "description": "stems-ens",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "tld-registrar-check",
    "url": "https://github.com/htools-org/tld-registrar-check",
    "description": "Small page that finds all registrars where a TLD is listed",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "wireshark-handshake-protocol",
    "url": "https://github.com/htools-org/wireshark-handshake-protocol",
    "description": "A dissector for Wireshark written in Lua that decodes Handshake packets",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "htools-id-manager",
    "url": "https://github.com/htools-org/htools-id-manager",
    "description": "An Identity Manager that uses handshake-login and works with all supported strategies",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "airdrop-claim-check",
    "url": "https://github.com/htools-org/airdrop-claim-check",
    "description": "Handshake Airdrop Claim Check",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "handshake-login",
    "url": "https://github.com/htools-org/handshake-login",
    "description": "JavaScript library for authentication with Handshake names",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "sample-hs-login-server",
    "url": "https://github.com/htools-org/sample-hs-login-server",
    "description": "Sample Handshake Login Server",
    "author": "Rithvik, Vibhu"
  },
  {
    "name": "rsd",
    "url": "https://github.com/UrkelLabs/rsd",
    "description": "Handshake Rust Daemon",
    "author": "Urkellabs, Urkel"
  },
  {
    "name": "sia",
    "url": "https://github.com/UrkelLabs/sia",
    "description": "Decentralized cloud storage platform",
    "author": "Urkellabs, Urkel"
  },
  {
    "name": "handshake-client",
    "url": "https://github.com/UrkelLabs/handshake-client",
    "description": "Rust client library for the Handshake daemon's JSON-RPC API",
    "author": "Urkellabs, Urkel"
  },
  {
    "name": "brontide",
    "url": "https://github.com/UrkelLabs/brontide",
    "description": "Implementation of the Handshake and Lightning Network secure messaging protocol",
    "author": "Urkellabs, Urkel"
  },
  {
    "name": "hns-id-mm-snap",
    "url": "https://github.com/namebasehq/hns-id-mm-snap",
    "description": "HNS.id MetaMask Snap",
    "author": "namebase, nb"
  },
  {
    "name": "hsd",
    "url": "https://github.com/namebasehq/hsd",
    "description": "Handshake Daemon & Full Node",
    "author": "namebase, nb"
  },
  {
    "name": "namebase-types",
    "url": "https://github.com/namebasehq/namebase-types",
    "description": "Small node.js package to easily check types at runtime",
    "author": "namebase, nb"
  },
  {
    "name": "exchange-api",
    "url": "https://github.com/namebasehq/exchange-api",
    "description": "Easily interact with the Namebase Exchange API in Node.js",
    "author": "namebase, nb"
  },
  {
    "name": "handshake-contracts",
    "url": "https://github.com/namebasehq/handshake-contracts",
    "description": "Decentralized second-level domains (DSLDs) anchored to the Handshake root zone",
    "author": "namebase, nb"
  },
  {
    "name": "hns-id-subgraph",
    "url": "https://github.com/namebasehq/hns-id-subgraph",
    "description": "This Subgraph sources events from the HNS.ID contracts",
    "author": "namebase, nb"
  },
  {
    "name": "gitbook-learning-center",
    "url": "https://github.com/namebasehq/gitbook-learning-center",
    "description": "Resources dedicated to Handshake and Namebase",
    "author": "namebase, nb"
  },
  {
    "name": "awesome-handshake",
    "url": "https://github.com/namebasehq/awesome-handshake",
    "description": "A collection of awesome things regarding the Handshake ecosystem",
    "author": "namebase, nb"
  },
  {
    "name": "uniswap-widgets",
    "url": "https://github.com/namebasehq/uniswap-widgets",
    "description": "Used to provide subsets of the Uniswap Protocol functionality",
    "author": "namebase, nb"
  },
  {
    "name": "dotjs",
    "url": "https://github.com/namebasehq/dotjs",
    "description": "Repo for publicly managing the .JS TLD on Handshake",
    "author": "namebase, nb"
  },
  {
    "name": "wallet-id",
    "url": "https://github.com/namebasehq/wallet-id",
    "description": "White label template for hns.id",
    "author": "namebase, nb"
  },
  {
    "name": "handshake-types",
    "url": "https://github.com/namebasehq/handshake-types",
    "description": "Reference for the shape of Handshake objects",
    "author": "namebase, nb"
  },
  {
    "name": "decentralized-slds",
    "url": "https://github.com/namebasehq/decentralized-slds",
    "description": "Handshake Decentralized SLDs",
    "author": "namebase, nb"
  },
  {
    "name": "ejs-loader",
    "url": "https://github.com/namebasehq/ejs-loader",
    "description": "EJS (Underscore/LoDash Templates) loader for webpack",
    "author": "namebase, nb"
  },
  {
    "name": "gitbook-developer-docs",
    "url": "https://github.com/namebasehq/gitbook-developer-docs",
    "description": "Guide is for developers looking to build apps using Handshake",
    "author": "namebase, nb"
  },
  {
    "name": "sia-handshake-gateway",
    "url": "https://github.com/namebasehq/sia-handshake-gateway",
    "description": "Low-effort sia/handshake gateway that uses DNS/Sia gateways",
    "author": "namebase, nb"
  },
  {
    "name": "punycode.js",
    "url": "https://github.com/namebasehq/punycode.js",
    "description": "Low-level Punycode encoder/decoder without IDNA",
    "author": "namebase, nb"
  },
  {
    "name": "og-image",
    "url": "https://github.com/namebasehq/og-image",
    "description": "Open Graph Image as a Service",
    "author": "namebase, nb"
  },
  {
    "name": "handshake-id-manager",
    "url": "https://github.com/namebasehq/handshake-id-manager",
    "description": "handshake-id-manager",
    "author": "namebase, nb"
  },
  {
    "name": "handshake-oidc",
    "url": "https://github.com/namebasehq/handshake-oidc",
    "description": "Handshake OIDC Provider",
    "author": "namebase, nb"
  },
  {
    "name": "api-documentation",
    "url": "https://github.com/namebasehq/api-documentation",
    "description": "Public documentation for the Namebase exchange and marketplace API",
    "author": "namebase, nb"
  },
  {
    "name": "idna-uts46",
    "url": "https://github.com/namebasehq/idna-uts46",
    "description": "A UTS #46 processing algorithm for IDNA2008 strings",
    "author": "namebase, nb"
  },
  {
    "name": "hdns",
    "url": "https://github.com/namebasehq/hdns",
    "description": "Handshake-capable DNS module for node.js",
    "author": "namebase, nb"
  },
  {
    "name": "nodejs-skynet",
    "url": "https://github.com/namebasehq/nodejs-skynet",
    "description": "Library for integrating Skynet into Node.js applications",
    "author": "namebase, nb"
  },
  {
    "name": "txtdirect",
    "url": "https://github.com/namebasehq/txtdirect",
    "description": "DNS TXT-record based redirects",
    "author": "namebase, nb"
  },
  {
    "name": "decentralized-static",
    "url": "https://github.com/namebasehq/decentralized-static",
    "description": "Serve static websites from Sia and resolve them with Handshake",
    "author": "namebase, nb"
  },
  {
    "name": "/gatsby-plugin-webfonts",
    "url": "https://github.com/namebasehq/gatsby-plugin-webfonts",
    "description": "Gatsby plugin to handle cdn, base64 and self hosted webfonts",
    "author": "namebase, nb"
  },
  {
    "name": "hs-names",
    "url": "https://github.com/namebasehq/hs-names",
    "description": "Pre-reserved Handshake Names",
    "author": "namebase, nb"
  },
  {
    "name": "Handshake-Extension",
    "url": "https://github.com/namebasehq/Handshake-Extension",
    "description": "Chrome addon for browsing Handshake domains",
    "author": "namebase, nb"
  },
  {
    "name": "bcoin",
    "url": "https://github.com/namebasehq/bcoin",
    "description": "Javascript bitcoin library for node.js and browsers",
    "author": "namebase, nb"
  },
  {
    "name": "abstract-buildspec",
    "url": "https://github.com/namebasehq/abstract-buildspec",
    "description": "Helper class to hierarchically generate AWS's buildspec.yml files",
    "author": "namebase, nb"
  },
  {
    "name": "coredns",
    "url": "https://github.com/namebasehq/coredns",
    "description": "CoreDNS is a DNS server that chains plugins",
    "author": "namebase, nb"
  },
  {
    "name": "bdb",
    "url": "https://github.com/namebasehq/bdb",
    "description": "Database for bcoin",
    "author": "namebase, nb"
  },
  {
    "name": "idn-homographs",
    "url": "https://github.com/namebasehq/idn-homographs",
    "description": "Tool to generate all IDN homographs of a set of names (TLDs)",
    "author": "namebase, nb"
  },
  {
    "name": "hs-airdrop",
    "url": "https://github.com/namebasehq/hs-airdrop",
    "description": "Decentralized airdrop to open source developers",
    "author": "namebase, nb"
  },
  {
    "name": "list",
    "url": "https://github.com/namebasehq/list",
    "description": "The Public Suffix List",
    "author": "namebase, nb"
  },
  {
    "name": "simple-hsd-wrapper",
    "url": "https://github.com/namebasehq/simple-hsd-wrapper",
    "description": "Wrapper that makes it a little easier to configure and run an SPV wallet",
    "author": "namebase, nb"
  },
  {
    "name": "Handshake-Extension-Firefox",
    "url": "https://github.com/namebasehq/Handshake-Extension-Firefox",
    "description": "Namebase Handshake Extension",
    "author": "namebase, nb"
  },
  {
    "name": "letsdane",
    "url": "https://github.com/buffrr/letsdane",
    "description": "Experimental way to enable the use of DANE/TLSA",
    "author": "Hasan Adams, buffrr"
  },
  {
    "name": "hsd-axfr",
    "url": "https://github.com/buffrr/hsd-axfr",
    "description": "HSD plugin that implements DNS zone transfer protocol (AXFR)",
    "author": "Hasan Adams, buffrr"
  },
  {
    "name": "danecert",
    "url": "https://github.com/buffrr/danecert",
    "description": "Simple way to generate a self-signed certificate and a TLSA record for DANE",
    "author": "Hasan Adams, buffrr"
  },
  {
    "name": "walk",
    "url": "https://github.com/buffrr/walk",
    "description": "DNS zone walking by following denial of existence proofs",
    "author": "Hasan Adams, buffrr"
  },
  {
    "name": "hsig0",
    "url": "https://github.com/buffrr/hsig0",
    "description": "Go library to validate DNS messages using Handshake sig0",
    "author": "Hasan Adams, buffrr"
  },
  {
    "name": "bob-wallet",
    "url": "https://github.com/kyokan/bob-wallet",
    "description": "Bob Wallet is a GUI for DNS Record Management and Name Auctions on Handshake",
    "author": "kyokan"
  },
  {
    "name": "bob-extension",
    "url": "https://github.com/kyokan/bob-extension",
    "description": "Handshake wallet in the browser",
    "author": "kyokan"
  },
  {
    "name": "nomad-api",
    "url": "https://github.com/kyokan/nomad-api",
    "description": "Nomad API provides a RESTful API for developers to write and query social records from Footnote",
    "author": "kyokan"
  },
  {
    "name": "nomad-desktop",
    "url": "https://github.com/kyokan/nomad-desktop",
    "description": "Nomad is a peer-to-peer, ownerless social network built on top of Handshake and Footnote",
    "author": "kyokan"
  },
  {
    "name": "fnd",
    "url": "https://github.com/kyokan/fnd",
    "description": "Footnote Daemon",
    "author": "kyokan"
  },
  {
    "name": "chaind",
    "url": "https://github.com/kyokan/chaind",
    "description": "chaind is a security and caching layer for blockchain nodes",
    "author": "kyokan"
  },
  {
    "name": "drawbridge",
    "url": "https://github.com/kyokan/drawbridge",
    "description": "Prototype lightning implementation on Ethereum, with lnd interop",
    "author": "kyokan"
  },
  {
    "name": "footnote",
    "url": "https://github.com/kyokan/footnote",
    "description": "Readme and future protocol improvement ideas for Footnote",
    "author": "kyokan"
  },
  {
    "name": "plasma",
    "url": "https://github.com/kyokan/plasma",
    "description": "Golang implementation and extension of the Minimum Viable Plasma specification",
    "author": "kyokan"
  },
  {
    "name": "shakedex-ui",
    "url": "https://github.com/kyokan/shakedex-ui",
    "description": "A Dapp made for Shakedex",
    "author": "kyokan"
  },
  {
    "name": "nomad-universal",
    "url": "https://github.com/kyokan/nomad-universal",
    "description": "This library contains universal UI Components used by Nomad Web and Nomad Desktop",
    "author": "kyokan"
  },
  {
    "name": "fn-client",
    "url": "https://github.com/kyokan/fn-client",
    "description": "This library contains utilities and Node.js gRPC bindings for use with Footnote daemon",
    "author": "kyokan"
  },
  {
    "name": "kyokan/nomad-web",
    "url": "https://github.com/kyokan/nomad-web",
    "description": "Nomad web",
    "author": "kyokan"
  },
  {
    "name": "footnote-PIPs",
    "url": "https://github.com/kyokan/footnote-PIPs",
    "description": "footnote-PIPs",
    "author": "kyokan"
  },
  {
    "name": "OnomaMenubar",
    "url": "https://github.com/kyokan/OnomaMenubar",
    "description": "Displays a menu bar app that lets users route DNS traffic through a local hnsd SPV node",
    "author": "kyokan"
  },
  {
    "name": "shakedex",
    "url": "https://github.com/kurumiimari/shakedex",
    "description": "A decentralized exchange for Handshake names",
    "author": "Kurumiimari"
  },
  {
    "name": "hsexplorer",
    "url": "https://github.com/kurumiimari/hsexplorer",
    "description": "A Handshake block explorer",
    "author": "Kurumiimari"
  },
  {
    "name": "shakedex-api",
    "url": "https://github.com/kurumiimari/shakedex-api",
    "description": "A web portal for shakedex swap proofs",
    "author": "Kurumiimari"
  },
  {
    "name": "gohan",
    "url": "https://github.com/kurumiimari/gohan",
    "description": "Alternative Handshake wallet node and CLI",
    "author": "Kurumiimari"
  },
  {
    "name": "gohan-docs",
    "url": "https://github.com/kurumiimari/gohan-docs",
    "description": "Gohan docs",
    "author": "Kurumiimari"
  },
  {
    "name": "fingertip-sane",
    "url": "https://github.com/randomlogin/fingertip",
    "description": "Fingertip, user-friendly wrapper of SANE",
    "author": "randomlogin, Alexander, Shevtsov"
  },
  {
    "name": "sane",
    "url": "https://github.com/randomlogin/sane",
    "description": "Implementation of stateless DANE for handshake DNS",
    "author": "randomlogin, Alexander, Shevtsov"
  },
  {
    "name": "hnsd-sane",
    "url": "https://github.com/randomlogin/hnsd",
    "description": "Modified version of hnsd for stateless DANE",
    "author": "randomlogin, Alexander, Shevtsov"
  },
  {
    "name": "dwebchat",
    "url": "https://github.com/realrasengan/dwebchat",
    "description": "Decentralized, end to end encrypted peer to peer chat where everyone is a client and a server. No central servers required.",
    "author": "realrasengan, Andrew Lee"
  },
  {
    "name": "hnsbot",
    "url": "https://github.com/realrasengan/hnsbot",
    "description": "Simple IRC bot for Handshake HNS",
    "author": "realrasengan, Andrew Lee"
  },
  {
    "name": "hns-dns",
    "url": "https://github.com/realrasengan/hns-dns",
    "description": "Setup a port forward to 5350 on your Mac OS X or Linux machine and set your Nameserver to 127.0.0.1",
    "author": "realrasengan, Andrew Lee"
  },
  {
    "name": "holdmyhand",
    "url": "https://github.com/realrasengan/holdmyhand",
    "description": "Handshake Naming System SPV Node with System Tray",
    "author": "realrasengan, Andrew Lee"
  },
  {
    "name": "hnsd-client",
    "url": "https://github.com/rithvikvibhu/hnsd-client",
    "description": "A js client for use with hnsd's DNS API",
    "author": "Rithvik"
  },
  {
    "name": "jul",
    "url": "https://github.com/warpdex/jul",
    "description": "Yul (with some solidioms)",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "bns",
    "url": "https://github.com/chjj/bns",
    "description": "DNS library, server, and validating recursive resolver for node.js, in pure javascript",
    "author": "Christopher, Jeffrey , JJ"
  },
  {
    "name": "well-known-wallets-hns",
    "url": "https://github.com/Falci/well-known-wallets-hns",
    "description": "Well-Known Wallets Client for Handshake domains",
    "author": "Falci, Fernando"
  },
  {
    "name": "hsd-graphql",
    "url": "https://github.com/Falci/hsd-graphql",
    "description": "This is a graphql plugin for Handshake Daemon",
    "author": "Falci, Fernando"
  },
  {
    "name": "hns-stake",
    "url": "https://github.com/Falci/hns-stake",
    "description": "HNS Stake",
    "author": "Falci, Fernando"
  },
  {
    "name": "handshake-cli",
    "url": "https://github.com/Falci/handshake-cli",
    "description": "handshake-cli",
    "author": "Falci, Fernando"
  },
  {
    "name": "hns_telegram_bot",
    "url": "https://github.com/Falci/hns_telegram_bot",
    "description": "This is a Handshake plugin that integrates with Telegram",
    "author": "Falci, Fernando"
  },
  {
    "name": "handshake-chart",
    "url": "https://github.com/Falci/handshake-chart",
    "description": "Some data about Handshake Covenants",
    "author": "Falci, Fernando"
  },
  {
    "name": "nomad-poster",
    "url": "https://github.com/Falci/nomad-poster",
    "description": "This is a simple script to post on Nomad",
    "author": "Falci, Fernando"
  },
  {
    "name": "passport-domain",
    "url": "https://github.com/Falci/passport-domain",
    "description": "Authenticates users using a third-party authenticator and domain",
    "author": "Falci, Fernando"
  },
  {
    "name": "domain-auth",
    "url": "https://github.com/Falci/domain-auth",
    "description": "Auth for HNS",
    "author": "Falci, Fernando"
  },
  {
    "name": "HNSDoH Status",
    "url": "https://github.com/Nathanwoodburn/hnsdoh-status",
    "description": "Simple webserver to check the status of the Handshake DoH server",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "HNS Links",
    "url": "https://github.com/Nathanwoodburn/hns-links",
    "description": "Easy to use links page for Handshake domains",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "HNS DoH load balancer",
    "url": "https://github.com/Nathanwoodburn/hns_doh_loadbalancer",
    "description": "HNS DoH load balancer",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "HNS Pay",
    "url": "https://github.com/Nathanwoodburn/hns-pay",
    "description": "Simple payment gateway for HNS",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "Handypedia",
    "url": "https://github.com/Nathanwoodburn/handypedia",
    "description": "Community ran wiki for Handshake",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "Renew All",
    "url": "https://github.com/Nathanwoodburn/renew-all",
    "description": "Renew All Domains in Bob or HSD",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "Awesome Handshake",
    "url": "https://github.com/Nathanwoodburn/awesome-handshake",
    "description": "Collection of awesome things regarding the Handshake ecosystem",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "faucet-tool",
    "url": "https://github.com/Nathanwoodburn/faucet",
    "description": "A simple faucet for Handshake domains",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "hnshosting-wp",
    "url": "https://github.com/Nathanwoodburn/hnshosting-wp",
    "description": "HNSHosting Wordpress",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "FireWallet",
    "url": "https://github.com/Nathanwoodburn/FireWallet",
    "description": "Experimental wallet for Handshake chain",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "varo dashboard",
    "url": "https://github.com/Nathanwoodburn/alee-reg",
    "description": "Source code for varo DNS WebUI",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "hns-login",
    "url": "https://github.com/Nathanwoodburn/hns-login",
    "description": "HNS-login with varo-openid",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "site-manager",
    "url": "https://github.com/Nathanwoodburn/site-manager",
    "description": "Simple web server manager for managing multiple websites on a single server",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "firewalletbrowser",
    "url": "https://github.com/Nathanwoodburn/firewalletbrowser",
    "description": "Experimental browser wallet for Handshake chain",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "TLD Restricted Proxy",
    "url": "https://github.com/Nathanwoodburn/tld-restricted-proxy",
    "description": "TLD Restricted Proxy",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "HNS-server",
    "url": "https://github.com/Nathanwoodburn/HNS-server",
    "description": "NGINX, Redirect/Mirror, Varo Clone, Email Server, DoH Server, HSD Scripts, Varo Auth",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "linkr",
    "url": "https://github.com/Nathanwoodburn/linkr",
    "description": "Handshake link shortener",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "nbbidbot",
    "url": "https://github.com/Nathanwoodburn/nbbidbot",
    "description": "Namebase Bid Bot",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "shakecities",
    "url": "https://github.com/Nathanwoodburn/shakecities",
    "description": "Geocities clone with Handshake domains",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "shaker-bot",
    "url": "https://github.com/Nathanwoodburn/shaker-bot",
    "description": "Discord bot to verify domain ownership",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "HNS Browser",
    "url": "https://github.com/Nathanwoodburn/hnsbrowser",
    "description": "Experimental browser for Handshake domains for Android",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "HIP2-server",
    "url": "https://github.com/Nathanwoodburn/hip2-server",
    "description": "Derive new receive address from xpub with every request",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "hip02-resolver",
    "url": "https://github.com/Nathanwoodburn/hip02-resolver",
    "description": "HNS address lookup",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "hnscall",
    "url": "https://github.com/Nathanwoodburn/hnscall",
    "description": "Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "shaker",
    "url": "https://github.com/Nathanwoodburn/shaker-bot",
    "description": "Verifies ownership of Handshake names in Discord servers",
    "author": "Nathan, Woodburn"
  },
  {
    "name": "hnschat-server",
    "url": "https://github.com/hnschat/server",
    "description": "Backend websocket for hnschat",
    "author": "hnschat, eskimo"
  },
  {
    "name": "hnschat-web",
    "url": "https://github.com/hnschat/web",
    "description": "Frontend for hnschat",
    "author": "hnschat, eskimo"
  },
  {
    "name": "hnschat-bot",
    "url": "https://github.com/hnschat/bot",
    "description": "Get you started making bots for hnschat",
    "author": "hnschat, eskimo"
  },
  {
    "name": "HandyHost",
    "url": "https://github.com/HandyOSS/HandyHost",
    "description": "Host DVPN/HNS, Sia and Akash all in one UI",
    "author": "HandyOSS"
  },
  {
    "name": "HandyMiner-CLI",
    "url": "https://github.com/HandyOSS/HandyMiner-CLI",
    "description": "Handshake OpenCL Miner - Cross platform (Win/MacOS/Linux) CLI interface for AMD and Nvidia devices",
    "author": "HandyOSS"
  },
  {
    "name": "HandyStratum",
    "url": "https://github.com/HandyOSS/HandyStratum",
    "description": "Stratum Server for Handshake Mining",
    "author": "HandyOSS"
  },
  {
    "name": "Miner-Goldshell-CLI",
    "url": "https://github.com/HandyOSS/HandyMiner-Goldshell-CLI",
    "description": "A HandyMiner CLI for the Goldshell HS1 ASIC",
    "author": "HandyOSS"
  },
  {
    "name": "HandyMiner-Goldshell-GUI",
    "url": "https://github.com/HandyOSS/HandyMiner-Goldshell-GUI",
    "description": "A Handshake Mining GUI for the Goldshell HS1 ASIC",
    "author": "HandyOSS"
  },
  {
    "name": "HandyBrowser",
    "url": "https://github.com/HandyOSS/HandyBrowser",
    "description": "Handshake enabled Chromium web browser",
    "author": "HandyOSS"
  },
  {
    "name": "HandyCalculator",
    "url": "https://github.com/HandyOSS/HandyCalculator",
    "description": "Handshake Mining Calculators",
    "author": "HandyOSS"
  },
  {
    "name": "HandyGuide",
    "url": "https://github.com/HandyOSS/HandyGuide",
    "description": "Quick Start Guide for HandyMiner-CLI",
    "author": "HandyOSS"
  },
  {
    "name": "HandyMiner-GUI",
    "url": "https://github.com/HandyOSS/HandyMiner-GUI",
    "description": "GUI Wrapper for HandyMiner-CLI (Mac/Windows only)",
    "author": "HandyOSS"
  },
  {
    "name": "hstratum",
    "url": "https://github.com/HandyOSS/hstratum",
    "description": "Stratum Server Plugin for HSD",
    "author": "HandyOSS"
  },
  {
    "name": "HNScan",
    "url": "https://github.com/HNScan/HNScan",
    "description": "Developer-Focused Block Explorer for Handshake",
    "author": "HNScan"
  },
  {
    "name": "hnscan-backend",
    "url": "https://github.com/HNScan/hnscan-backend",
    "description": "A plugin for hsd to support locally run HNScan instances",
    "author": "HNScan"
  },
  {
    "name": "webportal-handshake-api",
    "url": "https://github.com/SkynetLabs/webportal-handshake-api",
    "description": "Webportal Handshake API",
    "author": "SkynetLabs"
  },
  {
    "name": "hns-explorer",
    "url": "https://github.com/dxpool/hns-explorer",
    "description": "Handshake explorer front-end developed based on Angular10 using API provided by hns-backend",
    "author": "dxpool"
  },
  {
    "name": "hns-backend",
    "url": "https://github.com/dxpool/hns-backend",
    "description": "This is a plugin of hsd, and it provides API for hns explorer.",
    "author": "dxpool"
  },
  {
    "name": "HNScan",
    "url": "https://github.com/HNScan/HNScan",
    "description": "Open source block explorer for Handshake",
    "author": "HNScan"
  },
  {
    "name": "hnscan-backend",
    "url": "https://github.com/HNScan/hnscan-backend",
    "description": "Plugin to HSD that backs the open source block explorer HNScan",
    "author": "HNScan"
  },
  {
    "name": "hipr-aliasing",
    "url": "https://github.com/lukeburns/hipr-aliasing",
    "description": "Resolve Handshake SLDs trustlessly",
    "author": "Luke, Burns"
  },
  {
    "name": "hipr-hyperzone",
    "url": "https://github.com/lukeburns/hipr-hyperzone",
    "description": "Hyperzone Middleware",
    "author": "Luke, Burns"
  },
  {
    "name": "hipr",
    "url": "https://github.com/lukeburns/hipr",
    "description": "A recursive resolver with middleware",
    "author": "Luke, Burns"
  },
  {
    "name": "hyperzone",
    "url": "https://github.com/lukeburns/hyperzone",
    "description": "Cryptographically verifiable and replicable DNSSEC-enabled zone storage",
    "author": "Luke, Burns"
  },
  {
    "name": "hipr-eth",
    "url": "https://github.com/lukeburns/hipr-eth",
    "description": "Middleware that resolves names from ethereum",
    "author": "Luke, Burns"
  },
  {
    "name": "hns-address",
    "url": "https://github.com/lukeburns/hns-address",
    "description": "Convenience Address class for HNS addresses",
    "author": "Luke, Burns"
  },
  {
    "name": "hip2-dane",
    "url": "https://github.com/lukeburns/hip2-dane",
    "description": "DANE-based HIP-0002 Well-Known Wallets",
    "author": "Luke, Burns"
  },
  {
    "name": "hipr-ipfs",
    "url": "https://github.com/lukeburns/hipr-ipfs",
    "description": "IPFS Middleware",
    "author": "Luke, Burns"
  },
  {
    "name": "hipr-sia",
    "url": "https://github.com/lukeburns/hipr-sia",
    "description": "sia hipr resolver",
    "author": "Luke, Burns"
  },
  {
    "name": "https-dane",
    "url": "https://github.com/lukeburns/https-dane",
    "description": "DANE Agent",
    "author": "lukeburns"
  },
  {
    "name": "hip5",
    "url": "https://github.com/lukeburns/hip5",
    "description": "Base class for writing HIP-5 extensions like handover",
    "author": "Luke, Burns"
  },
  {
    "name": "namebase-dca-bot",
    "url": "https://github.com/0xStefan/namebase-dca-bot",
    "description": "Set recurring buys for Handshake at intervals",
    "author": "0xStefan"
  },
  {
    "name": "fourhands",
    "url": "https://github.com/0xStefan/fourhands",
    "description": "Helper tool validates and converts any string or array to a HIP-10 domain listing",
    "author": "0xStefan"
  },
  {
    "name": "zwj-name-converter",
    "url": "https://github.com/0xStefan/zwj-name-converter",
    "description": "Convert any string to Unicode or ASCII",
    "author": "0xStefan"
  },
  {
    "name": "3xplcom",
    "url": "https://github.com/3xplcom/Core",
    "description": "3xpl.com Core Modules",
    "author": "Nikita, Zhavoronkov"
  },
  {
    "name": "hshelp",
    "url": "https://github.com/befranz/hshelp",
    "description": "Installs a Handshake full node and all dependencies",
    "author": "befranz"
  },
  {
    "name": "hnstools",
    "url": "https://github.com/befranz/hnstools",
    "description": "Tools for Handshake full nodes",
    "author": "befranz"
  },
  {
    "name": "namervs",
    "url": "https://github.com/nglabs42/namervs",
    "description": "Handshake name validation script",
    "author": "nglabs42"
  },
  {
    "name": "nb-scripts",
    "url": "https://github.com/HDardenne/nb-scripts",
    "description": "Scripts to use while being on namebase.io or with NB files",
    "author": "HDardenne"
  },
  {
    "name": "hnssearch-frontend",
    "url": "https://github.com/hnssearch/hnssearch-frontend",
    "description": "HNSSearch frontend",
    "author": "hnssearch, Andy"
  },
  {
    "name": "pyrar",
    "url": "https://github.com/james-stevens/pyrar",
    "description": "Open Source EPP DNS Registrar & self-contained Registry",
    "author": "James, Stevens"
  },
  {
    "name": "powerdns",
    "url": "https://github.com/james-stevens/powerdns",
    "description": "Docker container to run PowerDNS Auth plus my admin WebUI using nginx",
    "author": "James, Stevens"
  },
  {
    "name": "dns-gslb",
    "url": "https://github.com/james-stevens/dns-gslb",
    "description": "Global Server Load-Balancing, Failover, Geo-Targeting and D/DoS Protection",
    "author": "James, Stevens"
  },
  {
    "name": "handshake-bind-hns",
    "url": "https://github.com/james-stevens/handshake-bind-hns",
    "description": "Universal DNS Resolver of ICANN & Web3 Names",
    "author": "James, Stevens"
  },
  {
    "name": "handshake-resolver",
    "url": "https://github.com/james-stevens/handshake-resolver",
    "description": "Container running `bind` DNS Resolver using Handshake & ICANN ROOT data",
    "author": "James, Stevens"
  },
  {
    "name": "handshake-chrome-extension",
    "url": "https://github.com/james-stevens/handshake-chrome-extension",
    "description": "Chrome Extension to give users access to Handshake HTTP sites",
    "author": "James, Stevens"
  },
  {
    "name": "handshake-gateway",
    "url": "https://github.com/james-stevens/handshake-gateway",
    "description": "Container is a general purpose Handshake access gateway server",
    "author": "James, Stevens"
  },
  {
    "name": "handshake-bridge",
    "url": "https://github.com/james-stevens/handshake-bridge",
    "description": "Bridging Handshake & ICANN TLDs",
    "author": "James, Stevens"
  },
  {
    "name": "hnsd.js",
    "url": "https://github.com/angrymouse/hnsd.js",
    "description": "Builtin HNSD binaries with JS interface",
    "author": "Mykyta, Rykov, angrymouse"
  },
  {
    "name": "hnschat-tweets",
    "url": "https://github.com/angrymouse/hnschat-tweets",
    "description": "hnschat bot",
    "author": "Mykyta, Rykov, angrymouse"
  },
  {
    "name": "hns-bridge-guide",
    "url": "https://github.com/angrymouse/hns-bridge-guide",
    "description": "Guide for setuping hnsd and hns-bridge",
    "author": "Mykyta, Rykov, angrymouse"
  },
  {
    "name": "dForms",
    "url": "https://github.com/angrymouse/dForms",
    "description": "Decentralized forms. Built on skynet and handshake",
    "author": "Mykyta, Rykov, angrymouse"
  },
  {
    "name": "hns-bridge",
    "url": "https://github.com/anothersoft/hns-bridge",
    "description": "HNS bridge",
    "author": "Another Software"
  },
  {
    "name": "elymus",
    "url": "https://github.com/anothersoft/elymus",
    "description": "Platform & Stack for truly decentralized apps",
    "author": "Another Software"
  },
  {
    "name": "resolver-ui",
    "url": "https://github.com/anothersoft/resolver-ui",
    "description": "User interface for the public handshake resolvers",
    "author": "Another Software"
  },
  {
    "name": "hipr",
    "url": "https://github.com/anothersoft/hipr",
    "description": "HIP-5 but recursive",
    "author": "Another Software"
  },
  {
    "name": "dsearch-add-on",
    "url": "https://github.com/H4ckB4s3/dsearch-add-on",
    "description": "Dsearch Opera Add-on",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "dsearch-android-app",
    "url": "https://github.com/H4ckB4s3/dsearch-android-app",
    "description": "A simple Cordova-based Android app that resolves ENS & HNS domains",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "Dsearch-extension",
    "url": "https://github.com/H4ckB4s3/Dsearch-extension",
    "description": "Dsearch Chrome Extension",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "Ubuntu-Touch-HNS-Nameserver",
    "url": "https://github.com/H4ckB4s3/Ubuntu-Touch-HNS-Nameserver",
    "description": "Select a HNS Nameserver Ubuntu Touch",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "Dsearch-Ubuntu-Touch",
    "url": "https://github.com/H4ckB4s3/Dsearch-Ubuntu-Touch",
    "description": "Dsearch app for Ubuntu Touchh",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "Emoji-bridge",
    "url": "https://github.com/H4ckB4s3/Emoji-bridge",
    "description": "Web Application provides a simple and efficient way to resolve web3 domains using web2 bridges.",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "Dsearch-web",
    "url": "https://github.com/H4ckB4s3/Dsearch-web",
    "description": "Efficient way to resolve web3 domains using web2 bridges",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "HNS-SSL-redirect",
    "url": "https://github.com/H4ckB4s3/HNS-SSL-redirect",
    "description": "Automatically redirects HTTP traffic to HTTPS for HNS websites",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "Remove-HNSTO-warning",
    "url": "https://github.com/H4ckB4s3/Remove-HNSTO-warning",
    "description": "HNS.TO Warning Removal Script",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "dprofile",
    "url": "https://github.com/H4ckB4s3/dprofile",
    "description": "Fetches TXT records and displays them in a Linktree-style interface",
    "author": "H4ckB4s3, Hackbase"
  },
  {
    "name": "nbtransfer",
    "url": "https://github.com/eskimo/nbtransfer",
    "description": "NB Transfer",
    "author": "eskimo"
  },
  {
    "name": "certy",
    "url": "https://github.com/eskimo/certy",
    "description": "Simple SSL certificate and TLSA record generator (for DANE) locally in browser",
    "author": "eskimo"
  },
    {
    "name": "VARO dashboard",
    "url": "https://github.com/varodomains/dashboard",
    "description": "VARO DNS WebUI",
    "author": "varodomains, eskimo, Jordan Koch"
  },
    {
    "name": "VARO mutual",
    "url": "https://github.com/varodomains/mutual",
    "description": "API which sets on the master PowerDNS replication server",
    "author": "varodomains, eskimo, Jordan Koch"
  },
    {
    "name": "certbot DNS VARO",
    "url": "https://github.com/varodomains/certbot-dns-varo",
    "description": "Varo DNS Authenticator plugin for Certbot",
    "author": "varodomains, eskimo, Jordan Koch"
  },
    {
    "name": "VARO EPP",
    "url": "https://github.com/varodomains/epp",
    "description": "Source code for varo epp",
    "author": "varodomains, eskimo, Jordan Koch"
  },
  {
    "name": "hns-redirect",
    "url": "https://github.com/Handshake-AU/hns-redirect",
    "description": "Redirect ICANN domain to Handshake",
    "author": "au"
  },
  {
    "name": "Handover HNSDNS",
    "url": "https://github.com/HNSDNS/handover",
    "description": "Handover fork optimized for HNSDNS",
    "author": "Lumito LumitoLuma hnsdns"
  },
  {
    "name": "namelayer-app",
    "url": "https://github.com/caseykennedy/namelayer-app",
    "description": "Namelayer App",
    "author": "casey kennedy"
  },
  {
    "name": "namelayer-app",
    "url": "https://github.com/caseykennedy/Namelayer",
    "description": "Namelayer Marketing",
    "author": "casey kennedy"
  },
  {
    "name": "nl-server",
    "url": "https://github.com/caseykennedy/nl-server",
    "description": "Namelayer background service worker",
    "author": "casey kennedy"
  },
  {
    "name": "dWeb-f",
    "url": "https://github.com/caseykennedy/dWeb-f",
    "description": "Combines Gatsby site generation with Sanity content management in a neat little website",
    "author": "casey kennedy"
  },
  {
    "name": "namelayer-auctions",
    "url": "https://github.com/caseykennedy/namelayer-auctions",
    "description": "Namelayer Auctions website",
    "author": "casey kennedy"
  },
  {
    "name": "handswap",
    "url": "https://github.com/Anunayj/handswap",
    "description": "Atomic Swap HNS to BTC all in a browser",
    "author": "Anunayj, Anunay, Jain"
  },
  {
    "name": "hns-resolver",
    "url": "https://github.com/Sh1Tt/hns-resolver",
    "description": "Frontend project for .HNS.is",
    "author": "Sh1Tt"
  },
  {
    "name": "basic-UI",
    "url": "https://github.com/Sh1Tt/basic-UI",
    "description": "Simple user interface for handshake hsd",
    "author": "Sh1Tt"
  },
  {
    "name": "html-resolver",
    "url": "https://github.com/Sh1Tt/html-resolver",
    "description": "Lightweight hns-bridge interface",
    "author": "Sh1Tt"
  },
  {
    "name": "findwaldo",
    "url": "https://github.com/Sh1Tt/findwaldo",
    "description": "handshake namer registry that keeps track of acquisition interests",
    "author": "Sh1Tt"
  },
  {
    "name": "roundcube-elastic-hns",
    "url": "https://github.com/nlydv/roundcube-elastic-hns",
    "description": "HNS skin package for the Roundcube Webmail software.",
    "author": "nlydv"
  },
  {
    "name": "name-check",
    "url": "https://github.com/nlydv/name-check",
    "description": "Queries the Handshake (HNS) blockchain of top-level domain names",
    "author": "nlydv"
  },
  {
    "name": "hns-email",
    "url": "https://github.com/hduoc2003/hns-email",
    "description": "MoonMail - Docker based mail server with Handshake domain",
    "author": "hduoc2003"
  },
  {
    "name": "mailu-one-click-setup",
    "url": "https://github.com/0xDeAd-team/mailu-one-click-setup",
    "description": "Docker based one-click Mailu mail server setup script",
    "author": "0xDeAd"
  },
  {
    "name": "modoboa-installer",
    "url": "https://github.com/nairyuuu/modoboa-installer",
    "description": "An installer for Modoboa email server for HNS Domain",
    "author": "Lê Long, nairyuu"
  }
];
