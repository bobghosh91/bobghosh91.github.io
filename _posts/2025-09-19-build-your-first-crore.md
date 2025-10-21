---
title: "Build Your First Crore"
date: 2025-09-19
categories: [Long-Term Investing]
image: "http://static.photos/finance/640x360/252"
description: "Build your first ₹1 crore with simple investment strategies, smart money habits, and financial discipline."
read_time: "5 min read"
featured: true
featured_order: 1
---


<body class="bg-gray-50">
    <!-- Hero Section with inline styles -->
    <div class="crore-hero rounded-lg" style="background: linear-gradient(rgba(30, 58, 138, 0.9), rgba(37, 99, 235, 0.9)), url('https://static.photos/finance/200x200/15.webp'); background-size: cover; background-position: center;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                My First ₹1 Crore
            </h1>
            <p class="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
                Discover how our personalised mutual funds portfolio can help you build your First Crore, within a specified time period.
            </p>
        </div>
    </div>
    <!-- Calculator Section -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="calculator-card bg-white rounded-2xl shadow-xl p-8" style="transition: transform 0.3s ease, box-shadow 0.3s ease;">
            <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">
                SIP Calculator: Your Path to ₹1 Crore
            </h2>
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Input Section -->
                <div>
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Monthly SIP Amount (₹)</label>
                            <input type="range" id="sip-amount" min="5000" max="50000" step="5000" value="15000" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                            <div class="flex justify-between text-xs text-gray-500 mt-1">
                                <span>5,000</span>
                                <span id="sip-amount-value">15,000</span>
                                <span>50,000</span>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Expected Annual Return (%)</label>
                            <input type="range" id="return-rate" min="8" max="15" step="1" value="12" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                            <div class="flex justify-between text-xs text-gray-500 mt-1">
                                <span>8%</span>
                                <span id="return-rate-value">12%</span>
                                <span>15%</span>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Investment Period (Years)</label>
                            <input type="range" id="investment-period" min="5" max="30" step="1" value="15" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                            <div class="flex justify-between text-xs text-gray-500 mt-1">
                                <span>5</span>
                                <span id="investment-period-value">15</span>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 p-4 sip-highlight rounded-lg text-white" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                        <h3 class="font-semibold mb-2">Key Insights:</h3>
                        <ul class="text-sm space-y-1">
                            <li>• Start early to benefit from compounding</li>
                            <li>• Increase SIP amount with salary hikes</li>
                            <li>• Stay invested for long-term growth</li>
                        </ul>
                    </div>
                </div>
                <!-- Results Section -->
                <div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <div class="text-center mb-6">
                            <div class="text-2xl font-bold text-gray-900">₹<span id="final-amount">0</span></div>
                            <p class="text-sm text-gray-600">Estimated Corpus</p>
                        </div>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Total Investment:</span>
                                <span class="font-semibold">₹<span id="total-investment">0</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Wealth Gained:</span>
                                <span class="font-semibold text-green-600">₹<span id="wealth-gained">0</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Time to ₹1 Crore:</span>
                                <span class="font-semibold"><span id="time-to-crore">-</span> years</span>
                            </div>
                        </div>
                        <div class="mt-6">
                            <canvas id="corpus-chart" height="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Strategies Section -->
    <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white">Strategies to Reach ₹1 Crore</h2>
                <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                    Proven investment approaches to achieve your financial goal
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Strategy 1 -->
                <div class="bg-blue-50 p-6 rounded-lg dark:bg-slate-800">
                    <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 dark:bg-blue-500">
                        <i data-feather="calendar" class="text-white"></i>
                    </div>
                    <h3 class="font-bold text-xl text-gray-800 dark:text-slate-200 mb-3">Start Early & Stay Consistent</h3>
                    <p class="text-gray-600 dark:text-slate-400">
                        Begin investing as early as possible. Even small amounts invested regularly can grow significantly over time due to compounding.
                    </p>
                    <div class="mt-4 p-3 bg-white rounded">
                        <div class="text-sm font-semibold text-blue-600">Example:</div>
                        <div class="text-xs text-gray-600 mt-1">
                            ₹10,000/month SIP @12% for 20 years = ₹99.91 lakhs
                        </div>
                    </div>
                </div>
                <!-- Strategy 2 -->
                <div class="bg-green-50 p-6 rounded-lg dark:bg-slate-800">
                    <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 dark:bg-green-500">
                        <i data-feather="trending-up" class="text-white"></i>
                    </div>
                    <h3 class="font-bold text-xl text-gray-800 dark:text-slate-200 mb-3">Increase SIP with Income</h3>
                    <p  class="text-gray-600 dark:text-slate-400">
                        Boost your SIP amount by 10-15% annually. This accelerates your wealth creation and helps beat inflation.
                    </p>
                    <div class="mt-4 p-3 bg-white rounded">
                        <div class="text-sm font-semibold text-green-600">Example:</div>
                        <div class="text-xs text-gray-600 mt-1">
                            Starting ₹15,000 SIP with 10% annual increase @12% = ₹1 crore in ~12 years
                        </div>
                    </div>
                </div>
                <!-- Strategy 3 -->
                <div class="bg-purple-50 p-6 rounded-lg dark:bg-slate-800">
                    <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 dark:bg-purple-500">
                        <i data-feather="layers" class="text-white"></i>
                    </div>
                    <h3 class="font-bold text-xl text-gray-800 dark:text-slate-200 mb-3">Diversified Portfolio</h3>
                    <p class="text-gray-600 dark:text-slate-400">
                        Invest across different asset classes - equity, debt, and hybrid funds. This balances risk and optimizes returns.
                    </p>
                    <div class="mt-4 p-3 bg-white rounded">
                        <div class="text-sm font-semibold text-purple-600">Recommended:</div>
                        <div class="text-xs text-gray-600 mt-1">
                            60% Equity Funds, 30% Debt Funds, 10% Hybrid Funds
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
            <h1 class="text-4xl font-extrabold text-gray-900">Why are our plans <br> the best for you?</h1>
            <div class="flex space-x-4">
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-start">
                <div class="w-full mb-6 rounded-lg bg-cover bg-center min-h-[200px]" style="background-image: url('/assets/images/fund-reco.png');">
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Get the right funds for you</h3>
                <p class="text-gray-600 dark:text-gray-300 text-base">
                    Unbiased fund selection, personalised recommendations, and asset allocation for your portfolio
                </p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-start">
                <div class="w-full mb-6 rounded-lg bg-cover bg-center min-h-[200px]" style="background-image: url('/assets/images/inv-family.png');">
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Invest as a family</h3>
                <p class="text-gray-600 dark:text-gray-300 text-base">
                    Create portfolios with multiple family member accounts, to help you plan finances and goals together.
                </p>
            </div>
            <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-start">
                <div class="w-full mb-6 rounded-lg bg-cover bg-center min-h-[200px]" style="background-image: url('/assets/images/risk-ability.png');">
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Personalise growth strategy</h3>
                <p class="text-gray-600 dark:text-gray-300 text-base">
                    Set a target and tag existing investments to your plan to personalise your recommendations.
                </p>
            </div>
        </div>
    </div>

    {% include cta.html %}

    <script>

        // SIP Calculator
        function calculateSIP() {
            const sipAmount = parseInt(document.getElementById('sip-amount').value);
            const returnRate = parseInt(document.getElementById('return-rate').value) / 100;
            const years = parseInt(document.getElementById('investment-period').value);
            
            // Monthly rate
            const monthlyRate = returnRate / 12;
            
            // Total months
            const months = years * 12;
            
            // Future value formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
            const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
            
            const totalInvestment = sipAmount * months;
            const wealthGained = futureValue - totalInvestment;
            
            // Format numbers with commas
            document.getElementById('final-amount').textContent = formatNumber(futureValue);
            document.getElementById('total-investment').textContent = formatNumber(totalInvestment);
            document.getElementById('wealth-gained').textContent = formatNumber(wealthGained);
            
            // Calculate time to reach 1 crore
            calculateTimeToCrore(sipAmount, returnRate);
            
            // Update chart
            updateChart(sipAmount, returnRate, years);
        }

        function formatNumber(num) {
            return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        function calculateTimeToCrore(sipAmount, annualReturn) {
            const target = 10000000; // 1 crore
            const monthlyReturn = annualReturn / 12;
            let months = 0;
            let corpus = 0;
            
            while (corpus < target) {
                months++;
                corpus = (corpus + sipAmount) * (1 + monthlyReturn);
            }
            
            const years = Math.ceil(months / 12);
            document.getElementById('time-to-crore').textContent = years;
        }

        function updateChart(sipAmount, returnRate, years) {
            const ctx = document.getElementById('corpus-chart').getContext('2d');
            const monthlyRate = returnRate / 12;
            const data = [];
            const labels = [];
            
            let corpus = 0;
            for (let year = 1; year <= years; year++) {
                for (let month = 1; month <= 12; month++) {
                    corpus = (corpus + sipAmount) * (1 + monthlyRate);
                }
                data.push(corpus);
                labels.push(`Year ${year}`);
            }
            
            if (window.corpusChart) {
                window.corpusChart.destroy();
            }
            
            window.corpusChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Corpus Growth',
                        data: data,
                        borderColor: 'rgb(59, 130, 246)',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '₹' + (value/100000).toFixed(0) + 'L';
                                }
                            }
                        }
                    }
                }
            });
        }

        // Event listeners for sliders
        document.getElementById('sip-amount').addEventListener('input', function() {
            document.getElementById('sip-amount-value').textContent = formatNumber(this.value);
            calculateSIP();
        });

        document.getElementById('return-rate').addEventListener('input', function() {
            document.getElementById('return-rate-value').textContent = this.value + '%';
            calculateSIP();
        });

        document.getElementById('investment-period').addEventListener('input', function() {
            document.getElementById('investment-period-value').textContent = this.value;
            calculateSIP();
        });

        // Initial calculation
        calculateSIP();

        // Feather icons
        feather.replace();
    </script>
</body>