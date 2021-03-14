const { MessageEmbed, ReactionEmoji } = require('discord.js')
const config = require('../data/config.json')
module.exports = {
    name: "review",
    aliases: ['review'],
    async run(client, message, args) {

        const embed = new MessageEmbed()
        .setTitle(`Review us on how we did!`)
        .setColor(`YELLOW`)
        .setDescription(`
        \`1\`**:** ⭐
        \`2\`**:** ⭐ ⭐
        \`3\`**:** ⭐ ⭐ ⭐
        \`4\`**:** ⭐ ⭐ ⭐ ⭐
        \`5\`**:** ⭐ ⭐ ⭐ ⭐ ⭐
        `)
        .setFooter(`Please use a number`)//['1⃣', '2⃣', '3⃣', '4⃣', '5⃣']
        client.waitReply = async(message, text, limit = 60000) => {
            const filter = m => m.author.id === message.author.id;
            await message.channel.send(text)
            try {
                const collected = await message.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] })
                return collected.first().content;
            } catch (e) {
                return false;
            }
        }
        client.waitReply(message, embed).then(res => {
            if (res.toLowerCase() == "cancel") return message.channel.send(`Review was cancelled`)
            if (res === '1') {
                const emb = new MessageEmbed()
                .setTitle(`What is the service on?`)
                .setDescription(`
                \`1\`**:** Support Team
                \`2\`**:** Service & Products`)
                .setColor(`RED`)
                .setFooter(`Please respond with a number`)
                client.waitReply(message, emb).then(re => {
                    if (re === '1') {
                        client.waitReply(message, `Next please write a review for the **Support Team**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nSupport Team\n\n**Review Rating**\n⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        }) 
                    }
                    if (re === '2') {
                        client.waitReply(message, `Next please write a review for the **Products & Services**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nProducts & Services\n\n**Review Rating**\n⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        }) 
                    }
                })
            }
            if (res === '2') {
                const emb = new MessageEmbed()
                .setTitle(`What is the service on?`)
                .setDescription(`
                \`1\`**:** Support Team
                \`2\`**:** Service & Products`)
                .setColor(`RED`)
                .setFooter(`Please respond with a number`)
                client.waitReply(message, emb).then(re => {
                    if (re === '1') {
                        client.waitReply(message, `Next please write a review for the **Support Team**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nSupport Team\n\n**Review Rating**\n⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        }) 
                    }
                    if (re === '2') {
                        client.waitReply(message, `Next please write a review for the **Products & Services**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nProducts & Services\n\n**Review Rating**\n⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        })
                    }
                })
            }
            if (res === '3') {
                const emb = new MessageEmbed()
                .setTitle(`What is the service on?`)
                .setDescription(`
                \`1\`**:** Support Team
                \`2\`**:** Service & Products`)
                .setColor(`RED`)
                .setFooter(`Please respond with a number`)
                client.waitReply(message, emb).then(re => {
                    if (re === '1') {
                        client.waitReply(message, `Next please write a review for the **Support Team**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nSupport Team\n\n**Review Rating**\n⭐ ⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        }) 
                    }
                    if (re === '2') {
                        client.waitReply(message, `Next please write a review for the **Products & Services**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nProducts & Services\n\n**Review Rating**\n⭐ ⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        })
                    }
                })
            }
            if (res === '4') {
                const emb = new MessageEmbed()
                .setTitle(`What is the service on?`)
                .setDescription(`
                \`1\`**:** Support Team
                \`2\`**:** Service & Products`)
                .setColor(`RED`)
                .setFooter(`Please respond with a number`)
                client.waitReply(message, emb).then(re => {
                    if (re === '1') {
                        client.waitReply(message, `Next please write a review for the **Support Team**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nSupport Team\n\n**Review Rating**\n⭐ ⭐ ⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        }) 
                    }
                    if (re === '2') {
                        client.waitReply(message, `Next please write a review for the **Products & Services**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nProducts & Services\n\n**Review Rating**\n⭐ ⭐ ⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        })
                    }
                })
            }
            if (res === '5') {
                const emb = new MessageEmbed()
                .setTitle(`What is the service on?`)
                .setDescription(`
                \`1\`**:** Support Team
                \`2\`**:** Service & Products`)
                .setColor(`RED`)
                .setFooter(`Please respond with a number`)
                client.waitReply(message, emb).then(re => {
                    if (re === '1') {
                        client.waitReply(message, `Next please write a review for the **Support Team**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nSupport Team\n\n**Review Rating**\n⭐ ⭐ ⭐ ⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
  
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        }) 
                    }
                    if (re === '2') {
                        client.waitReply(message, `Next please write a review for the **Products & Services**`).then(rep => {
                            let gumball = rep
                            const em = new MessageEmbed()
                            .setTitle(`New Review`)
                            .setThumbnail(message.author.displayAvatarURL())
                            .setDescription(`**Review From**\n${message.author}\n\n**Review On**\nProducts & Services\n\n**Review Rating**\n⭐ ⭐ ⭐ ⭐ ⭐\n\n**Review Message**\n\`${gumball}\``)

                              .setColor(`BLUE`)
                            
                              message.channel.send(em)
                              const chan = client.channels.cache.get(`${config.reviews.reviewchannel}`)
                              chan.send(emb)
                        })
                    }
                })
            }
        })
    }
}